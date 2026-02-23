"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function ContactHero() {
    return (
        <section className="relative pt-32 pb-24 px-6 overflow-hidden min-h-[42vh] flex flex-col items-center justify-center text-center bg-domain-gradient">
            <div className="max-w-4xl mx-auto relative z-10 w-full">
                {/* Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex justify-center mb-5"
                >
                    <MessageSquare className="w-10 h-10 text-white" strokeWidth={1.5} />
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.45 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
                >
                    Get in Touch
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.45 }}
                    className="text-white/80 text-sm max-w-sm mx-auto leading-relaxed"
                >
                    Have a question or need help? Our team is here to assist you 24/7
                </motion.p>
            </div>
        </section>
    );
}
