"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Search, ArrowRight, CheckCircle, XCircle, Loader2 } from "lucide-react";

// ── TypeScript types ───────────────────────────────────────────────────────────

interface DomainWhoisResult {
    /** WHMCS result field — "success" when call succeeded */
    result?: string;
    /** Availability status text from WHMCS ("available" | "registered" etc.) */
    status?: string;
    /** The domain that was looked up */
    domain?: string;
    /** Raw WHOIS data, may be absent or empty */
    whois?: string;
}

interface WhoisResult {
    available: boolean;
    domain: string;
    /** Non-empty WHOIS text, trimmed */
    whois?: string;
}

// ── Helpers ────────────────────────────────────────────────────────────────────

/** Basic domain validation before hitting the API. */
function validateDomain(raw: string): { valid: boolean; cleaned: string; message?: string } {
    // Strip protocol prefixes the user may have typed
    const cleaned = raw.trim().replace(/^https?:\/\//i, "").replace(/\/.*$/, "").toLowerCase();

    if (!cleaned) {
        return { valid: false, cleaned, message: "Please enter a domain name." };
    }

    // Must contain at least one dot and have a non-empty TLD
    const parts = cleaned.split(".");
    if (parts.length < 2 || parts[parts.length - 1].length < 2) {
        return {
            valid: false,
            cleaned,
            message: "Please include a TLD, e.g. example.com",
        };
    }

    // Label characters: letters, digits, hyphens; no consecutive hyphens
    const labelPattern = /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/;
    for (const part of parts) {
        if (!labelPattern.test(part)) {
            return {
                valid: false,
                cleaned,
                message: "That doesn't look like a valid domain name.",
            };
        }
    }

    return { valid: true, cleaned };
}

/** Map known WHMCS error strings to friendlier copy. */
function friendlyError(raw: string): string {
    const lower = raw.toLowerCase();
    if (lower.includes("invalid domain") || lower.includes("invalid domain name")) {
        return "That doesn't look like a valid domain. Please include a TLD (e.g. example.com).";
    }
    return raw;
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function DomainHero() {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<WhoisResult | null>(null);
    const [error, setError] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearch = async (e?: React.FormEvent) => {
        e?.preventDefault();

        // ── 1. Client-side validation (no API call if invalid) ────────────────
        const { valid, cleaned, message } = validateDomain(query);
        if (!valid) {
            setResult(null);
            setError(message ?? "Please enter a valid domain.");
            return;
        }

        setLoading(true);
        setResult(null);
        setError(null);

        // ── 2. API call ───────────────────────────────────────────────────────
        try {
            const res = await fetch("/api/whmcs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: "DomainWhois",
                    params: { domain: cleaned },
                }),
            });

            const data: DomainWhoisResult & { error?: string } = await res.json();

            if (!res.ok || data.error) {
                setError(friendlyError(data.error ?? "Failed to check domain. Please try again."));
                return;
            }

            // Trim whois text; only surface it if there is meaningful content
            const rawWhois = data.whois?.trim() ?? "";

            setResult({
                available: data.status === "available",
                domain: data.domain ?? cleaned,
                whois: rawWhois.length > 0 ? rawWhois : undefined,
            });
        } catch {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-domain-gradient min-h-[60vh] flex flex-col items-center justify-center text-center">
            <div className="max-w-7xl mx-auto relative z-10 w-full">
                {/* Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-8"
                >
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto backdrop-blur-md border border-white/20">
                        <Globe className="w-10 h-10 text-white" />
                    </div>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                >
                    Find Your Perfect Domain
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-white/80 text-lg md:text-[1.1rem] max-w-2xl mx-auto mb-12"
                >
                    Search for available domains and register instantly with competitive pricing
                </motion.p>

                {/* Search Bar */}
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-3xl mx-auto mb-10"
                    onSubmit={handleSearch}
                >
                    <div className="bg-[#f8fafc]/95 backdrop-blur-sm p-1.5 rounded-[2rem] shadow-2xl flex items-center gap-2 border border-white/20">
                        <div className="pl-6 flex items-center justify-center">
                            <Search className="w-5 h-5 text-slate-400" />
                        </div>
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Enter your domain name (e.g., mycompany.com)"
                            className="flex-1 bg-transparent border-none py-4 px-2 text-base text-slate-900 focus:outline-none placeholder:text-slate-400 font-medium"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[#ff5733] hover:bg-[#ff451d] disabled:opacity-70 text-white px-8 py-4 rounded-[1.5rem] font-bold text-base flex items-center gap-2 transition-all shadow-lg shrink-0"
                        >
                            {loading ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <>Search <ArrowRight className="w-5 h-5" /></>
                            )}
                        </button>
                    </div>

                    {/* Results Panel */}
                    <AnimatePresence>
                        {(result || error) && (
                            <motion.div
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.25 }}
                                className="mt-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 text-left overflow-hidden"
                            >
                                {error ? (
                                    <div className="flex items-center gap-3 px-6 py-4 text-red-600">
                                        <XCircle className="w-5 h-5 shrink-0" />
                                        <span className="text-sm font-medium">{error}</span>
                                    </div>
                                ) : result ? (
                                    <>
                                        {/* Status Row */}
                                        <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-100">
                                            {result.available ? (
                                                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                                            ) : (
                                                <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                                            )}
                                            <span className="font-semibold text-slate-900 text-sm">
                                                <span className="text-slate-500 font-normal mr-1">{result.domain}</span>
                                                {result.available ? (
                                                    <span className="text-emerald-600">is available!</span>
                                                ) : (
                                                    <span className="text-red-500">is already taken.</span>
                                                )}
                                            </span>
                                        </div>

                                        {/* WHOIS info — only when there is trimmed content */}
                                        {result.whois && (
                                            <div className="px-6 py-4">
                                                <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-400 mb-2">
                                                    WHOIS Info
                                                </p>
                                                <pre className="text-[11px] text-slate-600 font-mono leading-relaxed max-h-36 overflow-y-auto whitespace-pre-wrap break-all">
                                                    {result.whois}
                                                </pre>
                                            </div>
                                        )}
                                    </>
                                ) : null}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.form>

                {/* Secondary Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <button className="px-7 py-2.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold transition-all border border-white/5 backdrop-blur-md text-sm">
                        Transfer Domain
                    </button>
                    <button className="px-7 py-2.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold transition-all border border-white/5 backdrop-blur-md text-sm">
                        Bulk Search
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
