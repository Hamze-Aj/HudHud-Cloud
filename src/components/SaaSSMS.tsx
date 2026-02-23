"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, MessageSquare, ArrowRight } from "lucide-react";

const leftFeatures = [
    "Bulk SMS sending",
    "Campaign scheduling",
    "SMS templates",
];
const rightFeatures = [
    "Contact management",
    "Two-way SMS",
    "Delivery reports",
];

const pricingPlans = [
    {
        name: "Starter",
        price: "$49/month",
        description: "Perfect for small businesses",
        popular: false,
        custom: false,
    },
    {
        name: "Professional",
        price: "$149/month",
        description: "For growing organizations",
        popular: true,
        custom: false,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Tailored for large enterprises",
        popular: false,
        custom: true,
    },
];

export default function SaaSSMS() {
    return (
        <section className="py-16 px-6 bg-[#f8f9fa]">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* ─── Left: Product Info ─── */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {/* Logo + Name */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center border border-orange-100 shrink-0">
                                <MessageSquare className="w-6 h-6 text-[#ff5733]" strokeWidth={1.8} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-extrabold text-slate-900 leading-none">
                                    SMS Gateway
                                </h3>
                                <p className="text-sm text-slate-500 mt-0.5">
                                    Bulk SMS Marketing Platform
                                </p>
                            </div>
                        </div>

                        {/* Tagline */}
                        <p className="text-slate-700 text-base mb-7 leading-relaxed">
                            Powerful SMS marketing and communication platform
                        </p>

                        {/* Feature checklist — 2 columns */}
                        <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-10">
                            {leftFeatures.map((f, i) => (
                                <div key={`l${i}`} className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-[#ff5733] shrink-0" strokeWidth={2.5} />
                                    <span className="text-sm text-slate-600">{f}</span>
                                </div>
                            ))}
                            {rightFeatures.map((f, i) => (
                                <div key={`r${i}`} className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-[#ff5733] shrink-0" strokeWidth={2.5} />
                                    <span className="text-sm text-slate-600">{f}</span>
                                </div>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3 flex-wrap">
                            <button className="flex items-center gap-2 bg-[#ff5733] hover:bg-[#e84d2b] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md shadow-[#ff5733]/20">
                                Start Free Trial <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="border border-slate-300 text-slate-800 hover:bg-slate-100 font-semibold text-sm px-6 py-3 rounded-xl transition-all">
                                View Demo
                            </button>
                            <button className="text-slate-600 hover:text-slate-900 font-semibold text-sm px-3 py-3 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </motion.div>

                    {/* ─── Right: Pricing Card ─── */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8"
                    >
                        <h4 className="text-lg font-bold text-slate-900 text-center mb-6">
                            Pricing Plans
                        </h4>

                        <div className="space-y-3">
                            {pricingPlans.map((plan) => (
                                <div
                                    key={plan.name}
                                    className={`relative rounded-xl px-5 py-4 transition-all
                                        ${plan.popular
                                            ? "border-2 border-[#ff5733] bg-white shadow-md shadow-[#ff5733]/10"
                                            : "border border-slate-200 bg-white"
                                        }`}
                                >
                                    {plan.popular && (
                                        <span className="absolute -top-3 left-5 bg-[#ff5733] text-white text-[10px] font-bold px-3 py-0.5 rounded-full">
                                            Most Popular
                                        </span>
                                    )}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-bold text-base text-slate-900">
                                                {plan.name}
                                            </p>
                                            <p className={`text-xs mt-0.5 ${plan.popular ? "text-[#ff5733]" : "text-slate-500"}`}>
                                                {plan.description}
                                            </p>
                                        </div>
                                        <span className="font-extrabold text-lg text-[#ff5733]">
                                            {plan.price}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
