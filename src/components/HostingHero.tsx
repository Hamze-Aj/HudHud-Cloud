"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server } from "lucide-react";

export default function HostingHero() {
    return (
        <section className="relative pt-32 pb-24 px-6 overflow-hidden min-h-[42vh] flex flex-col items-center justify-center text-center bg-domain-gradient">
            <div className="max-w-4xl mx-auto relative z-10 w-full">
                {/* Server Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="mb-6"
                >
                    <div className="w-14 h-14 flex items-center justify-center mx-auto">
                        <Server className="w-10 h-10 text-white/90" strokeWidth={1.6} />
                    </div>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.45 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
                >
                    Web Hosting &amp; VPS Solutions
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.45 }}
                    className="text-white/75 text-base md:text-[1rem] max-w-md mx-auto leading-relaxed"
                >
                    Lightning-fast hosting with 99.9% uptime guarantee. Choose the perfect plan
                    for your needs.
                </motion.p>
            </div>
        </section>
    );
}
