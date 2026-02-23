"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Users, Award, ArrowRight, Globe } from "lucide-react";

const stats = [
    { icon: <Zap className="w-5 h-5 text-white" />, label: "99.9% Uptime", sub: "Guaranteed reliability" },
    { icon: <Shield className="w-5 h-5 text-white" />, label: "Enterprise Security", sub: "Advanced protection" },
    { icon: <Users className="w-5 h-5 text-white" />, label: "24/7 Support", sub: "Expert assistance" },
    { icon: <Award className="w-5 h-5 text-white" />, label: "Trusted Partner", sub: "Official partnerships" },
];

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-6 bg-hero-gradient overflow-hidden min-h-screen flex flex-col justify-center">

            <div className="max-w-7xl mx-auto text-center relative z-10">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold mb-8 backdrop-blur-md"
                >
                    <Globe className="w-4 h-4 text-green-400" />
                    African-Born Global Cloud Platform
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.2] tracking-normal"
                >
                    Powering Your Digital <br className="hidden md:block" />
                    Business with Cloud, Domains <br className="hidden md:block" />
                    & Secure Infrastructure
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
                >
                    Everything you need to build, host, and scale your online presence.
                    Trusted by thousands of businesses across Africa and beyond.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
                >
                    <button className="w-full sm:w-auto bg-orange-gradient hover:opacity-90 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-brand-orange/20">
                        Get Started <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-md">
                        View Services
                    </button>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12"
                >
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center gap-4 text-center">
                            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shadow-xl">
                                {stat.icon}
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <h3 className="text-white font-bold text-lg leading-tight">{stat.label}</h3>
                                <p className="text-white/60 text-sm whitespace-nowrap">{stat.sub}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
