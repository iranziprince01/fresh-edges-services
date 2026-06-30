import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { services, getServiceBySlug, getRelatedServices } from "@/data/services";
import { JsonLd } from "@/components/seo/json-ld";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ServiceCard, ServiceCardGrid } from "@/components/sections/service-card";
import { images } from "@/lib/images";
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

  const related = getRelatedServices(service.relatedSlugs);
  const Icon = service.icon;

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

      <section className="relative overflow-hidden bg-forest-950 py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.shortTitle}
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
        </div>
        <Container className="relative">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.shortTitle },
            ]}
          />
          <div className="flex max-w-3xl flex-col gap-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-50 text-fresh-400">
              <Icon className="h-7 w-7" aria-hidden />
            </div>
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
              {service.shortTitle}
            </h1>
            <p className="text-lg text-white/80">{service.description}</p>
            <Button asChild size="lg" className="w-fit bg-fresh-500 text-forest-950 hover:bg-fresh-400">
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
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow="Overview"
                title={`Professional ${service.shortTitle} in Edmonton`}
                align="left"
                className="mb-0"
              />
              <p className="mt-4 text-muted-foreground leading-relaxed">{service.overview}</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={service.heroImage}
                alt={`${service.shortTitle} in Edmonton`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <SectionHeader eyebrow="Benefits" title="Why Choose Fresh Edges" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="flex gap-3 rounded-2xl border border-border/60 bg-card p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest-600 dark:text-fresh-400" aria-hidden />
                <p className="text-sm">{benefit}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader eyebrow="Who It's For" title="Ideal For" align="left" className="mb-6" />
              <ul className="space-y-3">
                {service.audience.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-forest-600" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader eyebrow="Scope" title="What's Included" align="left" className="mb-6" />
              <ul className="space-y-3">
                {service.included.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-forest-600" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="gradient">
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

      <Section>
        <Container>
          <SectionHeader eyebrow="Gallery" title="Our Work" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[service.heroImage, images.residentialCleaning, images.commercialOffice].map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={src} alt={`${service.shortTitle} project ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mx-auto max-w-3xl">
            <FaqAccordion items={service.faqs} />
          </div>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section>
          <Container>
            <SectionHeader eyebrow="Related" title="Related Services" />
            <ServiceCardGrid>
              {related.map((s) => (
                <ServiceCard
                  key={s.slug}
                  title={s.shortTitle}
                  description={s.description}
                  href={`/services/${s.slug}`}
                  icon={s.icon}
                />
              ))}
            </ServiceCardGrid>
          </Container>
        </Section>
      )}

      <CtaSection
        title={`Interested in ${service.shortTitle}?`}
        description="Share your property details and we'll respond within one business day with a clear proposal."
      />
    </>
  );
}
