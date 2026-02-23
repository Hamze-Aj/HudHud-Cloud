"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function SaaSHero() {
    return (
        <section className="relative pt-32 pb-24 px-6 overflow-hidden min-h-[42vh] flex flex-col items-center justify-center text-center bg-domain-gradient">
            <div className="max-w-4xl mx-auto relative z-10 w-full">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex justify-center mb-6"
                >
                    <span className="inline-flex items-center gap-1.5 bg-white/15 border border-white/25 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                        <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                        SaaS Solutions
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.45 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
                >
                    Enterprise SaaS Software Solutions
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.45 }}
                    className="text-white/75 text-base max-w-md mx-auto leading-relaxed"
                >
                    Powerful cloud-based software to digitize and automate your business
                    operations
                </motion.p>
            </div>
        </section>
    );
}
