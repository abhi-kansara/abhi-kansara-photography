"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-transparent">
      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white font-bold mix-blend-difference">
          {isMobile ? "Swipe" : "Scroll"}
        </span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden mix-blend-difference">
          <motion.div 
            className="absolute top-0 right-0 w-full h-1/3 bg-white"
            animate={{ y: ["-100%", "300%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "circInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
