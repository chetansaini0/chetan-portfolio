import { testimonials } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function TestimonialsSection() {
  return (
    <section className="section-pad px-6 sm:px-8">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionIntro
            eyebrow="/TESTIMONIALS"
            title="Reserved for real feedback."
            description="No fake testimonials are displayed here. This section is intentionally prepared as a placeholder until genuine client or colleague feedback is available."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-12 rounded-[2rem] border border-dashed border-[var(--border-strong)] px-6 py-10 text-sm leading-7 text-[var(--muted)]">
            {testimonials.note}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
