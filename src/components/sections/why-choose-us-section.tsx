import { Container } from "@/components/layout/container";
import { FramedVideo } from "@/components/layout/framed-video";
import { Section } from "@/components/layout/section";
import { SectionCta } from "@/components/layout/section-cta";
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

          <p className="mt-8 text-sm font-medium text-muted-foreground sm:mt-10 md:text-base">
            Your trusted long-term property service partner across Alberta.
          </p>
          <SectionCta
            label="Book Service"
            align="left"
            className="mt-6 sm:mt-8"
          />
        </div>

        <FramedVideo
          src={images.chooseVideo}
          poster={images.whyChooseUs}
          layout="portrait"
          shadowSide="left"
          maxWidthClass="max-w-[min(100%,340px)] sm:max-w-[340px] lg:max-w-[400px]"
          className="lg:mx-0"
        />
      </Container>
    </Section>
  );
}
