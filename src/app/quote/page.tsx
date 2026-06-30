import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { QuoteForm } from "@/components/forms/quote-form";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";
import { Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "Book a Service",
  description:
    "Request professional property services from Fresh Edges Services Ltd in Edmonton. Book cleaning, maintenance, landscaping, or snow removal in minutes.",
  path: "/quote",
  keywords: ["Cleaning Company Edmonton", "Property Services Edmonton"],
});

export default function QuotePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-forest-900 to-forest-950 py-16 md:py-20">
        <Container>
          <Breadcrumbs items={[{ label: "Book a Service" }]} />
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Request Professional Service In Minutes
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            Need help maintaining your property? Our team is ready to assist. Fill out our
            booking request form and we will contact you shortly.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card className="border-border/80 shadow-none">
                <CardContent className="p-6 md:p-10">
                  <h2 className="font-heading text-xl font-semibold">Booking Form</h2>
                  <div className="mt-6">
                    <QuoteForm />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card className="border-border/80 shadow-none">
                <CardContent className="p-6">
                  <h2 className="font-heading text-lg font-semibold">Prefer to talk?</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Our team is ready to discuss your property needs.
                  </p>
                  <div className="mt-4 space-y-3">
                    <a href={siteConfig.phoneHref} className="flex items-center gap-2 text-sm font-medium text-forest-600 hover:text-forest-700 dark:text-fresh-400">
                      <Phone className="h-4 w-4" aria-hidden />
                      {siteConfig.phone}
                    </a>
                    <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-sm font-medium text-forest-600 hover:text-forest-700 dark:text-fresh-400">
                      <Mail className="h-4 w-4" aria-hidden />
                      {siteConfig.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border/80 shadow-none">
                <CardContent className="p-6">
                  <h2 className="font-heading text-lg font-semibold">Business Hours</h2>
                  <ul className="mt-4 space-y-2">
                    {siteConfig.hours.map((h) => (
                      <li key={h.days} className="flex items-start gap-2 text-sm">
                        <Clock className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                        <span>
                          <span className="font-medium">{h.days}:</span>{" "}
                          <span className="text-muted-foreground">{h.hours}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
