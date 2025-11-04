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
} from "react-bootstrap-icons";
import { Input, Button, Link } from "@heroui/react";
import { siteConfig } from "@/config/site";

import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="bg-background/50 text-gray-200 container mx-auto px-6 relative pt-16 pb-8">
      <div className="px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-10">
          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {siteConfig?.navItems.map((item) => (
                <Button
                  key={item?.label}
                  href={item?.href}
                  radius="full"
                  size="sm"
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
                  <ArrowRight size={12} className="text-primary" />
                  {item?.label}
                </Button>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-8">© 2024 Prolomon</p>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow me</h4>
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
                <Button
                  key={social.name}
                  radius="full"
                  size="sm"
                  as={Link}
                  href={social.href}
                  target="_blank"
                  variant="bordered"
                  className="bg-transparent text-gray-200 border-gray-600 hover:border-primary hover:text-primary"
                  startContent={social.icon}
                >
                  {social.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              New Tips delivered to your inbox
            </h4>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Input
                type="email"
                placeholder="Your Email"
                radius="full"
                variant="bordered"
                className="flex-1 text-gray-200 border-gray-600"
              />
              <Button
                radius="full"
                className="bg-primary text-white font-semibold px-6 text-xs"
              >
                SUBSCRIBE
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              I will never share any of your personal data. You can unsubscribe
              at any time.
            </p>
          </div>
        </div>

        {/* Back to Top */}
        <div className="flex justify-center mt-12">
          <Button
            radius="full"
            variant="bordered"
            className="text-gray-400 border-gray-700 hover:text-primary/80 hover:border-primary"
            onPress={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};
