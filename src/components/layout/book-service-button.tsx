import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type BookServiceButtonProps = {
  className?: string;
  fullWidth?: boolean;
  showIcon?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
};

export function BookServiceButton({
  className,
  fullWidth,
  showIcon = true,
  onClick,
  children = "Book Service",
}: BookServiceButtonProps) {
  return (
    <Button
      asChild
      className={cn(
        "group/cta h-10 gap-2 rounded-full border-0 bg-forest-600 px-5 text-sm font-semibold tracking-wide text-white shadow-sm shadow-forest-950/10 ring-1 ring-inset ring-white/10 transition-[background-color,box-shadow,transform] duration-200 ease-out hover:bg-forest-700 hover:shadow-md hover:shadow-forest-950/15 active:scale-[0.98] sm:h-11 sm:px-6",
        fullWidth && "w-full",
        className,
      )}
    >
      <Link href="/quote" onClick={onClick}>
        <span>{children}</span>
        {showIcon ? (
          <ArrowRight
            className="size-4 transition-transform duration-200 ease-out group-hover/cta:translate-x-0.5"
            aria-hidden
          />
        ) : null}
      </Link>
    </Button>
  );
}
