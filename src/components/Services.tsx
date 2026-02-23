"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Server, Cloud, Mail, Shield, Activity, Layers, Code } from "lucide-react";

interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
    iconBg: string;
    iconColor: string;
}

const services: Service[] = [
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Domain Registration",
        description: "Register your perfect domain name with competitive pricing and instant activation.",
        iconBg: "bg-red-50",
        iconColor: "text-red-500",
    },
    {
        icon: <Server className="w-6 h-6" />,
        title: "Web Hosting",
        description: "Fast, reliable hosting with 99.9% uptime guarantee and 24/7 support.",
        iconBg: "bg-indigo-50",
        iconColor: "text-[#2e2a7a]",
    },
    {
        icon: <Cloud className="w-6 h-6" />,
        title: "VPS Hosting",
        description: "Scalable cloud VPS with full root access and dedicated resources.",
        iconBg: "bg-red-50",
        iconColor: "text-red-500",
    },
    {
        icon: <Mail className="w-6 h-6" />,
        title: "Email Services",
        description: "Professional email hosting with advanced security and spam protection.",
        iconBg: "bg-indigo-50",
        iconColor: "text-[#2e2a7a]",
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: "SSL Certificates",
        description: "Secure your website with trusted SSL certificates and HTTPS encryption.",
        iconBg: "bg-red-50",
        iconColor: "text-red-500",
    },
    {
        icon: <Activity className="w-6 h-6" />,
        title: "Monitoring",
        description: "Real-time server monitoring and performance analytics for your infrastructure.",
        iconBg: "bg-indigo-50",
        iconColor: "text-[#2e2a7a]",
    },
    {
        icon: <Layers className="w-6 h-6" />,
        title: "SaaS Tools",
        description: "Powerful cloud-based tools to manage and scale your business operations.",
        iconBg: "bg-red-50",
        iconColor: "text-red-500",
    },
    {
        icon: <Code className="w-6 h-6" />,
        title: "Website Development",
        description: "Custom website design and development tailored to your business needs.",
        iconBg: "bg-indigo-50",
        iconColor: "text-[#2e2a7a]",
    },
];

export default function Services() {
    return (
        <section className="py-24 px-6 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Complete Cloud Solutions
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        From domains to deployment, we provide everything you need to succeed online
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className={`${service.iconBg} ${service.iconColor} w-16 h-16 rounded-3xl flex items-center justify-center mb-6`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
