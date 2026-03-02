"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Cpu, MemoryStick, HardDrive, Zap, Cloud, X, Loader2, AlertCircle } from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Spec {
    icon: React.ReactNode;
    label: string;
    value: string;
}

interface VPSPlan {
    name: string;
    price: string;
    recommended: boolean;
    productId: number;
    specs: Spec[];
    features: string[];
}

interface WhmcsClientResponse {
    clientid?: number;
    owner?: { id?: number };
    error?: string;
}

// ── Plan data ─────────────────────────────────────────────────────────────────

const plans: VPSPlan[] = [
    {
        name: "Core",
        price: "29.99",
        recommended: false,
        productId: 2,
        specs: [
            { icon: <Cpu className="w-3.5 h-3.5 text-[#1E1F8B]" />, label: "CPU", value: "2 vCPU Cores" },
            { icon: <MemoryStick className="w-3.5 h-3.5 text-[#1E1F8B]" />, label: "Memory", value: "4 GB RAM" },
            { icon: <HardDrive className="w-3.5 h-3.5 text-[#1E1F8B]" />, label: "Storage", value: "80 GB SSD" },
            { icon: <Zap className="w-3.5 h-3.5 text-[#1E1F8B]" />, label: "Bandwidth", value: "4 TB Transfer" },
        ],
        features: [
            "Full Root Access",
            "KVM Virtualization",
            "Choice of OS",
            "1 IPv4 Address",
            "Free Snapshots",
            "24/7 Monitoring",
        ],
    },
    {
        name: "Accelerate",
        price: "59.99",
        recommended: true,
        productId: 2,
        specs: [
            { icon: <Cpu className="w-3.5 h-3.5 text-[#1E1F8B]" />, label: "CPU", value: "4 vCPU Cores" },
            { icon: <MemoryStick className="w-3.5 h-3.5 text-[#1E1F8B]" />, label: "Memory", value: "8 GB RAM" },
            { icon: <HardDrive className="w-3.5 h-3.5 text-[#1E1F8B]" />, label: "Storage", value: "160 GB SSD" },
            { icon: <Zap className="w-3.5 h-3.5 text-[#1E1F8B]" />, label: "Bandwidth", value: "8 TB Transfer" },
        ],
        features: [
            "Full Root Access",
            "KVM Virtualization",
            "Choice of OS",
            "2 IPv4 Addresses",
            "Free Snapshots",
            "24/7 Monitoring",
            "DDoS Protection",
            "Weekly Backups",
        ],
    },
    {
        name: "Pro Cloud",
        price: "99.99",
        recommended: false,
        productId: 2,
        specs: [
            { icon: <Cpu className="w-3.5 h-3.5 text-[#1E1F8B]" />, label: "CPU", value: "8 vCPU Cores" },
            { icon: <MemoryStick className="w-3.5 h-3.5 text-[#1E1F8B]" />, label: "Memory", value: "16 GB RAM" },
            { icon: <HardDrive className="w-3.5 h-3.5 text-[#1E1F8B]" />, label: "Storage", value: "320 GB SSD" },
            { icon: <Zap className="w-3.5 h-3.5 text-[#1E1F8B]" />, label: "Bandwidth", value: "16 TB Transfer" },
        ],
        features: [
            "Full Root Access",
            "KVM Virtualization",
            "Choice of OS",
            "3 IPv4 Addresses",
            "Free Snapshots",
            "24/7 Monitoring",
            "Advanced DDoS Protection",
            "Daily Backups",
            "Priority Support",
            "Private Network",
        ],
    },
];

// ── Animation variants ─────────────────────────────────────────────────────────

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

// ── Helpers ────────────────────────────────────────────────────────────────────

interface OrderForm {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

/** Returns true when the WHMCS error message indicates a duplicate client. */
function isDuplicateClientError(msg: string): boolean {
    const lower = msg.toLowerCase();
    return lower.includes("already registered") || lower.includes("duplicate") || lower.includes("already exists");
}

/** Calls /api/whmcs and returns parsed JSON. Throws on network failure. */
async function whmcsPost<T = Record<string, unknown>>(
    action: string,
    params: Record<string, string | number>
): Promise<T & { error?: string }> {
    const res = await fetch("/api/whmcs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, params }),
    });
    return res.json() as Promise<T & { error?: string }>;
}

// ── VPS Order Modal ────────────────────────────────────────────────────────────

function VPSOrderModal({
    plan,
    onClose,
}: {
    plan: VPSPlan;
    onClose: () => void;
}) {
    const [form, setForm] = useState<OrderForm>({ firstname: "", lastname: "", email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [loadingLabel, setLoadingLabel] = useState("Processing…");
    const [error, setError] = useState<string | null>(null);

    const handleChange = (field: keyof OrderForm) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setLoadingLabel("Processing…");
        setError(null);

        try {
            // ── Step 1: AddClient ──────────────────────────────────────────────
            let clientId: number | undefined;

            const clientData = await whmcsPost<WhmcsClientResponse>("AddClient", {
                firstname: form.firstname,
                lastname: form.lastname,
                email: form.email,
                password2: form.password,
                country: "SA",
                phonenumber: "0000000000",
                address1: "N/A",
                city: "N/A",
                state: "N/A",
                postcode: "00000",
            });

            if (clientData.error) {
                if (isDuplicateClientError(clientData.error)) {
                    // ── Duplicate client: look up existing account by email ────
                    setLoadingLabel("Looking up account…");

                    const lookupData = await whmcsPost<WhmcsClientResponse>("GetClientsDetails", {
                        email: form.email,
                        stats: "false",
                    });

                    if (lookupData.error || (!lookupData.clientid && !lookupData.owner?.id)) {
                        setError(
                            "An account already exists with this email. " +
                            "Please log in to your WHMCS account to place an order."
                        );
                        return;
                    }

                    clientId = lookupData.clientid ?? lookupData.owner?.id;
                } else {
                    setError(clientData.error ?? "Could not create account. Please contact us.");
                    return;
                }
            } else {
                clientId = clientData.clientid;
            }

            if (!clientId) {
                setError("Could not determine account. Please contact us.");
                return;
            }

            // ── Step 2: AddOrder ───────────────────────────────────────────────
            setLoadingLabel("Placing order…");

            const orderData = await whmcsPost<{ invoiceid?: number; orderid?: number }>("AddOrder", {
                clientid: clientId,
                pid: plan.productId,
                billingcycle: "monthly",
                paymentmethod: "banktransfer",
            });

            if (orderData.error) {
                setError(orderData.error ?? "Could not place order. Please try again.");
                return;
            }

            // ── Redirect to WHMCS invoice ──────────────────────────────────────
            const invoiceId = orderData.invoiceid;
            const whmcsBase = process.env.NEXT_PUBLIC_WHMCS_BASE_URL ?? "";

            if (invoiceId && whmcsBase) {
                window.location.href = `${whmcsBase}/viewinvoice.php?id=${invoiceId}`;
            } else {
                setError("Order placed! Please log in to your WHMCS account to complete payment.");
            }
        } catch {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 12 }}
                transition={{ duration: 0.2 }}
                className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 z-10"
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">
                        VPS Hosting
                    </p>
                    <h2 className="text-xl font-bold text-slate-900">
                        Deploy — {plan.name}{" "}
                        <span className="text-sm font-medium text-slate-500">
                            (${plan.price}/mo)
                        </span>
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-xs font-semibold text-slate-500 mb-1">
                                First Name
                            </label>
                            <input
                                required
                                value={form.firstname}
                                onChange={handleChange("firstname")}
                                className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1E1F8B]/30 focus:border-[#1E1F8B]"
                                placeholder="John"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-500 mb-1">
                                Last Name
                            </label>
                            <input
                                required
                                value={form.lastname}
                                onChange={handleChange("lastname")}
                                className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1E1F8B]/30 focus:border-[#1E1F8B]"
                                placeholder="Doe"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1">
                            Email Address
                        </label>
                        <input
                            required
                            type="email"
                            value={form.email}
                            onChange={handleChange("email")}
                            className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1E1F8B]/30 focus:border-[#1E1F8B]"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1">
                            Password
                        </label>
                        <input
                            required
                            type="password"
                            minLength={8}
                            value={form.password}
                            onChange={handleChange("password")}
                            className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1E1F8B]/30 focus:border-[#1E1F8B]"
                            placeholder="Min. 8 characters"
                        />
                    </div>

                    {error && (
                        <div className="flex items-start gap-2 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                            <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                            <p className="text-xs text-red-600">{error}</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg bg-[#1E1F8B] hover:bg-[#17186f]"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                {loadingLabel}
                            </>
                        ) : (
                            "Deploy Now"
                        )}
                    </button>
                </form>
            </motion.div>
        </div>
    );
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function VPSPlans() {
    const [selected, setSelected] = useState<string>("Accelerate");
    const [orderPlan, setOrderPlan] = useState<VPSPlan | null>(null);

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <div className="flex justify-center mb-4">
                        <Cloud className="w-9 h-9 text-[#1E1F8B]" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                        VPS Hosting Plans
                    </h2>
                    <p className="text-[#ff5733] text-base font-medium">
                        Full control with dedicated resources and root access
                    </p>
                </div>

                {/* Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {plans.map((plan) => {
                        const isSelected = selected === plan.name;
                        return (
                            <motion.div
                                key={plan.name}
                                variants={cardVariants}
                                onClick={() => setSelected(plan.name)}
                                className={`relative bg-white rounded-2xl p-8 cursor-pointer transition-all duration-200
                                    ${isSelected
                                        ? "border-2 border-[#1E1F8B] shadow-xl shadow-[#1E1F8B]/10"
                                        : "border border-slate-200 shadow-sm hover:shadow-md"
                                    }`}
                            >
                                {/* Recommended Badge */}
                                {plan.recommended && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="bg-[#1E1F8B] text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-md tracking-wide">
                                            Recommended
                                        </span>
                                    </div>
                                )}

                                {/* Plan Name */}
                                <h3 className="text-xl font-bold text-slate-900 text-center mb-3 mt-2">
                                    {plan.name}
                                </h3>

                                {/* Price */}
                                <div className="text-center mb-7">
                                    <span className="text-4xl font-extrabold text-[#1E1F8B]">
                                        ${plan.price}
                                    </span>
                                    <span className="text-slate-500 text-sm font-medium">
                                        /month
                                    </span>
                                </div>

                                {/* Specs Box */}
                                <div className="bg-slate-50 rounded-xl p-4 mb-7 border border-slate-100 space-y-3">
                                    {plan.specs.map((spec, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="shrink-0">{spec.icon}</div>
                                            <div className="flex flex-col leading-tight">
                                                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest">
                                                    {spec.label}
                                                </span>
                                                <span className="text-sm font-bold text-slate-800">
                                                    {spec.value}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Feature List */}
                                <ul className="space-y-2.5 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2.5">
                                            <Check
                                                className="w-4 h-4 text-[#1E1F8B] shrink-0"
                                                strokeWidth={2.5}
                                            />
                                            <span className="text-sm text-slate-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setOrderPlan(plan);
                                    }}
                                    className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-200
                                        ${isSelected
                                            ? "bg-[#1E1F8B] hover:bg-[#17186f] text-white shadow-lg shadow-[#1E1F8B]/25"
                                            : "border border-slate-300 text-slate-800 hover:bg-slate-50"
                                        }`}
                                >
                                    Deploy Now
                                </button>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Order Modal */}
            <AnimatePresence>
                {orderPlan && (
                    <VPSOrderModal
                        plan={orderPlan}
                        onClose={() => setOrderPlan(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
