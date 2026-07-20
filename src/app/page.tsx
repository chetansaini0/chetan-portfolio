import { profile, projects, services } from "@/lib/content";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#top" className="display text-lg tracking-tight text-fog">
          Chetan Saini
        </a>
        <nav className="flex items-center gap-6 text-sm text-muted">
          <a href="#work" className="transition hover:text-fog">
            Work
          </a>
          <a href="#services" className="transition hover:text-fog">
            Services
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-[var(--line)] bg-white/5 px-4 py-2 text-fog transition hover:border-copper hover:text-copper"
          >
            Hire me
          </a>
        </nav>
      </header>

      <main id="top" className="relative z-10">
        <section className="mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-6 pb-20 pt-10">
          <p className="rise text-sm uppercase tracking-[0.28em] text-copper">
            {profile.role}
          </p>
          <h1 className="display rise rise-delay-1 mt-5 max-w-4xl text-5xl leading-[1.05] text-fog sm:text-7xl">
            Chetan Saini
          </h1>
          <p className="rise rise-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {profile.oneLiner}
          </p>
          <div className="rise rise-delay-3 mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-copper px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-110"
            >
              View selected work
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--line)] px-6 py-3 text-sm text-fog transition hover:border-fog/40"
            >
              GitHub
            </a>
          </div>
          <p className="mt-8 text-sm text-muted">{profile.location}</p>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-copper">Selected work</p>
              <h2 className="display mt-3 text-3xl text-fog sm:text-4xl">
                Real ships. Real URLs.
              </h2>
            </div>
            <p className="hidden max-w-xs text-right text-sm text-muted sm:block">
              No fabricated clients — only production demos and client deliveries you can open.
            </p>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <article
                key={project.slug}
                className="group rounded-3xl border border-[var(--line)] bg-ink-2/70 p-6 backdrop-blur-sm transition hover:border-copper/40 sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted">
                      <span className="text-copper">{String(index + 1).padStart(2, "0")}</span>
                      <span>{project.kind}</span>
                      <span>{project.status}</span>
                    </div>
                    <h3 className="display mt-3 text-2xl text-fog sm:text-3xl">{project.name}</h3>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[var(--line)] px-4 py-2 transition group-hover:border-copper group-hover:text-copper"
                    >
                      Live
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[var(--line)] px-4 py-2 transition hover:border-fog/40"
                    >
                      Code
                    </a>
                  </div>
                </div>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">{project.blurb}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-fog/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.24em] text-copper">Services</p>
          <h2 className="display mt-3 text-3xl text-fog sm:text-4xl">What I take on</h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <li
                key={service}
                className="rounded-2xl border border-[var(--line)] bg-white/[0.02] px-5 py-4 text-fog/90"
              >
                {service}
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-[2rem] border border-[var(--line)] bg-gradient-to-br from-ink-2 to-ink px-8 py-12 sm:px-12">
            <p className="text-sm uppercase tracking-[0.24em] text-copper">Next project</p>
            <h2 className="display mt-4 max-w-2xl text-3xl text-fog sm:text-5xl">
              Have a website, booking flow, or SaaS idea?
            </h2>
            <p className="mt-5 max-w-xl text-muted">
              Tell me the goal and timeline. I’ll reply with a clear scope, stack recommendation, and
              fixed-price range.
            </p>
            <a
              href={`mailto:${profile.email}?subject=Project%20inquiry`}
              className="mt-8 inline-flex rounded-full bg-copper px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-110"
            >
              Email {profile.email}
            </a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[var(--line)] px-6 py-8 text-sm text-muted">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <div className="flex gap-5">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
