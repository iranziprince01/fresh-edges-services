"use client";

import { useEffect, useRef } from "react";
import NextImage from "next/image";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type BackgroundVideoProps = {
  src: string;
  poster: string;
  /** Base fill behind the video, e.g. "bg-forest-600" or "bg-forest-50". */
  baseClassName?: string;
  /** Overlay on top of the video, e.g. "bg-forest-600/85" or "bg-forest-50/85". */
  overlayClassName?: string;
  priority?: boolean;
};

/**
 * Production-safe full-bleed background video with a static poster fallback
 * and a brand-green overlay.
 */
export function BackgroundVideo({
  src,
  poster,
  baseClassName = "bg-forest-600",
  overlayClassName = "bg-forest-600/85",
  priority = false,
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;

    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const tryPlay = () => {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        void playPromise.catch(() => {
          requestAnimationFrame(() => {
            video.muted = true;
            void video.play().catch(() => {});
          });
        });
      }
    };

    const resumeIfNeeded = () => {
      if (document.visibilityState === "visible" && video.paused) {
        tryPlay();
      }
    };

    tryPlay();

    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("canplaythrough", tryPlay);
    document.addEventListener("visibilitychange", resumeIfNeeded);
    window.addEventListener("pageshow", resumeIfNeeded);
    window.addEventListener("focus", resumeIfNeeded);

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("canplaythrough", tryPlay);
      document.removeEventListener("visibilitychange", resumeIfNeeded);
      window.removeEventListener("pageshow", resumeIfNeeded);
      window.removeEventListener("focus", resumeIfNeeded);
    };
  }, [reducedMotion, src]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${baseClassName}`}>
      <NextImage
        src={poster}
        alt=""
        fill
        priority={priority}
        className="object-cover"
        sizes="100vw"
        aria-hidden
      />

      {!reducedMotion ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={poster}
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          aria-hidden
          tabIndex={-1}
        />
      ) : null}

      <div className={`absolute inset-0 ${overlayClassName}`} aria-hidden />
    </div>
  );
}
