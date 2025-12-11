/**
 * Call-to-Action Section Component
 * Encourages visitors to start a project
 */
export default function CTA() {
  return (
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
  );
}
