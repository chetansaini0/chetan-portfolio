import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function WorkSection() {
  return (
    <section id="work" className="section-pad px-6 sm:px-8">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionIntro
            eyebrow="/SELECTED WORK"
            title="A selection of websites and digital projects I’ve built, tested and improved."
          />
        </Reveal>

        <div className="mt-16 grid gap-12 md:gap-16">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <article className="project-card">
                <div className="project-media">
                  <div className={`project-placeholder accent-${project.accent}`}>
                    <span>{project.name}</span>
                  </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-[120px_1fr] lg:gap-10">
                  <div className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">
                    PROJECT {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                      <h3 className="font-display text-[clamp(2rem,4vw,3.75rem)] leading-[0.95] tracking-[-0.035em] text-[var(--foreground)]">
                        {project.name}
                      </h3>
                      <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                        {project.status}
                      </span>
                    </div>

                    <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">{project.category}</p>
                    <p className="mt-6 max-w-2xl text-base leading-7 text-[color-mix(in_srgb,var(--muted)_75%,var(--foreground))] sm:text-[1.05rem] sm:leading-8">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="chip">
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <Link href={`/work/${project.slug}`} className="button button-secondary" data-cursor-label="VIEW">
                        View Project <ArrowRight className="h-4 w-4" />
                      </Link>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button button-tertiary"
                          data-cursor-label="LIVE"
                        >
                          Visit Live
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
