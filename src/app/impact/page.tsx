import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { CtaSection } from "@/components/sections/cta-section";
import { impactContributions } from "@/data/company";

export const metadata: Metadata = createMetadata({
  title: "Our Impact",
  description:
    "Fresh Edges Services Ltd is committed to building stronger communities through employment opportunities, newcomer support, and meaningful contribution across Alberta.",
  path: "/impact",
});

export default function ImpactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-forest-900 to-forest-950 py-20 md:py-28">
        <Container>
          <Breadcrumbs items={[{ label: "Impact" }]} />
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.15]">
            Building Business While Building Community
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            At Fresh Edges Services Ltd, we believe business should do more than generate revenue.
            A business should create opportunity.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 leading-relaxed text-muted-foreground">
            <p>
              As a proudly Canadian company, we are committed to supporting newcomers to Canada
              by helping create pathways toward employment, work experience, and successful
              integration into Canadian society.
            </p>
            <p>
              Many talented newcomers arrive with skills and ambition but struggle because they
              lack Canadian work experience. We understand that challenge. That is why our
              company intentionally works to help people build meaningful opportunities while
              contributing to their long-term success.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <SectionHeader
            title="How we contribute"
            description="Our growth should create opportunities for others to grow as well."
          />
          <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {impactContributions.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-border/80 bg-card p-5 text-sm text-muted-foreground"
              >
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-forest-600 dark:bg-fresh-400"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-12 max-w-2xl text-center text-base font-medium text-forest-700 dark:text-fresh-400">
            We believe when businesses create opportunity, communities become stronger.
          </p>
        </Container>
      </Section>

      <CtaSection
        title="Partner with a company that invests in community"
        description="Whether you need property services or want to join our team, we'd be glad to connect."
      />
    </>
  );
}
