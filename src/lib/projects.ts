import { projects } from "@/lib/content";

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProject(slug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);
  if (currentIndex === -1) return null;
  return projects[(currentIndex + 1) % projects.length] ?? null;
}
