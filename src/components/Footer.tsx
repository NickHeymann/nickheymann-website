import { footerLinks } from "@/config/site";

/**
 * Footer Component
 * Copyright and legal links
 */
export default function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--muted)] text-sm">
            © {new Date().getFullYear()} Nick Heymann. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--muted)] text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
