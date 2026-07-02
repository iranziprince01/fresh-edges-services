import type { Metadata } from "next";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { CtaSection } from "@/components/sections/cta-section";
import { ImpactContributionCards } from "@/components/sections/impact-contribution-cards";
import { images } from "@/lib/images";

export const metadata: Metadata = createMetadata({
  title: "Our Impact",
  description:
    "Fresh Edges Services Ltd is committed to building stronger communities through employment opportunities, newcomer support, and meaningful contribution across Alberta.",
  path: "/impact",
});

export default function ImpactPage() {
  return (
    <>
      <section className="bg-forest-600 py-24 md:py-32">
        <Container>
          <Breadcrumbs items={[{ label: "Impact" }]} />
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.15]">
            Building Business While Building Community
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            At Fresh Edges Services Ltd, we believe business should do more than generate revenue.
            A business should create opportunity.
          </p>
        </Container>
      </section>

      <Section>
        <Container className="grid items-center gap-16 overflow-visible lg:grid-cols-[1fr_min(42%,440px)] lg:gap-20 xl:gap-24">
          <div className="flex flex-col justify-center">
            <SectionHeader
              eyebrow="Newcomer support"
              title="Creating pathways to meaningful work in Canada"
              align="left"
              spacing="tight"
              className="max-w-none"
            />
            <div className="mt-14 space-y-6 leading-relaxed text-muted-foreground">
              <p>
                As a proudly Canadian company, we are committed to supporting newcomers to Canada
                by helping create pathways toward employment, work experience, and successful
                integration into Canadian society.
              </p>
              <p>
                Many talented newcomers arrive with skills and ambition but struggle because they
                lack Canadian work experience. We understand that challenge. That is why our
                company intentionally works to help people build meaningful opportunities while
                contributing to their long-term success.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[340px] overflow-visible lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[3/4] min-h-[320px] w-full overflow-visible">
              <div
                className="absolute top-[5%] left-[18%] -right-[3%] z-0 h-[90%] rounded-[1.75rem] bg-fresh-400 shadow-[0_20px_48px_rgba(115,220,100,0.45)] lg:rounded-[2rem]"
                aria-hidden
              />
              <div className="relative z-10 h-full overflow-hidden rounded-[1.75rem] ring-2 ring-forest-200/80 lg:rounded-[2rem]">
                <Image
                  src={images.cleaner}
                  alt="Fresh Edges team member supporting community employment opportunities"
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
          <SectionHeader
            title="How we contribute"
            description="Our growth should create opportunities for others to grow as well. We believe when businesses create opportunity, communities become stronger."
          />
          <ImpactContributionCards />
        </Container>
      </Section>

      <CtaSection
        title="Partner with a company that invests in community"
        description="Whether you need property services or want to join our team, we'd be glad to connect."
      />
    </>
  );
}
