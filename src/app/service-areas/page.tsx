import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = createMetadata({
  title: "Service Areas",
  description:
    "Fresh Edges serves Edmonton, Sherwood Park, St. Albert, Beaumont, Leduc, and surrounding Alberta communities with property maintenance services.",
  path: "/service-areas",
  keywords: ["Property Maintenance Edmonton", "Cleaning Company Edmonton"],
});

const areaDetails = [
  { name: "Edmonton", description: "Full-service coverage across all quadrants, downtown, and industrial areas." },
  { name: "Sherwood Park", description: "Commercial and residential programs for Strathcona County properties." },
  { name: "St. Albert", description: "Cleaning, landscaping, and snow management for homes and businesses." },
  { name: "Beaumont", description: "Growing community support for new developments and established neighbourhoods." },
  { name: "Leduc", description: "Industrial, commercial, and residential services near the airport corridor." },
  { name: "Spruce Grove", description: "Residential lawn care, cleaning, and seasonal property maintenance." },
  { name: "Stony Plain", description: "Comprehensive grounds care and cleaning for homes and small businesses." },
  { name: "Fort Saskatchewan", description: "Janitorial, snow removal, and facility support for local industry." },
];

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-forest-900 to-forest-950 py-20 md:py-28">
        <Container>
          <Breadcrumbs items={[{ label: "Service Areas" }]} />
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold text-white md:text-5xl">
            Serving the Greater Edmonton Region
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Local crews. Fast response. Premium results wherever you are in the capital region.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {areaDetails.map((area) => (
              <div
                key={area.name}
                id={area.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}
                className="scroll-mt-28 rounded-2xl border border-border/60 p-6"
              >
                <MapPin className="mb-3 h-5 w-5 text-forest-600 dark:text-fresh-400" aria-hidden />
                <h2 className="font-heading text-lg font-semibold">{area.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <SectionHeader title="Coverage Map" description="Proudly serving communities across the Edmonton metropolitan area." />
          <div
            className="flex aspect-[16/9] items-center justify-center rounded-3xl border border-border/60 bg-gradient-to-br from-forest-100 to-sky-50 dark:from-forest-950 dark:to-forest-900"
            role="img"
            aria-label="Map showing Fresh Edges service coverage across Edmonton and surrounding areas"
          >
            <div className="text-center p-8">
              <MapPin className="mx-auto h-12 w-12 text-forest-600 dark:text-fresh-400" aria-hidden />
              <p className="mt-4 font-heading text-xl font-semibold">Edmonton Metro Coverage</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {siteConfig.address.city}, {siteConfig.address.province} ·{" "}
                {siteConfig.geo.latitude}°N, {Math.abs(siteConfig.geo.longitude)}°W
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Interactive map integration ready for Google Maps embed
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
