"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site";
import { images } from "@/lib/images";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function HeroSection() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-6rem)]">
      <div className="absolute inset-0 overflow-hidden">
        <Image
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

      <Container className="relative grid min-h-[calc(100vh-5rem)] items-center gap-12 overflow-visible py-16 sm:min-h-[calc(100vh-6rem)] sm:py-20 lg:grid-cols-[1fr_min(38%,400px)] lg:items-stretch lg:gap-10 xl:gap-14">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex max-w-5xl flex-col justify-center gap-8 text-left sm:gap-10 md:gap-12"
        >
          <h1 className="font-heading text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            <span className="block">
              Professional Property{" "}
              <span className="text-fresh-300">Services</span>
            </span>
            <span className="block">Built Around</span>
            <span className="block">
              <span className="text-fresh-300">Reliability</span>
            </span>
          </h1>
          <p className="whitespace-nowrap text-[0.7rem] font-medium uppercase tracking-[0.14em] text-fresh-300 sm:text-xs sm:tracking-[0.18em] md:text-sm">
            {siteConfig.tagline}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="h-12 bg-white px-8 text-base font-semibold text-forest-600 hover:bg-white/90"
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
              className="h-12 border-white/40 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/services">Our services</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden w-full max-w-[340px] self-stretch overflow-visible lg:mx-0 lg:block lg:max-w-none"
        >
          <div className="relative h-full min-h-0 w-full overflow-visible">
            <div
              className="absolute top-[5%] left-[18%] -right-[3%] z-0 h-[90%] rounded-[1.75rem] bg-fresh-400 shadow-[0_20px_48px_rgba(115,220,100,0.45)] lg:rounded-[2rem]"
              aria-hidden
            />
            <div className="relative z-10 h-full overflow-hidden rounded-[1.75rem] ring-2 ring-white/25 lg:rounded-[2rem]">
              <Image
                src={images.heroRight}
                alt="Fresh Edges professional cleaning team ready to serve"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1280px) 340px, 400px"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
