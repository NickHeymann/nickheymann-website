import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hochzeitsvideographie Hamburg | Nick Heymann",
  description: "Emotionale Hochzeitsfilme aus Hamburg. Ich halte deinen besonderen Tag in bewegenden Bildern fest.",
};

export default function HochzeitenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-[#1f1f23]">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
          alt="Hochzeitsvideographie"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f1f23]/50 to-[#1f1f23]/80" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hochzeitsvideographie
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Dein schönster Tag verdient es, für immer festgehalten zu werden.
            Emotionale Filme, die eure Liebe erzählen.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Mehr als nur ein Video</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Eine Hochzeit ist voller einzigartiger Momente – das nervöse Lächeln vor der Trauung,
            die Freudentränen der Eltern, der erste Tanz. Ich fange diese Emotionen ein und
            verwandle sie in einen Film, den ihr immer wieder erleben könnt.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meine Pakete</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Paket 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Highlight Film</h3>
              <p className="text-gray-600 mb-6">
                Ein emotionaler Kurzfilm (3-5 Min.) mit den schönsten Momenten eures Tages.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Vorbesprechung
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  6 Stunden Begleitung
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Professioneller Schnitt
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Lizenzierte Musik
                </li>
              </ul>
              <p className="text-2xl font-bold">Auf Anfrage</p>
            </div>

            {/* Paket 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-[#1f1f23]">
              <div className="text-sm font-medium text-[#1f1f23] mb-2">Beliebteste Wahl</div>
              <h3 className="text-xl font-semibold mb-4">Komplettpaket</h3>
              <p className="text-gray-600 mb-6">
                Highlight Film + vollständige Dokumentation eures Tages.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Alles aus Highlight Film
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ganztägige Begleitung
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Langversion (15-20 Min.)
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Drohnenaufnahmen
                </li>
              </ul>
              <p className="text-2xl font-bold">Auf Anfrage</p>
            </div>

            {/* Paket 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Premium</h3>
              <p className="text-gray-600 mb-6">
                Das Rundum-sorglos-Paket für eure Traumhochzeit.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Alles aus Komplettpaket
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Zweiter Videograph
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Same-Day-Edit
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  USB-Box mit Rohmaterial
                </li>
              </ul>
              <p className="text-2xl font-bold">Auf Anfrage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">So arbeite ich</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1f1f23] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Kennenlernen</h3>
              <p className="text-gray-600 text-sm">Unverbindliches Gespräch über eure Wünsche und Vorstellungen.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1f1f23] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Planung</h3>
              <p className="text-gray-600 text-sm">Detaillierte Abstimmung des Ablaufs und wichtiger Momente.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1f1f23] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Der große Tag</h3>
              <p className="text-gray-600 text-sm">Diskrete Begleitung und Einfangen aller besonderen Momente.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1f1f23] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold mb-2">Postproduktion</h3>
              <p className="text-gray-600 text-sm">Professioneller Schnitt und Farbkorrektur für euren Film.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1f1f23] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Euer Termin ist noch frei?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Lass uns über eure Hochzeit sprechen. Ich freue mich darauf,
            eure Geschichte zu erzählen.
          </p>
          <Link
            href="/kontakt"
            className="inline-block px-8 py-4 bg-white text-[#1f1f23] font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Jetzt anfragen
          </Link>
        </div>
      </section>
    </>
  );
}
