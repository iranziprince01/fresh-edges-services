import type { Metadata } from "next";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ServicesPageCard } from "@/components/sections/services-page-card";
import { CtaSection } from "@/components/sections/cta-section";
import { serviceListingCards } from "@/data/services";
import { images } from "@/lib/images";

export const metadata: Metadata = createMetadata({
  title: "Property Services Edmonton",
  description:
    "Explore commercial cleaning, residential cleaning, snow removal, landscaping, pressure washing, property maintenance, and post construction cleanup in Edmonton, Alberta.",
  path: "/services",
  keywords: ["Property Services Edmonton", "Cleaning Company Edmonton"],
});

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={images.servicesBanner}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-600/90 via-forest-600/90 to-forest-700/85" />
        </div>

        <Container className="relative">
          <Breadcrumbs items={[{ label: "Services" }]} variant="light" />
          <h1 className="max-w-3xl font-heading text-4xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.15]">
            Complete Property Solutions For Homes And Businesses
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            Fresh Edges Services offers year-round professional property care solutions designed
            to simplify property management and maintain high-quality spaces.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
            {serviceListingCards.map((card) => (
              <ServicesPageCard key={card.slug} card={card} />
            ))}
          </div>
        </Container>
      </Section>

      <CtaSection variant="muted" />
    </>
  );
}
