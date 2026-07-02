import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

type TrustStatementProps = {
  quote: string;
  attribution: string;
  role?: string;
};

export function TrustStatement({ quote, attribution, role }: TrustStatementProps) {
  return (
    <Section className="border-y border-border/60 bg-background py-24 md:py-28">
      <Container size="narrow">
        <blockquote className="text-center">
          <p className="text-xl font-medium leading-relaxed tracking-tight text-foreground md:text-2xl md:leading-relaxed lg:text-3xl">
            &ldquo;{quote}&rdquo;
          </p>
          <footer className="mt-8">
            <cite className="not-italic">
              <span className="block font-heading text-base font-semibold text-foreground">
                {attribution}
              </span>
              {role && (
                <span className="mt-1 block text-sm text-muted-foreground">{role}</span>
              )}
            </cite>
          </footer>
        </blockquote>
      </Container>
    </Section>
  );
}
