import Image from "next/image";
import { brandedLogoUrl, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "default" | "footer";
};

export function Logo({ className, priority, variant = "default" }: LogoProps) {
  return (
    <Image
      src={brandedLogoUrl(variant)}
      alt={siteConfig.name}
      width={1500}
      height={600}
      className={cn("h-11 w-auto max-w-[240px] object-contain object-left sm:h-12 sm:max-w-[260px] md:h-14 md:max-w-[300px]", className)}
      priority={priority}
    />
  );
}
