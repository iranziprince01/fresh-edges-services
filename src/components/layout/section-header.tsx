import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  spacing?: "default" | "tight";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  spacing = "default",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        spacing === "default" && "mb-10 sm:mb-14 md:mb-20",
        align === "center" ? "mx-auto max-w-3xl min-w-0 text-center" : "max-w-2xl min-w-0",
        className,
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow", spacing === "tight" ? "mb-2" : "mb-4")}>
          {eyebrow}
        </p>
      )}
      <h2 className="section-heading">{title}</h2>
      {description && (
        <p
          className={cn(
            "text-lead max-w-2xl",
            spacing === "tight" ? "mt-3" : "mt-5",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
