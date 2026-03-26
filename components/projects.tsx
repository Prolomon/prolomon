"use client";

import { Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export type Project = {
    title: string;
    client?: string;
    challenge?: string;
    stack?: string[];
    image: string;
    href?: string;
    status?: string;
};

const projects: Project[] = [
    {
        title: "Website Development for K-DECK",
        client: "K-DECK Professional Services",
        challenge:
            "Design and develop a modern, responsive website for K-DECK Professional Services that effectively showcases their services, expertise, and portfolio to attract potential clients and enhance their online presence.",
        stack: ["Next.js", "Tailwind CSS"],
        image: "/images/showcase.jpg",
        href: "https://kdeckprofessionalservices.com.ng",
        status: "Live",
    },
    {
        title: "Ride Booking & Sharing Application",
        client: "Personal Project",
        challenge:
            "Design and develop a user-friendly ride booking and sharing application that allows users to easily book rides, share rides with others, and track their rides in real-time.",
        stack: [
            "Next.js",
            "TypeScript",
            "React Native",
            "Tauri",
            "PostgreSQL",
            "MongoDB",
        ],
        image: "/images/collaborate.jpg",
        href: "https://drovenland.vercel.app/",
        status: "In Progress",
    },
    {
        title: "Attendance and secure pickups, handled in one flow.",
        client: "Personal Project",
        challenge:
            "Track arrivals in real time, protect student checkout, and keep families informed. Arqelion is built for busy mornings and safe handoffs every afternoon.",
        stack: [
            "Next.js",
            "TypeScript",
            "React Native",
            "PostgreSQL",
        ],
        image: "/images/collaborate.jpg",
        href: "https://arqelion.ng",
        status: "In Progress",
    },
    {
        title: "HER EXCELLENCE CONFERENCE AND AWARDS",
        client: "Personal Project",
        challenge:
            "Design and develop a dynamic website to showcase the HER Excellence Conference and Awards, providing information about the event, speakers, schedule, and registration details.",
        stack: [
            "Next.js",
            "TypeScript",
            "React Native",
            "Tauri",
            "PostgreSQL",
            "MongoDB",
        ],
        image: "/images/collaborate.jpg",
        href: "https://heca.netlify.app/",
        status: "Live",
    },
    {
        title: "Personal Portfolio Website",
        client: "Personal Project",
        challenge:
            "Create a visually appealing and responsive portfolio website to showcase my projects, skills, and experience as a full-stack developer.",
        stack: [
            "Next.js",
            "TypeScript",
            "Hero UI",
        ],
        image: "/images/collaborate.jpg",
        href: "https://prolomon.click/",
        status: "Live",
    },
    {
        title: "Lemon: A Styling Framework for React & React Native",
        client: "Personal Project",
        challenge:
            "Design and develop a versatile styling framework called Lemon that provides a consistent and efficient way to style React and React Native applications, allowing developers to create visually appealing and responsive user interfaces with ease.",
        stack: [
            "Next.js",
            "TypeScript",
            "Hero UI",
        ],
        image: "/images/collaborate.jpg",
        href: "https://lemon.prolomon.click/",
        status: "In Progress",
    },
];

export function Project() {

    return (
        <section className="w-full py-10 bg-black" id="projects">
            <div className="w-11/12 mx-auto">
                <motion.div
                    className="mb-8 md:mb-10 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-3xl font-bold text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                    >
                        Showcasing Digital Innovation and Excellence
                    </motion.h1>
                    <motion.p
                        className="text-gray-300 mt-2 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        Discover a curated portfolio of my most impactful and innovative projects, each crafted with a commitment to quality, user experience, and technical excellence. These works reflect my dedication to delivering robust digital solutions that drive value and set new standards in modern development.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.12,
                            },
                        },
                    }}
                >
                    {projects.map((p, idx) => (
                        <motion.article
                            key={p.title + idx}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 0.2 + idx * 0.1 }}
                        >
                            <div className="overflow-hidden bg-black/90 border border-content1-foreground hover:border-gray-600 hover:scale-105 rounded-xl relative">
                                <Chip key={p.status} variant="solid" size="sm" color={p.status === "Live" ? "success" : "warning"} className="absolute top-2 right-2 z-50 text-white">
                                    {p.status}
                                </Chip>
                                {p?.href ? (
                                    <div className="relative w-full aspect-[16/12] overflow-hidden">
                                        <iframe
                                            src={p.href}
                                            title={p.title}
                                            className="absolute top-0 left-0 border-0 scale-[0.305] origin-top-left pointer-events-none w-[1280px] h-[800px]"
                                        ></iframe>
                                    </div>
                                ) : (
                                    <div className="relative aspect-[16/12] w-full overflow-hidden rounded-xl border bg-muted">
                                        <Image
                                            src={p.image}
                                            alt={p.title}
                                            fill
                                            className="object-cover rounded-xl"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            priority={idx === 0}
                                        />
                                    </div>
                                )}
                                <div className="p-4 -mt-8" >
                                    <h2 className="text-xl font-semibold leading-snug text-white">
                                        {p.title}
                                    </h2>
                                    <div className="mt-1 space-y-2">
                                        <p className="text-gray-300">{p.challenge}</p>
                                        {p.stack && (
                                            <div className="flex flex-wrap gap-2 text-sm">
                                                {p.stack.length > 0 && p.stack.map((tech) => (
                                                    <Chip key={tech} variant="solid" size="sm" color="default">
                                                        {tech}
                                                    </Chip>
                                                ))}

                                            </div>
                                        )}
                                    </div>
                                    {p.href && (
                                        <div className="mt-5">
                                            <Link
                                                href={p.href}
                                                className="inline-flex items-center gap-2 text-primary hover:underline"
                                                target="_blank"
                                            >
                                                View Project
                                                <span aria-hidden>→</span>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}