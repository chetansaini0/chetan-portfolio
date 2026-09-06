"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/content";

export function HeroSection() {
  const reduced = useReducedMotion();

  return (
    <section id="top" className="hero-shell px-6 pb-16 pt-28 sm:px-8 md:pb-24 md:pt-32">
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-accent-line" />
        <div className="absolute bottom-[22%] right-[8%] hidden max-w-xs font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9] tracking-[-0.04em] text-[var(--foreground)]/18 md:block">
          <span className="block">BUILD</span>
          <span className="block">TEST</span>
          <span className="block">SHIP</span>
        </div>
      </div>

      <div className="hero-content mx-auto w-full max-w-[1440px]">
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="section-eyebrow"
        >
          Software Developer · QA Automation
        </motion.p>

        <h1 className="mt-6 max-w-[12ch]">
          <span className="block overflow-hidden">
            <motion.span
              initial={reduced ? false : { y: "110%" }}
              animate={reduced ? undefined : { y: "0%" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display block text-[clamp(3.6rem,12vw,9.5rem)] leading-[0.86] tracking-[-0.045em] text-[var(--foreground)]"
            >
              Chetan
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={reduced ? false : { y: "110%" }}
              animate={reduced ? undefined : { y: "0%" }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-display block text-[clamp(3.6rem,12vw,9.5rem)] leading-[0.86] tracking-[-0.045em] text-[var(--accent)]"
            >
              Saini
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="font-display mt-7 max-w-2xl text-[clamp(1.35rem,3vw,2.15rem)] leading-[1.15] tracking-[-0.03em] text-[var(--foreground)]"
        >
          {site.heroHeading.join(" ")}
        </motion.p>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8"
        >
          {site.intro}
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.48 }}
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
    </section>
  );
}
