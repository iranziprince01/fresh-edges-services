import type { Metadata } from "next";
import { Star } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { testimonials } from "@/data/testimonials";
import { JsonLd } from "@/components/seo/json-ld";
import { reviewSchema } from "@/lib/schemas";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { CtaSection } from "@/components/sections/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = createMetadata({
  title: "Client Testimonials",
  description:
    "Read reviews from Edmonton property managers, business owners, and homeowners who trust Fresh Edges for cleaning, landscaping, and snow removal.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd data={reviewSchema(testimonials)} />

      <section className="bg-gradient-to-br from-forest-900 to-forest-950 py-20 md:py-28">
        <Container>
          <Breadcrumbs items={[{ label: "Testimonials" }]} />
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold text-white md:text-5xl">
            What Our Clients Say
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Trusted by property managers, facility directors, and homeowners across Alberta.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.id} className="border-border/60">
                <CardContent className="p-6">
                  <div className="mb-3 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-fresh-500 text-fresh-500" aria-hidden />
                    ))}
                  </div>
                  <Badge variant="secondary" className="mb-3">{t.service}</Badge>
                  <blockquote className="text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-4 border-t border-border pt-4">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.role}{t.company ? `, ${t.company}` : ""}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
