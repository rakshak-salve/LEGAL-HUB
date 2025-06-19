// src/config/site.ts

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Legal Hub",
  description: "Your comprehensive resource for Indian legal information and AI-powered assistance.",  mainNav: [
    { title: "Home", href: "/" },
    { title: "Laws & Acts", href: "/laws" },
    { title: "Chatbot", href: "/chatbot" },
    { title: "Resources", href: "/resources" },
    { title: "Contact", href: "/contact" },
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/rakshaksalve/",
    github: "https://github.com/rakshak-salve/LEGAL-HUB",
  },
};
