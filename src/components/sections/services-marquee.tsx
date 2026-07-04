import Link from "next/link";
import { services } from "@/data/services";

function MarqueeItems({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-3 pr-3 sm:gap-4 sm:pr-4"
      aria-hidden={ariaHidden || undefined}
    >
      {services.map((service) => (
        <li key={`${ariaHidden ? "dup-" : ""}${service.slug}`} className="shrink-0">
          <Link
            href={`/services/${service.slug}`}
            className="box-border inline-flex h-9 items-center justify-center rounded-xl border-solid border-forest-600 bg-white px-4 shadow-[0_6px_18px_rgba(20,83,45,0.1)] transition-transform hover:-translate-y-0.5 sm:h-10 sm:px-5"
            style={{ borderWidth: 1 }}
            tabIndex={ariaHidden ? -1 : undefined}
          >
            <span className="whitespace-nowrap font-heading text-center text-sm font-extrabold tracking-tight text-forest-700">
              {service.shortTitle}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function ServicesMarquee() {
  return (
    <section
      className="services-marquee-section relative overflow-hidden border-y border-forest-200/80 bg-forest-50 py-3 sm:py-3.5"
      aria-label="Our services"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-forest-50 to-transparent sm:w-20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-forest-50 to-transparent sm:w-20"
        aria-hidden
      />

      <div className="services-marquee flex w-max">
        <MarqueeItems />
        <MarqueeItems ariaHidden />
      </div>
    </section>
  );
}
