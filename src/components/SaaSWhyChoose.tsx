"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Shield, BarChart2, HeadphonesIcon } from "lucide-react";

const features = [
    {
        icon: <Smartphone className="w-6 h-6 text-white" strokeWidth={1.8} />,
        title: "Mobile Ready",
        subtitle: "Access from anywhere on any device",
    },
    {
        icon: <Shield className="w-6 h-6 text-white" strokeWidth={1.8} />,
        title: "Secure & Compliant",
        subtitle: "Enterprise-grade security",
    },
    {
        icon: <BarChart2 className="w-6 h-6 text-white" strokeWidth={1.8} />,
        title: "Analytics",
        subtitle: "Real-time insights and reports",
    },
    {
        icon: <HeadphonesIcon className="w-6 h-6 text-white" strokeWidth={1.8} />,
        title: "24/7 Support",
        subtitle: "Dedicated support team",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function SaaSWhyChoose() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Why Choose Our SaaS Solutions?
                    </h2>
                </div>

                {/* Cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 p-7 flex flex-col items-center text-center"
                        >
                            {/* Gradient Icon Circle */}
                            <div
                                className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #7b3fa0 0%, #c0395a 60%, #e05c30 100%)",
                                }}
                            >
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                                {feature.title}
                            </h3>

                            {/* Subtitle */}
                            <p className="text-xs text-[#4472c4] font-medium leading-relaxed">
                                {feature.subtitle}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
