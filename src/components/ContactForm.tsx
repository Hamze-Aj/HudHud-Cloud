"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Globe, Send } from "lucide-react";

const contactInfo = [
    {
        icon: <Mail className="w-5 h-5 text-[#ff5733]" />,
        iconBg: "bg-orange-50",
        title: "Email Us",
        line1: "support@hudhudcloud.com",
        line1Accent: true,
        line2: "We'll respond within 24 hours",
    },
    {
        icon: <Phone className="w-5 h-5 text-[#1E1F8B]" />,
        iconBg: "bg-indigo-50",
        title: "Call Us",
        line1: "+251 91 530 4064",
        line1Accent: false,
        line2: "Mon-Fri from 8am to 6pm",
        line2Accent: true,
    },
    {
        icon: <MapPin className="w-5 h-5 text-[#ff5733]" />,
        iconBg: "bg-orange-50",
        title: "Visit Us",
        line1: "Kasma Building - 8th Floor",
        line1Accent: false,
        extra: [
            "Opposite Wengelawit Building",
            "Fithio-China Street, 12889",
            "Addis Ababa, Ethiopia",
        ],
    },
    {
        icon: <Clock className="w-5 h-5 text-[#1E1F8B]" />,
        iconBg: "bg-indigo-50",
        title: "24/7 Support",
        line1: "Round-the-clock assistance for critical issues",
        line1Accent: false,
    },
];

const serviceOptions = [
    "Select a service",
    "Domain Registration",
    "Web Hosting",
    "VPS Hosting",
    "EMS - Education Management System",
    "HMS - Hospital Management System",
    "SMS Gateway",
    "WhatsApp Business API",
    "POS System",
    "Website Development",
    "SSL Certificates",
    "Email Services",
    "General Inquiry",
    "Technical Support",
];

export default function ContactForm() {
    const [agreed, setAgreed] = useState(false);

    return (
        <section className="py-20 px-6 bg-[#f5f6fa]">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                    className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 items-start"
                >
                    {/* ── Left: Contact Information ── */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
                        <h2 className="font-bold text-slate-900 text-lg mb-6">
                            Contact Information
                        </h2>

                        <div className="flex flex-col gap-6">
                            {contactInfo.map((item) => (
                                <div key={item.title} className="flex items-start gap-3">
                                    <div
                                        className={`w-9 h-9 ${item.iconBg} rounded-lg flex items-center justify-center shrink-0 mt-0.5`}
                                    >
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-800 text-sm">{item.title}</p>
                                        {item.line1Accent ? (
                                            <p className="text-xs text-[#ff5733] mt-0.5">{item.line1}</p>
                                        ) : (
                                            <p className="text-xs text-slate-600 mt-0.5">{item.line1}</p>
                                        )}
                                        {item.line2 && (
                                            <p className={`text-xs mt-0.5 ${(item as { line2Accent?: boolean }).line2Accent ? "text-[#1E1F8B]" : "text-slate-500"}`}>
                                                {item.line2}
                                            </p>
                                        )}
                                        {item.extra?.map((l, i) => (
                                            <p key={i} className="text-xs text-slate-600 leading-snug">
                                                {l}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Need Immediate Help box */}
                        <div
                            className="mt-8 rounded-xl p-5"
                            style={{
                                background: "linear-gradient(135deg, #1E1F8B 0%, #FF5733 100%)",
                            }}
                        >
                            <p className="font-bold text-white text-sm mb-3">
                                Need Immediate Help?
                            </p>
                            <input
                                type="text"
                                className="w-full bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-white placeholder:text-white/50 text-sm focus:outline-none focus:ring-1 focus:ring-white/50 mb-3"
                                placeholder=""
                            />
                            <button className="w-full flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-white/25 transition-colors duration-200">
                                <Globe className="w-4 h-4" />
                                Client Portal
                            </button>
                        </div>
                    </div>

                    {/* ── Right: Send Us a Message ── */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                        <h2 className="font-bold text-slate-900 text-xl mb-1">
                            Send Us a Message
                        </h2>
                        <p className="text-sm text-slate-500 mb-7">
                            Fill out the form below and we&apos;ll get back to you as soon as{" "}
                            <span className="text-[#ff5733]">possible</span>
                        </p>

                        <form className="flex flex-col gap-4">
                            {/* Row 1 */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-semibold text-slate-700 mb-1 block">
                                        Full Name <span className="text-[#ff5733]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E1F8B]/20 focus:border-[#1E1F8B] transition"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-slate-700 mb-1 block">
                                        Email Address <span className="text-[#ff5733]">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E1F8B]/20 focus:border-[#1E1F8B] transition"
                                    />
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-semibold text-slate-700 mb-1 block">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="+1 (555) 123-4567"
                                        className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E1F8B]/20 focus:border-[#1E1F8B] transition"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-slate-700 mb-1 block">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your Company"
                                        className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E1F8B]/20 focus:border-[#1E1F8B] transition"
                                    />
                                </div>
                            </div>

                            {/* Service Interest */}
                            <div>
                                <label className="text-xs font-semibold text-slate-700 mb-1 block">
                                    Service Interest <span className="text-[#ff5733]">*</span>
                                </label>
                                <select
                                    defaultValue="General Inquiry"
                                    className="w-full border border-[#ff5733] rounded-lg px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#ff5733]/30 focus:border-[#ff5733] transition bg-white appearance-none"
                                >
                                    {serviceOptions.map((opt) => (
                                        <option key={opt} value={opt}>
                                            {opt}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="text-xs font-semibold text-slate-700 mb-1 block">
                                    Subject <span className="text-[#ff5733]">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="How can we help you?"
                                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E1F8B]/20 focus:border-[#1E1F8B] transition"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="text-xs font-semibold text-slate-700 mb-1 block">
                                    Message <span className="text-[#ff5733]">*</span>
                                </label>
                                <textarea
                                    rows={5}
                                    placeholder="Please provide details about your request..."
                                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E1F8B]/20 focus:border-[#1E1F8B] transition resize-none"
                                />
                            </div>

                            {/* Checkbox */}
                            <label className="flex items-start gap-2.5 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                    className="mt-0.5 accent-[#1E1F8B] w-4 h-4 shrink-0"
                                />
                                <span className="text-xs text-slate-500 leading-relaxed">
                                    I agree to the{" "}
                                    <span className="text-[#1E1F8B] font-medium">Terms of Service</span>{" "}
                                    and{" "}
                                    <span className="text-[#1E1F8B] font-medium">Privacy Policy</span>
                                    . I understand that HudHud Cloud will contact me regarding my
                                    request.
                                </span>
                            </label>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 bg-[#ff5733] hover:bg-[#e84d2b] text-white font-bold text-sm py-3 rounded-xl transition-colors duration-200 shadow-lg shadow-[#ff5733]/25 mt-1"
                            >
                                <Send className="w-4 h-4" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
