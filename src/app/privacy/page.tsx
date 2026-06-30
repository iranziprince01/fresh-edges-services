import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}. Learn how we collect, use, and protect your personal information.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-muted/50 py-12">
        <Container size="narrow">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
          <h1 className="mt-4 font-heading text-3xl font-bold md:text-4xl">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: June 30, 2026</p>
        </Container>
      </section>
      <Section>
        <Container size="narrow">
          <div className="prose prose-neutral max-w-none dark:prose-invert">
            <h2>Introduction</h2>
            <p>
              {siteConfig.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is
              committed to protecting your personal information. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you visit our website or use
              our services.
            </p>
            <h2>Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>Contact information (name, email, phone number, address)</li>
              <li>Property and service details submitted through quote and contact forms</li>
              <li>Website usage data through cookies and analytics tools</li>
              <li>Communication records when you contact us</li>
            </ul>
            <h2>How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Provide quotes and deliver our property maintenance services</li>
              <li>Communicate about appointments, services, and account matters</li>
              <li>Improve our website and customer experience</li>
              <li>Comply with legal obligations</li>
            </ul>
            <h2>Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share data with service providers who
              assist in operating our business (e.g., payment processors, scheduling software) under
              strict confidentiality agreements.
            </p>
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <h2>Your Rights</h2>
            <p>
              Under applicable Canadian privacy laws, you may request access to, correction of, or
              deletion of your personal information. Contact us at {siteConfig.email} to exercise these rights.
            </p>
            <h2>Contact Us</h2>
            <p>
              For privacy-related inquiries, contact us at {siteConfig.email} or {siteConfig.phone}.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
