"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const features = [
    "Lightning-fast SSD storage and CDN",
    "Free SSL certificates with all plans",
    "Automated daily backups",
    "24/7 expert support team",
    "Money-back guarantee",
    "WHMCS integration for easy management",
];

export default function WhyChoose() {
    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                {/* Left Content */}
                <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Why Choose HudHud Cloud?
                    </h2>
                    <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-xl">
                        We're more than just a hosting provider. We're your technology partner,
                        committed to your success with enterprise-grade infrastructure and local expertise.
                    </p>

                    <ul className="space-y-4 mb-10">
                        {features.map((feature, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3 text-slate-700 font-medium"
                            >
                                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                {feature}
                            </motion.li>
                        ))}
                    </ul>

                    <button className="bg-orange-gradient hover:opacity-90 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all shadow-lg shadow-brand-orange/20">
                        View Our Partners
                    </button>
                </div>

                {/* Right Image/Stats */}
                <div className="flex-1 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/server-room.png"
                            alt="Modern Data Center"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                        />

                        {/* Stat 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                            className="absolute bottom-10 left-10 bg-white p-6 rounded-2xl shadow-xl z-20"
                        >
                            <span className="block text-3xl font-bold text-[#ff5733]">10K+</span>
                            <span className="text-slate-500 text-sm font-medium">Active Clients</span>
                        </motion.div>

                        {/* Stat 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            viewport={{ once: true }}
                            className="absolute bottom-10 right-10 bg-white p-6 rounded-2xl shadow-xl z-20"
                        >
                            <span className="block text-3xl font-bold text-[#2e2a7a]">99.9%</span>
                            <span className="text-slate-500 text-sm font-medium">Uptime SLA</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
