import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { whyChooseUs } from "@/data/company";

export function WhyChooseUsSection() {
  return (
    <Section variant="muted">
      <Container>
        <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Why Clients Choose Us
        </h2>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

        <p className="mt-12 text-center text-sm font-medium text-muted-foreground md:text-base">
          Your trusted long-term property service partner.
        </p>
      </Container>
    </Section>
  );
}
