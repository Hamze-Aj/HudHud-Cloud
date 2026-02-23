"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, HardDrive, Zap, Users } from "lucide-react";

interface Plan {
    name: string;
    price: string;
    popular: boolean;
    specs: { icon: React.ReactNode; label: string }[];
    features: string[];
}

const plans: Plan[] = [
    {
        name: "Starter",
        price: "4.99",
        popular: false,
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

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function HostingPlans() {
    const [selected, setSelected] = useState<string>("Business");

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
        </section>
    );
}
