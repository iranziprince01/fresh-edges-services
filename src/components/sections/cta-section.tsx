import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

type CtaSectionProps = {
  title?: string;
  description?: string;
  variant?: "default" | "muted";
};

export function CtaSection({
  title = "Let's talk about your property",
  description = "Tell us what you need. Fill out our booking form or contact our team. We will respond within one business day.",
  variant = "default",
}: CtaSectionProps) {
  return (
    <Section variant={variant}>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-heading">{title}</h2>
          <p className="text-lead mx-auto mt-5">{description}</p>
          <div className="mt-10 flex flex-col items-stretch gap-3 sm:mt-14 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="h-12 w-full bg-forest-600 px-8 hover:bg-forest-700 sm:w-auto"
            >
              <Link href="/quote">
                Book Service
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
