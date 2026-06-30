"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  variant?: "default" | "light";
};

export function Breadcrumbs({ items, variant = "default" }: BreadcrumbsProps) {
  const isLight = variant === "light";

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol
        className={`flex flex-wrap items-center gap-1 text-sm ${isLight ? "text-white/60" : "text-muted-foreground"}`}
      >
        <li>
          <Link
            href="/"
            className={`inline-flex items-center gap-1 transition-colors ${isLight ? "hover:text-white" : "hover:text-forest-600"}`}
            aria-label="Home"
          >
            <Home className="h-4 w-4" aria-hidden />
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="h-4 w-4 shrink-0 opacity-50" aria-hidden />
            {item.href ? (
              <Link
                href={item.href}
                className={`transition-colors ${isLight ? "hover:text-white" : "hover:text-forest-600"}`}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={`font-medium ${isLight ? "text-white" : "text-foreground"}`}
                aria-current="page"
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
