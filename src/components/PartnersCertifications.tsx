"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const certifications = [
    {
        title: "ISO 27001 Certified",
        subtitle: "Information security management",
    },
    {
        title: "PCI DSS Compliant",
        subtitle: "Payment card industry standards",
    },
    {
        title: "SOC 2 Type II",
        subtitle: "Service organization controls",
    },
    {
        title: "GDPR Compliant",
        subtitle: "Data protection and privacy",
    },
];

const testimonials = [
    {
        quote: (
            <>
                <span className="text-[#1E1F8B]">HudHud Cloud</span> has been an{" "}
                <span className="text-[#1E1F8B]">exceptional partner</span>, delivering
                top-tier cloud solutions to{" "}
                <span className="text-[#1E1F8B]">customers across Africa</span>.
            </>
        ),
        role: "Technology Partnership Manager",
        company: "AWS",
    },
    {
        quote: (
            <>
                Their <span className="text-[#1E1F8B]">commitment</span> to security and{" "}
                <span className="text-[#1E1F8B]">customer service</span> makes them a
                standout provider in the{" "}
                <span className="text-[#1E1F8B]">cloud hosting industry</span>.
            </>
        ),
        role: "Regional Director",
        company: "Cloudflare",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.38 } },
};

export default function PartnersCertifications() {
    return (
        <>
            {/* ── Certifications & Compliance ── */}
            <section className="py-20 px-6 bg-[#f5f6fa]">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                            Certifications &amp; Compliance
                        </h2>
                        <p className="text-sm text-slate-500">
                            Maintaining the{" "}
                            <span className="text-[#ff5733]">highest</span> standards of
                            security and quality
                        </p>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {certifications.map((cert) => (
                            <motion.div
                                key={cert.title}
                                variants={cardVariants}
                                className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow duration-200"
                            >
                                <CheckCircle2
                                    className="w-8 h-8 text-emerald-500"
                                    strokeWidth={1.75}
                                />
                                <p className="font-bold text-slate-800 text-sm">{cert.title}</p>
                                <p className="text-[11px] text-[#ff5733] font-medium leading-snug">
                                    {cert.subtitle}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── What Our Partners Say ── */}
            <section className="py-20 px-6 bg-[#f5f6fa]">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                            What Our Partners Say
                        </h2>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {testimonials.map((t) => (
                            <motion.div
                                key={t.company}
                                variants={cardVariants}
                                className="bg-white border border-slate-200 rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow duration-200"
                            >
                                {/* Quote mark */}
                                <span className="text-3xl font-serif text-slate-300 leading-none select-none">
                                    &ldquo;
                                </span>

                                <p className="text-sm text-slate-600 leading-relaxed mt-1 mb-6">
                                    {t.quote}
                                </p>

                                <div>
                                    <p className="font-bold text-slate-800 text-sm">{t.role}</p>
                                    <p className="text-xs text-slate-400 mt-0.5">{t.company}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
