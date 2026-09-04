import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { projects } from "@/lib/content";
import { getAdjacentProject, getProjectBySlug } from "@/lib/projects";
import { getSiteUrl } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.name} | Work`,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.name} | Chetan Saini`,
      description: project.description,
      url: `${getSiteUrl()}/work/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getAdjacentProject(project.slug);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader />
      <main className="px-6 pb-24 pt-28 sm:px-8 md:pt-32">
        <div className="mx-auto max-w-[1440px]">
          <Link href="/#work" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
            <ArrowLeft className="h-4 w-4" />
            Back to work
          </Link>

          <section className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="section-eyebrow">{project.category}</p>
              <h1 className="mt-5 max-w-4xl font-display text-[clamp(3.2rem,8vw,7rem)] leading-[0.9] tracking-[-0.08em]">
                {project.name}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">{project.description}</p>
            </div>

            <div className={`project-placeholder accent-${project.accent} min-h-[340px] border border-[var(--border)]`}>
              <span>{project.name}</span>
            </div>
          </section>

          <section className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-8">
              <div>
                <p className="section-label">Technology</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="section-label">Links</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="button button-secondary">
                      Live Website <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : null}
                  {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="button button-secondary">
                      GitHub <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="grid gap-10">
              <div>
                <p className="section-label">Overview</p>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">{project.overview}</p>
              </div>
              <div>
                <p className="section-label">Problem</p>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">{project.problem}</p>
              </div>
              <div>
                <p className="section-label">Approach</p>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">{project.approach}</p>
              </div>
              <div>
                <p className="section-label">Features</p>
                <ul className="mt-4 grid gap-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="rounded-2xl border border-[var(--border)] px-4 py-4 text-base leading-7 text-[var(--foreground)]/88">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="section-label">Challenges</p>
                <ul className="mt-4 grid gap-3">
                  {project.challenges.map((challenge) => (
                    <li key={challenge} className="rounded-2xl border border-[var(--border)] px-4 py-4 text-base leading-7 text-[var(--muted)]">
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="section-label">Result</p>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">{project.result}</p>
              </div>
            </div>
          </section>

          {nextProject ? (
            <section className="mt-20 border-t border-[var(--border)] pt-10">
              <p className="section-label">Next project</p>
              <Link href={`/work/${nextProject.slug}`} className="mt-4 inline-flex items-center gap-3 font-display text-4xl tracking-[-0.05em] text-[var(--foreground)]">
                {nextProject.name}
                <ArrowUpRight className="h-6 w-6" />
              </Link>
            </section>
          ) : null}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
