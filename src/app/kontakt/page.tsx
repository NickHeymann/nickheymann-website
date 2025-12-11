import { Metadata } from "next";
import CalBooking from "@/components/CalBooking";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Nimm Kontakt auf und buche ein kostenloses Erstgespräch oder eine 1:1 Beratung für Videographie und Marketing.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Kontakt</p>
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            Lass uns sprechen
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ob Projektanfrage, Beratung oder einfach nur eine Frage –
            ich freue mich auf unser Gespräch.
          </p>
        </div>
      </section>

      {/* Booking Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Free Consultation */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-medium text-green-600 uppercase tracking-wider">Kostenlos</span>
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-3">Kostenloses Erstgespräch</h2>
              <p className="text-gray-600 mb-6">
                30 Minuten unverbindliches Kennenlernen. Wir besprechen dein Projekt,
                deine Ziele und wie ich dich am besten unterstützen kann.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  30 Minuten Video-Call
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Projektbesprechung
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Erste Empfehlungen
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unverbindlich & kostenlos
                </li>
              </ul>
              <a
                href="https://cal.com/nickheymann/erstgespraech"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-4 bg-[#1f1f23] text-white font-medium rounded-lg hover:bg-[#2a2a30] transition-colors"
              >
                Erstgespräch buchen
              </a>
            </div>

            {/* Paid Consultation */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-[#1f1f23]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#1f1f23] text-white rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-medium text-[#1f1f23] uppercase tracking-wider">Premium</span>
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-3">1:1 Beratung</h2>
              <p className="text-gray-600 mb-6">
                60 Minuten intensive Beratung zu Videographie oder Marketing.
                Konkrete Strategien und Handlungsempfehlungen für dein Business.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  60 Minuten Video-Call
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Tiefgehende Analyse
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Konkrete Strategieempfehlungen
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Follow-up per E-Mail
                </li>
              </ul>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold">150€</span>
                <span className="text-gray-500 text-sm">inkl. MwSt.</span>
              </div>
              <a
                href="https://cal.com/nickheymann/beratung"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-4 bg-[#1f1f23] text-white font-medium rounded-lg hover:bg-[#2a2a30] transition-colors"
              >
                Beratung buchen
              </a>
            </div>
          </div>

          {/* Cal.com Embed */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <CalBooking />
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-center mb-12">Oder direkt erreichen</h2>

          <div className="grid sm:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <a
              href="https://wa.me/4915123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="font-medium mb-1">WhatsApp</h3>
              <p className="text-gray-500 text-sm">Schnelle Antwort</p>
            </a>

            {/* Email */}
            <a
              href="mailto:nick@nickheymann.de"
              className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-14 h-14 bg-[#1f1f23] text-white rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-medium mb-1">E-Mail</h3>
              <p className="text-gray-500 text-sm">nick@nickheymann.de</p>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/nickheymann"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 className="font-medium mb-1">Instagram</h3>
              <p className="text-gray-500 text-sm">@nickheymann</p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-center mb-12">Häufige Fragen</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-medium mb-2">Wie läuft das Erstgespräch ab?</h3>
              <p className="text-gray-600 text-sm">
                Im 30-minütigen Video-Call lernen wir uns kennen. Du erzählst mir von deinem Projekt
                und ich gebe dir erste Einschätzungen und Empfehlungen – komplett unverbindlich.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-medium mb-2">Was beinhaltet die 1:1 Beratung?</h3>
              <p className="text-gray-600 text-sm">
                In 60 Minuten gehen wir tief in dein Thema – ob Videostrategie, Content-Marketing
                oder Markenaufbau. Du erhältst konkrete, umsetzbare Empfehlungen und im Nachgang
                eine schriftliche Zusammenfassung per E-Mail.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-medium mb-2">Wie schnell antwortest du?</h3>
              <p className="text-gray-600 text-sm">
                Per WhatsApp in der Regel innerhalb weniger Stunden. E-Mails werden spätestens
                am nächsten Werktag beantwortet. Für dringende Anfragen ist WhatsApp der schnellste Weg.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-medium mb-2">In welchen Regionen bist du tätig?</h3>
              <p className="text-gray-600 text-sm">
                Ich bin in Hamburg ansässig und arbeite hauptsächlich in Norddeutschland.
                Für besondere Projekte bin ich aber auch deutschlandweit oder international unterwegs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
