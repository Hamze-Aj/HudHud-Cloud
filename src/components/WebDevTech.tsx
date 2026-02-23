"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
    {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        name: "WordPress",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    },
    {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
        name: "Laravel",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
        name: "Shopify",
        logo: "https://cdn.simpleicons.org/shopify/96bf48",
    },
    {
        name: "WooCommerce",
        logo: "https://cdn.simpleicons.org/woocommerce/7F54B3",
    },
    {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
        name: "Vue.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
        name: "PHP",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function WebDevTech() {
    return (
        <section className="py-20 px-6 bg-[#f5f6fa]">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                        Technologies We Use
                    </h2>
                    <p className="text-sm text-slate-500">
                        Modern, proven technologies for{" "}
                        <span className="text-[#ff5733]">superior performance</span>
                    </p>
                </div>

                {/* Tech Grid */}
                <motion.div
                    className="grid grid-cols-3 md:grid-cols-6 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {technologies.map((tech) => (
                        <motion.div
                            key={tech.name}
                            variants={cardVariants}
                            className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 aspect-square"
                        >
                            <div className="w-10 h-10 relative flex items-center justify-center">
                                <Image
                                    src={tech.logo}
                                    alt={tech.name}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                            <span className="text-[11px] font-semibold text-slate-600 text-center">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
