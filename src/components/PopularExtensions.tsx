"use client";

import React from "react";
import { motion } from "framer-motion";

const domainExtensions = [
    { name: ".com", price: "$12.99", popular: true, color: "bg-[#ff5733]" },
    { name: ".net", price: "$14.99", popular: false, color: "bg-[#1E1F8B]" },
    { name: ".org", price: "$13.99", popular: false, color: "bg-[#ff5733]" },
    { name: ".cloud", price: "$24.99", popular: true, color: "bg-[#1E1F8B]" },
    { name: ".tech", price: "$19.99", popular: false, color: "bg-[#ff5733]" },
    { name: ".africa", price: "$29.99", popular: true, color: "bg-[#1E1F8B]" },
    { name: ".io", price: "$39.99", popular: false, color: "bg-[#ff5733]" },
    { name: ".co", price: "$22.99", popular: false, color: "bg-[#1E1F8B]" },
];

export default function PopularExtensions() {
    return (
        <section className="py-24 px-6 bg-[#fafafa]">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Popular Domain Extensions
                    </h2>
                    <p className="text-slate-500 text-lg">
                        Choose from our wide selection of domain extensions
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {domainExtensions.map((ext, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col items-center text-center"
                        >
                            {/* Popular Badge */}
                            {ext.popular && (
                                <span className="absolute top-4 right-4 bg-orange-50 text-[#ff5733] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-orange-100">
                                    Popular
                                </span>
                            )}

                            {/* Domain Circle */}
                            <div className={`w-20 h-20 rounded-full ${ext.color} flex items-center justify-center mb-8 shadow-inner`}>
                                <span className="text-white font-bold text-2xl tracking-tight">
                                    {ext.name}
                                </span>
                            </div>

                            {/* Pricing */}
                            <div className="mb-8">
                                <h3 className="text-3xl font-extrabold text-slate-900 mb-1">
                                    {ext.price}
                                </h3>
                                <p className="text-slate-400 text-sm font-medium">
                                    per year
                                </p>
                            </div>

                            {/* Action Button */}
                            <button className="w-full py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all text-sm">
                                Register Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
