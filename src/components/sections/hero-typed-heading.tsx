"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/** One word per line so typing always starts at the beginning of that line. */
const HEADING_WORDS = [
  { text: "Professional", className: "text-white" },
  { text: "Property", className: "text-white" },
  { text: "Services", className: "text-fresh-300" },
  { text: "Built Around", className: "text-white" },
  { text: "Reliability", className: "text-fresh-300" },
] as const;

const START_DELAY_MS = 400;
const CHAR_DELAY_MS = 52;
const SPACE_DELAY_MS = 90;
const LINE_PAUSE_MS = 320;
const CURSOR_BLINK_MS = 530;

type LineProgress = {
  visible: string;
  complete: boolean;
};

function emptyLines(): LineProgress[] {
  return HEADING_WORDS.map(() => ({ visible: "", complete: false }));
}

function fullLines(): LineProgress[] {
  return HEADING_WORDS.map((line) => ({
    visible: line.text,
    complete: true,
  }));
}

export function HeroTypedHeading() {
  const reducedMotion = usePrefersReducedMotion();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const hasLeftViewRef = useRef(false);
  const hasStartedRef = useRef(false);
  const [playKey, setPlayKey] = useState(0);
  const [lines, setLines] = useState<LineProgress[]>(emptyLines);
  const [activeLine, setActiveLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const node = headingRef.current;
    if (!node || reducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (!entry.isIntersecting) {
          hasLeftViewRef.current = true;
          return;
        }

        if (!hasStartedRef.current || hasLeftViewRef.current) {
          hasStartedRef.current = true;
          hasLeftViewRef.current = false;
          setPlayKey((key) => key + 1);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) {
      setLines(fullLines());
      setDone(true);
      setShowCursor(false);
      return;
    }

    if (playKey === 0) return;

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    setLines(emptyLines());
    setActiveLine(0);
    setDone(false);
    setShowCursor(true);

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timeoutId = setTimeout(resolve, ms);
      });

    const run = async () => {
      await wait(START_DELAY_MS);
      if (cancelled) return;

      for (let lineIndex = 0; lineIndex < HEADING_WORDS.length; lineIndex += 1) {
        if (cancelled) return;
        setActiveLine(lineIndex);
        const fullText = HEADING_WORDS[lineIndex].text;

        for (let charIndex = 1; charIndex <= fullText.length; charIndex += 1) {
          if (cancelled) return;
          const next = fullText.slice(0, charIndex);
          setLines((prev) =>
            prev.map((line, i) =>
              i === lineIndex ? { visible: next, complete: false } : line,
            ),
          );
          const typedChar = fullText[charIndex - 1];
          await wait(typedChar === " " ? SPACE_DELAY_MS : CHAR_DELAY_MS);
        }

        setLines((prev) =>
          prev.map((line, i) =>
            i === lineIndex ? { ...line, complete: true } : line,
          ),
        );

        if (lineIndex < HEADING_WORDS.length - 1) {
          await wait(LINE_PAUSE_MS);
        }
      }

      if (!cancelled) {
        setDone(true);
      }
    };

    void run();

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [playKey, reducedMotion]);

  useEffect(() => {
    if (reducedMotion || done) {
      setShowCursor(false);
      return;
    }

    const id = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, CURSOR_BLINK_MS);

    return () => clearInterval(id);
  }, [reducedMotion, done]);

  const fullText = HEADING_WORDS.map((line) => line.text).join(" ");

  return (
    <h1
      ref={headingRef}
      className="font-heading text-[2.15rem] font-black leading-[1.05] tracking-tight text-white min-[375px]:text-4xl sm:text-5xl sm:leading-[0.98] md:text-6xl lg:text-7xl xl:text-[5rem] xl:leading-[0.95]"
      aria-label={fullText}
    >
      <span aria-hidden className="flex flex-col">
        {HEADING_WORDS.map((line, index) => {
          const progress = lines[index];
          const isActive = !done && activeLine === index;

          return (
            <span
              key={`${line.text}-${index}`}
              className={`block min-h-[1.05em] whitespace-nowrap ${line.className}`}
            >
              {/* Reserve the line even before typing starts on it */}
              <span className="inline-block min-w-[1ch]">
                {progress.visible || "\u00A0"}
              </span>
              {isActive ? (
                <span
                  className={`ml-0.5 inline-block w-[0.08em] translate-y-[0.06em] bg-fresh-300 align-baseline ${
                    showCursor ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ height: "0.85em" }}
                />
              ) : null}
            </span>
          );
        })}
      </span>
    </h1>
  );
}
