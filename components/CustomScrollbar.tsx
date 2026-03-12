"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function CustomScrollbar() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 1500); // Hide after 1.5s of inactivity
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Smooth out the scroll progress for the thumb position
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const topPosition = useTransform(smoothProgress, (p) => `calc(${p * 100}% - ${p * 64}px)`);

  return (
    <div className="fixed right-1.5 top-4 bottom-4 w-1 z-[9999] pointer-events-none">
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          x: isVisible ? 0 : 10
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full h-full relative"
      >
        {/* Track */}
        <div className="absolute inset-0 bg-white/5 w-px mx-auto rounded-full" />

        {/* Thumb */}
        <motion.div
          className="absolute left-0 right-0 bg-accent-gold/80 rounded-full w-[3px] h-28 mx-auto"
          style={{ top: topPosition }}
        />
      </motion.div>
    </div>
  );
}