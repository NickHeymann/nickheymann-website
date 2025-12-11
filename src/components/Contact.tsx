import { siteConfig } from "@/config/site";
import { EmailIcon, InstagramIcon, LocationIcon } from "./icons";

/**
 * Contact Section Component
 * Contact information and form
 */
export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-[var(--muted)] text-sm uppercase tracking-widest mb-4">
              Kontakt
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Lass uns sprechen
            </h2>
            <p className="text-[var(--muted)] text-lg mb-8">
              Hast du ein Projekt im Kopf? Ich freue mich darauf, mehr darüber
              zu erfahren und zu besprechen, wie wir zusammenarbeiten können.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-4 text-[var(--muted)] hover:text-white transition-colors"
              >
                <EmailIcon />
                {siteConfig.contact.email}
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[var(--muted)] hover:text-white transition-colors"
              >
                <InstagramIcon />
                {siteConfig.social.instagramHandle}
              </a>
              <p className="flex items-center gap-4 text-[var(--muted)]">
                <LocationIcon />
                {siteConfig.contact.location}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-[var(--card)] border border-[var(--border)] rounded-xl focus:outline-none focus:border-[#3f3f46] transition-colors"
                placeholder="Dein Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-[var(--card)] border border-[var(--border)] rounded-xl focus:outline-none focus:border-[#3f3f46] transition-colors"
                placeholder="deine@email.de"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 bg-[var(--card)] border border-[var(--border)] rounded-xl focus:outline-none focus:border-[#3f3f46] transition-colors resize-none"
                placeholder="Erzähl mir von deinem Projekt..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black py-4 rounded-xl font-medium hover:bg-[#e4e4e7] transition-colors"
            >
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
