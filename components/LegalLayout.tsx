"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import BackButton from "@/components/BackButton";

interface LegalSection {
  title: string;
  content: string;
}

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export default function LegalLayout({ title, lastUpdated, sections }: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-[#f5f0eb] selection:bg-accent-gold/30">
      <Navigation />
      <BackButton />

      <div className="max-w-4xl mx-auto px-6 pt-48 pb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <h1 className="font-serif text-6xl sm:text-8xl text-slate-900 mb-6 italic">
            {title}
          </h1>
          <div className="h-px w-24 bg-accent-gold mx-auto mb-6" />
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">
            Last Updated: {lastUpdated}
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-16">
          {sections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <h2 className="font-serif text-2xl text-slate-900 mb-4 group-hover:text-accent-gold transition-colors duration-500">
                {section.title}
              </h2>
              <div className="text-slate-600 leading-relaxed font-light text-lg">
                {section.content}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Closing Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 pt-12 border-t border-black/5 text-center"
        >
          <p className="font-serif italic text-slate-400">
            Crafting stories with light and integrity.
          </p>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
