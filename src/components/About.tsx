/**
 * About Section Component
 * Personal introduction with stats
 */
export default function About() {
  return (
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
  );
}
