"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, site } from "@/lib/content";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#about");
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target?.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { threshold: 0.35, rootMargin: "-15% 0px -40% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "px-3 pt-3" : "px-0 pt-0"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1440px] items-center justify-between gap-6 border border-transparent px-5 py-4 transition-all duration-300 md:px-8 ${
            scrolled ? "rounded-full border-[var(--border)] bg-[var(--surface-elevated)] backdrop-blur" : ""
          }`}
        >
          <a
            href="#top"
            className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]"
            data-cursor-label="HOME"
          >
            {site.name}
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${isActive ? "is-active" : ""}`}
                  data-cursor-label="OPEN"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <a href="#contact" className="button button-primary" data-cursor-label="TALK">
              Let&apos;s Talk
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel)]"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={reduced ? false : { opacity: 0 }}
            animate={reduced ? undefined : { opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            className="fixed inset-0 z-40 bg-[var(--background)]/96 px-6 pb-8 pt-28 backdrop-blur lg:hidden"
          >
            <nav className="flex flex-col gap-5 border-t border-[var(--border)] pt-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={reduced ? false : { opacity: 0, y: 16 }}
                  animate={reduced ? undefined : { opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * index, duration: 0.45 }}
                  className="font-display text-4xl tracking-[-0.06em] text-[var(--foreground)]"
                >
                  {item.label}
                </motion.a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="button button-primary mt-4 w-fit">
                Let&apos;s Talk
                <span aria-hidden>→</span>
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
