"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05, x: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => router.back()}
      className="fixed top-32 left-8 sm:left-12 z-50 flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-black/5 text-black hover:bg-white hover:text-black transition-all group shadow-xl"
    >
      <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" strokeWidth={2.5} />
      <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Back</span>
    </motion.button>
  );
}
