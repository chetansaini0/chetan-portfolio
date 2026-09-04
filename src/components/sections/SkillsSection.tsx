import { skillGroups } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function SkillsSection() {
  return (
    <section className="section-pad px-6 sm:px-8">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionIntro
            eyebrow="/SKILLS"
            title="A practical toolkit across development, testing, and automation."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.05}>
              <article className="skill-block">
                <p className="section-label">{group.title}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span key={item} className="chip chip-strong">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
