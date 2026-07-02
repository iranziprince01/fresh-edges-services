"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function IntroSection() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="bg-background py-24 md:py-28 lg:py-32">
      <Container className="grid items-center gap-16 overflow-visible lg:grid-cols-[min(38%,400px)_1fr] lg:items-stretch lg:gap-16 xl:gap-20">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[340px] self-stretch overflow-visible lg:mx-0 lg:max-w-none"
        >
          <div className="relative aspect-[3/4] min-h-[320px] w-full overflow-visible lg:h-full lg:min-h-0 lg:aspect-auto">
            <div
              className="absolute top-[5%] right-[18%] -left-[3%] z-0 h-[90%] rounded-[1.75rem] bg-fresh-400 shadow-[0_20px_48px_rgba(115,220,100,0.45)] lg:rounded-[2rem]"
              aria-hidden
            />
            <div className="relative z-10 h-full overflow-hidden rounded-[1.75rem] ring-2 ring-forest-200/80 lg:rounded-[2rem]">
              <Image
                src={images.intro}
                alt="Professional property care by Fresh Edges Services"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 340px, 400px"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center gap-6 text-left"
        >
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            At{" "}
            <span className="font-bold text-forest-600">{siteConfig.name}</span>, we understand
            that maintaining a clean, safe, and well-managed property is not just about
            appearance, it is about creating spaces where people can live, work, and thrive
            with confidence.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            We are an Edmonton-based company providing professional cleaning, property
            maintenance, landscaping, snow removal, facility support, and exterior care
            solutions for residential and commercial clients across Alberta.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Whether you are a homeowner, property manager, business owner, or organization
            looking for dependable service, our team is committed to delivering
            high-quality work with professionalism, consistency, and attention to detail.
          </p>
          <div className="flex gap-4 pt-2 md:gap-5">
            <span
              className="shrink-0 font-heading text-6xl font-black leading-none text-fresh-400 md:text-7xl lg:text-8xl"
              aria-hidden
            >
              &lsquo;
            </span>
            <div className="min-w-0 pt-1 md:pt-2">
              <p className="text-lg font-medium leading-relaxed text-foreground md:text-xl">
                We do not simply provide services.
              </p>
              <p className="mt-2 font-heading text-xl font-semibold text-forest-600 md:text-2xl">
                We create peace of mind.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
