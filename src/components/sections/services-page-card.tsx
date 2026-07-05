import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, type ServiceListingCard } from "@/data/services";

type ServicesPageCardProps = {
  card: ServiceListingCard;
};

export function ServicesPageCard({ card }: ServicesPageCardProps) {
  const service = getServiceBySlug(card.slug);

  if (!service) {
    return null;
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-forest-200/80 bg-white shadow-[0_14px_36px_rgba(20,83,45,0.08)] transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(20,83,45,0.12)]">
      <div className="relative aspect-[5/3] overflow-hidden">
        <Image
          src={service.heroImage}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-900/25 to-transparent" />
        <h3 className="absolute right-0 bottom-0 left-0 p-5 font-heading text-lg font-bold tracking-tight text-white md:p-6 md:text-xl">
          {card.title}
        </h3>
      </div>

      <div className="flex flex-1 flex-col border-t border-forest-100 bg-forest-50/50 px-5 py-5 md:px-6 md:py-6">
        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
          {service.description}
        </p>

        <div className="mt-5">
          <Button
            asChild
            className="h-10 w-full bg-forest-600 font-semibold hover:bg-forest-700 sm:w-auto"
          >
            <Link href={`/services/${card.slug}`}>
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
