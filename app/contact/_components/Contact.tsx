"use client";

import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { Input, Textarea } from "@heroui/input";
import { Image } from "@heroui/image";
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

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service: "",
    budget: "",
  });

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      if (!formData.name || !formData.email) {
        addToast({
          title: "Validation Error",
          description:
            "Please fill in your name, email, budget, service, and message.",
          color: "danger",
          shouldShowTimeoutProgress: true,
        });
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        addToast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
          color: "success",
          shouldShowTimeoutProgress: true,
        });
        setFormData({
          name: "",
          email: "",
          message: "",
          service: "",
          budget: "",
        });
      } else {
        addToast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          color: "danger",
          shouldShowTimeoutProgress: true,
        });
      }
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
    <section>
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
          <div className="flex flex-wrap gap-2 mt-4 mb-8">
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
                size="sm"
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
          <Image
            alt="collaboration image"
            src="/images/collaborate.jpg"
            width="auto"
            height="auto"
            className="aspect-video w-full rounded-lg relative mt-4"
          />
        </div>

        <form onSubmit={handleSend}>
          <Card className="shadow-md">
            <CardHeader className=" text-white text-left p-4">
              <h3 className="text-xl font-semibold">Reach out to me </h3>
            </CardHeader>
            <Divider />
            <CardBody className="p-4">
              {/* service type */}
              <div className="mb-4">
                <p className="text-sm text-gray-400">SELECT SERVICE</p>
                <div className="flex gap-2 flex-wrap items-center mt-2">
                  {[
                    "fullstack development",
                    "mobile app",
                    "web development",
                    "backend development",
                    "frontend development",
                    "database management",
                    "ui/ux design",
                    "web scraping",
                    "project management",
                    "software development",
                    "e-commerce development",
                  ]?.map((item) => (
                    <Button
                      key={item}
                      className={`hover:bg-primary hover:text-white bg-background/40 text-gray-300 capitalize ${
                        formData.service?.toLowerCase() === item &&
                        "bg-primary text-white"
                      }`}
                      size="sm"
                      onPress={() => {
                        setFormData({ ...formData, service: item });
                      }}
                      disabled={isLoading}
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              </div>

              {/* budget for service */}
              <div className="mb-4">
                <p className="text-sm text-gray-400">BUDGET</p>
                <div className="flex gap-2 flex-wrap items-center mt-2">
                  {[
                    "₦50K - ₦100K",
                    "₦100K - ₦200K",
                    "₦200K - ₦500K",
                    "₦500K - ₦1M",
                    "> ₦1M",
                  ]?.map((item) => (
                    <Button
                      key={item}
                      className={`hover:bg-primary hover:text-white transition-background duration-200 ease-in-out bg-background/40 text-gray-300 capitalize ${
                        formData.budget === item && "bg-primary text-white"
                      }`}
                      size="sm"
                      onPress={() => {
                        setFormData({ ...formData, budget: item });
                      }}
                      disabled={isLoading}
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              </div>

              {/* name and email address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Input
                  isDisabled={isLoading}
                  label="NAME"
                  labelPlacement="outside"
                  name="name"
                  placeholder="Enter your name"
                  classNames={{
                    label: "text-gray-400",
                    input: [
                      "text-white/90",
                      "placeholder:text-gray-400",
                      "text-sm",
                    ],
                    inputWrapper: [
                      "shadow-sm",
                      "bg-background/60",
                      "backdrop-blur-xl",
                      "backdrop-saturate-200",
                      "group-data-[focus=true]:bg-background/60",
                      "dark:group-data-[focus=true]:bg-background/60",
                      "!cursor-text",
                      "rounded-lg",
                    ],
                  }}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                />
                <Input
                  isDisabled={isLoading}
                  label="EMAIL"
                  labelPlacement="outside"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  classNames={{
                    label: "text-gray-400",
                    input: [
                      "text-white/90",
                      "placeholder:text-gray-400",
                      "text-sm",
                    ],
                    inputWrapper: [
                      "shadow-sm",
                      "bg-background/60",
                      "backdrop-blur-xl",
                      "backdrop-saturate-200",
                      "group-data-[focus=true]:bg-background/60",
                      "dark:group-data-[focus=true]:bg-background/60",
                      "!cursor-text",
                      "rounded-lg",
                    ],
                  }}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                />
              </div>

              <Textarea
                isDisabled={isLoading}
                name="message"
                labelPlacement="outside"
                label="MESSAGE"
                placeholder="Enter your message (optional)"
                classNames={{
                  label: "text-gray-400",
                  input: [
                    "text-white/90",
                    "placeholder:text-gray-400",
                    "text-sm",
                  ],
                  inputWrapper: [
                    "shadow-sm",
                    "bg-background/60",
                    "backdrop-blur-xl",
                    "backdrop-saturate-200",
                    "group-data-[focus=true]:bg-background/60",
                    "dark:group-data-[focus=true]:bg-background/60",
                    "!cursor-text",
                    "rounded-lg",
                  ],
                }}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                }}
              />
            </CardBody>
            <CardFooter className="px-4">
              <Button
                isLoading={isLoading}
                className="hover:bg-primary/90 w-full lg:w-64 bg-primary text-white capitalize"
                type="submit"
              >
                SEND
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </section>
  );
};
