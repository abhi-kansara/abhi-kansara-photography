"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function BackButton() {
  const router = useRouter();
  const { scrollY } = useScroll();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(false); // Default false at top

  // Sync strictly for vertical translation
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest < 50) {
      setNavVisible(false);
      return;
    }
    if (latest > previous && latest > 50) {
      setNavVisible(true);
    } else if (latest < previous) {
      setNavVisible(false);
    }
  });

  // Capture initial state properly to prevent flashing
  useEffect(() => {
    const handleToggle = (e: any) => {
      setIsMenuOpen(e.detail.isOpen);
    };
    window.addEventListener("menuToggle", handleToggle);
    
    // Initial scroll position check so we don't drop down initially when we shouldn't
    if (typeof window !== "undefined") {
      if (window.scrollY >= 50) {
        setNavVisible(false);
      }
    }
    
    return () => window.removeEventListener("menuToggle", handleToggle);
  }, []);

  const isHiding = !navVisible;

  return (
    <motion.button
      initial={{ opacity: 0, x: -20, y: isHiding ? -66 : 0 }}
      animate={{ 
        opacity: isMenuOpen ? 0 : 1, 
        x: isMenuOpen ? -20 : 0,
        y: isHiding ? -66 : 0,
        pointerEvents: isMenuOpen ? "none" : "auto"
      } as any}
      transition={{ duration: 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05, x: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => router.back()}
      className={cn(
        "fixed top-32 left-8 sm:left-12 z-50 flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-black/5 text-black hover:bg-white hover:text-black transition-all group shadow-xl",
        isMenuOpen && "pointer-events-none"
      )}
    >
      <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" strokeWidth={2.5} />
      <span className="text-[10px] uppercase tracking-[0.2em] font-bold hidden sm:block">Back</span>
    </motion.button>
  );
}
