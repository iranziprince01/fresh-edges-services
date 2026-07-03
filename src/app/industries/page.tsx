import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { industries } from "@/data/industries";
import { getServiceBySlug } from "@/data/services";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { CtaSection } from "@/components/sections/cta-section";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = createMetadata({
  title: "Industries",
  description:
    "Fresh Edges serves offices, healthcare, retail, restaurants, schools, warehouses, property management, and municipal organizations across Edmonton.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero bg-forest-600">
        <Container>
          <Breadcrumbs items={[{ label: "Industries" }]} />
          <h1 className="page-title mt-4">Industries We Serve</h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            Tailored property maintenance solutions for every sector across Edmonton and Alberta.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((industry) => (
              <Card key={industry.slug} id={industry.slug} className="scroll-mt-28 border-border/60">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 text-forest-700 dark:bg-forest-900 dark:text-fresh-400">
                    <industry.icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h2 className="font-heading text-xl font-semibold">{industry.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{industry.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {industry.services.map((slug) => {
                      const service = getServiceBySlug(slug);
                      return service ? (
                        <Link
                          key={slug}
                          href={`/services/${slug}`}
                          className="rounded-full bg-muted px-3 py-1 text-xs font-medium transition-colors hover:bg-forest-100 hover:text-forest-700 dark:hover:bg-forest-900"
                        >
                          {service.shortTitle}
                        </Link>
                      ) : null;
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
