"use client";

import Link from "next/link";
import NextImage from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { FramedImage } from "@/components/layout/framed-image";
import { siteConfig } from "@/lib/site";
import { images } from "@/lib/images";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function HeroSection() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative flex min-h-[calc(100dvh-4.25rem)] items-center sm:min-h-[calc(100dvh-5rem)] lg:min-h-[calc(100dvh-6rem)]">
      <div className="absolute inset-0 overflow-hidden">
        <NextImage
          src={images.hero}
          alt=""
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
          aria-hidden
        />
        <div className="absolute inset-0 bg-forest-600/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-600 via-forest-600 to-forest-700/75" />
      </div>

      <Container className="relative w-full overflow-x-clip py-8 sm:py-10 lg:py-12">
        <div className="grid w-full items-center gap-10 sm:gap-12 lg:grid-cols-[1fr_min(38%,400px)] lg:gap-10 xl:gap-14">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex min-w-0 max-w-5xl flex-col items-center justify-center gap-6 text-center sm:gap-8 md:gap-10 lg:items-start lg:text-left"
        >
          <h1 className="font-heading text-[2.15rem] font-black leading-[1.05] tracking-tight text-white min-[375px]:text-4xl sm:text-5xl sm:leading-[0.98] md:text-6xl lg:text-7xl xl:text-[5.5rem] xl:leading-[0.95]">
            <span className="block">
              Professional Property{" "}
              <span className="text-fresh-300">Services</span>
            </span>
            <span className="block">Built Around</span>
            <span className="block">
              <span className="text-fresh-300">Reliability</span>
            </span>
          </h1>
          <p className="max-w-xl text-balance text-[0.65rem] font-medium uppercase tracking-[0.12em] text-fresh-300 sm:text-xs sm:tracking-[0.18em] md:text-sm lg:text-left">
            {siteConfig.tagline}
          </p>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:justify-start">
            <Button
              asChild
              size="lg"
              className="h-12 w-full bg-white px-8 text-base font-semibold text-forest-600 hover:bg-white/90 sm:w-auto"
            >
              <Link href="/quote">
                Book Service
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 w-full border-white/40 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white sm:w-auto"
            >
              <Link href="/services">Our services</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden w-full min-w-0 lg:flex lg:items-center lg:justify-end"
        >
          <FramedImage
            src={images.heroRight}
            alt="Fresh Edges professional cleaning team ready to serve"
            priority
            shadowSide="left"
            ringClassName="ring-white/25"
            sizes="(max-width: 1280px) 340px, 400px"
            maxWidthClass="max-w-[min(100%,400px)]"
          />
        </motion.div>
        </div>
      </Container>
    </section>
  );
}
