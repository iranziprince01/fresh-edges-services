"use client";

import Link from "next/link";
import { ArrowUp, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col gap-3 sm:right-6">
      <AnimatePresence>
        {showTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <Button
              size="icon"
              variant="outline"
              className="h-12 w-12 rounded-full border-border/60 bg-background/90 shadow-lg backdrop-blur-sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        asChild
        size="lg"
        className="h-14 gap-2 rounded-full bg-forest-600 px-6 shadow-xl shadow-forest-600/30 hover:bg-forest-700"
      >
        <Link href="/quote" aria-label="Book a service">
          <MessageSquare className="h-5 w-5" aria-hidden />
          <span className="hidden sm:inline">Book Service</span>
        </Link>
      </Button>
    </div>
  );
}
