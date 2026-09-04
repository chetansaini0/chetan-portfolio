import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function ServicesSection() {
  return (
    <section id="services" className="section-pad px-6 sm:px-8">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionIntro
            eyebrow="/WHAT I DO"
            title="Development, testing, automation, and product improvement."
            description="A hybrid skill set for products that need both execution and quality awareness."
          />
        </Reveal>

        <div className="mt-12 divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={0.04 * index}>
              <article className="service-row group">
                <div className="service-number">{service.number}</div>
                <div className="grid gap-5 lg:grid-cols-[1fr_1.1fr_auto] lg:items-start">
                  <div>
                    <h3 className="font-display text-4xl tracking-[-0.05em] text-[var(--foreground)] transition-transform duration-300 group-hover:translate-x-2">
                      {service.title}
                    </h3>
                  </div>
                  <div>
                    <p className="max-w-2xl text-base leading-7 text-[var(--muted)]">{service.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span key={tag} className="chip transition group-hover:border-[var(--border-strong)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] transition duration-300 group-hover:translate-x-1 group-hover:border-[var(--border-strong)]">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
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
