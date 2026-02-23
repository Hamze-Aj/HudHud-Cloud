"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WebDevCTA() {
    return (
        <section className="py-16 px-6 bg-domain-gradient text-white">
            <div className="max-w-3xl mx-auto text-center">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="text-2xl md:text-3xl font-bold text-white mb-3"
                >
                    Ready to Start Your Project?
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="text-white/80 text-sm mb-8"
                >
                    Let&apos;s discuss your requirements and create something amazing together
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="flex items-center justify-center gap-4"
                >
                    <button className="bg-white text-slate-800 font-semibold text-sm px-8 py-2.5 rounded-lg hover:bg-white/90 transition-colors duration-200 shadow-sm">
                        Get Started
                    </button>
                    <button className="bg-white/15 border border-white/30 backdrop-blur-sm text-white font-semibold text-sm px-8 py-2.5 rounded-lg hover:bg-white/25 transition-colors duration-200">
                        View Portfolio
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
