import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Briefcase,
  CreditCard,
  CalendarX2,
  ShieldCheck,
  Globe,
  Scale,
  AlertTriangle,
  Mail,
} from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.name}. Read our service terms, conditions, and policies governing property care services in Alberta, Canada.`,
  path: "/terms",
});

const sections = [
  {
    icon: FileText,
    title: "Agreement to Terms",
    paragraphs: [
      `By accessing or using the ${siteConfig.name} website or engaging us for any property care service, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.`,
      `These terms constitute a legally binding agreement between you and ${siteConfig.name}, a company registered in the Province of Alberta, Canada.`,
    ],
  },
  {
    icon: Briefcase,
    title: "Services We Provide",
    paragraphs: [
      `${siteConfig.name} provides professional property maintenance services across the Edmonton metropolitan area and surrounding communities, including:`,
    ],
    items: [
      "Commercial and residential cleaning",
      "Janitorial and facility support services",
      "Landscaping and lawn care",
      "Pressure washing and exterior care",
      "Snow removal and ice management",
      "Post-construction cleanup",
      "Property maintenance and seasonal care",
    ],
    footer:
      "Service availability, scope, and scheduling are subject to seasonal conditions, staffing, and geographic coverage.",
  },
  {
    icon: CreditCard,
    title: "Quotes, Pricing & Payment",
    paragraphs: [
      "Quotes provided through our website or during consultations are estimates based on the information you supply. Final pricing is confirmed in a written service agreement before work begins.",
    ],
    items: [
      "All prices are quoted in Canadian dollars (CAD) and are subject to applicable GST",
      "Payment terms, methods, and schedules are specified in your individual service contract",
      "Invoices are due within the timeframe specified in your agreement (typically Net 15 or Net 30)",
      "Late payments may incur administrative fees as outlined in your contract",
      "We reserve the right to suspend services for accounts with overdue balances exceeding 30 days",
    ],
  },
  {
    icon: CalendarX2,
    title: "Cancellation & Rescheduling",
    paragraphs: [
      "We understand plans change. Our cancellation policies are designed to be fair to both parties:",
    ],
    items: [
      "One-time services: cancellations with less than 24 hours notice may be subject to a cancellation fee",
      "Recurring service contracts: cancellation terms and required notice periods are specified in your service agreement",
      "Seasonal contracts (e.g., snow removal) may require advance written notice for cancellation as outlined at signing",
      "Weather-related rescheduling: services affected by severe weather will be rescheduled at no additional cost",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Insurance & Liability",
    paragraphs: [
      `${siteConfig.name} maintains comprehensive commercial general liability insurance and Workers' Compensation Board (WCB) coverage for all employees and operations in Alberta.`,
    ],
    items: [
      "Our liability for any claim arising from services is limited to the terms specified in your service agreement and applicable law",
      "We are not liable for pre-existing property damage, normal wear and tear, or damage caused by conditions beyond our reasonable control",
      "Clients are responsible for disclosing relevant property conditions, hazards, or access restrictions before service begins",
      "Proof of insurance and WCB coverage is available upon request",
    ],
  },
  {
    icon: Globe,
    title: "Website Use",
    paragraphs: [
      "The content on our website is provided for general informational purposes about our services. While we make reasonable efforts to keep information accurate and up to date:",
    ],
    items: [
      "We do not warrant that all content is complete, current, or error-free",
      "Website content does not constitute a binding offer or contract for services",
      "Unauthorized reproduction, distribution, or modification of website content is prohibited",
      "Third-party links on our site are provided for convenience and do not imply endorsement",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Force Majeure",
    paragraphs: [
      `${siteConfig.name} shall not be held liable for delays or failure to perform services due to circumstances beyond our reasonable control, including but not limited to severe weather events, natural disasters, pandemics, government orders, labour disputes, or supply chain disruptions.`,
      "In such cases, we will make reasonable efforts to reschedule affected services as soon as conditions permit.",
    ],
  },
  {
    icon: Scale,
    title: "Governing Law & Disputes",
    paragraphs: [
      "These Terms of Service are governed by and construed in accordance with the laws of the Province of Alberta and the applicable federal laws of Canada.",
      "Any disputes arising from these terms or our services shall be resolved through good-faith negotiation. If a resolution cannot be reached, disputes will be submitted to the exclusive jurisdiction of the courts of Alberta, sitting in Edmonton.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="page-hero bg-forest-600">
        <Container>
          <Breadcrumbs items={[{ label: "Terms of Service" }]} />
          <h1 className="page-title mt-4">Terms of Service</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg">
            These terms govern your use of the {siteConfig.name} website and our professional
            property care services in Alberta, Canada.
          </p>
          <p className="mt-3 text-sm text-white/60">
            Effective date: June 30, 2025 · Last updated: June 30, 2026
          </p>
        </Container>
      </section>

      <Section>
        <Container size="narrow">
          <div className="space-y-10 sm:space-y-14">
            {sections.map(({ icon: Icon, title, paragraphs, items, footer }) => (
              <article key={title}>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-600 text-white shadow-sm sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      {title}
                    </h2>
                    {paragraphs.map((p) => (
                      <p key={p.slice(0, 40)} className="mt-3 text-base leading-relaxed text-muted-foreground">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
                {items && items.length > 0 && (
                  <ul className="mt-5 space-y-3 pl-14 sm:pl-16">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-500" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {footer && (
                  <p className="mt-4 pl-14 text-sm italic text-muted-foreground sm:pl-16">
                    {footer}
                  </p>
                )}
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-forest-200/80 bg-forest-50/60 p-6 sm:mt-20 sm:p-8">
            <h2 className="font-heading text-xl font-bold tracking-tight sm:text-2xl">
              Questions About These Terms?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              If you have any questions about these Terms of Service or need clarification
              on any provision, please do not hesitate to contact us:
            </p>
            <div className="mt-5 space-y-2 text-sm font-medium sm:text-base">
              <p>
                Email:{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-forest-600 hover:text-forest-700">
                  {siteConfig.email}
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href={siteConfig.phoneHref} className="text-forest-600 hover:text-forest-700">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                Office: {siteConfig.address.street}, {siteConfig.address.city},{" "}
                {siteConfig.address.province} {siteConfig.address.postalCode}
              </p>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground sm:mt-14">
            These terms apply to all services provided by {siteConfig.name} and
            may be updated from time to time. Continued use of our website or services after
            changes constitutes acceptance of the revised terms.
          </p>
        </Container>
      </Section>
    </>
  );
}
