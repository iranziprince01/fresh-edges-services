import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroSection } from "@/components/sections/intro-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { testimonials, stats } from "@/data/testimonials";
import { images } from "@/lib/images";

const processSteps = [
  {
    step: "01",
    title: "We listen",
    description: "A short consultation to understand your property, priorities, and schedule.",
    image: images.processSteps[0],
    imageAlt: "Consultation to understand property needs",
  },
  {
    step: "02",
    title: "We propose",
    description: "A clear scope and transparent pricing with no hidden fees or vague line items.",
    image: images.processSteps[1],
    imageAlt: "Clear proposal and transparent pricing",
  },
  {
    step: "03",
    title: "We onboard",
    description: "Crews briefed on your site, access, and standards before the first visit.",
    image: images.processSteps[2],
    imageAlt: "Team onboarding and site briefing",
  },
  {
    step: "04",
    title: "We deliver",
    description: "Consistent execution with regular check-ins and proactive communication.",
    image: images.processSteps[3],
    imageAlt: "Consistent property service delivery",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <IntroSection />

      <WhyChooseUsSection />

      <Section>
        <Container>
          <SectionHeader
            eyebrow="What we do"
            title="Complete property solutions for homes and businesses"
            description="Fresh Edges Services offers year-round professional property care solutions designed to simplify property management and maintain high-quality spaces."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Commercial",
                description:
                  "Offices, retail, healthcare, and multi-tenant buildings that need consistent standards.",
                href: "/services/commercial-cleaning",
              },
              {
                title: "Residential",
                description:
                  "Home cleaning and exterior care for Edmonton homeowners who value their time.",
                href: "/services/residential-cleaning",
              },
              {
                title: "Seasonal",
                description:
                  "Snow removal, ice management, and winter property protection when Alberta demands it.",
                href: "/services/snow-removal",
              },
              {
                title: "Maintenance",
                description:
                  "Landscaping, lawn care, pressure washing, and year-round property upkeep.",
                href: "/services/property-maintenance",
              },
            ].map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group flex flex-col rounded-2xl border border-forest-500/40 bg-forest-600 p-6 shadow-sm shadow-forest-950/15 transition-[border-color,background-color,box-shadow] hover:border-forest-400 hover:bg-forest-700 hover:shadow-md hover:shadow-forest-950/20 sm:p-8"
              >
                <h3 className="font-heading text-xl font-semibold tracking-tight text-white">
                  {category.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/80">
                  {category.description}
                </p>
                <span className="mt-6 text-sm font-medium text-white group-hover:text-fresh-300">
                  Explore services →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center sm:mt-14">
            <Button asChild size="lg" className="h-12 w-full bg-forest-600 px-8 hover:bg-forest-700 sm:w-auto">
              <Link href="/services">Explore More Services</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-forest-600 py-16 text-white sm:py-20 md:py-28 lg:py-32">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="How we work"
            title="A straightforward process"
            description="No lengthy sales cycles. We learn your needs, propose clearly, and get to work."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <Card
                key={step.step}
                className="gap-0 overflow-hidden rounded-2xl border border-forest-200/80 bg-white p-0 shadow-sm shadow-forest-950/[0.05] ring-0 transition-[border-color,box-shadow] hover:border-forest-300/80 hover:shadow-md hover:shadow-forest-950/[0.08] dark:bg-card"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <CardContent className="p-6">
                  <span className="font-heading text-sm font-medium text-forest-600 dark:text-fresh-400">
                    {step.step}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <SectionHeader
            eyebrow="Clients"
            title="What property owners say about working with us"
            description="Feedback from facility managers, business owners, and homeowners across the Edmonton region."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <Card key={t.id} className="rounded-2xl border-border/80 shadow-none">
                <CardContent className="p-8">
                  <div className="mb-4 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-fresh-500 text-fresh-500" aria-hidden />
                    ))}
                  </div>
                  <blockquote className="text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 border-t border-border pt-6">
                    <p className="font-medium">{t.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {t.role}
                      {t.company ? `, ${t.company}` : ""} · {t.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
