"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  aspectRatio?: "portrait" | "video";
}

export default function VideoPlayer({ src, poster, aspectRatio = "portrait" }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        setHasStarted(true);
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div 
      className={cn(
        "relative w-full overflow-hidden rounded-sm group bg-black/20 border border-white/5 shadow-2xl transition-all duration-500 hover:border-accent-gold/30",
        aspectRatio === "portrait" ? "aspect-2/3" : "aspect-video"
      )}
    >
      <video
        ref={videoRef}
        poster={!hasStarted ? poster : undefined}
        className="h-full w-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
        onClick={togglePlay}
      >
        <source src={src} type="application/vnd.apple.mpegurl" />
        {/* Fallback for browsers that don't support HLS natively */}
        <source src={src.replace(".m3u8", ".mp4")} type="video/mp4" />
      </video>

      {/* Play Overlay */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={false}
        animate={{ opacity: isPlaying ? 0 : 1 }}
      >
        <button 
          onClick={(e) => { e.stopPropagation(); togglePlay(); }}
          className="pointer-events-auto h-20 w-20 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-500 hover:scale-110 hover:bg-accent-gold hover:text-black hover:border-accent-gold group/btn"
        >
          {isPlaying ? (
            <Pause className="h-8 w-8 fill-current" />
          ) : (
            <Play className="h-8 w-8 ml-1 fill-current transition-transform group-hover/btn:scale-110" />
          )}
        </button>
      </motion.div>

      {/* Decorative gradient overlay - only show when not playing */}
      <motion.div 
        animate={{ opacity: isPlaying ? 0 : 1 }}
        className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" 
      />
    </div>
  );
}
