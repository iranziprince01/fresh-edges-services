import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Mail } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { futurePositions, whyJoinFreshEdges } from "@/data/company";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { CtaSection } from "@/components/sections/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = createMetadata({
  title: "Careers at Fresh Edges",
  description:
    "Build your future with Fresh Edges Services Ltd. Join our growing Edmonton team in cleaning, landscaping, snow removal, and property maintenance.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-forest-900 to-forest-950 py-20 md:py-28">
        <Container>
          <Breadcrumbs items={[{ label: "Careers" }]} />
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Build Your Future With Fresh Edges Services
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            At Fresh Edges Services Ltd, we believe great companies are built by great people.
            As we continue growing across Alberta, we are committed to building a strong team of
            dedicated professionals who share our values of reliability, professionalism, hard
            work, and service excellence.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl space-y-4 leading-relaxed text-muted-foreground">
            <p>
              We are always interested in connecting with talented individuals who want to grow
              with a company that values both people and purpose.
            </p>
            <p>
              Whether you are experienced in property maintenance, cleaning services,
              landscaping, customer service, or looking to begin a new career journey, we would
              love to hear from you.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <SectionHeader
            eyebrow="Opportunities coming soon"
            title="We are expanding across Alberta"
            description="We are currently expanding and preparing to open new employment opportunities in several departments. Official job openings will be announced soon."
          />
          <ul className="mx-auto grid max-w-2xl gap-3 sm:grid-cols-2">
            {futurePositions.map((position) => (
              <li
                key={position}
                className="rounded-xl border border-border/80 bg-card px-4 py-3 text-sm font-medium"
              >
                {position}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader title="Why join Fresh Edges?" />
          <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {whyJoinFreshEdges.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest-600 dark:text-fresh-400" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <Card className="mx-auto max-w-2xl rounded-2xl border-border/80 shadow-none">
            <CardContent className="p-8 text-center md:p-10">
              <SectionHeader
                title="Interested in working with us?"
                description="Even if positions are not currently open, we welcome talented individuals who would like to be considered for future opportunities. Send us your resume and a short introduction."
                className="mb-0"
              />
              <div className="mt-8">
                <p className="text-sm font-medium text-foreground">Resume submission</p>
                <a
                  href={`mailto:${siteConfig.careersEmail}`}
                  className="mt-2 inline-flex items-center gap-2 text-lg font-medium text-forest-600 hover:text-forest-700 dark:text-fresh-400"
                >
                  <Mail className="h-5 w-5" aria-hidden />
                  {siteConfig.careersEmail}
                </a>
                <p className="mt-4 text-sm text-muted-foreground">
                  We will keep your information on file and contact qualified candidates when
                  opportunities become available.
                </p>
              </div>
              <Button asChild className="mt-8 bg-forest-600 hover:bg-forest-700">
                <Link href={`mailto:${siteConfig.careersEmail}?subject=Career%20Inquiry`}>
                  Send your resume
                </Link>
              </Button>
              <p className="mt-6 text-sm font-medium text-forest-600 dark:text-fresh-400">
                Your future opportunity could start here.
              </p>
            </CardContent>
          </Card>
        </Container>
      </Section>

      <CtaSection
        title="Questions about careers at Fresh Edges?"
        description="Reach out to our team. We'd be glad to hear from you."
      />
    </>
  );
}
