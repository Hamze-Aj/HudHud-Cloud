"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WebDevHero() {
    return (
        <section className="relative pt-32 pb-24 px-6 overflow-hidden min-h-[42vh] flex flex-col items-center justify-center text-center bg-domain-gradient">
            <div className="max-w-4xl mx-auto relative z-10 w-full">
                {/* Code Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex justify-center mb-5"
                >
                    <span className="text-white text-2xl font-light tracking-widest select-none">
                        &lt;&nbsp;&gt;
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.45 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
                >
                    Professional Website Development
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.45 }}
                    className="text-white/80 text-sm max-w-sm mx-auto leading-relaxed mb-8"
                >
                    Transform your vision into reality with custom-built websites designed to
                    convert and perform
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.45 }}
                    className="flex justify-center"
                >
                    <button className="bg-white text-gray-800 font-semibold text-sm px-8 py-3 rounded-md hover:bg-white/90 transition-colors duration-200 shadow-sm">
                        Get Started
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
