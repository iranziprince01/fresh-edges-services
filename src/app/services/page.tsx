import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { services } from "@/data/services";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ServiceCard, ServiceCardGrid } from "@/components/sections/service-card";
import { CtaSection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = createMetadata({
  title: "Property Services Edmonton",
  description:
    "Explore commercial cleaning, residential cleaning, snow removal, landscaping, pressure washing, and property maintenance services in Edmonton, Alberta.",
  path: "/services",
  keywords: ["Property Services Edmonton", "Cleaning Company Edmonton"],
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-forest-900 to-forest-950 py-20 md:py-28">
        <Container>
          <Breadcrumbs items={[{ label: "Services" }]} />
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Complete Property Solutions For Homes And Businesses
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            Fresh Edges Services offers year-round professional property care solutions designed
            to simplify property management and maintain high-quality spaces.
          </p>
          <Button asChild size="lg" className="mt-8 h-12 bg-white text-forest-900 hover:bg-white/90">
            <Link href="/quote">Book a Service</Link>
          </Button>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeader
            title="All Services"
            description="Every service is delivered with the same commitment to quality, reliability, and local expertise."
          />
          <ServiceCardGrid>
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.shortTitle}
                description={service.description}
                href={`/services/${service.slug}`}
                icon={service.icon}
              />
            ))}
          </ServiceCardGrid>
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
