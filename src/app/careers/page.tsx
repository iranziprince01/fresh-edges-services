import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Mail, ArrowRight } from "lucide-react";
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
import { images } from "@/lib/images";

export const metadata: Metadata = createMetadata({
  title: "Careers at Fresh Edges",
  description:
    "Build your future with Fresh Edges Services Ltd. Join our growing Edmonton team in cleaning, landscaping, snow removal, and property maintenance.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <section className="bg-forest-600 py-24 md:py-32">
        <Container>
          <Breadcrumbs items={[{ label: "Careers" }]} />
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Build Your Future With Fresh Edges Services
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            At Fresh Edges Services Ltd, we believe great companies are built by great people.
          </p>
        </Container>
      </section>

      <Section>
        <Container className="grid items-center gap-16 overflow-visible lg:grid-cols-[min(46%,480px)_1fr] lg:gap-20 xl:gap-24">
          <div className="relative mx-auto w-full max-w-[380px] overflow-visible lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[3/4] min-h-[320px] w-full overflow-visible">
              <div
                className="absolute top-[5%] right-[18%] -left-[3%] z-0 h-[90%] rounded-[1.75rem] bg-fresh-400 shadow-[0_20px_48px_rgba(115,220,100,0.45)] lg:rounded-[2rem]"
                aria-hidden
              />
              <div className="relative z-10 h-full overflow-hidden rounded-[1.75rem] ring-2 ring-forest-200/80 lg:rounded-[2rem]">
                <Image
                  src={images.career}
                  alt="Fresh Edges team member at work"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 380px, 480px"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <SectionHeader
              eyebrow="Why work with us"
              title="Join a growing team built on reliability and excellence"
              align="left"
              spacing="tight"
              className="max-w-none"
            />
            <div className="mt-14 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                As we continue growing across Alberta, we are committed to building a strong team of
                dedicated professionals who share our values of reliability, professionalism, hard
                work, and service excellence.
              </p>
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
        <Container className="grid items-center gap-16 overflow-visible lg:grid-cols-[minmax(0,32rem)_1fr] lg:justify-between lg:gap-16 xl:gap-20">
          <div className="flex w-full max-w-md flex-col justify-center lg:max-w-lg">
            <SectionHeader
              title="Why join Fresh Edges?"
              align="left"
              spacing="tight"
              className="max-w-none"
            />
            <ul className="mt-14 flex flex-col gap-3">
              {whyJoinFreshEdges.map((item) => (
                <li key={item}>
                  <div className="flex items-center gap-3 rounded-lg border border-border/80 bg-card px-4 py-3.5">
                    <CheckCircle2
                      className="h-4 w-4 shrink-0 text-forest-600 dark:text-fresh-400"
                      aria-hidden
                    />
                    <span className="text-sm leading-none text-foreground md:whitespace-nowrap">
                      {item}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[340px] overflow-visible lg:ml-auto lg:max-w-[400px] xl:max-w-[440px]">
            <div className="relative aspect-[3/4] min-h-[320px] w-full overflow-visible">
              <div
                className="absolute top-[5%] left-[18%] -right-[3%] z-0 h-[90%] rounded-[1.75rem] bg-fresh-400 shadow-[0_20px_48px_rgba(115,220,100,0.45)] lg:rounded-[2rem]"
                aria-hidden
              />
              <div className="relative z-10 h-full overflow-hidden rounded-[1.75rem] ring-2 ring-forest-200/80 lg:rounded-[2rem]">
                <Image
                  src={images.join}
                  alt="Join the Fresh Edges team in Edmonton"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 340px, 440px"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <Card className="mx-auto max-w-2xl overflow-hidden rounded-[1.75rem] border-forest-200/80 bg-white shadow-[0_14px_36px_rgba(20,83,45,0.08)]">
            <CardContent className="p-8 text-center md:p-10">
              <SectionHeader
                eyebrow="Get in touch"
                title="Interested in working with us?"
                description="Even if positions are not currently open, we welcome talented individuals who would like to be considered for future opportunities. Send us your resume and a short introduction."
                className="mb-0"
              />
              <div className="mx-auto mt-8 max-w-md rounded-xl border border-forest-100 bg-forest-50/60 px-5 py-5">
                <p className="text-sm font-medium text-foreground">Resume submission</p>
                <a
                  href={`mailto:${siteConfig.careersEmail}`}
                  className="mt-2 inline-flex items-center justify-center gap-2 text-lg font-medium text-forest-600 transition-colors hover:text-forest-700 dark:text-fresh-400"
                >
                  <Mail className="h-5 w-5 shrink-0" aria-hidden />
                  {siteConfig.careersEmail}
                </a>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  We will keep your information on file and contact qualified candidates when
                  opportunities become available.
                </p>
              </div>
              <Button asChild size="lg" className="mt-8 h-12 bg-forest-600 px-8 hover:bg-forest-700">
                <Link href={`mailto:${siteConfig.careersEmail}?subject=Career%20Inquiry`}>
                  Send your resume
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
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
