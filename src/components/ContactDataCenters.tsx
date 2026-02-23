"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactDataCenters() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <span className="inline-block border border-[#ff5733] text-[#ff5733] text-xs font-semibold px-4 py-1 rounded-full mb-4">
                        Our Infrastructure
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                        Enterprise-Grade Data Centers
                    </h2>
                    <p className="text-sm text-[#1E1F8B] max-w-md mx-auto leading-relaxed">
                        Our state-of-the-art infrastructure ensures maximum uptime and performance for your
                        business
                    </p>
                </div>

                {/* Main hero image card */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                    className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden mb-4 shadow-md"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Text overlay */}
                    <div className="absolute bottom-0 left-0 p-7">
                        <h3 className="text-2xl font-bold text-white mb-2">
                            World-Class Infrastructure
                        </h3>
                        <p className="text-white/80 text-sm max-w-sm leading-relaxed mb-5">
                            Tier IV certified data centers with 99.995% uptime guarantee, redundant
                            power systems, and advanced cooling technology
                        </p>

                        {/* Stats */}
                        <div className="flex items-center gap-3">
                            {[
                                { value: "99.995%", label: "Uptime SLA" },
                                { value: "24/7", label: "Monitoring" },
                                { value: "ISO", label: "Certified" },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-center"
                                >
                                    <p className="text-white font-bold text-sm">{stat.value}</p>
                                    <p className="text-white/70 text-[10px] mt-0.5">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Two smaller cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Advanced Security */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="relative h-52 rounded-2xl overflow-hidden shadow-md"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-5">
                            <h3 className="text-lg font-bold text-white mb-1">Advanced Security</h3>
                            <p className="text-white/75 text-xs leading-relaxed">
                                24/7 monitoring, biometric access control, and multi-layer security protocols
                            </p>
                        </div>
                    </motion.div>

                    {/* Redundant Systems */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="relative h-52 rounded-2xl overflow-hidden shadow-md"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&auto=format&fit=crop&q=80')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-5">
                            <h3 className="text-lg font-bold text-white mb-1">Redundant Systems</h3>
                            <p className="text-white/75 text-xs leading-relaxed">
                                N+1 redundancy for power, cooling, and network connectivity
                            </p>
                        </div>
                    </motion.div>
                </div>
                {/* Three smaller cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    {[
                        {
                            title: "Global Network",
                            subtitle: "Multiple locations worldwide",
                            bg: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80')",
                            delay: 0.3,
                        },
                        {
                            title: "Scalable Infrastructure",
                            subtitle: "Grow as you need",
                            bg: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80')",
                            delay: 0.4,
                        },
                        {
                            title: "Tier IV Certified",
                            subtitle: "Highest level of reliability",
                            bg: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80')",
                            delay: 0.5,
                        },
                    ].map((card) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: card.delay, duration: 0.4 }}
                            className="relative h-44 rounded-2xl overflow-hidden shadow-md"
                            style={{
                                backgroundImage: card.bg,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-5">
                                <h3 className="text-base font-bold text-white mb-0.5">{card.title}</h3>
                                <p className="text-white/70 text-xs">{card.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
