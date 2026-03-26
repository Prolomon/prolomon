"use client";

import { Avatar, Button, Link } from "@heroui/react";
import { motion } from "framer-motion";
import { BracesAsterisk, CodeSlash, Phone } from "react-bootstrap-icons";

import { ReactTyped } from "react-typed";
import { calendlyFunc } from "@/config/calendly";

export const Showcase = () => {
  return (
    <section
      className="relative min-h-screen text-white flex flex-col justify-center items-center mx-auto"
      style={{
        backgroundImage: "url('/images/showcase.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="showcase"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Main Content */}
      <motion.div
        className="relative grid grid-cols-1 lg:grid-cols-2 items-center justify-between md:text-left py-12 w-11/12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Section */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <ReactTyped
            strings={["I'm Taiwo Oyetade Solomon", "I'm a Full-Stack Developer"]}
            typeSpeed={40}
            backSpeed={50}
            loop
            cursorChar="|"
            showCursor={true}
            className="text-4xl font-bold uppercase mb-2"
          ></ReactTyped>
          <motion.p
            className="text-lg mb-1 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experienced full-stack developer specializing in building modern,
            efficient web applications. Proficient in front-end frameworks,
            back-end architecture, and cloud technologies to create scalable,
            high-performance solutions.
          </motion.p>
          <motion.ul
            className="flex flex-wrap gap-3 text-lg text-white my-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <Button as={Link} href="/about" variant="bordered" color="default" size="lg" startContent={<CodeSlash size={18} color="#361f8d" />} className="text-white">
              Frontend Development
            </Button>
            <Button as={Link} href="/about" variant="bordered" color="default" size="lg" startContent={<BracesAsterisk size={18} color="#361f8d" />} className="text-white">
              Backend Development
            </Button>
            <Button as={Link} href="/about" variant="bordered" color="default" size="lg" startContent={<Phone size={18} color="#361f8d" />} className="text-white">
              Mobile Development
            </Button>
          </motion.ul>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <Button as={Link} href="#projects" color="primary" size="lg">
              View My Work
            </Button>
            <Button onPress={() => calendlyFunc()} variant="bordered" color="primary" size="lg">
              Schedule a Call
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <Avatar
            src="/images/prolomon.png"
            className="mx-auto hidden lg:block w-full md:w-[30rem] h-auto border-4 border-primary shadow-lg mb-4 aspect-square"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
