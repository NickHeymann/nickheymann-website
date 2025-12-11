import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Business Videoproduktion Hamburg | Nick Heymann",
  description: "Professionelle Imagefilme, Eventdokumentation und Unternehmensvideos aus Hamburg.",
};

export default function BusinessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-[#1f1f23]">
        <Image
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80"
          alt="Business Videoproduktion"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f1f23]/50 to-[#1f1f23]/80" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Business & Events
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Professionelle Videoproduktion für Unternehmen.
            Imagefilme, Events und mehr.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meine Leistungen</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Videos, die deine Marke stärken und deine Botschaft vermitteln.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Imagefilm */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#1f1f23] text-white rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Imagefilme</h3>
              <p className="text-gray-600">
                Zeig, wer du bist. Authentische Filme, die deine Unternehmenskultur und Werte transportieren.
              </p>
            </div>

            {/* Eventdokumentation */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#1f1f23] text-white rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Eventdokumentation</h3>
              <p className="text-gray-600">
                Konferenzen, Messen, Firmenfeiern – professionelle Dokumentation deiner Veranstaltungen.
              </p>
            </div>

            {/* Produktvideos */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#1f1f23] text-white rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Produktvideos</h3>
              <p className="text-gray-600">
                Präsentiere deine Produkte im besten Licht mit hochwertigen Produktfilmen.
              </p>
            </div>

            {/* Recruiting */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#1f1f23] text-white rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Recruiting Videos</h3>
              <p className="text-gray-600">
                Gewinne die besten Talente mit authentischen Einblicken in dein Unternehmen.
              </p>
            </div>

            {/* Social Media */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#1f1f23] text-white rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Media Content</h3>
              <p className="text-gray-600">
                Kurze, packende Videos optimiert für Instagram, LinkedIn und TikTok.
              </p>
            </div>

            {/* Schulungsvideos */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#1f1f23] text-white rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Schulungsvideos</h3>
              <p className="text-gray-600">
                Effektive Trainingsvideos für Mitarbeiter und Kunden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-gray-300 rounded-xl relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                alt="Video Production"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Warum Video?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Höhere Reichweite</h3>
                    <p className="text-gray-600 text-sm">Videos werden 12x häufiger geteilt als Text und Bilder zusammen.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Bessere Conversion</h3>
                    <p className="text-gray-600 text-sm">Landing Pages mit Video konvertieren bis zu 80% besser.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Stärkere Bindung</h3>
                    <p className="text-gray-600 text-sm">Zuschauer behalten 95% einer Videobotschaft im Vergleich zu 10% bei Text.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">SEO-Vorteile</h3>
                    <p className="text-gray-600 text-sm">Websites mit Video erscheinen 53x wahrscheinlicher auf Seite 1 bei Google.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1f1f23] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für dein Projekt?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Lass uns gemeinsam deine Marke zum Leben erwecken.
            Ich freue mich auf deine Anfrage.
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
