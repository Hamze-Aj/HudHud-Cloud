"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Search, ArrowRight } from "lucide-react";

export default function DomainHero() {
    return (
        <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-domain-gradient min-h-[60vh] flex flex-col items-center justify-center text-center">
            <div className="max-w-7xl mx-auto relative z-10 w-full">
                {/* Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-8"
                >
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto backdrop-blur-md border border-white/20">
                        <Globe className="w-10 h-10 text-white" />
                    </div>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                >
                    Find Your Perfect Domain
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-white/80 text-lg md:text-[1.1rem] max-w-2xl mx-auto mb-12"
                >
                    Search for available domains and register instantly with competitive pricing
                </motion.p>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-3xl mx-auto mb-10"
                >
                    <div className="bg-[#f8fafc]/95 backdrop-blur-sm p-1.5 rounded-[2rem] shadow-2xl flex items-center gap-2 border border-white/20">
                        <div className="pl-6 flex items-center justify-center">
                            <Search className="w-5 h-5 text-slate-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Enter your domain name (e.g., mycompany)"
                            className="flex-1 bg-transparent border-none py-4 px-2 text-base text-slate-900 focus:outline-none placeholder:text-slate-400 font-medium"
                        />
                        <button className="bg-[#ff5733] hover:bg-[#ff451d] text-white px-8 py-4 rounded-[1.5rem] font-bold text-base flex items-center gap-2 transition-all shadow-lg shrink-0">
                            Search <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>

                {/* Secondary Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <button className="px-7 py-2.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold transition-all border border-white/5 backdrop-blur-md text-sm">
                        Transfer Domain
                    </button>
                    <button className="px-7 py-2.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold transition-all border border-white/5 backdrop-blur-md text-sm">
                        Bulk Search
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
