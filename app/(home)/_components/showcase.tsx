"use client";

import { Avatar, Button, Link } from "@heroui/react";

import {
  Discord,
  Github,
  Instagram,
  LightningFill,
  Linkedin,
  Twitter,
  Tiktok,
} from "react-bootstrap-icons";

import { ReactTyped } from "react-typed";

import { siteConfig } from "@/config/site";

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
];

export const Showcase = () => {
  return (
    <section
      className="relative min-h-screen text-white flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('/images/showcase.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Main Content */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center justify-between text-center md:text-left py-12">
        {/* Left Section */}
        <div className="space-y-6">
          <ReactTyped
            strings={[
              "I'm Taiwo Oyetade Solomon",
              "I'm a Full-Stack Developer",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
            cursorChar="|"
            showCursor={true}
            className="text-4xl font-bold uppercase mb-2"
          ></ReactTyped>
          <p className="text-lg mb-1">
            Experienced full-stack developer specializing in building modern,
            efficient web applications. Proficient in front-end frameworks,
            back-end architecture, and cloud technologies to create scalable,
            high-performance solutions.
          </p>
          <div className="flex flex-wrap gap-2 my-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm font-medium text-primary bg-white/40 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <ul className="list-none text-lg text-white">
            <li>⇒ Frontend Development</li>
            <li>⇒ Backend Development</li>
            <li>⇒ Mobile Development</li>
          </ul>

          <div className="flex gap-4 mt-4">
            <Button as={Link} href="/project" color="primary" size="lg">
              View My Work
            </Button>
            <Button as={Link} href="/contact" variant="bordered" size="lg">
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <Avatar
          src="/images/man.png"
          className="mx-auto w-full md:w-[30rem] h-auto border-4 border-primary shadow-lg mb-4 aspect-square"
        />
      </div>
    </section>
  );
};
