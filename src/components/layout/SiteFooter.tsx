import { navItems, site, socialLinks } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-10 sm:px-8">
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--muted)]">
            Software Developer / QA Automation
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">Quick Links</p>
          <ul className="mt-4 space-y-3 text-sm text-[var(--foreground)]">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="footer-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">Social</p>
          <ul className="mt-4 space-y-3 text-sm text-[var(--foreground)]">
            {socialLinks.map((link) => (
              <li key={link.label}>
                {link.href ? (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="footer-link">
                    {link.label}
                  </a>
                ) : (
                  <span className="text-[var(--muted)]">{link.label} (add link)</span>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-[var(--muted)]">
            Email:{" "}
            <a href={`mailto:${site.email}`} className="footer-link">
              {site.email}
            </a>
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1440px] border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)]">
        © 2026 Chetan Saini. All rights reserved.
      </div>
    </footer>
  );
}
