import { marqueeItems } from "@/lib/content";

const items = [...marqueeItems, ...marqueeItems, ...marqueeItems];

export function MarqueeSection() {
  return (
    <section aria-label="Capabilities marquee" className="overflow-hidden border-y border-[var(--border)] py-5">
      <div className="marquee-track">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
