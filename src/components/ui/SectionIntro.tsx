type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionIntro({ eyebrow, title, description }: SectionIntroProps) {
  return (
    <div className="max-w-3xl">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-balance font-display text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.95] tracking-[-0.05em] text-[var(--foreground)]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
