import { landAcknowledgement, landAcknowledgementLines } from "@/data/company";
import { cn } from "@/lib/utils";

type LandAcknowledgementProps = {
  variant?: "footer" | "section";
  className?: string;
};

export function LandAcknowledgement({
  variant = "section",
  className,
}: LandAcknowledgementProps) {
  if (variant === "footer") {
    return (
      <p
        className={cn(
          "text-[0.6875rem] leading-snug italic text-white/60 sm:text-xs",
          className,
        )}
      >
        {landAcknowledgementLines.map((line) => (
          <span key={line} className="block sm:whitespace-nowrap">
            {line}
          </span>
        ))}
      </p>
    );
  }

  return (
    <p
      className={cn(
        "max-w-2xl border-l-2 border-forest-300 pl-4 text-sm leading-relaxed text-muted-foreground",
        className,
      )}
    >
      {landAcknowledgement}
    </p>
  );
}
