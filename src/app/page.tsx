import Navigation from "@/components/Navigation";

// Placeholder project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "Sonnenhaus Aftermovie",
    category: "Event",
    thumbnail: "/projects/placeholder.jpg",
    videoUrl: "#",
  },
  {
    id: 2,
    title: "Imagefilm Startup",
    category: "Imagefilm",
    thumbnail: "/projects/placeholder.jpg",
    videoUrl: "#",
  },
  {
    id: 3,
    title: "Social Media Campaign",
    category: "Social Media",
    thumbnail: "/projects/placeholder.jpg",
    videoUrl: "#",
  },
  {
    id: 4,
    title: "Produktvideo",
    category: "Produkt",
    thumbnail: "/projects/placeholder.jpg",
    videoUrl: "#",
  },
];

const services = [
  {
    title: "Imagefilme",
    description:
      "Professionelle Unternehmensfilme, die deine Marke authentisch präsentieren und Vertrauen aufbauen.",
    icon: "🎬",
  },
  {
    title: "Eventvideos",
    description:
      "Unvergessliche Momente festhalten - von Firmenevents bis zu Aftermovies.",
    icon: "🎉",
  },
  {
    title: "Social Media Content",
    description:
      "Scroll-stopping Videos für Instagram, TikTok und LinkedIn, die deine Zielgruppe erreichen.",
    icon: "📱",
  },
  {
    title: "Marketing Strategie",
    description:
      "Ganzheitliche Video-Marketing-Konzepte, die deine Botschaft effektiv vermitteln.",
    icon: "📈",
  },
];

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#18181b]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#a1a1aa] text-sm uppercase tracking-widest mb-6 fade-in">
            Videographie & Marketing
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 fade-in-delay-1">
            Videos, die{" "}
            <span className="gradient-text">Geschichten erzählen</span>
          </h1>
          <p className="text-xl text-[#a1a1aa] max-w-2xl mx-auto mb-10 fade-in-delay-2">
            Ich helfe Unternehmen, ihre Botschaft durch professionelle
            Videoproduktion und strategisches Marketing zum Leben zu erwecken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-delay-3">
            <a
              href="#portfolio"
              className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-[#e4e4e7] transition-colors"
            >
              Portfolio ansehen
            </a>
            <a
              href="#contact"
              className="border border-[#27272a] px-8 py-4 rounded-full font-medium hover:bg-[#18181b] transition-colors"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-[#a1a1aa]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#a1a1aa] text-sm uppercase tracking-widest mb-4">
              Ausgewählte Arbeiten
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">Portfolio</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="video-card group relative aspect-video bg-[#18181b] rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Placeholder - replace with actual video thumbnails */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#27272a] to-[#18181b] flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-[#3f3f46] group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                  <span className="text-sm text-[#a1a1aa]">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#a1a1aa] hover:text-white transition-colors"
            >
              Alle Projekte ansehen
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#18181b]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image placeholder */}
            <div className="aspect-[4/5] bg-[#27272a] rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#3f3f46] to-[#27272a] flex items-center justify-center">
                <span className="text-[#52525b] text-sm">Dein Foto hier</span>
              </div>
            </div>

            <div>
              <p className="text-[#a1a1aa] text-sm uppercase tracking-widest mb-4">
                Über mich
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Hi, ich bin Nick
              </h2>
              <div className="space-y-4 text-[#a1a1aa] text-lg">
                <p>
                  Als Videograph und Marketing-Experte aus Hamburg helfe ich
                  Unternehmen dabei, ihre Geschichte visuell zu erzählen.
                </p>
                <p>
                  Mit einem Auge fürs Detail und einer Leidenschaft für
                  kreatives Storytelling produziere ich Videos, die nicht nur
                  gut aussehen, sondern auch Ergebnisse liefern.
                </p>
                <p>
                  Von Imagefilmen über Eventvideos bis hin zu Social Media
                  Content - ich begleite dich durch den gesamten Prozess, von
                  der Konzeption bis zum fertigen Video.
                </p>
              </div>

              <div className="mt-8 flex gap-8">
                <div>
                  <p className="text-3xl font-bold">50+</p>
                  <p className="text-[#a1a1aa] text-sm">Projekte</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">30+</p>
                  <p className="text-[#a1a1aa] text-sm">Zufriedene Kunden</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">5+</p>
                  <p className="text-[#a1a1aa] text-sm">Jahre Erfahrung</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#a1a1aa] text-sm uppercase tracking-widest mb-4">
              Was ich anbiete
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">Leistungen</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-[#18181b] rounded-2xl border border-[#27272a] hover:border-[#3f3f46] transition-colors"
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-[#a1a1aa]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#18181b]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bereit für dein nächstes Projekt?
          </h2>
          <p className="text-xl text-[#a1a1aa] mb-10">
            Lass uns gemeinsam etwas Großartiges erschaffen. Ich freue mich auf
            deine Nachricht.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-[#e4e4e7] transition-colors"
          >
            Projekt starten
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[#a1a1aa] text-sm uppercase tracking-widest mb-4">
                Kontakt
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Lass uns sprechen
              </h2>
              <p className="text-[#a1a1aa] text-lg mb-8">
                Hast du ein Projekt im Kopf? Ich freue mich darauf, mehr darüber
                zu erfahren und zu besprechen, wie wir zusammenarbeiten können.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:nick@nickheymann.com"
                  className="flex items-center gap-4 text-[#a1a1aa] hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  nick@nickheymann.com
                </a>
                <a
                  href="https://instagram.com/nickheymann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-[#a1a1aa] hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  @nickheymann
                </a>
                <p className="flex items-center gap-4 text-[#a1a1aa]">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Hamburg, Deutschland
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
                  className="w-full px-4 py-3 bg-[#18181b] border border-[#27272a] rounded-xl focus:outline-none focus:border-[#3f3f46] transition-colors"
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
                  className="w-full px-4 py-3 bg-[#18181b] border border-[#27272a] rounded-xl focus:outline-none focus:border-[#3f3f46] transition-colors"
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
                  className="w-full px-4 py-3 bg-[#18181b] border border-[#27272a] rounded-xl focus:outline-none focus:border-[#3f3f46] transition-colors resize-none"
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

      {/* Footer */}
      <footer className="py-8 border-t border-[#27272a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#a1a1aa] text-sm">
              © {new Date().getFullYear()} Nick Heymann. Alle Rechte
              vorbehalten.
            </p>
            <div className="flex gap-6">
              <a
                href="/impressum"
                className="text-[#a1a1aa] text-sm hover:text-white transition-colors"
              >
                Impressum
              </a>
              <a
                href="/datenschutz"
                className="text-[#a1a1aa] text-sm hover:text-white transition-colors"
              >
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
