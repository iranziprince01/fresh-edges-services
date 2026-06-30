import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { Button } from "@/components/ui/button";
import {
  coreValues,
  mission,
  vision,
} from "@/data/company";
import { faqs } from "@/data/faq";
import { siteConfig } from "@/lib/site";
import { images } from "@/lib/images";

export const metadata: Metadata = createMetadata({
  title: "About Fresh Edges Services",
  description:
    "Learn about Fresh Edges Services Ltd, an Edmonton-based property care company built on service, reliability, and excellence across Alberta.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-forest-900 to-forest-950 py-20 md:py-28">
        <Container>
          <Breadcrumbs items={[{ label: "About" }]} />
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.15]">
            Built On Service. Driven By Excellence.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            Fresh Edges Services Ltd was founded with a simple purpose: to make property care
            easier, more reliable, and more professional for homes and businesses across
            Alberta.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={images.hero}
                alt="Fresh Edges professional team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <SectionHeader
                eyebrow="Our story"
                title="One trusted team for complete property care"
                align="left"
                className="mb-0"
              />
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
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
                  professionalism, and delivering results that exceed expectations. Every
                  client matters. Every project matters. And every service we provide reflects
                  our commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow="Our mission"
                title="Dependable property care, lasting relationships"
                align="left"
                className="mb-0"
              />
              <p className="mt-6 leading-relaxed text-muted-foreground">{mission}</p>
            </div>
            <div>
              <SectionHeader
                eyebrow="Our vision"
                title="Leading property maintenance in Alberta"
                align="left"
                className="mb-0"
              />
              <p className="mt-6 leading-relaxed text-muted-foreground">{vision}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            title="Our core values"
            description="The principles that guide how we serve every client, on every project, every day."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <div key={value.title} className="rounded-2xl border border-border/80 p-8">
                <h3 className="font-heading text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow="Service areas"
                title="Serving the greater Edmonton region"
                description="From downtown commercial properties to suburban homes, we deliver the same consistent quality across Alberta's capital region."
                align="left"
                className="mb-0"
              />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {siteConfig.serviceAreas.map((area) => (
                  <li key={area} className="flex items-center gap-2.5 text-sm">
                    <MapPin className="h-4 w-4 shrink-0 text-forest-600 dark:text-fresh-400" aria-hidden />
                    {area}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-10 h-11 bg-forest-600 hover:bg-forest-700">
                <Link href="/service-areas">View service areas</Link>
              </Button>
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
            <FaqAccordion items={faqs.slice(0, 5)} />
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="link" className="text-forest-600">
              <Link href="/faq">View all questions</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
