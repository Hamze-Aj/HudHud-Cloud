"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Domains", href: "/domains" },
    { name: "Hosting", href: "/hosting" },
    { name: "SaaS Products", href: "/saas" },
    { name: "Website Development", href: "/website-development" },
    { name: "Partners", href: "/partners" },
    { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-3 bg-white shadow-sm"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-[#2e2a7a] text-white flex items-center justify-center font-bold text-xl rounded-lg">
                        H
                    </div>
                    <div className="flex flex-col leading-tight">
                        <span className="font-bold text-[#0b0d17] text-lg">HudHud</span>
                        <span className="text-[#0b0d17] text-xs font-bold uppercase tracking-wider -mt-1">Cloud</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium px-4 py-2 transition-all rounded-full",
                                pathname === link.href
                                    ? "bg-black/5 text-black"
                                    : "text-black/60 hover:text-black"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="hidden lg:flex items-center gap-6">
                    <button className="text-sm font-medium text-black hover:text-brand-orange transition-colors">
                        Client Login
                    </button>
                    <button className="bg-orange-gradient hover:opacity-90 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-brand-orange/20 text-center leading-tight">
                        Get <br /> Started
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-black"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white border-b border-black/5 lg:hidden px-6 py-8 flex flex-col gap-4 shadow-xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-black/80 hover:text-brand-orange transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 flex flex-col gap-4">
                            <button className="text-black font-semibold text-center py-3 border border-black/10 rounded-lg">
                                Client Login
                            </button>
                            <button className="bg-orange-gradient text-white font-bold py-3 rounded-lg">
                                Get Started
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
