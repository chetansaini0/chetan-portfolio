import { experience } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-pad px-6 sm:px-8">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionIntro eyebrow="/EXPERIENCE" title="Professional experience and project-driven growth." />
        </Reveal>

        <div className="mt-12 grid gap-6">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} delay={index * 0.05}>
              <article className="timeline-row">
                <div className="timeline-meta">
                  <span>{item.period}</span>
                  <span>{item.location}</span>
                </div>
                <div>
                  <h3 className="font-display text-3xl tracking-[-0.04em] text-[var(--foreground)]">{item.role}</h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">{item.company}</p>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)]">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
