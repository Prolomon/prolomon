"use client";

import clsx from "clsx";
import {
  Linkedin,
  Instagram,
  Twitter,
  Github,
  ArrowRight,
  Discord,
  Tiktok,
  Envelope,
} from "react-bootstrap-icons";
import { motion } from "framer-motion";
import { Input, Button, Link } from "@heroui/react";
import { siteConfig } from "@/config/site";

import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();
  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="bg-black text-gray-300 mx-auto px-6 relative pt-16 pb-8 border-t border-gray-500"
    >
      <div className="px-4">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.18 },
            },
          }}
        >
          {/* Navigation */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {siteConfig?.navItems.map((item) => (
                <motion.div
                  key={item?.label}
                  whileHover={{ scale: 1.07, x: 8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  style={{ display: 'inline-block' }}
                >
                  <Button
                    href={item?.href}
                    radius="full"
                    size="lg"
                    as={Link}
                    variant="bordered"
                    className={clsx(
                      "bg-transparent text-gray-200 border-gray-600 hover:border-primary hover:text-primary mr-3 mb-3",
                      {
                        "border-primary bg-background/10 text-primary":
                          pathname === item.href,
                      }
                    )}
                  >
                    <ArrowRight size={16} className={pathname === item.href ? 'text-primary' : 'text-white'} />
                    {item?.label}
                  </Button>
                </motion.div>
              ))}
            </ul>
            <p className="text-base text-gray-500 mt-8">© 2024 Prolomon</p>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h4 className="text-lg font-semibold mb-4">Connect with Me</h4>
            <div className="flex flex-wrap gap-3">
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
                <motion.div
                  key={social.name}
                  whileHover={{ scale: 1.13, rotate: -8 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 16 }}
                  style={{ display: 'inline-block' }}
                >
                  <Button
                    radius="full"
                    size="lg"
                    as={Link}
                    href={social.href}
                    target="_blank"
                    variant="bordered"
                    className="bg-transparent text-gray-200 border-gray-600 hover:border-primary hover:text-primary"
                    startContent={social.icon}
                  >
                    {social.name}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h4 className="text-lg font-semibold mb-4">
              Contact Me Directly
            </h4>
            <div className="flex items-center gap-3">
              <Input
                type="email"
                placeholder="Prolomon@proton.me"
                radius="full"
                size="lg"
                variant="bordered"
                className="flex-1 text-gray-200 border-gray-600"
                readOnly
                defaultValue="Prolomon@proton.me"
                startContent={<Envelope size={20} className="text-primary" />}
              />
              <motion.div
                whileHover={{ scale: 1.09, y: -4 }}
                transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                style={{ display: 'inline-block' }}
              >
                <Button
                  as={Link}
                  href="mailto:prolomon@proton.me"
                  radius="full"
                  className="bg-primary text-white font-semibold"
                  size="lg"
                >
                  Email Me
                </Button>
              </motion.div>
            </div>
            <p className="text-base text-gray-500 mt-3">
              You can reach out to me directly via email for any inquiries or collaborations.
            </p>
          </motion.div>
        </motion.div>

        {/* Back to Top */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.11, y: -6 }}
            transition={{ type: 'spring', stiffness: 320, damping: 18 }}
            style={{ display: 'inline-block' }}
          >
            <Button
              radius="full"
              variant="bordered"
              className="text-gray-400 border-gray-700 hover:text-primary/80 hover:border-primary"
              onPress={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Back to Top
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};
