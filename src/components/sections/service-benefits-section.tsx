import { Container } from "@/components/layout/container";
import { FramedImage } from "@/components/layout/framed-image";
import { Section } from "@/components/layout/section";
import { SectionCta } from "@/components/layout/section-cta";
import { SectionHeader } from "@/components/layout/section-header";

type ServiceBenefitsSectionProps = {
  title?: string;
  benefits: string[];
  image: string;
  imageAlt: string;
  ctaLabel?: string;
};

export function ServiceBenefitsSection({
  title = "Why Choose Fresh Edges",
  benefits,
  image,
  imageAlt,
  ctaLabel = "Get Free Quote",
}: ServiceBenefitsSectionProps) {
  return (
    <Section>
      <Container className="split-section overflow-x-clip lg:grid-cols-[min(38%,400px)_1fr] lg:items-stretch">
        <FramedImage
          src={image}
          alt={imageAlt}
          shadowSide="right"
          sizes="(max-width: 1024px) 340px, 400px"
          className="self-stretch lg:mx-0"
        />

        <div className="flex min-w-0 flex-col justify-center">
          <SectionHeader
            eyebrow="Benefits"
            title={title}
            align="left"
            spacing="tight"
            className="max-w-none"
          />

          <ul className="content-stack grid grid-cols-1 gap-3 sm:grid-cols-2">
            {benefits.map((item) => (
              <li key={item}>
                <div className="flex h-full items-start gap-3 rounded-lg border border-border bg-card px-4 py-4">
                  <span
                    className="mt-0.5 shrink-0 text-sm font-semibold text-forest-600"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed text-foreground">{item}</span>
                </div>
              </li>
            ))}
          </ul>
          <SectionCta label={ctaLabel} align="left" className="mt-8 sm:mt-10" />
        </div>
      </Container>
    </Section>
  );
}
