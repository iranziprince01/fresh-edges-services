import { Container } from "@/components/layout/container";
import { FramedImage } from "@/components/layout/framed-image";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { whyChooseUs } from "@/data/company";
import { images } from "@/lib/images";

export function WhyChooseUsSection() {
  return (
    <Section variant="muted">
      <Container className="split-section overflow-x-clip lg:grid-cols-[1fr_min(38%,400px)] lg:items-stretch">
        <div className="flex min-w-0 flex-col justify-center">
          <SectionHeader
            title="Why Clients Choose Us"
            align="left"
            spacing="tight"
            className="max-w-none"
          />

          <ul className="content-stack grid grid-cols-1 gap-3 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
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

          <p className="mt-10 text-sm font-medium text-muted-foreground sm:mt-12 md:text-base lg:mt-14">
            Your trusted long-term property service partner.
          </p>
        </div>

        <FramedImage
          src={images.whyChooseUs}
          alt="Fresh Edges professional property care team at work"
          shadowSide="left"
          sizes="(max-width: 1024px) 340px, 400px"
          className="lg:mx-0"
        />
      </Container>
    </Section>
  );
}
