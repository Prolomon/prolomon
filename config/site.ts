export type SiteConfig = typeof siteConfig;
import {Twitter, Discord, Github, HeartFill, Instagram, Tiktok, Linkedin} from "react-bootstrap-icons"

export const siteConfig = {
  name: "Prolomon",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Project",
      href: "/project",
    },
    {
      label: "Service",
      href: "/service",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/prolomon",
    twitter: "https://x.com/prolomon",
    instagram: "https://instagram.com/prolom0n",
    linkedin: "https://linkedin.in/prolomon",
    tiktok: "https://tiktok.com/@prolom0n",
    discord: "https://discord.gg/qzxVvtNs",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
