"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroMeta, site } from "@/lib/content";

export function HeroSection() {
  const reduced = useReducedMotion();

  return (
    <section id="top" className="hero-shell px-6 pb-16 pt-28 sm:px-8 md:pt-32">
      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[minmax(0,1.1fr)_420px] lg:items-end">
        <div>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]"
          >
            {heroMeta.map((item) => (
              <span key={item} className="rounded-full border border-[var(--border)] px-3 py-2">
                {item}
              </span>
            ))}
          </motion.div>

          <div className="mt-8 space-y-1">
            {site.heroHeading.map((line, index) => (
              <motion.h1
                key={line}
                initial={reduced ? false : { opacity: 0, y: 36 }}
                animate={reduced ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[clamp(4rem,10vw,9rem)] leading-[0.88] tracking-[-0.08em] text-[var(--foreground)]"
              >
                {line}
              </motion.h1>
            ))}
          </div>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 max-w-2xl text-balance text-lg leading-8 text-[var(--muted)] sm:text-xl"
          >
            {site.intro}
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#work" className="button button-primary" data-cursor-label="VIEW">
              View My Work <span aria-hidden>→</span>
            </a>
            <a href="#contact" className="button button-secondary" data-cursor-label="TALK">
              Let&apos;s Work Together <span aria-hidden>→</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, x: 24 }}
          animate={reduced ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-visual"
        >
          <div className="hero-visual-grid" />
          <div className="hero-visual-lines">
            <span>BUILD</span>
            <span>TEST</span>
            <span>AUTOMATE</span>
            <span>IMPROVE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
