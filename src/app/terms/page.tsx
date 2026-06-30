import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.name}. Read our service terms, conditions, and policies.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <section className="bg-muted/50 py-12">
        <Container size="narrow">
          <Breadcrumbs items={[{ label: "Terms of Service" }]} />
          <h1 className="mt-4 font-heading text-3xl font-bold md:text-4xl">Terms of Service</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: June 30, 2026</p>
        </Container>
      </section>
      <Section>
        <Container size="narrow">
          <div className="prose prose-neutral max-w-none dark:prose-invert">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing our website or engaging {siteConfig.name} for services, you agree to these
              Terms of Service. If you do not agree, please do not use our website or services.
            </p>
            <h2>Services</h2>
            <p>
              We provide property maintenance services including commercial and residential cleaning,
              janitorial services, landscaping, lawn care, pressure washing, post-construction cleaning,
              snow removal, and related facility support in the Edmonton metropolitan area.
            </p>
            <h2>Quotes and Contracts</h2>
            <p>
              Quotes provided through our website are estimates based on information you supply. Final
              pricing is confirmed in a written service agreement. Service terms, frequency, and scope
              are defined in your individual contract.
            </p>
            <h2>Payment Terms</h2>
            <p>
              Payment terms are specified in your service agreement. Late payments may incur fees as
              outlined in your contract. We reserve the right to suspend services for overdue accounts.
            </p>
            <h2>Cancellation</h2>
            <p>
              Cancellation terms vary by service type and are specified in your agreement. Seasonal
              contracts may require advance notice for cancellation as outlined at signing.
            </p>
            <h2>Liability</h2>
            <p>
              {siteConfig.name} maintains comprehensive liability insurance and WCB coverage. Our
              liability is limited to the terms specified in your service agreement and applicable law.
            </p>
            <h2>Website Use</h2>
            <p>
              Website content is provided for informational purposes. We make reasonable efforts to keep
              information accurate but do not warrant completeness. Unauthorized use of website content
              is prohibited.
            </p>
            <h2>Contact</h2>
            <p>
              Questions about these terms? Contact us at {siteConfig.email} or {siteConfig.phone}.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
