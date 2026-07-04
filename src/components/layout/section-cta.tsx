import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SectionCtaProps = {
  label: string;
  href?: string;
  align?: "left" | "center";
  variant?: "primary" | "outline" | "light";
  className?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

const variantClasses = {
  primary:
    "h-12 w-full bg-forest-600 px-8 font-semibold hover:bg-forest-700 sm:w-auto",
  outline:
    "h-12 w-full border-forest-300 px-8 font-semibold text-forest-700 hover:bg-forest-50 sm:w-auto",
  light:
    "h-12 w-full bg-white px-8 font-semibold text-forest-600 hover:bg-white/90 sm:w-auto",
} as const;

function CtaLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("tel:") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function SectionCta({
  label,
  href = "/quote",
  align = "center",
  variant = "primary",
  className,
  secondaryLabel,
  secondaryHref,
}: SectionCtaProps) {
  return (
    <div
      className={cn(
        "mt-10 flex flex-col items-stretch gap-3 sm:mt-12 sm:flex-row sm:items-center",
        align === "center" && "sm:justify-center",
        align === "left" && "sm:justify-start",
        className,
      )}
    >
      <Button asChild size="lg" className={variantClasses[variant]}>
        <CtaLink href={href}>
          {label}
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
        </CtaLink>
      </Button>
      {secondaryLabel && secondaryHref ? (
        <Button
          asChild
          size="lg"
          variant="outline"
          className={
            variant === "light"
              ? "h-12 w-full border-white/40 bg-transparent px-8 font-semibold text-white hover:bg-white/10 hover:text-white sm:w-auto"
              : variantClasses.outline
          }
        >
          <CtaLink href={secondaryHref}>{secondaryLabel}</CtaLink>
        </Button>
      ) : null}
    </div>
  );
}
