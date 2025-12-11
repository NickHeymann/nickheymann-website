import { projects } from "@/data/projects";
import { PlayIcon, ArrowRightIcon } from "./icons";

/**
 * Portfolio Section Component
 * Displays project grid with hover effects
 */
export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[var(--muted)] text-sm uppercase tracking-widest mb-4">
            Ausgewählte Arbeiten
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">Portfolio</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="video-card group relative aspect-video bg-[var(--card)] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Placeholder - replace with actual video thumbnails */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--border)] to-[var(--card)] flex items-center justify-center">
                <PlayIcon className="w-16 h-16 text-[#3f3f46] group-hover:text-white transition-colors" />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <span className="text-sm text-[var(--muted)]">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-white transition-colors"
          >
            Alle Projekte ansehen
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
