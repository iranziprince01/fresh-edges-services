import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { siteConfig } from "@/lib/site";

type CtaSectionProps = {
  title?: string;
  description?: string;
};

export function CtaSection({
  title = "Let's talk about your property",
  description = "Tell us what you need. Fill out our booking form or contact our team. We will respond within one business day.",
}: CtaSectionProps) {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="text-lead mx-auto mt-5">{description}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 bg-forest-600 px-8 hover:bg-forest-700"
            >
              <Link href="/quote">
                Book a service
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-8">
              <a href={siteConfig.phoneHref}>
                <Phone className="mr-2 h-4 w-4" aria-hidden />
                {siteConfig.phone}
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
