import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { services, getServiceBySlug } from "@/data/services";
import { JsonLd } from "@/components/seo/json-ld";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { CtaSection } from "@/components/sections/cta-section";
import { ServiceBenefitsSection } from "@/components/sections/service-benefits-section";
import { ServiceAudienceScopeSection } from "@/components/sections/service-audience-scope-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${slug}`,
    keywords: service.keywords,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.shortTitle, path: `/services/${slug}` },
          ]),
          faqSchema(service.faqs),
        ]}
      />

      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={service.heroImage}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-600/90 via-forest-600/90 to-forest-700/85" />
        </div>
        <Container className="relative">
          <div className="flex max-w-3xl flex-col gap-6">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl md:leading-[1.15]">
              {service.shortTitle}
            </h1>
            <p className="text-lg leading-relaxed text-white/85">{service.description}</p>
            <Button asChild size="lg" className="w-fit h-12 bg-white px-8 text-forest-600 hover:bg-white/90">
              <Link href="/quote">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid items-center gap-16 overflow-visible lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeader
                eyebrow="Overview"
                title={`Professional ${service.shortTitle} in Edmonton`}
                align="left"
                spacing="tight"
                className="max-w-none"
              />
              <div className="mt-14 space-y-3.5 text-base leading-[1.75] text-muted-foreground md:space-y-4">
                {(service.overviewParagraphs ?? [service.overview]).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative overflow-visible">
              <div
                className="absolute top-[5%] left-[18%] -right-[3%] z-0 h-[90%] rounded-[1.75rem] bg-fresh-400 shadow-[0_20px_48px_rgba(115,220,100,0.45)] lg:rounded-[2rem]"
                aria-hidden
              />
              <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-[1.75rem] ring-2 ring-forest-200/80 lg:rounded-[2rem]">
                <Image
                  src={service.heroImage}
                  alt={`${service.shortTitle} in Edmonton`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <ServiceAudienceScopeSection
        audience={service.audience}
        included={service.included}
      />

      <ServiceBenefitsSection
        benefits={service.benefits}
        image={service.benefitsImage ?? service.heroImage}
        imageAlt={`${service.shortTitle} by Fresh Edges Services`}
      />

      <Section variant="muted">
        <Container>
          <SectionHeader eyebrow="Process" title="Our Process" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <Card key={step.title} className="border-border/60 bg-card/80">
                <CardContent className="p-6">
                  <span className="text-sm font-bold text-forest-600 dark:text-fresh-400">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-2 font-heading font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CtaSection
        title={`Interested in ${service.shortTitle}?`}
        description="Share your property details and we'll respond within one business day with a clear proposal."
      />
    </>
  );
}
