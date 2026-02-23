"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
    {
        number: 1,
        title: "Consultation",
        description: "We discuss your requirements and goals",
    },
    {
        number: 2,
        title: "Planning",
        description: "We create a detailed project roadmap",
    },
    {
        number: 3,
        title: "Design",
        description: "Our designers create beautiful mockups",
    },
    {
        number: 4,
        title: "Development",
        description: "We build your website with best practices",
    },
    {
        number: 5,
        title: "Testing",
        description: "Thorough testing across devices",
    },
    {
        number: 6,
        title: "Launch",
        description: "We deploy and hand over your website",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function WebDevProcess() {
    return (
        <section className="py-20 px-6 bg-[#f5f6fa]">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                        Our Development Process
                    </h2>
                    <p className="text-sm text-slate-500">
                        A proven methodology that{" "}
                        <span className="text-[#ff5733]">delivers results</span>
                    </p>
                </div>

                {/* Steps Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-5"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {steps.map((step) => (
                        <motion.div
                            key={step.number}
                            variants={cardVariants}
                            className="bg-white border border-slate-200 rounded-xl p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                            {/* Number Badge */}
                            <div
                                className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #1E1F8B 0%, #FF5733 100%)",
                                }}
                            >
                                {step.number}
                            </div>

                            {/* Text */}
                            <div>
                                <h3 className="font-bold text-slate-800 text-sm mb-1">
                                    {step.title}
                                </h3>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
