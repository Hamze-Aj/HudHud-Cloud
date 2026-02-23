"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#1E1F8B] text-white pt-24 pb-12 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-20">
                {/* Logo Column */}
                <div className="flex flex-col gap-8">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-gradient text-white flex items-center justify-center font-bold text-2xl rounded-xl shadow-lg shadow-brand-orange/20">
                            H
                        </div>
                        <span className="font-bold text-white text-xl tracking-tight">HudHud Cloud</span>
                    </Link>
                    <p className="text-white/60 text-base leading-relaxed max-w-xs">
                        Powering your digital business with cloud, domains & secure infrastructure across Africa and beyond.
                    </p>
                    <div className="flex items-center gap-4">
                        {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                            <Link key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10 group">
                                <Icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Services Column */}
                <div className="flex flex-col gap-6">
                    <h4 className="font-bold text-white text-lg">Services</h4>
                    <ul className="flex flex-col gap-4">
                        {[
                            "Domain Registration", "Web Hosting", "VPS Hosting",
                            "SSL Certificates", "Email Services", "Website Development"
                        ].map((item) => (
                            <li key={item}>
                                <Link href="#" className="text-white/60 hover:text-white text-base transition-colors">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Support Column */}
                <div className="flex flex-col gap-6">
                    <h4 className="font-bold text-white text-lg">Support</h4>
                    <ul className="flex flex-col gap-4">
                        {[
                            "Help Center", "Documentation", "API Reference",
                            "System Status", "Contact Support"
                        ].map((item) => (
                            <li key={item}>
                                <Link href="#" className="text-white/60 hover:text-white text-base transition-colors">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Column */}
                <div className="flex flex-col gap-6">
                    <h4 className="font-bold text-white text-lg">Contact</h4>
                    <ul className="flex flex-col gap-6">
                        <li className="flex items-start gap-4 text-white/60">
                            <Mail className="w-5 h-5 text-white/40 mt-1" />
                            <span className="text-base">support@hudhudcloud.com</span>
                        </li>
                        <li className="flex items-start gap-4 text-white/60">
                            <Phone className="w-5 h-5 text-white/40 mt-1" />
                            <span className="text-base">+251 91 530 4064</span>
                        </li>
                        <li className="flex items-start gap-4 text-white/60">
                            <MapPin className="w-5 h-5 text-white/40 mt-1" />
                            <span className="text-base leading-relaxed">
                                Kasma Building - 8th Floor<br />
                                Ethio-China Street, 12889<br />
                                Addis Ababa, Ethiopia
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 text-center">
                <p className="text-white/40 text-sm font-medium">
                    © 2026 HudHud Cloud. All rights reserved. |
                    <Link href="#" className="hover:text-white transition-colors mx-2">Privacy Policy</Link> |
                    <Link href="#" className="hover:text-white transition-colors mx-2">Terms of Service</Link>
                </p>
            </div>
        </footer>
    );
}
