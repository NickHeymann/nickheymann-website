import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Marketing Dienstleistungen Hamburg | Nick Heymann",
  description: "Strategisches Marketing, Content-Erstellung und Social Media Management aus Hamburg. Deine Marke, professionell in Szene gesetzt.",
};

export default function MarketingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-[#1f1f23]">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
          alt="Marketing Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f1f23]/50 to-[#1f1f23]/80" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Marketing
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Strategisches Marketing für deine Marke.
            Von der Konzeption bis zur Umsetzung.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meine Leistungen</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ganzheitliche Marketing-Lösungen, die deine Zielgruppe erreichen und überzeugen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Content Strategie */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#1f1f23] text-white rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Content Strategie</h3>
              <p className="text-gray-600 mb-4">
                Entwicklung einer maßgeschneiderten Content-Strategie, die deine Marke stärkt und deine Zielgruppe anspricht.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Zielgruppenanalyse</li>
                <li>• Content-Planung & Redaktionskalender</li>
                <li>• Storytelling-Konzepte</li>
                <li>• Performance-Tracking</li>
              </ul>
            </div>

            {/* Social Media Management */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#1f1f23] text-white rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Media Management</h3>
              <p className="text-gray-600 mb-4">
                Professionelle Betreuung deiner Social-Media-Kanäle für mehr Reichweite und Engagement.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Instagram, LinkedIn, TikTok</li>
                <li>• Community Management</li>
                <li>• Content-Erstellung</li>
                <li>• Monatliche Reports</li>
              </ul>
            </div>

            {/* Video Content */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#1f1f23] text-white rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Video Content</h3>
              <p className="text-gray-600 mb-4">
                Regelmäßiger Video-Content für deine Kanäle – von kurzen Reels bis zu längeren Formaten.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Reels & Stories</li>
                <li>• YouTube-Videos</li>
                <li>• Behind-the-Scenes</li>
                <li>• Testimonials</li>
              </ul>
            </div>

            {/* Branding */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#1f1f23] text-white rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Markenentwicklung</h3>
              <p className="text-gray-600 mb-4">
                Positionierung und visuelle Identität für einen starken, konsistenten Markenauftritt.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Markenpositionierung</li>
                <li>• Visuelles Konzept</li>
                <li>• Tone of Voice</li>
                <li>• Brand Guidelines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Zusammenarbeit</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Einmalig */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Projektbasiert</h3>
              <p className="text-gray-600 mb-6">
                Für einzelne Kampagnen oder spezifische Projekte.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Klarer Projektumfang
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Festpreis
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Flexibel buchbar
                </li>
              </ul>
              <p className="text-lg font-semibold">Auf Anfrage</p>
            </div>

            {/* Monatlich */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-[#1f1f23]">
              <div className="text-sm font-medium text-[#1f1f23] mb-2">Empfohlen</div>
              <h3 className="text-xl font-semibold mb-4">Monatliche Betreuung</h3>
              <p className="text-gray-600 mb-6">
                Kontinuierliche Marketing-Unterstützung für nachhaltiges Wachstum.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Regelmäßiger Content
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Monatliche Strategie-Calls
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Performance-Reports
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Prioritäts-Support
                </li>
              </ul>
              <p className="text-lg font-semibold">Ab 1.500€/Monat</p>
            </div>

            {/* Beratung */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Beratung & Coaching</h3>
              <p className="text-gray-600 mb-6">
                Strategische Beratung und Wissenstransfer für dein Team.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  1:1 Strategieberatung
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Team-Workshops
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Audit bestehender Kanäle
                </li>
              </ul>
              <p className="text-lg font-semibold">150€/Stunde</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1f1f23] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit durchzustarten?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Lass uns gemeinsam deine Marketingstrategie entwickeln.
            Das erste Gespräch ist unverbindlich und kostenlos.
          </p>
          <Link
            href="/kontakt"
            className="inline-block px-8 py-4 bg-white text-[#1f1f23] font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Kostenloses Erstgespräch
          </Link>
        </div>
      </section>
    </>
  );
}
