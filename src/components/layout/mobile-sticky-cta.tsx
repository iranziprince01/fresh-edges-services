"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookServiceButton } from "@/components/layout/book-service-button";
import { siteConfig } from "@/lib/site";
import { useScrollPosition } from "@/hooks/use-scroll-position";

export function MobileStickyCta() {
  const scrolled = useScrollPosition(300);

  if (!scrolled) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/95 p-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:hidden"
      role="region"
      aria-label="Quick actions"
    >
      <div className="flex gap-2">
        <Button asChild variant="outline" className="h-12 flex-1">
          <a href={siteConfig.phoneHref}>
            <Phone className="mr-2 h-4 w-4" aria-hidden />
            Call
          </a>
        </Button>
        <BookServiceButton
          fullWidth
          showIcon={false}
          className="h-12 flex-1"
        >
          Book a Service
        </BookServiceButton>
      </div>
    </div>
  );
}
