"use client";

import { motion } from "framer-motion";
import { videoSources } from "@/lib/data";
import VideoPlayer from "@/components/VideoPlayer";

export default function LandscapeVideos() {
  return (
    <section className="relative w-full bg-transparent py-20 sm:py-32 z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col items-center">
        
        <div className="text-center mb-16 sm:mb-24">
          <span className="text-accent-gold uppercase tracking-[0.2em] text-xs mb-4 block font-bold">Films</span>
          <h2 className="font-serif text-5xl sm:text-7xl font-medium text-white mix-blend-difference">
            Cinematic <span className="italic text-white/60">Features</span>
          </h2>
        </div>

        {/* Landscape Video Container */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-[1200px]"
        >
          <VideoPlayer 
            src={videoSources.landscape} 
            aspectRatio="video"
          />
        </motion.div>

      </div>
    </section>
  );
}
