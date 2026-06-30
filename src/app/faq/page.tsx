import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { faqs } from "@/data/faq";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/schemas";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = createMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Fresh Edges cleaning, landscaping, snow removal, pricing, and service areas in Edmonton, Alberta.",
  path: "/faq",
});

const categories = [...new Set(faqs.map((f) => f.category))];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      <section className="bg-gradient-to-br from-forest-900 to-forest-950 py-20 md:py-28">
        <Container>
          <Breadcrumbs items={[{ label: "FAQ" }]} />
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold text-white md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Everything you need to know about our services, pricing, and coverage.
          </p>
        </Container>
      </section>

      <Section>
        <Container className="max-w-3xl">
          {categories.map((category) => (
            <div key={category} className="mb-12 last:mb-0">
              <h2 className="mb-6 font-heading text-2xl font-semibold">{category}</h2>
              <FaqAccordion items={faqs.filter((f) => f.category === category)} />
            </div>
          ))}
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
