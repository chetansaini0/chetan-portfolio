import { currentlyLearning, site, strengths } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function AboutSection() {
  return (
    <section id="about" className="section-pad px-6 sm:px-8">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionIntro eyebrow="/ABOUT ME" title="A builder with a testing mindset." />
        </Reveal>

        <div className="grid gap-8">
          <Reveal delay={0.05}>
            <p className="max-w-2xl text-lg leading-8 text-[var(--foreground)]/86">{site.about}</p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">{site.aboutSecondary}</p>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal delay={0.1} className="space-y-4">
              <p className="section-label">Current strengths</p>
              <div className="flex flex-wrap gap-3">
                {strengths.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15} className="space-y-4">
              <p className="section-label">Currently learning</p>
              <div className="space-y-3">
                {currentlyLearning.map((item) => (
                  <div key={item} className="rounded-2xl border border-[var(--border)] px-4 py-3 text-sm text-[var(--foreground)]">
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
