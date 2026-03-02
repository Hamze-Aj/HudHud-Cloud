"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, HardDrive, Zap, Users, X, Loader2, AlertCircle } from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Plan {
    name: string;
    price: string;
    popular: boolean;
    productId: number;
    specs: { icon: React.ReactNode; label: string }[];
    features: string[];
}

interface WhmcsClientResponse {
    clientid?: number;
    owner?: { id?: number };
    error?: string;
}

// ── Plan data ─────────────────────────────────────────────────────────────────

const plans: Plan[] = [
    {
        name: "Starter",
        price: "4.99",
        popular: false,
        productId: 1,
        specs: [
            { icon: <HardDrive className="w-4 h-4 text-[#1E1F8B]" />, label: "10 GB SSD" },
            { icon: <Zap className="w-4 h-4 text-[#1E1F8B]" />, label: "100 GB" },
            { icon: <Users className="w-4 h-4 text-[#1E1F8B]" />, label: "5 Accounts" },
        ],
        features: [
            "1 Website",
            "10 GB SSD Storage",
            "100 GB Bandwidth",
            "5 Email Accounts",
            "Free SSL Certificate",
            "Daily Backups",
            "cPanel Control Panel",
            "24/7 Support",
        ],
    },
    {
        name: "Business",
        price: "9.99",
        popular: true,
        productId: 1,
        specs: [
            { icon: <HardDrive className="w-4 h-4 text-[#1E1F8B]" />, label: "50 GB SSD" },
            { icon: <Zap className="w-4 h-4 text-[#1E1F8B]" />, label: "Unlimited" },
            { icon: <Users className="w-4 h-4 text-[#1E1F8B]" />, label: "Unlimited" },
        ],
        features: [
            "Unlimited Websites",
            "50 GB SSD Storage",
            "Unlimited Bandwidth",
            "Unlimited Email Accounts",
            "Free SSL Certificate",
            "Daily Backups",
            "cPanel Control Panel",
            "Priority Support",
            "Free Domain (1 Year)",
            "WordPress Optimized",
        ],
    },
    {
        name: "Enterprise",
        price: "19.99",
        popular: false,
        productId: 1,
        specs: [
            { icon: <HardDrive className="w-4 h-4 text-[#1E1F8B]" />, label: "100 GB SSD" },
            { icon: <Zap className="w-4 h-4 text-[#1E1F8B]" />, label: "Unlimited" },
            { icon: <Users className="w-4 h-4 text-[#1E1F8B]" />, label: "Unlimited" },
        ],
        features: [
            "Unlimited Websites",
            "100 GB SSD Storage",
            "Unlimited Bandwidth",
            "Unlimited Email Accounts",
            "Free SSL Certificate",
            "Hourly Backups",
            "cPanel Control Panel",
            "Premium Support",
            "Free Domain (1 Year)",
            "WordPress Optimized",
            "Dedicated IP Address",
            "Enhanced Security",
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

// ── Order Modal ───────────────────────────────────────────────────────────────

function OrderModal({
    plan,
    accentColor,
    onClose,
}: {
    plan: Plan;
    accentColor: string;
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
                        Web Hosting
                    </p>
                    <h2 className="text-xl font-bold text-slate-900">
                        Order — {plan.name}{" "}
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
                                className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#ff5733]/30 focus:border-[#ff5733]"
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
                                className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#ff5733]/30 focus:border-[#ff5733]"
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
                            className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#ff5733]/30 focus:border-[#ff5733]"
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
                            className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#ff5733]/30 focus:border-[#ff5733]"
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
                        style={{ backgroundColor: accentColor }}
                        className="w-full py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                {loadingLabel}
                            </>
                        ) : (
                            "Place Order"
                        )}
                    </button>
                </form>
            </motion.div>
        </div>
    );
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function HostingPlans() {
    const [selected, setSelected] = useState<string>("Business");
    const [orderPlan, setOrderPlan] = useState<Plan | null>(null);

    return (
        <section className="py-24 px-6 bg-[#f8f9fa]">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                        Shared Hosting Plans
                    </h2>
                    <p className="text-slate-500 text-base">
                        Perfect for websites, blogs, and{" "}
                        <span className="text-slate-700 font-medium">small businesses</span>
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
                                        ? "border-2 border-[#ff5733] shadow-xl shadow-[#ff5733]/10"
                                        : "border border-slate-200 shadow-sm hover:shadow-md"
                                    }`}
                            >
                                {/* Most Popular Badge */}
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="bg-[#ff5733] text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-md tracking-wide">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                {/* Plan Name */}
                                <h3 className="text-xl font-bold text-slate-900 text-center mb-3 mt-2">
                                    {plan.name}
                                </h3>

                                {/* Price */}
                                <div className="text-center mb-6">
                                    <span className="text-4xl font-extrabold text-[#ff5733]">
                                        ${plan.price}
                                    </span>
                                    <span className="text-slate-500 text-sm font-medium">
                                        /month
                                    </span>
                                </div>

                                {/* Specs Row */}
                                <div className="flex justify-around items-center bg-slate-50 rounded-xl py-4 px-2 mb-7 border border-slate-100">
                                    {plan.specs.map((spec, i) => (
                                        <div key={i} className="flex flex-col items-center gap-1.5">
                                            {spec.icon}
                                            <span className="text-[11px] font-semibold text-slate-600 text-center leading-tight">
                                                {spec.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Feature List */}
                                <ul className="space-y-2.5 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2.5">
                                            <Check className="w-4 h-4 text-[#ff5733] shrink-0" strokeWidth={2.5} />
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
                                            ? "bg-[#ff5733] hover:bg-[#e84d2b] text-white shadow-lg shadow-[#ff5733]/25"
                                            : "border border-slate-300 text-slate-800 hover:bg-slate-50"
                                        }`}
                                >
                                    Order Now
                                </button>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Order Modal */}
            <AnimatePresence>
                {orderPlan && (
                    <OrderModal
                        plan={orderPlan}
                        accentColor="#ff5733"
                        onClose={() => setOrderPlan(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
