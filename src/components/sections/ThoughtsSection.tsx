import { thoughts } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function ThoughtsSection() {
  return (
    <section id="thoughts" className="section-pad px-6 sm:px-8">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionIntro
            eyebrow="/THOUGHTS"
            title="Topics I’m preparing to write about."
            description="The structure is here so real articles can be added later without redesigning the portfolio."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {thoughts.map((thought, index) => (
            <Reveal key={thought.title} delay={index * 0.05}>
              <article className="thought-card">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  <span>{thought.date}</span>
                  <span>{thought.category}</span>
                </div>
                <h3 className="mt-5 text-balance font-display text-3xl tracking-[-0.05em] text-[var(--foreground)]">
                  {thought.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">{thought.description}</p>
                <div className="mt-6 text-sm uppercase tracking-[0.18em] text-[var(--foreground)]">
                  {thought.href ? "Read article →" : "Article placeholder →"}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
