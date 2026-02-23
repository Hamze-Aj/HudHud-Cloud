"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Cpu, MemoryStick, HardDrive, Zap, Cloud } from "lucide-react";

interface Spec {
    icon: React.ReactNode;
    label: string;
    value: string;
}

interface VPSPlan {
    name: string;
    price: string;
    recommended: boolean;
    specs: Spec[];
    features: string[];
}

const plans: VPSPlan[] = [
    {
        name: "Core",
        price: "29.99",
        recommended: false,
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

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function VPSPlans() {
    const [selected, setSelected] = useState<string>("Accelerate");

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
        </section>
    );
}
