import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Exklusive Angebote",
  description: "Außergewöhnliche B2B-Angebote: CEO Video Audit, Competitor Teardown, Viral Content Vorhersage und mehr.",
};

const offers = [
  {
    id: "ceo-video-audit",
    badge: "Beliebtestes Angebot",
    title: "CEO Video Audit",
    subtitle: "Deine Online-Präsenz durch die Augen deiner Kunden",
    description: "Ich analysiere deine gesamte Video-Präsenz: LinkedIn, YouTube, Website – und zeige dir genau, warum potenzielle Kunden bei der Konkurrenz landen. Mit echtem Screen-Recording, wie jemand dich das erste Mal sucht und findet.",
    features: [
      "Screen-Recording der echten Customer Journey",
      "Emotionale Wirkungsanalyse aller Videos",
      "Konkrete 'Quick Wins' für sofortige Verbesserung",
      "Vergleich mit 2 direkten Wettbewerbern",
    ],
    cta: "Audit anfragen",
    href: "https://cal.com/nickheymann/ceo-video-audit",
    price: "Kostenlos",
    priceNote: "Limitiert auf 5 pro Monat",
    featured: true,
  },
  {
    id: "competitor-teardown",
    badge: "Deep Dive",
    title: "Competitor Video Teardown",
    subtitle: "Warum deine Konkurrenz (vielleicht) besser performt",
    description: "Ein 15-minütiges Video, in dem ich 3 deiner Wettbewerber analysiere: Was machen sie richtig? Wo sind ihre Schwächen? Und wie kannst du dich differenzieren?",
    features: [
      "Video-Analyse von 3 Wettbewerbern",
      "Identifikation ungenutzter Nischen",
      "Tonalität & Storytelling-Vergleich",
      "Deine einzigartige Positionierungs-Chance",
    ],
    cta: "Teardown anfragen",
    href: "https://cal.com/nickheymann/competitor-teardown",
    price: "Kostenlos",
    priceNote: "Bei Projektinteresse",
    featured: false,
  },
  {
    id: "viral-prediction",
    badge: "Innovativ",
    title: "Viral Content Vorhersage",
    subtitle: "Welches deiner Video-Konzepte hat das höchste Potenzial?",
    description: "Du hast 3 Video-Ideen? Ich analysiere jede anhand von 12 viralen Faktoren und sage dir, welche am wahrscheinlichsten funktioniert – bevor du einen Cent investierst.",
    features: [
      "Analyse nach 12 Viral-Faktoren",
      "Emotionaler Resonanz-Score",
      "Plattform-spezifische Prognose",
      "Konkreter Optimierungsvorschlag",
    ],
    cta: "Ideen einreichen",
    href: "https://cal.com/nickheymann/viral-prediction",
    price: "49€",
    priceNote: "Pro Analyse",
    featured: false,
  },
  {
    id: "first-impression-test",
    badge: "Schnell & Effektiv",
    title: "7-Sekunden First Impression Test",
    subtitle: "Wie wirkt dein Unternehmen in den ersten 7 Sekunden?",
    description: "7 Sekunden – so lange hast du online Zeit, um zu überzeugen. Ich öffne deine Website live, stoppe nach 7 Sekunden und sage dir ehrlich, was hängengeblieben ist. Brutal ehrlich, unglaublich wertvoll.",
    features: [
      "Live Screen-Recording meiner Reaktion",
      "Ehrliche erste Eindrücke",
      "Vergleich mit Branchenstandards",
      "3 konkrete Verbesserungsvorschläge",
    ],
    cta: "Test anfragen",
    href: "https://cal.com/nickheymann/first-impression",
    price: "Kostenlos",
    priceNote: "1x pro Unternehmen",
    featured: false,
  },
  {
    id: "content-roast",
    badge: "Mutig?",
    title: "Content Roast",
    subtitle: "Ich röste deinen Content – konstruktiv, aber ehrlich",
    description: "Du willst die Wahrheit hören? Ich nehme deine letzten 5 LinkedIn-Posts oder Videos und sage dir schonungslos, was funktioniert und was nicht. Kein Bullshit, nur Klartext.",
    features: [
      "Analyse der letzten 5 Posts/Videos",
      "Engagement-Potenzial-Bewertung",
      "Konkrete Rewrites/Verbesserungen",
      "Video-Recording meiner Reaktionen",
    ],
    cta: "Roast anfragen",
    href: "https://cal.com/nickheymann/content-roast",
    price: "99€",
    priceNote: "Volle Ehrlichkeit inklusive",
    featured: false,
  },
  {
    id: "story-extraction",
    badge: "Premium",
    title: "Story Extraction Session",
    subtitle: "Ich finde die Geschichte, die du nicht siehst",
    description: "In 60 Minuten grabe ich die Stories aus, die in deinem Unternehmen schlummern. Die Gründungsgeschichte, die niemand kennt. Der Kundenerfolg, der nie erzählt wurde. Die menschliche Seite, die fehlt.",
    features: [
      "60-Min. Interview-Session",
      "Identifikation von 5-7 Content-Stories",
      "Emotionale Kernbotschaft",
      "Content-Kalender für 3 Monate",
    ],
    cta: "Session buchen",
    href: "https://cal.com/nickheymann/story-extraction",
    price: "350€",
    priceNote: "Inkl. ausgearbeitetem Story-Dokument",
    featured: false,
  },
];

export default function AngebotePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1f1f23] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">B2B Angebote</p>
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            Keine Standard-Audits.
            <br />
            <span className="text-gray-500">Echte Insights.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Vergiss generische "Content-Analysen". Diese Angebote zeigen dir,
            was sonst niemand sagt – und was dich wirklich voranbringt.
          </p>
        </div>
      </section>

      {/* Featured Offer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {offers.filter(o => o.featured).map((offer) => (
            <div
              key={offer.id}
              className="bg-[#2a2a30] text-white rounded-2xl p-8 md:p-12 relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: "30px 30px",
                  }}
                />
              </div>

              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full mb-4">
                    {offer.badge}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-light mb-3">{offer.title}</h2>
                  <p className="text-xl text-gray-400 mb-4">{offer.subtitle}</p>
                  <p className="text-gray-400 mb-6">{offer.description}</p>

                  <ul className="space-y-2 mb-8">
                    {offer.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-4">
                    <a
                      href={offer.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-white text-[#1f1f23] font-medium hover:bg-gray-100 transition-colors"
                    >
                      {offer.cta}
                    </a>
                    <div>
                      <p className="text-2xl font-semibold">{offer.price}</p>
                      <p className="text-sm text-gray-500">{offer.priceNote}</p>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block">
                  {/* Placeholder for visual */}
                  <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Offers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-8">Weitere Angebote</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.filter(o => !o.featured).map((offer) => (
              <div
                key={offer.id}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded mb-3">
                  {offer.badge}
                </span>
                <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{offer.subtitle}</p>
                <p className="text-gray-600 text-sm mb-4">{offer.description}</p>

                <ul className="space-y-1 mb-6 text-sm text-gray-600">
                  {offer.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="font-semibold">{offer.price}</p>
                    <p className="text-xs text-gray-500">{offer.priceNote}</p>
                  </div>
                  <a
                    href={offer.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#1f1f23] text-white text-sm font-medium rounded-lg hover:bg-[#2a2a30] transition-colors"
                  >
                    {offer.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Offers */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold mb-6">Warum diese Angebote?</h2>
          <p className="text-gray-600 mb-8">
            Die meisten "kostenlosen Audits" sind verkappte Sales-Pitches. Meine sind anders:
            Du bekommst echten Mehrwert, unabhängig davon, ob wir danach zusammenarbeiten.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-[#1f1f23] text-white rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Brutal ehrlich</h3>
              <p className="text-gray-600 text-sm">
                Keine Schmeicheleien. Du hörst, was du hören musst, nicht was du hören willst.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-[#1f1f23] text-white rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Sofort umsetzbar</h3>
              <p className="text-gray-600 text-sm">
                Keine vagen Empfehlungen. Jedes Angebot enthält konkrete nächste Schritte.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-[#1f1f23] text-white rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Kein versteckter Pitch</h3>
              <p className="text-gray-600 text-sm">
                Die kostenlosen Angebote sind kostenlos. Punkt. Kein 45-Minuten-Sales-Talk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1f1f23] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-4">
            Nicht sicher, welches Angebot passt?
          </h2>
          <p className="text-gray-400 mb-8">
            Schreib mir kurz, was du erreichen willst – ich empfehle dir das Richtige.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/4915123456789?text=Hallo%20Nick,%20ich%20bin%20mir%20unsicher,%20welches%20Angebot%20für%20mich%20passt..."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Per WhatsApp fragen
            </a>
            <Link
              href="/kontakt"
              className="px-8 py-4 border border-white/30 font-medium hover:bg-white/10 transition-colors"
            >
              Erstgespräch buchen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
