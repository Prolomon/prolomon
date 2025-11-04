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
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { Divider } from "@heroui/divider";

import { siteConfig } from "@/config/site";

import { usePathname } from "next/navigation";

import {
  Twitter,
  Discord,
  Github,
  CupHotFill,
  Instagram,
  Tiktok,
  Linkedin,
} from "react-bootstrap-icons";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent>
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              src="/images/prolomon.png"
              width={24}
              height={24}
              alt="prolomon logo"
            />
            <p className="font-bold text-inherit">Prolomon</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      {/* Navigation links */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  "border-2 rounded-4xl py-2 px-4 text-sm text-foreground transition-all duration-300 ease-in-out hover:border-primary hover:bg-background/10 hover:text-primary",
                  {
                    "border-primary bg-background/10 text-primary":
                      pathname === item.href,
                    "border-transparent": pathname !== item.href,
                  }
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        {/* Social media handles */}
        <NavbarItem className="hidden sm:flex gap-3">
          <Link isExternal target="_blank" aria-label="Twitter" href={siteConfig.links.twitter}>
            <Twitter className="text-default-500 hover:text-primary" />
          </Link>
          <Link isExternal target="_blank" aria-label="Discord" href={siteConfig.links.discord}>
            <Discord className="text-default-500 hover:text-primary" />
          </Link>
          <Link isExternal target="_blank" aria-label="Github" href={siteConfig.links.tiktok}>
            <Tiktok className="text-default-500 hover:text-primary" />
          </Link>
          <Link
            isExternal
            aria-label="Github"
            href={siteConfig.links.instagram}
          >
            <Instagram className="text-default-500 hover:text-primary" />
          </Link>
          <Link isExternal target="_blank" aria-label="Github" href={siteConfig.links.linkedin}>
            <Linkedin className="text-default-500 hover:text-primary" />
          </Link>
          <Link isExternal target="_blank" aria-label="Github" href={siteConfig.links.github}>
            <Github className="text-default-500 hover:text-primary" />
          </Link>
        </NavbarItem>
        {/* Buy me a coffee button */}
        <NavbarItem className="hidden md:flex">
          <Button
            // isExternal
            // as={Link}
            className="text-sm font-normal text-white"
            // href={siteConfig.links.sponsor}
            startContent={<CupHotFill />}
            color="primary"
            radius="full"
          >
            Buy me coffee
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "border-2 border-transparent hover:border-primary rounded-4xl text-sm py-2 px-4 hover:bg-background/10 hover:text-primary data-[active=true]:border-primary data-[active=true]:bg-background data-[active=true]:text-primary transition-all ease-in-out duration-300"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
        <Divider className="my-2 " />
        <div className="flex gap-4 justify-center">
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <Twitter
              size={24}
              className="text-default-500 hover:text-primary"
            />
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <Discord
              size={24}
              className="text-default-500 hover:text-primary"
            />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.tiktok}>
            <Tiktok size={24} className="text-default-500 hover:text-primary" />
          </Link>
          <Link
            isExternal
            aria-label="Github"
            href={siteConfig.links.instagram}
          >
            <Instagram
              size={24}
              className="text-default-500 hover:text-primary"
            />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.linkedin}>
            <Linkedin
              size={24}
              className="text-default-500 hover:text-primary"
            />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <Github size={24} className="text-default-500 hover:text-primary" />
          </Link>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
