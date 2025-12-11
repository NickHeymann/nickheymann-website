import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Über mich",
  description: "Nick Heymann - Videograph und Marketing-Experte aus Hamburg. Erfahre mehr über meine Geschichte und Arbeitsweise.",
};

export default function UeberMichPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Über mich</p>
              <h1 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
                Hi, ich bin Nick.
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Videograph und Marketing-Stratege aus Hamburg.
                Ich helfe Menschen und Unternehmen, ihre Geschichten so zu erzählen,
                dass sie hängenbleiben.
              </p>
              <p className="text-gray-600 mb-8">
                Seit über 5 Jahren begleite ich Hochzeitspaare an ihrem besonderen Tag
                und unterstütze Unternehmen dabei, durch Video-Content zu wachsen.
                Was mich antreibt? Die Magie, wenn ein Film genau die Emotion trifft,
                die Worte nicht beschreiben können.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/kontakt"
                  className="px-6 py-3 bg-[#1f1f23] text-white font-medium rounded-lg hover:bg-[#2a2a30] transition-colors"
                >
                  Kontakt aufnehmen
                </Link>
                <a
                  href="https://instagram.com/nickheymann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="Nick Heymann"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light mb-8">Meine Geschichte</h2>

          <div className="prose prose-lg text-gray-600">
            <p>
              Alles begann mit einer alten Sony Handycam meines Vaters. Ich war 14,
              filmte alles, was mir vor die Linse kam – und merkte schnell: Bilder können
              mehr erzählen als tausend Worte.
            </p>
            <p>
              Nach dem Abitur hätte ich den "sicheren" Weg gehen können. Stattdessen
              investierte ich alles, was ich hatte, in meine erste professionelle Kamera
              und sagte: "Wenn nicht jetzt, wann dann?"
            </p>
            <p>
              Die ersten Aufträge waren klein. Aber mit jedem Projekt lernte ich dazu.
              Heute habe ich über 100 Projekte begleitet – von intimen Hochzeiten
              bis zu Kampagnen für wachsende Unternehmen.
            </p>
            <p>
              Was mich von anderen unterscheidet? Ich glaube nicht an "nur" schöne Videos.
              Jeder Film muss einen Zweck erfüllen – ob es Tränen der Rührung sind
              oder eine Conversion-Rate, die durch die Decke geht.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-center mb-12">Wofür ich stehe</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#1f1f23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Authentizität</h3>
              <p className="text-gray-600">
                Keine gestellten Szenen, keine aufgesetzten Emotionen.
                Ich fange ein, was wirklich passiert – und genau das macht den Unterschied.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#1f1f23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Ergebnisorientierung</h3>
              <p className="text-gray-600">
                Ein schönes Video, das niemanden interessiert, ist wertlos.
                Ich produziere Content, der wirkt – messbar und spürbar.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#1f1f23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Partnerschaft</h3>
              <p className="text-gray-600">
                Ich bin kein anonymer Dienstleister. Meine Kunden werden zu Partnern –
                oft zu Freunden. Das merkt man am Ergebnis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment (optional, shows expertise) */}
      <section className="py-20 bg-[#1f1f23] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-center mb-12">Mein Equipment</h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-light mb-2">4K</p>
              <p className="text-gray-400 text-sm">Kinoqualität</p>
            </div>
            <div>
              <p className="text-4xl font-light mb-2">Sony</p>
              <p className="text-gray-400 text-sm">FX-Serie</p>
            </div>
            <div>
              <p className="text-4xl font-light mb-2">DJI</p>
              <p className="text-gray-400 text-sm">Drohnen & Gimbals</p>
            </div>
            <div>
              <p className="text-4xl font-light mb-2">Pro</p>
              <p className="text-gray-400 text-sm">Audio-Equipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-6">
            Lass uns sprechen
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ob du eine Hochzeit planst, dein Unternehmen voranbringen willst oder
            einfach eine Frage hast – ich freue mich auf deine Nachricht.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="px-8 py-4 bg-[#1f1f23] text-white font-medium rounded-lg hover:bg-[#2a2a30] transition-colors"
            >
              Kostenloses Erstgespräch
            </Link>
            <a
              href="https://wa.me/4915123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
