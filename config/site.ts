export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Prolomon",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Contact",
      href: "#contact",
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
