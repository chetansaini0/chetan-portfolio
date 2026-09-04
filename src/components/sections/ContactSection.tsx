"use client";

import { useState } from "react";
import { site } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

type FormState = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  projectType: "",
  message: "",
};

export function ContactSection() {
  const [values, setValues] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const valid =
      values.name.trim().length > 1 &&
      values.email.includes("@") &&
      values.projectType.trim().length > 1 &&
      values.message.trim().length > 10;

    if (!valid) {
      setStatus("error");
      return;
    }

    setStatus("success");
  }

  return (
    <section id="contact" className="section-pad px-6 pb-24 sm:px-8">
      <div className="mx-auto grid max-w-[1440px] gap-10 border border-[var(--border)] px-6 py-8 sm:rounded-[2rem] sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-12">
        <Reveal>
          <div>
            <p className="section-eyebrow">/CONTACT</p>
            <h2 className="mt-4 font-display text-[clamp(3.2rem,9vw,7rem)] leading-[0.9] tracking-[-0.08em] text-[var(--foreground)]">
              LET&apos;S BUILD
              <br />
              SOMETHING
              <br />
              USEFUL.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">{site.finalCta}</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={onSubmit} className="grid gap-5">
            <label className="field">
              <span>Name</span>
              <input
                value={values.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Your name"
                autoComplete="name"
              />
            </label>

            <label className="field">
              <span>Email</span>
              <input
                type="email"
                value={values.email}
                onChange={(event) => updateField("email", event.target.value)}
                placeholder={site.email}
                autoComplete="email"
              />
            </label>

            <label className="field">
              <span>Project Type</span>
              <select value={values.projectType} onChange={(event) => updateField("projectType", event.target.value)}>
                <option value="">Select a project type</option>
                <option value="web-development">Web Development</option>
                <option value="qa-testing">QA & Software Testing</option>
                <option value="automation">Test Automation</option>
                <option value="optimization">Website Optimization</option>
              </select>
            </label>

            <label className="field">
              <span>Message</span>
              <textarea
                value={values.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder="Tell me about the website, software, or testing challenge."
                rows={6}
              />
            </label>

            <button type="submit" className="button button-primary w-fit" data-cursor-label="SEND">
              START A CONVERSATION <span aria-hidden>→</span>
            </button>

            {status === "error" ? (
              <p className="text-sm text-[var(--accent)]">
                Please fill every field with valid information before sending.
              </p>
            ) : null}

            {status === "success" ? (
              <p className="text-sm text-[var(--foreground)]">
                Form UI is ready. Backend email delivery is not connected yet, but the structure is prepared for it.
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
