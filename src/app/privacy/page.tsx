import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, Eye, UserCheck, Server, Mail } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}. Learn how we collect, use, and protect your personal information in accordance with Canadian privacy legislation.`,
  path: "/privacy",
});

const sections = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: `When you interact with ${siteConfig.name}, we may collect the following types of personal information:`,
    items: [
      "Contact details: your name, email address, phone number, and mailing address",
      "Property and service information submitted through our booking and contact forms",
      "Communications: records of emails, calls, or messages you send us",
      "Website usage data: pages visited, browser type, device information, and IP address collected through cookies and analytics tools",
    ],
  },
  {
    icon: UserCheck,
    title: "How We Use Your Information",
    content:
      "We use your personal information only for legitimate business purposes, including:",
    items: [
      "Providing accurate quotes and delivering the property maintenance services you request",
      "Communicating about appointments, service updates, invoicing, and account matters",
      "Improving our website experience, service quality, and customer satisfaction",
      "Meeting our obligations under applicable Canadian federal and provincial laws",
      "Responding to inquiries and providing customer support",
    ],
  },
  {
    icon: Lock,
    title: "Information Sharing & Disclosure",
    content:
      "We do not sell, rent, or trade your personal information to third parties. We may share limited data with:",
    items: [
      "Trusted service providers who assist our operations (e.g., payment processors, scheduling software, email delivery) under strict confidentiality agreements",
      "Legal authorities when required by Canadian law, regulation, or valid legal process",
      "Professional advisors such as accountants or legal counsel bound by professional confidentiality obligations",
    ],
  },
  {
    icon: Server,
    title: "Data Security & Retention",
    content:
      "We take the protection of your information seriously and implement appropriate safeguards:",
    items: [
      "Encrypted data transmission (SSL/TLS) across our website and communications",
      "Access controls limiting employee access to personal information on a need-to-know basis",
      "Regular review of our security practices to align with industry standards",
      "Retention of personal information only as long as necessary for the purposes described or as required by law",
    ],
  },
  {
    icon: Shield,
    title: "Your Rights Under Canadian Law",
    content: `Under the Personal Information Protection and Electronic Documents Act (PIPEDA) and Alberta's Personal Information Protection Act (PIPA), you have the right to:`,
    items: [
      "Request access to the personal information we hold about you",
      "Request correction of inaccurate or incomplete information",
      "Withdraw consent for the collection or use of your information, subject to legal or contractual restrictions",
      "File a complaint with the Office of the Privacy Commissioner of Canada or the Office of the Information and Privacy Commissioner of Alberta",
    ],
  },
  {
    icon: Mail,
    title: "Cookies & Analytics",
    content:
      "Our website uses cookies and similar technologies to improve your browsing experience:",
    items: [
      "Essential cookies: required for site functionality such as form submissions",
      "Analytics cookies: help us understand how visitors use our site so we can improve it (e.g., Google Analytics)",
      "You can control cookie preferences through your browser settings at any time",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero bg-forest-600">
        <Container>
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
          <h1 className="page-title mt-4">Privacy Policy</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg">
            Your privacy matters to us. This policy explains how {siteConfig.name} collects,
            uses, and protects your personal information in compliance with Canadian privacy
            legislation.
          </p>
          <p className="mt-3 text-sm text-white/60">
            Effective date: June 30, 2025 · Last updated: June 30, 2026
          </p>
        </Container>
      </section>

      <Section>
        <Container size="narrow">
          <Card className="surface-card mb-10 ring-0 sm:mb-14">
            <CardContent className="p-6 sm:p-8">
              <p className="text-base leading-relaxed text-muted-foreground">
                {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
                &ldquo;us&rdquo;) is an Alberta-registered company providing professional
                property care services across the Edmonton metropolitan area. We are committed
                to handling your personal information responsibly and transparently in accordance
                with the <strong>Personal Information Protection and Electronic Documents Act
                (PIPEDA)</strong> and Alberta&apos;s <strong>Personal Information Protection Act
                (PIPA)</strong>.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-10 sm:space-y-14">
            {sections.map(({ icon: Icon, title, content, items }) => (
              <article key={title}>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-600 text-white shadow-sm sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      {title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {content}
                    </p>
                  </div>
                </div>
                <ul className="mt-5 space-y-3 pl-14 sm:pl-16">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-500" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-forest-200/80 bg-forest-50/60 p-6 sm:mt-20 sm:p-8">
            <h2 className="font-heading text-xl font-bold tracking-tight sm:text-2xl">
              Questions or Requests?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              If you have questions about this Privacy Policy, wish to exercise your privacy
              rights, or have a concern about how your information is being handled, please
              contact our privacy team:
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
                Mail: {siteConfig.address.street}, {siteConfig.address.city},{" "}
                {siteConfig.address.province} {siteConfig.address.postalCode},{" "}
                {siteConfig.address.country}
              </p>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground sm:mt-14">
            This policy applies to {siteConfig.url} and all services provided by{" "}
            {siteConfig.name}. We may update this policy periodically. The
            &ldquo;Last updated&rdquo; date above reflects the most recent revision.
          </p>
        </Container>
      </Section>
    </>
  );
}
