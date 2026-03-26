"use client";

import { motion } from "framer-motion";
import { Calendar2Plus, Messenger, Envelope, Calendar3 } from "react-bootstrap-icons";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";
import { Input, Textarea } from "@heroui/input";
import { addToast } from "@heroui/toast";

import type React from "react";
import { useState } from "react";

import { siteConfig } from "@/config/site";

import {
    Twitter,
    Discord,
    Github,
    Instagram,
    Tiktok,
    Linkedin,
} from "react-bootstrap-icons";

import { calendlyFunc } from "@/config/calendly";
import { form } from "@heroui/theme";

const connectList = [
    {
        id: 1,
        image: <Envelope size={40} />,
        title: "Email Me",
        body: "Have a question or project? Send an email, and I'll reply promptly.",
    },
    {
        id: 2,
        image: <Messenger size={40} />,
        title: "Let's Chat",
        body: "Prefer to chat? Reach out on my social media platforms for a quick conversation.",
    },
    {
        id: 3,
        image: <Calendar2Plus size={40} />,
        title: "Book a Meeting",
        body: "Let's connect. Schedule a meeting to discuss your project in more detail.",
    },
];

export function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSend = async () => {

        setIsLoading(true);
        try {
            if (!formData.name || !formData.email || !formData.message) {
                addToast({
                    title: "Validation Error",
                    description:
                        "Please fill in your name, email, and message.",
                    color: "danger",
                    shouldShowTimeoutProgress: true,
                });
                return;
            }

            // const response = calendlyFunc(formData.name, formData.email, formData.message);

            // if (response) {
            addToast({
                title: "Message Sent!",
                description: "Thanks for reaching out. I'll get back to you soon.",
                color: "success",
                shouldShowTimeoutProgress: true,
            });
            setFormData({
                name: "",
                email: "",
                message: ""
            });
            // } else {
            //     addToast({
            //         title: "Error",
            //         description: "Something went wrong. Please try again later.",
            //         color: "danger",
            //         shouldShowTimeoutProgress: true,
            //     });
            // }
        } catch (error) {
            console.error("Error sending message:", error);
            addToast({
                title: "Error",
                description: "Something went wrong. Please try again later.",
                color: "danger",
                shouldShowTimeoutProgress: true,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full bg-black py-14 min-h-[60vh]" id="contact">
            <div className="w-11/12 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="w-full rounded-2xl bg-black/70 border border-gray-800 shadow-2xl px-6 py-10 md:px-12 md:py-14 relative overflow-hidden mb-10"
                >
                    <motion.h2
                        className="relative z-10 text-4xl md:text-5xl font-extrabold text-primary text-center mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        Connect with Me
                    </motion.h2>
                    <motion.div
                        className="flex flex-col gap-8 lg:flex-row lg:gap-6 justify-center items-stretch relative z-10"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.15 },
                            },
                        }}
                    >
                        {connectList.map((item, idx) => (
                            <motion.div
                                key={item?.id}
                                className="flex-1 min-w-[220px]"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.3 + idx * 0.15 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Card className="w-full h-full rounded-xl bg-black/80 border border-gray-700 shadow-lg p-7 flex flex-col items-center text-center transition-all duration-200 ease-in-out hover:border-primary hover:shadow-primary/20 cursor-pointer backdrop-blur-md">
                                    <CardBody className="flex flex-col items-center gap-3">
                                        <span className="mb-2 text-primary">{item?.image}</span>
                                        <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                                        <p className="text-sm text-gray-300 font-medium">{item.body}</p>
                                    </CardBody>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    className="w-full rounded-2xl bg-black/70 border border-gray-800 shadow-2xl px-6 py-10 md:px-12 md:py-14 relative overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
                >
                    <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-6">
                        <div>
                            <h2 className="inline-flex gap-2 text-2xl font-semibold text-white uppercase items-center">
                                <span className="w-4 h-4 rounded-full bg-primary"></span>Open to
                                Opportunities
                            </h2>
                            <h4 className="text-4xl font-bold text-white mt-2 mb-4">
                                Let&apos;s collaborate on your next project.
                            </h4>
                            <p className="text-sm text-gray-400">
                                Feel free to reach out using the methods below. I typically respond
                                within 24 hours.
                            </p>
                            <div className="flex flex-wrap gap-2 my-8">
                                {[
                                    {
                                        name: "LinkedIn",
                                        icon: <Linkedin />,
                                        href: siteConfig.links.linkedin,
                                    },
                                    {
                                        name: "Instagram",
                                        icon: <Instagram />,
                                        href: siteConfig.links.instagram,
                                    },
                                    {
                                        name: "Twitter",
                                        icon: <Twitter />,
                                        href: siteConfig.links.twitter,
                                    },
                                    {
                                        name: "GitHub",
                                        icon: <Github />,
                                        href: siteConfig.links.github,
                                    },
                                    {
                                        name: "Tiktok",
                                        icon: <Tiktok />,
                                        href: siteConfig.links.tiktok,
                                    },
                                    {
                                        name: "Discord",
                                        icon: <Discord />,
                                        href: siteConfig.links.discord,
                                    },
                                ].map((social) => (
                                    <Button
                                        key={social.name}
                                        radius="full"
                                        size="lg"
                                        as={Link}
                                        href={social.href}
                                        variant="bordered"
                                        className="bg-transparent text-gray-200 border-gray-600 hover:border-primary hover:text-primary"
                                        startContent={social.icon}
                                    >
                                        {social.name}
                                    </Button>
                                ))}
                            </div>
                            <Button size="lg" variant="solid" color="primary" className="text-white hover:bg-primary/80" startContent={<Calendar3 size="18" />} radius="full" as={Link} href="/contact" onPress={() => calendlyFunc()}>
                                Schedule a Meeting
                            </Button>
                        </div>

                        <form>
                            <Card className="shadow-md bg-black/80 border border-gray-800 py-6">
                                <CardBody className="py-4 px-6 space-y-4">
                                    {/* name and email address */}
                                    <Input
                                        isDisabled={isLoading}
                                        label="NAME"
                                        labelPlacement="outside"
                                        name="name"
                                        placeholder="Enter your name"
                                        classNames={{
                                            label: "text-white",
                                            input: [
                                                "text-white/90",
                                                "placeholder:text-gray-100",
                                                "text-sm",
                                            ]
                                        }}
                                        onChange={(e) => {
                                            setFormData({ ...formData, name: e.target.value });
                                        }}
                                        size="lg"
                                        variant="bordered"
                                    />
                                    <Input
                                        isDisabled={isLoading}
                                        label="EMAIL"
                                        labelPlacement="outside"
                                        name="email"
                                        placeholder="Enter your email"
                                        type="email"
                                        classNames={{
                                            label: "text-white",
                                            input: [
                                                "text-white/90",
                                                "placeholder:text-gray-100",
                                                "text-sm",
                                            ]
                                        }}
                                        onChange={(e) => {
                                            setFormData({ ...formData, email: e.target.value });
                                        }}
                                        size="lg"
                                        variant="bordered"
                                    />

                                    <Textarea
                                        isDisabled={isLoading}
                                        name="message"
                                        labelPlacement="outside"
                                        label="MESSAGE"
                                        placeholder="Enter your message (optional)"
                                        classNames={{
                                            label: "text-white",
                                            input: [
                                                "text-white/90",
                                                "placeholder:text-gray-100",
                                                "text-sm",
                                            ]
                                        }}
                                        onChange={(e) => {
                                            setFormData({ ...formData, message: e.target.value });
                                        }}
                                        size="lg"
                                        variant="bordered"
                                    />
                                </CardBody>
                                <CardFooter className="px-6 space-x-4">
                                    <Button
                                        isLoading={isLoading}
                                        onPress={() => setFormData({
                                            name: "",
                                            email: "",
                                            message: "",
                                        })}
                                        className="w-full lg:w-64 text-white capitalize"
                                        size="lg"
                                        variant="bordered"
                                    >
                                        Clear
                                    </Button>
                                    <Button
                                        isLoading={isLoading}
                                        onPress={handleSend}
                                        className="hover:bg-primary/90 w-full lg:w-64 bg-primary text-white capitalize"
                                        size="lg"
                                        variant="solid"
                                    >
                                        SEND
                                    </Button>
                                </CardFooter>
                            </Card>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
