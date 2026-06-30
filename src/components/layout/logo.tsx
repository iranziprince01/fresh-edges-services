import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "default" | "footer";
};

export function Logo({ className, priority, variant = "default" }: LogoProps) {
  const src =
    variant === "footer"
      ? siteConfig.assets.logoFooter
      : siteConfig.assets.logo;
  const logoSrc = `${src}?v=${siteConfig.logoVersion}`;

  return (
    <Image
      src={logoSrc}
      alt={siteConfig.name}
      width={280}
      height={112}
      className={cn("h-12 w-auto object-contain object-left", className)}
      priority={priority}
    />
  );
}
