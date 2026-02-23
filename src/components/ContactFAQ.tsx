"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What is your response time for support tickets?",
        answer: (
            <>
                We aim to respond to all support tickets within{" "}
                <span className="text-[#1E1F8B] font-medium">2 hours</span> during business
                hours and within{" "}
                <span className="text-[#1E1F8B] font-medium">4 hours</span> during weekends
                and holidays.{" "}
                <span className="text-[#ff5733] font-medium">Critical issues</span> are
                handled immediately.
            </>
        ),
    },
    {
        question: "Do you offer custom enterprise solutions?",
        answer: (
            <>
                Yes! We specialize in creating{" "}
                <span className="text-[#1E1F8B] font-medium">custom solutions</span> for
                enterprises. Contact us to discuss your specific requirements and we&apos;ll
                create a{" "}
                <span className="text-[#1E1F8B] font-medium">tailored package</span> for you.
            </>
        ),
    },
    {
        question: "What payment methods do you accept?",
        answer: (
            <>
                We accept all major credit cards, PayPal,{" "}
                <span className="text-[#1E1F8B] font-medium">bank transfers</span>, and{" "}
                <span className="text-[#1E1F8B] font-medium">mobile money payments</span> for
                customers in Africa.
            </>
        ),
    },
    {
        question: "Can I upgrade my plan later?",
        answer: (
            <>
                Absolutely! You can upgrade or downgrade your{" "}
                <span className="text-[#1E1F8B] font-medium">plan</span> at any time through
                your{" "}
                <span className="text-[#1E1F8B] font-medium">client portal</span>. Changes are
                prorated based on your billing cycle.
            </>
        ),
    },
];

export default function ContactFAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="py-20 px-6 bg-[#f5f6fa]">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.38 }}
                            className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors duration-150"
                            >
                                <span className="font-bold text-slate-800 text-sm pr-4">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <AnimatePresence initial={false}>
                                {open === i && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <p className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
