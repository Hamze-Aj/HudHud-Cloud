"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Award, Globe, CheckCircle, CreditCard, Lock, Zap, Mail, Rocket, RefreshCw } from "lucide-react";

const partners = [
    {
        name: "AWS",
        category: "Cloud Infrastructure",
        logo: "https://cdn.simpleicons.org/amazonaws/FF9900",
        useImg: true,
    },
    {
        name: "cPanel",
        category: "Control Panel",
        logo: "https://cdn.simpleicons.org/cpanel/FF6C2C",
        useImg: true,
    },
    {
        name: "CloudFlare",
        category: "CDN & Security",
        logo: "https://cdn.simpleicons.org/cloudflare/F38020",
        useImg: true,
    },
    {
        name: "Let's Encrypt",
        category: "SSL Certificates",
        logo: "https://cdn.simpleicons.org/letsencrypt/003A70",
        useImg: true,
    },
    {
        name: "WHMCS",
        category: "Billing Platform",
        icon: <CreditCard className="w-10 h-10 text-yellow-500" />,
        useImg: false,
    },
    {
        name: "Acronis",
        category: "Backup Solutions",
        logo: "https://cdn.simpleicons.org/acronis/EF4136",
        useImg: true,
    },
    {
        name: "Imunify360",
        category: "Security",
        icon: <Lock className="w-10 h-10 text-yellow-500" />,
        useImg: false,
    },
    {
        name: "LiteSpeed",
        category: "Web Server",
        icon: <Zap className="w-10 h-10 text-yellow-400" />,
        useImg: false,
    },
    {
        name: "SiteLock",
        category: "Website Security",
        icon: <Shield className="w-10 h-10 text-blue-500" />,
        useImg: false,
    },
    {
        name: "SpamExperts",
        category: "Email Security",
        icon: <Mail className="w-10 h-10 text-blue-400" />,
        useImg: false,
    },
    {
        name: "Softaculous",
        category: "Auto Installer",
        icon: <Rocket className="w-10 h-10 text-red-500" />,
        useImg: false,
    },
    {
        name: "JetBackup",
        category: "Backup System",
        icon: <RefreshCw className="w-10 h-10 text-blue-500" />,
        useImg: false,
    },
];

const benefits = [
    {
        icon: <Shield className="w-7 h-7 text-[#ff5733]" />,
        iconBg: "bg-orange-50",
        title: "Enterprise-Grade Security",
        description:
            "Access to advanced security tools and protocols from industry leaders",
    },
    {
        icon: <Award className="w-7 h-7 text-[#1E1F8B]" />,
        iconBg: "bg-indigo-50",
        title: "Best-in-Class Technology",
        description:
            "Latest software and hardware from trusted technology providers",
    },
    {
        icon: <Globe className="w-7 h-7 text-[#ff5733]" />,
        iconBg: "bg-orange-50",
        title: "Global Infrastructure",
        description:
            "Worldwide network of data centers for optimal performance",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.38 } },
};

export default function PartnersGrid() {
    return (
        <>
            {/* ── Official Technology Partners ── */}
            <section className="py-20 px-6 bg-[#f5f6fa]">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                            Official Technology Partners
                        </h2>
                        <p className="text-sm text-slate-500">
                            Signed agreements with trusted providers worldwide
                        </p>
                    </div>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {partners.map((p) => (
                            <motion.div
                                key={p.name}
                                variants={cardVariants}
                                className="relative bg-white border border-slate-200 rounded-xl p-5 flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition-shadow duration-200"
                            >
                                {/* Verified badge */}
                                <span className="absolute top-3 right-3 flex items-center gap-1 text-[10px] font-semibold text-green-600 bg-green-50 rounded-full px-2 py-0.5">
                                    <CheckCircle className="w-3 h-3" />
                                    Verified
                                </span>

                                {/* Logo */}
                                <div className="w-12 h-12 flex items-center justify-center mt-2">
                                    {p.useImg ? (
                                        <Image
                                            src={p.logo!}
                                            alt={p.name}
                                            width={44}
                                            height={44}
                                            className="object-contain"
                                            unoptimized
                                        />
                                    ) : (
                                        p.icon
                                    )}
                                </div>

                                {/* Name & category */}
                                <div className="text-center">
                                    <p className="text-sm font-bold text-slate-800">{p.name}</p>
                                    <p className="text-[11px] text-[#ff5733] font-medium mt-0.5">
                                        {p.category}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── Why Our Partnerships Matter ── */}
            <section className="py-20 px-6 bg-[#f5f6fa]">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                            Why Our Partnerships Matter
                        </h2>
                        <p className="text-sm text-slate-500">
                            These partnerships enable us to provide you with the{" "}
                            <span className="text-[#ff5733]">best technology and support</span>
                        </p>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {benefits.map((b) => (
                            <motion.div
                                key={b.title}
                                variants={cardVariants}
                                className="bg-white border border-slate-200 rounded-xl p-7 flex flex-col items-center text-center gap-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                            >
                                <div
                                    className={`w-14 h-14 ${b.iconBg} rounded-full flex items-center justify-center`}
                                >
                                    {b.icon}
                                </div>
                                <h3 className="font-bold text-slate-900 text-base">{b.title}</h3>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    {b.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
