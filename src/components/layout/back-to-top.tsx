"use client";

import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 400;

export function BackToTop() {
  const visible = useScrollPosition(SCROLL_THRESHOLD);
  const reducedMotion = usePrefersReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={reducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reducedMotion ? undefined : { opacity: 0, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className={cn(
            "fixed right-4 bottom-5 z-40 flex h-11 w-11 items-center justify-center rounded-full",
            "border border-forest-200/80 bg-white/95 text-forest-600 shadow-[0_4px_20px_rgba(20,83,45,0.12)]",
            "backdrop-blur-sm transition-colors hover:border-forest-300 hover:bg-white hover:text-forest-700",
            "focus-visible:ring-2 focus-visible:ring-forest-500/40 focus-visible:ring-offset-2 focus-visible:outline-none",
            "sm:right-6 sm:bottom-6 sm:h-12 sm:w-12",
          )}
        >
          <ArrowUp className="h-5 w-5" strokeWidth={2.25} aria-hidden />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
