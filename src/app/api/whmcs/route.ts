import { NextRequest, NextResponse } from "next/server";

// ── TypeScript interfaces for WHMCS payloads ──────────────────────────────────

interface WhmcsRequestBody {
    action: string;
    params?: Record<string, string | number>;
}

interface WhmcsErrorResponse {
    result: "error";
    message: string;
}

// ── Environment variable guard (logged once on cold start) ────────────────────

const WHMCS_API_URL = process.env.WHMCS_API_URL ?? "";
const WHMCS_IDENTIFIER = process.env.WHMCS_IDENTIFIER ?? "";
const WHMCS_SECRET = process.env.WHMCS_SECRET ?? "";

if (!WHMCS_API_URL || !WHMCS_IDENTIFIER || !WHMCS_SECRET) {
    console.warn(
        "[/api/whmcs] WARNING: One or more WHMCS environment variables are not set " +
        "(WHMCS_API_URL, WHMCS_IDENTIFIER, WHMCS_SECRET). " +
        "API calls will fail until these are configured."
    );
}

// ── Helper: call WHMCS and return parsed JSON ─────────────────────────────────

async function callWhmcs(
    action: string,
    params: Record<string, string | number> = {}
): Promise<{ ok: boolean; status: number; data: Record<string, unknown> }> {
    if (!WHMCS_API_URL || !WHMCS_IDENTIFIER || !WHMCS_SECRET) {
        return {
            ok: false,
            status: 503,
            data: { error: "WHMCS integration is not configured." },
        };
    }

    const payload = new URLSearchParams({
        identifier: WHMCS_IDENTIFIER,
        secret: WHMCS_SECRET,
        action,
        responsetype: "json",
    });

    // Append params — all values must be strings for URLSearchParams
    for (const [key, val] of Object.entries(params)) {
        payload.append(key, String(val));
    }

    const whmcsResponse = await fetch(WHMCS_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
    });

    // Always read the raw body as text first — avoids SyntaxError when WHMCS
    // returns an HTML error page (e.g. 403 Forbidden due to IP restriction).
    const rawText = await whmcsResponse.text();

    if (!whmcsResponse.ok) {
        const preview = rawText.slice(0, 400);
        console.error(
            `[/api/whmcs] WHMCS returned HTTP ${whmcsResponse.status} for action="${action}". ` +
            `Raw response preview: ${preview}`
        );
        return {
            ok: false,
            status: whmcsResponse.status === 403 ? 403 : 502,
            data: {
                error: `Error: WHMCS returned HTTP ${whmcsResponse.status} – `,
                details: preview,
            },
        };
    }

    // Parse JSON only on 2xx responses; guard against HTML or malformed bodies.
    let data: Record<string, unknown>;
    try {
        data = JSON.parse(rawText) as Record<string, unknown>;
    } catch {
        console.error(
            `[/api/whmcs] Invalid JSON from WHMCS for action="${action}". ` +
            `Raw response preview: ${rawText.slice(0, 400)}`
        );
        return {
            ok: false,
            status: 500,
            data: { error: "Invalid JSON from WHMCS", details: rawText.slice(0, 400) },
        };
    }

    return { ok: true, status: 200, data };
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
    try {
        const body = (await request.json()) as WhmcsRequestBody;

        if (!body.action) {
            return NextResponse.json({ error: "Missing action" }, { status: 400 });
        }

        const { ok, status, data } = await callWhmcs(body.action, body.params ?? {});

        if (!ok) {
            return NextResponse.json(data, { status });
        }

        // WHMCS application-level errors
        if ((data as Partial<WhmcsErrorResponse>).result === "error") {
            const whmcsMsg = (data as unknown as WhmcsErrorResponse).message ?? "WHMCS error";
            // Log full detail server-side; send only a safe message to the client
            console.error(`[/api/whmcs] action=${body.action} result=error message="${whmcsMsg}"`);

            // Pass the WHMCS message through — it is already user-readable
            // (e.g. "A client already exists with that email address")
            return NextResponse.json({ error: whmcsMsg }, { status: 422 });
        }

        return NextResponse.json(data);
    } catch (err) {
        console.error("[/api/whmcs] Unhandled error:", err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
