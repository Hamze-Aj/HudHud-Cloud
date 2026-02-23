"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="py-24 px-6 bg-gradient-to-r from-[#2e2a7a] to-[#ff5733] text-white relative overflow-hidden">
            {/* Background pattern/overlay */}
            <div className="absolute inset-0 bg-black/10" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                >
                    Ready to Get Started?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-xl text-white/80 mb-12"
                >
                    Join thousands of businesses powered by HudHud Cloud. Start your journey today.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <div className="w-full sm:w-auto flex-1 max-w-md">
                        <input
                            type="text"
                            placeholder="Enter your domain name"
                            className="w-full px-8 py-4 rounded-2xl bg-white text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all placeholder:text-slate-400"
                        />
                    </div>
                    <button className="w-full sm:w-auto px-10 py-4 rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-md font-bold text-lg hover:bg-white/20 transition-all text-white">
                        Client Area
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
