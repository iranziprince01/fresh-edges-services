"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/layout/logo";
import { BookServiceButton } from "@/components/layout/book-service-button";
import { NavDropdown } from "@/components/layout/nav-dropdown";
import { MobileNavSection } from "@/components/layout/mobile-nav-section";
import { mainNav, isNavItemActive } from "@/data/navigation";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 w-full border-b border-border/60 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl min-w-0 items-center justify-between gap-2 px-3 sm:h-[4.5rem] sm:gap-4 sm:px-6 lg:h-20 lg:gap-6 lg:px-8">
        <Link href="/" className="group min-w-0 shrink transition-opacity hover:opacity-90">
          <Logo priority className="h-8 w-auto sm:h-10 md:h-11 lg:h-12" />
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main"
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {mainNav.map((item) => (
            <NavDropdown
              key={item.id}
              item={item}
              isActive={isNavItemActive(pathname, item.href)}
              isOpen={openDropdown === item.id}
              onOpen={() => setOpenDropdown(item.id)}
              onClose={() => setOpenDropdown(null)}
            />
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <BookServiceButton className="hidden sm:inline-flex" />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-muted lg:hidden"
              aria-label="Open menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="font-heading text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-2" aria-label="Mobile">
                {mainNav.map((item) => (
                  <MobileNavSection
                    key={item.id}
                    item={item}
                    isActive={isNavItemActive(pathname, item.href)}
                    onNavigate={() => setOpen(false)}
                  />
                ))}
                <div className="mt-6 border-t border-border pt-6">
                  <BookServiceButton
                    fullWidth
                    onClick={() => setOpen(false)}
                  />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
