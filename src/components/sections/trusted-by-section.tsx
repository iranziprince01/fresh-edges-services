import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { partners } from "@/data/partners";

export function TrustedBySection() {
  return (
    <Section variant="muted" aria-label="Proud partners">
      <Container>
        <SectionHeader
          title="Proud Partners"
          description="We're working and had the opportunity to work with organizations that share our commitment to caring for people and strengthening our community."
        />

        <ul className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-5 lg:gap-5">
          {partners.map((partner) => (
            <li key={partner.name}>
              <div
                className="box-border flex h-[4.5rem] items-center justify-center rounded-xl border-solid border-forest-600 bg-white px-3 shadow-[0_6px_18px_rgba(20,83,45,0.1)] sm:h-24 sm:px-4"
                style={{ borderWidth: 2 }}
                title={partner.name}
              >
                <span className="font-heading text-center text-sm font-extrabold tracking-tight text-forest-700 sm:text-base md:text-[1.05rem]">
                  {partner.label}
                </span>
                <span className="sr-only">{partner.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
