import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { FramedImage } from "@/components/layout/framed-image";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { CtaSection } from "@/components/sections/cta-section";
import { ImpactContributionCards } from "@/components/sections/impact-contribution-cards";
import { images } from "@/lib/images";

export const metadata: Metadata = createMetadata({
  title: "Impact",
  description:
    "Fresh Edges Services Ltd is committed to building stronger communities through employment opportunities, newcomer support, and meaningful contribution across Alberta.",
  path: "/impact",
});

export default function ImpactPage() {
  return (
    <>
      <section className="page-hero bg-forest-600">
        <Container>
          <Breadcrumbs items={[{ label: "Impact" }]} />
          <h1 className="page-title mt-4">
            Building Business While Building Community
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg">
            At Fresh Edges Services Ltd, we believe business should do more than generate revenue.
            A business should create opportunity.
          </p>
        </Container>
      </section>

      <Section>
        <Container className="split-section overflow-x-clip lg:grid-cols-[1fr_min(42%,440px)]">
          <div className="flex min-w-0 flex-col justify-center">
            <SectionHeader
              eyebrow="Newcomer support"
              title="Creating pathways to meaningful work in Canada"
              align="left"
              spacing="tight"
              className="max-w-none"
            />
            <div className="content-stack space-y-5 leading-relaxed text-muted-foreground sm:space-y-6">
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

          <FramedImage
            src={images.cleaner}
            alt="Fresh Edges team member supporting community employment opportunities"
            shadowSide="left"
            sizes="(max-width: 1024px) 340px, 440px"
            className="lg:mx-0"
          />
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
