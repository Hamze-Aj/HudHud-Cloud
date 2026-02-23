"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const dataCenters = [
    {
        title: "24/7 Monitoring",
        subtitle: "Expert team surveillance",
        image: "/dc-monitoring.png",
    },
    {
        title: "Expert Support",
        subtitle: "Professional maintenance",
        image: "/dc-support.png",
    },
    {
        title: "Tier IV Certified",
        subtitle: "99.995% uptime guarantee",
        image: "/dc-certified.png",
    },
];

export default function DataCenters() {
    return (
        <section className="py-24 px-6 bg-[#1a1e3b] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm border border-white/10"
                    >
                        World-Class Infrastructure
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Enterprise-Grade Data Centers
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Our state-of-the-art infrastructure across multiple continents ensures your
                        services run fast and reliable
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {dataCenters.map((dc, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src={dc.image}
                                alt={dc.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

                            <div className="absolute bottom-10 left-10">
                                <h3 className="text-2xl font-bold mb-2">{dc.title}</h3>
                                <p className="text-white/70 font-medium">{dc.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
