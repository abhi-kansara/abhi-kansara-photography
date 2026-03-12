"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { servicesData } from "@/lib/data";

export default function ServicesCarousel() {
  // Duplicate the array to create a seamless infinite loop effect
  const duplicatedServices = [...servicesData, ...servicesData];

  return (
    <section id="services" className="relative w-full bg-transparent py-20 sm:py-32 z-10 overflow-hidden">
      {/* 
        This section relies on the transparency rule. 
        It has NO solid background, letting the FixedBackgroundCarousel show through the gaps.
      */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-12 flex flex-col items-start">
        <span className="text-accent-gold uppercase tracking-[0.2em] text-xs mb-4 block font-bold">Offerings</span>
        <h2 className="font-serif text-5xl sm:text-7xl font-medium text-white mix-blend-difference">
          Curated <span className="italic text-white/60">Services</span>
        </h2>
      </div>

      <div className="relative w-full overflow-hidden shrink-0 flex items-center">
        {/* Infinite auto-scroll container using Framer Motion */}
        <motion.div
          className="flex gap-4 sm:gap-8 px-4 w-max cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -2000, right: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Adjust for speed
          }}
          whileHover={{ animationPlayState: "paused" }} // Pause on hover for accessibility/viewing
        >
          {duplicatedServices.map((service, index) => (
            <div 
              key={`${service.id}-${index}`}
              className="relative w-[70vw] sm:w-[400px] h-[500px] sm:h-[600px] shrink-0 group overflow-hidden"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                sizes="(max-width: 768px) 70vw, 400px"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-10 left-10">
                <h3 className="text-white font-serif text-3xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {service.title}
                </h3>
                <div className="w-8 h-px bg-accent-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 delay-100" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
