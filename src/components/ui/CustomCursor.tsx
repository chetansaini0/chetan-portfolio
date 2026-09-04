"use client";

import { useEffect, useState } from "react";

type CursorState = {
  x: number;
  y: number;
  hovered: boolean;
  label: string;
};

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState<CursorState>({ x: 0, y: 0, hovered: false, label: "" });

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) {
      setEnabled(true);
    }

    const handleMove = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest("[data-cursor-label]") as HTMLElement | null;
      setState({
        x: event.clientX,
        y: event.clientY,
        hovered: Boolean(interactive),
        label: interactive?.dataset.cursorLabel ?? "",
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden mix-blend-difference md:block"
      style={{ transform: `translate(${state.x}px, ${state.y}px)` }}
    >
      <div className={`cursor-dot ${state.hovered ? "is-hovered" : ""}`}>
        {state.hovered && state.label ? <span className="cursor-label">{state.label}</span> : null}
      </div>
    </div>
  );
}
