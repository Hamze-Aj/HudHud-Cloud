"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Code2, Palette, ShoppingCart, Sparkles } from "lucide-react";

interface Package {
    id: string;
    icon: React.ReactNode;
    iconBg: string;
    name: string;
    tagline: string;
    price: string;
    priceSuffix: string;
    priceColor: string;
    deliveryTime: string;
    popular: boolean;
    features: string[];
    ctaLabel: string;
}

const packages: Package[] = [
    {
        id: "basic",
        icon: <Code2 className="w-6 h-6 text-[#ff5733]" />,
        iconBg: "bg-orange-50",
        name: "Basic Website",
        tagline: "Perfect for personal sites and startups",
        price: "$499",
        priceSuffix: "one-time",
        priceColor: "text-[#ff5733]",
        deliveryTime: "7-10 business days",
        popular: false,
        features: [
            "Up to 5 pages",
            "Responsive design",
            "Contact form",
            "Basic SEO optimization",
            "Social media integration",
            "1 month support",
            "Content management system",
            "Mobile optimized",
        ],
        ctaLabel: "Get Started",
    },
    {
        id: "business",
        icon: <Palette className="w-6 h-6 text-[#1E1F8B]" />,
        iconBg: "bg-indigo-50",
        name: "Business Website",
        tagline: "Ideal for growing businesses",
        price: "$1,299",
        priceSuffix: "one-time",
        priceColor: "text-[#ff5733]",
        deliveryTime: "14-21 business days",
        popular: true,
        features: [
            "Up to 15 pages",
            "Custom design",
            "Advanced contact forms",
            "Advanced SEO optimization",
            "Social media integration",
            "3 months support",
            "Content management system",
            "Blog functionality",
            "Google Analytics setup",
            "Email integration",
            "Performance optimization",
        ],
        ctaLabel: "Get Started",
    },
    {
        id: "ecommerce",
        icon: <ShoppingCart className="w-6 h-6 text-[#ff5733]" />,
        iconBg: "bg-orange-50",
        name: "E-commerce",
        tagline: "Complete online store solution",
        price: "$2,499",
        priceSuffix: "one-time",
        priceColor: "text-[#ff5733]",
        deliveryTime: "21-30 business days",
        popular: false,
        features: [
            "Unlimited pages",
            "Custom e-commerce design",
            "Product catalog",
            "Shopping cart",
            "Payment gateway integration",
            "Inventory management",
            "6 months support",
            "SEO optimization",
            "Mobile app ready",
            "Order management system",
            "Customer accounts",
            "Marketing tools integration",
        ],
        ctaLabel: "Get Started",
    },
    {
        id: "custom",
        icon: <Sparkles className="w-6 h-6 text-[#1E1F8B]" />,
        iconBg: "bg-indigo-50",
        name: "Custom Web App",
        tagline: "Tailored to your exact needs",
        price: "Custom",
        priceSuffix: "",
        priceColor: "text-[#1E1F8B]",
        deliveryTime: "Project-based timeline",
        popular: false,
        features: [
            "Fully custom development",
            "Advanced functionality",
            "API integrations",
            "User authentication",
            "Database design",
            "12 months support",
            "Scalable architecture",
            "Admin dashboard",
            "Security features",
            "Performance monitoring",
            "Cloud deployment",
            "Ongoing maintenance",
        ],
        ctaLabel: "Contact Us",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function WebDevPackages() {
    const [selected, setSelected] = useState<string>("business");

    return (
        <section className="py-24 px-6 bg-[#f5f6fa]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                        Development Packages
                    </h2>
                    <p className="text-slate-500 text-sm">
                        Choose a package that fits your needs, or let us create a custom solution
                    </p>
                </div>

                {/* Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {packages.map((pkg) => {
                        const isSelected = selected === pkg.id;
                        return (
                            <motion.div
                                key={pkg.id}
                                variants={cardVariants}
                                onClick={() => setSelected(pkg.id)}
                                className={`relative bg-white rounded-2xl p-7 cursor-pointer transition-all duration-200 ${isSelected
                                        ? "border-2 border-[#ff5733] shadow-xl shadow-[#ff5733]/10"
                                        : "border border-slate-200 shadow-sm hover:shadow-md"
                                    }`}
                            >
                                {/* Most Popular Badge */}
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="bg-[#ff5733] text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-md tracking-wide whitespace-nowrap">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                {/* Icon */}
                                <div className={`w-12 h-12 ${pkg.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 mt-2`}>
                                    {pkg.icon}
                                </div>

                                {/* Name & Tagline */}
                                <h3 className="text-lg font-bold text-slate-900 text-center mb-1">
                                    {pkg.name}
                                </h3>
                                <p className="text-xs text-slate-400 text-center mb-4 leading-relaxed">
                                    {pkg.tagline}
                                </p>

                                {/* Price */}
                                <div className="text-center mb-5">
                                    <span className={`text-3xl font-extrabold ${pkg.priceColor}`}>
                                        {pkg.price}
                                    </span>
                                    {pkg.priceSuffix && (
                                        <span className="text-slate-400 text-xs ml-1.5 font-medium">
                                            {pkg.priceSuffix}
                                        </span>
                                    )}
                                </div>

                                {/* Delivery Time */}
                                <div className="text-center mb-6 border border-slate-100 rounded-lg py-2.5 px-3 bg-slate-50">
                                    <p className="text-[10px] text-slate-400 font-medium mb-0.5 uppercase tracking-wider">
                                        Delivery Time
                                    </p>
                                    <p className="text-sm font-bold text-slate-800">
                                        {pkg.deliveryTime}
                                    </p>
                                </div>

                                {/* Feature List */}
                                <ul className="space-y-2 mb-8">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <Check
                                                className="w-3.5 h-3.5 text-[#ff5733] shrink-0"
                                                strokeWidth={2.5}
                                            />
                                            <span className="text-xs text-slate-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button
                                    className={`w-full py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${isSelected
                                            ? "bg-[#ff5733] hover:bg-[#e84d2b] text-white shadow-lg shadow-[#ff5733]/25"
                                            : "border border-slate-300 text-slate-800 hover:bg-slate-50"
                                        }`}
                                >
                                    {pkg.ctaLabel}
                                </button>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
