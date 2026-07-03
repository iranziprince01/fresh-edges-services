import type { Metadata } from "next";
import Image from "next/image";
import { FramedImage } from "@/components/layout/framed-image";
import { MapPin } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { BookServiceButton } from "@/components/layout/book-service-button";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import {
  coreValues,
  mission,
  vision,
} from "@/data/company";
import { faqs } from "@/data/faq";
import { siteConfig } from "@/lib/site";
import { images } from "@/lib/images";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Learn about Fresh Edges Services Ltd, an Edmonton-based property care company built on service, reliability, and excellence across Alberta.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="page-hero bg-forest-600">
        <Container>
          <Breadcrumbs items={[{ label: "About" }]} />
          <h1 className="page-title mt-4">
            Built On Service, Driven By Excellence.
          </h1>
        </Container>
      </section>

      <Section>
        <Container className="split-section overflow-x-clip lg:grid-cols-[1fr_min(48%,500px)] lg:items-stretch">
          <div className="flex min-w-0 flex-col justify-center lg:justify-start">
            <div className="max-w-lg">
              <SectionHeader
                eyebrow="Our story"
                title="One trusted team for complete property care"
                align="left"
                spacing="tight"
                className="max-w-none"
              />
              <div className="content-stack space-y-3.5 text-base leading-[1.75] text-muted-foreground md:space-y-4">
                <p className="text-lg font-bold italic leading-relaxed text-forest-600 md:text-xl md:leading-relaxed">
                  &ldquo;{siteConfig.name} was founded with a simple purpose: to make property care
                  easier, more reliable, and more professional for homes and businesses across
                  Alberta.&rdquo;
                </p>
                <p>
                  Managing a property often means working with multiple contractors for
                  cleaning, landscaping, maintenance, snow removal, and facility support. We
                  saw an opportunity to do things differently.
                </p>
                <p>
                  Instead of forcing clients to manage several service providers, we built a
                  company that offers complete integrated property services under one trusted
                  team.
                </p>
                <p>
                  Today, we proudly serve homeowners, commercial businesses, office spaces,
                  apartment buildings, government institutions, construction companies,
                  healthcare facilities, retail businesses, and organizations looking for
                  dependable property care solutions.
                </p>
                <p>
                  At Fresh Edges, we believe trust is earned through consistency,
                  professionalism, and delivering results that exceed expectations.{" "}
                  <span className="box-decoration-clone bg-forest-50 font-bold text-forest-600">
                    Every client matters. Every project counts. And every service we provide
                    reflects our commitment to excellence.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <FramedImage
            src={images.story}
            alt="Fresh Edges team delivering professional property care"
            priority
            shadowSide="left"
            sizes="(max-width: 1024px) 340px, 500px"
            className="self-stretch lg:mx-0"
          />
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <article className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-forest-200/80 bg-white shadow-[0_16px_40px_rgba(20,83,45,0.08)] transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(20,83,45,0.12)]">
              <div className="relative overflow-hidden bg-forest-600 px-8 py-10 md:px-10 md:py-12">
                <div
                  className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-fresh-400/20 blur-2xl"
                  aria-hidden
                />
                <div
                  className="absolute right-8 bottom-0 h-px w-16 bg-fresh-400/80"
                  aria-hidden
                />
                <div className="relative">
                    <h3 className="font-heading text-2xl font-bold tracking-[0.12em] text-white uppercase md:text-[1.75rem] md:leading-tight">
                      Our Mission
                    </h3>
                  </div>
              </div>
              <div className="flex flex-1 flex-col border-t border-forest-100 bg-white px-8 py-8 md:px-10 md:py-10">
                <p className="text-base leading-[1.8] text-muted-foreground">{mission}</p>
              </div>
            </article>

            <article className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-forest-200/80 bg-white shadow-[0_16px_40px_rgba(20,83,45,0.08)] transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(20,83,45,0.12)]">
              <div className="relative overflow-hidden bg-gradient-to-br from-forest-700 via-forest-600 to-forest-600 px-8 py-10 md:px-10 md:py-12">
                <div
                  className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-fresh-400/15 blur-2xl"
                  aria-hidden
                />
                <div
                  className="absolute right-8 bottom-0 h-px w-16 bg-fresh-400/80"
                  aria-hidden
                />
                <div className="relative">
                    <h3 className="font-heading text-2xl font-bold tracking-[0.12em] text-white uppercase md:text-[1.75rem] md:leading-tight">
                      Our Vision
                    </h3>
                  </div>
              </div>
              <div className="flex flex-1 flex-col border-t border-forest-100 bg-forest-50/60 px-8 py-8 md:px-10 md:py-10">
                <p className="text-base leading-[1.8] text-muted-foreground">{vision}</p>
              </div>
            </article>
          </div>
          <div className="mt-14 flex justify-center">
            <BookServiceButton className="h-12 px-8 text-base" />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            title="Our core values"
            description="The principles that guide how we serve every client, on every project, every day."
          />
          <div className="grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
            {coreValues.map((value, index) => (
              <article
                key={value.title}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-forest-200/80 bg-white shadow-[0_14px_36px_rgba(20,83,45,0.08)] transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(20,83,45,0.12)]"
              >
                <div
                  className={`relative overflow-hidden px-7 py-7 md:px-8 md:py-8 ${
                    index % 2 === 0
                      ? "bg-forest-600"
                      : "bg-gradient-to-br from-forest-700 via-forest-600 to-forest-600"
                  }`}
                >
                  <div
                    className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-fresh-400/20 blur-2xl"
                    aria-hidden
                  />
                  <div
                    className="absolute right-7 bottom-0 h-px w-12 bg-fresh-400/80 md:right-8"
                    aria-hidden
                  />
                  <h3 className="relative font-heading text-xl font-bold tracking-tight text-fresh-300 md:text-2xl">
                    {value.title}
                  </h3>
                </div>
                <div className="flex flex-1 border-t border-forest-100 bg-forest-50/70 px-7 py-7 md:px-8 md:py-8">
                  <p className="text-base leading-[1.75] text-foreground/80">
                    {value.description}
                  </p>
                </div>
              </article>
            ))}
            <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-forest-200/80 bg-white shadow-[0_14px_36px_rgba(20,83,45,0.08)] transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(20,83,45,0.12)]">
              <div className="relative min-h-0 flex-1 overflow-hidden">
                <Image
                  src={images.coreValue}
                  alt="Fresh Edges team demonstrating our core values in action"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
            </article>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow="Service areas"
                title="Serving the greater Edmonton region"
                description="From downtown commercial properties to suburban homes, we deliver the same consistent quality across Alberta's capital region."
                align="left"
                spacing="tight"
                className="max-w-none"
              />
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {siteConfig.serviceAreas.map((area) => (
                  <li key={area} className="flex items-center gap-2.5 text-sm">
                    <MapPin className="h-4 w-4 shrink-0 text-forest-600 dark:text-fresh-400" aria-hidden />
                    {area}
                  </li>
                ))}
              </ul>
              <div className="mt-14">
                <BookServiceButton className="h-11 px-8" />
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={images.edmontonSkyline}
                alt="Edmonton skyline and river valley"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions"
            description="Straight answers about our services, coverage, and how to get started."
          />
          <div className="mx-auto max-w-3xl">
            <FaqAccordion items={faqs} />
          </div>
        </Container>
      </Section>

      <CtaSection variant="muted" />
    </>
  );
}
