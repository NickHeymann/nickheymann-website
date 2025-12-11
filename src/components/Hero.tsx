import { ArrowDownIcon } from "./icons";

/**
 * Hero Section Component
 * Main landing section with headline, subtext, and CTAs
 */
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--background)] to-[var(--card)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-[var(--muted)] text-sm uppercase tracking-widest mb-6 fade-in">
          Videographie & Marketing
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 fade-in-delay-1">
          Videos, die{" "}
          <span className="gradient-text">Geschichten erzählen</span>
        </h1>
        <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto mb-10 fade-in-delay-2">
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
            className="border border-[var(--border)] px-8 py-4 rounded-full font-medium hover:bg-[var(--card)] transition-colors"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDownIcon className="w-6 h-6 text-[var(--muted)]" />
      </div>
    </section>
  );
}
