/**
 * Central site configuration
 * Single source of truth for all site-wide values
 */

export const siteConfig = {
  name: "Nick Heymann",
  title: "Nick Heymann - Videographie & Marketing",
  description:
    "Ich helfe Unternehmen, ihre Botschaft durch professionelle Videoproduktion und strategisches Marketing zum Leben zu erwecken.",
  url: "https://nickheymann.de",
  locale: "de-DE",

  contact: {
    email: "nick@nickheymann.de",
    location: "Hamburg, Deutschland",
  },

  social: {
    instagram: "https://instagram.com/nickheymann",
    instagramHandle: "@nickheymann",
  },
} as const;

export const navLinks = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "Über mich" },
  { href: "#services", label: "Leistungen" },
  { href: "#contact", label: "Kontakt" },
] as const;

export const footerLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
] as const;

/**
 * Design tokens - use these instead of hardcoded hex values
 * Maps to CSS variables in globals.css
 */
export const colors = {
  background: "var(--background)", // #0a0a0a
  foreground: "var(--foreground)", // #fafafa
  muted: "var(--muted)", // #a1a1aa
  border: "var(--border)", // #27272a
  card: "var(--card)", // #18181b
  accent: "var(--accent)", // #3b82f6
} as const;

// Type exports for use in components
export type NavLink = (typeof navLinks)[number];
export type FooterLink = (typeof footerLinks)[number];
