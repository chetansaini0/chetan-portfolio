"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/content";

export function HeroSection() {
  const reduced = useReducedMotion();

  return (
    <section id="top" className="hero-shell px-6 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-36">
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-accent-line" />
        <div className="hero-watermark font-display">
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
          className="section-eyebrow hero-eyebrow"
        >
          Software Developer · QA Automation
        </motion.p>

        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 28 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="hero-name font-display mt-5"
        >
          <span className="hero-name__first">Chetan</span>
          <span className="hero-name__last">Saini</span>
        </motion.h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="hero-headline font-display mt-6 max-w-3xl"
        >
          {site.heroHeading.join(" ")}
        </motion.p>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="hero-intro mt-5 max-w-xl"
        >
          {site.intro}
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="mt-10 flex flex-wrap gap-3 sm:gap-4"
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
