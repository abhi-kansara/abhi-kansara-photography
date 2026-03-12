"use client";

import { motion } from "framer-motion";
import { videoSources } from "@/lib/data";

export default function PortraitVideos() {
  return (
    <section className="relative w-full bg-transparent py-20 sm:py-32 z-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 flex flex-col items-center">
        
        <div className="text-center mb-16 sm:mb-24">
          <span className="text-accent-gold uppercase tracking-[0.2em] text-xs mb-4 block font-bold">Cinematography</span>
          <h2 className="font-serif text-5xl sm:text-7xl font-medium text-white mix-blend-difference">
            Portrait <span className="italic text-white/60">Reels</span>
          </h2>
        </div>

        {/* Portrait Videos Container */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full justify-center items-center">
          
          {/* Video 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[400px] aspect-[9/16] relative bg-black/50 rounded-lg overflow-hidden group shadow-2xl border border-white/10"
          >
            {/* Note: Native video playback for .m3u8 is supported on Safari. For cross-browser, an HLS player library would be needed. */}
            <video 
              src={videoSources.portraitOne}
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              autoPlay 
              loop 
              muted 
              playsInline 
            />
          </motion.div>

          {/* Video 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[400px] aspect-[9/16] relative bg-black/50 rounded-lg overflow-hidden group shadow-2xl border border-white/10"
          >
            <video 
              src={videoSources.portraitTwo}
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              autoPlay 
              loop 
              muted 
              playsInline 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
