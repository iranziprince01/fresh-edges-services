import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { whyChooseUs } from "@/data/company";
import { images } from "@/lib/images";

export function WhyChooseUsSection() {
  return (
    <Section variant="muted">
      <Container className="grid items-center gap-16 overflow-visible lg:grid-cols-[1fr_min(38%,400px)] lg:items-stretch lg:gap-16 xl:gap-20">
        <div className="flex flex-col justify-center">
          <SectionHeader
            title="Why Clients Choose Us"
            align="left"
            spacing="tight"
            className="max-w-none"
          />

          <ul className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2">
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

          <p className="mt-14 text-sm font-medium text-muted-foreground md:text-base">
            Your trusted long-term property service partner.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[340px] self-stretch overflow-visible lg:mx-0 lg:max-w-none">
          <div className="relative aspect-[3/4] min-h-[320px] w-full overflow-visible lg:h-full lg:min-h-0 lg:aspect-auto">
            <div
              className="absolute top-[5%] left-[18%] -right-[3%] z-0 h-[90%] rounded-[1.75rem] bg-fresh-400 shadow-[0_20px_48px_rgba(115,220,100,0.45)] lg:rounded-[2rem]"
              aria-hidden
            />
            <div className="relative z-10 h-full overflow-hidden rounded-[1.75rem] ring-2 ring-forest-200/80 lg:rounded-[2rem]">
              <Image
                src={images.whyChooseUs}
                alt="Fresh Edges professional property care team at work"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 340px, 400px"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
