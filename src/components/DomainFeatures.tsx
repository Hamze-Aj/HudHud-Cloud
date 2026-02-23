"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
    {
        icon: (
            // Lock / WHOIS Privacy icon
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-12 h-12">
                <rect x="14" y="28" width="36" height="26" rx="5" ry="5" fill="#e0a800" />
                <path d="M20 28v-8a12 12 0 0 1 24 0v8" fill="none" stroke="#b8860b" strokeWidth="4" strokeLinecap="round" />
                <circle cx="32" cy="41" r="4" fill="#fff8" />
                <rect x="30" y="43" width="4" height="6" rx="2" fill="#fff8" />
            </svg>
        ),
        title: "Free WHOIS Privacy",
        description: "Protect your personal information from public WHOIS databases",
        descriptionHighlight: false,
    },
    {
        icon: (
            // DNS / gear icon
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-12 h-12">
                <path
                    d="M32 20a12 12 0 1 1 0 24 12 12 0 0 1 0-24zm0-4c-1.5 0-3 .2-4.4.5l-2-4.6-5.6 2.3 1 5a17.9 17.9 0 0 0-5.5 5.5l-5-1-2.3 5.6 4.6 2A16 16 0 0 0 12 36c0 1.5.2 3 .5 4.4l-4.6 2 2.3 5.6 5-1a17.9 17.9 0 0 0 5.5 5.5l-1 5 5.6 2.3 2-4.6A16 16 0 0 0 32 56c1.5 0 3-.2 4.4-.5l2 4.6 5.6-2.3-1-5A17.9 17.9 0 0 0 48.5 47l5 1 2.3-5.6-4.6-2A16 16 0 0 0 52 36c0-1.5-.2-3-.5-4.4l4.6-2-2.3-5.6-5 1A17.9 17.9 0 0 0 43 19.5l1-5-5.6-2.3-2 4.6A16 16 0 0 0 32 16z"
                    fill="#5b9bd5"
                />
                <circle cx="32" cy="36" r="8" fill="#fff" />
            </svg>
        ),
        title: "DNS Management",
        description: "Full control over your domain DNS settings with easy-to-use interface",
        descriptionHighlight: false,
    },
    {
        icon: (
            // Domain Forwarding / arrows icon
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-12 h-12">
                <rect x="4" y="12" width="56" height="40" rx="6" fill="#4472c4" opacity="0.15" />
                <rect x="4" y="12" width="56" height="40" rx="6" fill="none" stroke="#4472c4" strokeWidth="3" />
                <polyline points="24,22 40,32 24,42" fill="none" stroke="#e05c2f" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="12" y1="32" x2="38" y2="32" stroke="#4472c4" strokeWidth="3" strokeLinecap="round" />
            </svg>
        ),
        title: "Domain Forwarding",
        description: "Redirect your domain to any URL with email forwarding included",
        descriptionHighlight: true,
    },
    {
        icon: (
            // Auto-Renewal / circular arrows icon
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-12 h-12">
                <path
                    d="M52 32A20 20 0 1 1 32 12"
                    fill="none"
                    stroke="#4472c4"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
                <polyline points="32,4 32,14 42,14" fill="none" stroke="#4472c4" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    d="M12 32A20 20 0 0 1 32 12"
                    fill="none"
                    stroke="#4472c4"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="6 0"
                />
            </svg>
        ),
        title: "Auto-Renewal",
        description: "Never lose your domain with automatic renewal reminders",
        descriptionHighlight: false,
    },
    {
        icon: (
            // Domain Lock / shield icon
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-12 h-12">
                <path
                    d="M32 8 L54 18 L54 34 C54 46 44 56 32 60 C20 56 10 46 10 34 L10 18 Z"
                    fill="#5b9bd5"
                    opacity="0.2"
                />
                <path
                    d="M32 8 L54 18 L54 34 C54 46 44 56 32 60 C20 56 10 46 10 34 L10 18 Z"
                    fill="none"
                    stroke="#5b9bd5"
                    strokeWidth="3"
                />
                <rect x="24" y="30" width="16" height="12" rx="3" fill="#5b9bd5" />
                <path d="M27 30v-4a5 5 0 0 1 10 0v4" fill="none" stroke="#5b9bd5" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
        ),
        title: "Domain Lock",
        description: "Prevent unauthorized transfers with domain lock protection",
        descriptionHighlight: true,
    },
    {
        icon: (
            // Easy Transfers / rocket icon
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-12 h-12">
                <path
                    d="M32 6C32 6 48 14 48 32C48 42 44 50 38 56L30 48C34 44 36 38 35 32C34 26 30 22 24 20Z"
                    fill="#e74c3c"
                />
                <path
                    d="M32 6C32 6 16 14 16 32C16 42 20 50 26 56L34 48C30 44 28 38 29 32C30 26 34 22 40 20Z"
                    fill="#ff7f50"
                />
                <circle cx="32" cy="28" r="5" fill="white" />
                <path d="M18 46 L10 54" stroke="#e74c3c" strokeWidth="3" strokeLinecap="round" />
                <path d="M46 46 L54 54" stroke="#e74c3c" strokeWidth="3" strokeLinecap="round" />
            </svg>
        ),
        title: "Easy Transfers",
        description: "Transfer your domains to us easily with free transfer assistance",
        descriptionHighlight: true,
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function DomainFeatures() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        What&apos;s Included with Every Domain
                    </h2>
                </div>

                {/* Grid — 3 columns on desktop, 1 on mobile */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 p-8 flex flex-col items-center text-center"
                        >
                            {/* Icon */}
                            <div className="mb-5 flex items-center justify-center">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-base font-bold text-slate-900 mb-3">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p
                                className={`text-sm leading-relaxed ${feature.descriptionHighlight
                                        ? "text-blue-500"
                                        : "text-slate-500"
                                    }`}
                            >
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
