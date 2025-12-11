import { services } from "@/data/services";

/**
 * Services Section Component
 * Displays service offerings in a grid
 */
export default function Services() {
  return (
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
  );
}
