"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Rocket, Globe, Laptop, Banknote, GraduationCap } from "lucide-react";

const partners = [
    { name: "Acme Corporation", icon: <Building2 className="w-8 h-8 text-slate-400" /> },
    { name: "Tech Startup", icon: <Rocket className="w-8 h-8 text-red-500" /> },
    { name: "Global Solutions", icon: <Globe className="w-8 h-8 text-blue-500" /> },
    { name: "Digital Agency", icon: <Laptop className="w-8 h-8 text-blue-400" /> },
    { name: "Finance Group", icon: <Banknote className="w-8 h-8 text-yellow-500" /> },
    { name: "Education Hub", icon: <GraduationCap className="w-8 h-8 text-slate-700" /> },
];

export default function Partners() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Trusted by Leading Organizations
                    </h2>
                    <p className="text-slate-500 text-lg">
                        Join thousands of businesses across Africa and beyond
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center justify-center p-8 rounded-3xl bg-[#f8fafc] hover:bg-slate-100 transition-colors cursor-pointer group"
                        >
                            <div className="mb-4 transition-transform group-hover:scale-110">
                                {partner.icon}
                            </div>
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-tight">
                                {partner.name}
                            </span>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-6">
                    <p className="text-slate-400 text-sm font-medium">
                        Want to be featured here?
                    </p>
                    <button className="px-10 py-4 rounded-2xl border border-slate-200 bg-white text-slate-900 font-bold text-lg hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm">
                        Become a Partner
                    </button>
                </div>
            </div>
        </section>
    );
}
