"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import clsx from "clsx";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";
import { calendlyFunc } from "@/config/calendly";

export const Navbar = () => {
  const [hash, setHash] = useState("#home");
  const [isFixed, setIsFixed] = useState(false);

  const observeSections = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav_link");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.intersectionRect.height > 0);
        if (visibleEntry) {
          const sectionId = visibleEntry.target.id;
          console.log("Visible section:", sectionId);
          navLinks.forEach((link) => {
            if (link.getAttribute("href")?.substring(1) === sectionId) {
              setHash("#" + sectionId);
            }
          });
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
      observeSections();
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      <HeroUINavbar
        maxWidth="xl"
        className={
          `bg-black border-b border-gray-900 z-50 py-2 ` +
          (isFixed ? 'fixed top-0 left-0 w-full shadow-lg z-[99999]' : 'relative')
        }
      >
        <NavbarContent>
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink className="flex justify-start items-center gap-1" href="/">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="flex items-center gap-2"
              >
                <Image
                  src="/images/prolomon.png"
                  width={28}
                  height={28}
                  alt="prolomon logo"
                  className="w-auto h-auto"
                />
                <p className="font-bold text-white text-xl">Prolomon</p>
              </motion.div>
            </NextLink>
          </NavbarBrand>
        </NavbarContent>
        {/* Navigation links */}
        <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
          <motion.div
            className="hidden lg:flex gap-4 justify-start ml-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.13 },
              },
            }}
          >
            {siteConfig.navItems.map((item) => (
              <motion.div
                key={item.href}
                variants={{
                  hidden: { opacity: 0, y: -18 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.08, y: -2 }}
                transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                style={{ display: 'inline-block' }}
              >
                <NavbarItem>
                  <Button
                    className={clsx(
                      "border-2 rounded-4xl py-2 px-4 text-base text-gray-300 transition-colors duration-500 ease-in-out hover:border-primary hover:text-primary nav_link",
                      {
                        "border-primary text-primary":
                          (hash).toString() === (item.href).toString(),
                        "border-transparent": (hash).toString() !== (item.href).toString(),
                      }
                    )}
                    color={(hash).toString() === (item.href).toString() ? "primary" : "default"}
                    variant={(hash).toString() === (item.href).toString() ? "bordered" : "light"}
                    as={Link}
                    href={item.href}
                    onPress={() => {
                      setHash(item.href)
                      console.log("Navigating to:", item.href, "Current hash:", hash);
                    }}
                  >
                    {item.label}
                  </Button>
                </NavbarItem>
              </motion.div>
            ))}
          </motion.div>
        </NavbarContent>

        <NavbarContent
          className="hidden md:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          {/* Schedule a Call button */}
          <NavbarItem className="hidden md:flex">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ scale: 1.08, y: -2 }}
              style={{ display: 'inline-block' }}
            >
              <Button
                className="font-normal text-white"
                color="primary"
                radius="full"
                size="lg"
                onPress={() => calendlyFunc()}
              >
                Schedule a Call
              </Button>
            </motion.div>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
          <NavbarMenuToggle className="text-white" />
        </NavbarContent>

        <NavbarMenu className="bg-black w-full">
          <div className="mt-2 flex flex-col gap-2">
            {siteConfig.navItems.map((item, idx) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + idx * 0.11 }}
                whileHover={{ backgroundColor: "#361f8d", borderRadius: "9999px", scale: 1.02, border: "none" }}
                style={{ display: 'inline-block' }}
              >
                <NavbarMenuItem>
                  <Button
                    className="border-2 border-transparent hover:border-primary text-sm  transition-colors ease-in-out duration-500 text-white"
                    as={Link}
                    color="default"
                    variant="light"
                    href={item.href}
                    size="lg"
                    fullWidth
                    radius="full"
                  >
                    {item.label}
                  </Button>
                </NavbarMenuItem>
              </motion.div>
            ))}
          </div>
          <NavbarMenuItem className="mt-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ scale: 1.02, y: -2 }}
              style={{ display: 'block' }}
            >
              <Button
                className="w-full font-normal text-white"
                color="primary"
                size="lg"
                fullWidth
                radius="full"
                onPress={() => calendlyFunc()}
              >
                Schedule a Call
              </Button>
            </motion.div>
          </NavbarMenuItem>
        </NavbarMenu>
      </HeroUINavbar>
    </motion.div>
  );
};
