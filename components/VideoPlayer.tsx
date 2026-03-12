"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  aspectRatio?: "video" | "portrait" | "square";
}

export default function VideoPlayer({ 
  src, 
  poster, 
  className,
  aspectRatio = "video"
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const ratioClasses = {
    video: "aspect-video",
    portrait: "aspect-9/16",
    square: "aspect-square",
  };

  return (
    <div 
      className={cn(
        "relative group cursor-pointer overflow-hidden rounded-lg bg-black/20 border border-white/10 shadow-2xl",
        ratioClasses[aspectRatio],
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className={cn(
          "w-full h-full object-cover transition-all duration-700",
          isPlaying ? "opacity-100" : "opacity-60 scale-105"
        )}
        loop
        muted
        playsInline
      />

      {/* Overlay Play/Pause Button */}
      <AnimatePresence>
        {(!isPlaying || isHovered) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent-gold/90 backdrop-blur-sm flex items-center justify-center shadow-xl border border-white/20"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 sm:w-10 sm:h-10 text-black fill-black" strokeWidth={1} />
              ) : (
                <Play className="ml-1 w-8 h-8 sm:w-10 sm:h-10 text-black fill-black" strokeWidth={1} />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom info tooltip */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <motion.span
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          className="text-[10px] uppercase tracking-[0.3em] font-bold text-white mix-blend-difference"
        >
          {isPlaying ? "Pause Film" : "Play Feature"}
        </motion.span>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
