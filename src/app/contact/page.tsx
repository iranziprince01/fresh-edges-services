import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ContactForm } from "@/components/forms/contact-form";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = createMetadata({
  title: "Contact Fresh Edges",
  description:
    "Contact Fresh Edges Services Ltd in Edmonton for commercial cleaning, residential cleaning, snow removal, and property maintenance. Call, email, or send a message.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-forest-900 to-forest-950 py-20 md:py-28">
        <Container>
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Let&apos;s Work Together
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            Whether you need one-time support or long-term property maintenance solutions, our
            team is ready to help. We look forward to serving you.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-border/80 p-6">
                  <h2 className="font-heading text-lg font-semibold">Office Location</h2>
                  <p className="mt-3 flex items-start gap-3 text-muted-foreground">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-forest-600 dark:text-fresh-400" aria-hidden />
                    <span>
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.city}, {siteConfig.address.province}{" "}
                      {siteConfig.address.postalCode}
                    </span>
                  </p>
                </div>

                <div className="rounded-2xl border border-border/80 p-6">
                  <h2 className="font-heading text-lg font-semibold">Contact Information</h2>
                  <div className="mt-4 space-y-4">
                    <div>
                      <p className="text-sm font-medium">Office Phone</p>
                      <a
                        href={siteConfig.phoneHref}
                        className="mt-1 flex items-center gap-2 text-muted-foreground hover:text-forest-600"
                      >
                        <Phone className="h-4 w-4 shrink-0" aria-hidden />
                        {siteConfig.phone}
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="mt-1 flex items-center gap-2 text-muted-foreground hover:text-forest-600"
                      >
                        <Mail className="h-4 w-4 shrink-0" aria-hidden />
                        {siteConfig.email}
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Careers</p>
                      <a
                        href={`mailto:${siteConfig.careersEmail}`}
                        className="mt-1 flex items-center gap-2 text-muted-foreground hover:text-forest-600"
                      >
                        <Mail className="h-4 w-4 shrink-0" aria-hidden />
                        {siteConfig.careersEmail}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="mt-6 border-border/80 shadow-none">
                <CardContent className="p-6">
                  <h2 className="flex items-center gap-2 font-heading font-semibold">
                    <Clock className="h-5 w-5 text-forest-600" aria-hidden />
                    Business Hours
                  </h2>
                  <ul className="mt-4 space-y-2">
                    {siteConfig.hours.map((h) => (
                      <li key={h.days} className="flex justify-between text-sm">
                        <span className="font-medium">{h.days}</span>
                        <span className="text-muted-foreground">{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="mt-6 border-border/80 shadow-none">
                <CardContent className="p-6">
                  <h2 className="font-heading font-semibold">Service Area</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Serving Edmonton, St. Albert, Sherwood Park, Beaumont, and Leduc.
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {siteConfig.serviceAreas.map((area) => (
                      <li
                        key={area}
                        className="rounded-full bg-forest-50 px-3 py-1 text-xs font-medium text-forest-700 dark:bg-forest-900/50 dark:text-fresh-300"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div
                className="mt-6 flex aspect-video items-center justify-center rounded-2xl border border-border/80 bg-muted/50"
                role="img"
                aria-label="Map showing Fresh Edges office location in Edmonton"
              >
                <div className="p-6 text-center">
                  <MapPin className="mx-auto h-8 w-8 text-forest-600" aria-hidden />
                  <p className="mt-2 text-sm font-medium">
                    {siteConfig.address.street}, {siteConfig.address.city}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Interactive map embed: replace with Google Maps iframe on deployment
                  </p>
                </div>
              </div>
            </div>

            <Card className="border-border/80 shadow-none">
              <CardContent className="p-6 md:p-8">
                <h2 className="font-heading text-xl font-semibold">Send a Message</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  We typically respond within one business day.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
