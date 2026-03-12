"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { backgroundImages } from "@/lib/data";

export default function BackgroundCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4500); // 4.5 seconds for cinematic pacing

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-0 bg-black overflow-hidden pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={backgroundImages[currentIndex]}
            alt="Photography Showcase"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay overlay underneath foreground wrapper */}
    </div>
  );
}
