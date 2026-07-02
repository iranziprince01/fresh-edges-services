import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"section"> & {
  variant?: "default" | "muted" | "dark" | "gradient";
};

export function Section({
  className,
  variant = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-24 md:py-28 lg:py-32",
        variant === "default" && "bg-background",
        variant === "muted" && "bg-forest-50 dark:bg-forest-950/30",
        variant === "dark" &&
          "bg-forest-950 text-white [&_.text-muted-foreground]:text-white/70",
        variant === "gradient" &&
          "bg-gradient-to-br from-forest-50 via-background to-forest-50 dark:from-forest-950 dark:via-background dark:to-forest-900/30",
        className,
      )}
      {...props}
    />
  );
}
