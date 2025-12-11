interface ClientLogo {
  name: string;
  logoSrc: string;
}

interface ClientLogosProps {
  logos: ClientLogo[];
  title?: string;
}

export default function ClientLogos({ logos, title }: ClientLogosProps) {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <p className="text-center text-sm text-gray-500 uppercase tracking-wider mb-10">
            {title}
          </p>
        )}

        {/* Logo Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              {/* Placeholder for actual logo */}
              <div
                className="h-8 w-24 bg-gray-200 flex items-center justify-center text-xs text-gray-400"
                title={logo.name}
              >
                {logo.logoSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={logo.logoSrc}
                    alt={logo.name}
                    className="h-full w-auto object-contain"
                  />
                ) : (
                  logo.name
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
