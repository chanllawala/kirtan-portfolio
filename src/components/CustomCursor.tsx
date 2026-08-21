"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function subscribe(callback: () => void) {
  const fineMq = window.matchMedia("(pointer: fine)");
  const reducedMq = window.matchMedia("(prefers-reduced-motion: reduce)");
  fineMq.addEventListener("change", callback);
  reducedMq.addEventListener("change", callback);
  return () => {
    fineMq.removeEventListener("change", callback);
    reducedMq.removeEventListener("change", callback);
  };
}

function getSnapshot() {
  return (
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function getServerSnapshot() {
  return false;
}

export function CustomCursor() {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const ringX = useSpring(x, { stiffness: 200, damping: 30, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 200, damping: 30, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        "a, button, [data-cursor-hover]"
      ) as HTMLElement | null;
      setHovering(!!target);
      setLabel(target?.getAttribute("data-cursor-label") ?? null);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const expanded = hovering && !label;
  const showLabel = hovering && !!label;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[80]"
        style={{ x: springX, y: springY }}
      >
        <div
          className="h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent transition-opacity duration-150"
          style={{ opacity: showLabel ? 0 : 1 }}
        />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[80]"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center whitespace-nowrap rounded-full border border-accent/50 bg-bg/80 font-mono text-[11px] uppercase tracking-wide text-accent backdrop-blur-sm"
          animate={
            showLabel
              ? { width: "auto", height: 40, paddingLeft: 16, paddingRight: 16, opacity: 1 }
              : { width: expanded ? 52 : 28, height: expanded ? 52 : 28, paddingLeft: 0, paddingRight: 0, opacity: expanded ? 0.9 : 0.5 }
          }
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {showLabel ? label : null}
        </motion.div>
      </motion.div>
    </>
  );
}
