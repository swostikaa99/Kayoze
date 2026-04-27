"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CounterProps {
  end: number;
  start?: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

export function Counter({
  end,
  start = 0,
  duration = 2,
  className,
  suffix = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(start);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    restDelta: 0.001,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [motionValue, isInView, end]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          Intl.NumberFormat("en-US").format(Math.floor(latest)) + suffix;
      }
    });
  }, [springValue, suffix]);

  return (
    <span ref={ref} className={className}>
      {start}
      {suffix}
    </span>
  );
}
