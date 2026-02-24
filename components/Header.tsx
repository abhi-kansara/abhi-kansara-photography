"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100 px-6 py-4 md:px-12 lg:px-20 transition-all duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between w-full">
        <div className="flex items-center gap-2 z-50 relative">
          <Image
            alt="Abhi Kansara Photography logo"
            src="/Logo.png"
            width={300}
            height={300}
            className="h-16 w-auto"
            priority
          />
          <div>
            <h2 className="hidden lg:block text-primary font-logo font-bold text-xl tracking-tight uppercase leading-none">ABHI KANSARA</h2>
            <h2 className="hidden lg:block text-primary font-logo font-bold text-xl tracking-tight uppercase leading-none">PHOTOGRAPHY</h2>
          </div>
        </div>
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-sm font-mono font-medium text-slate-600 hover:text-primary transition-colors uppercase tracking-widest" href="#about">About</a>
          <a className="text-sm font-mono font-medium text-slate-600 hover:text-primary transition-colors uppercase tracking-widest" href="#service">Service</a>
          <a className="text-sm font-mono font-medium text-slate-600 hover:text-primary transition-colors uppercase tracking-widest" href="#works">Work</a>
        </nav>
        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden p-2 text-primary z-50 relative transition-transform duration-300 hover:scale-110 active:scale-95"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a href="#contact">
            <button className="group relative overflow-hidden px-6 py-2.5 text-white transition-all bg-slate-700 hover:bg-slate-900 rounded-full">
              <span className="relative z-10 font-mono text-xs font-bold uppercase tracking-widest">Let&apos;s Talk</span>
            </button>
          </a>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-10 transition-all duration-500 ease-in-out md:hidden ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <nav className="flex flex-col items-center gap-8">
            <a onClick={() => setIsMenuOpen(false)} className="text-3xl font-serif font-medium text-primary hover:text-slate-600 transition-colors" href="#about">About</a>
            <a onClick={() => setIsMenuOpen(false)} className="text-3xl font-serif font-medium text-primary hover:text-slate-600 transition-colors" href="#service">Service</a>
            <a onClick={() => setIsMenuOpen(false)} className="text-3xl font-serif font-medium text-primary hover:text-slate-600 transition-colors" href="#works">Work</a>
          </nav>
          
          <div className="w-12 h-0.5 bg-slate-200 rounded-full"></div>

          <a onClick={() => setIsMenuOpen(false)} href="#contact">
            <button className="group relative overflow-hidden px-8 py-3 text-white transition-all bg-slate-700 hover:bg-slate-900 rounded-full shadow-xl shadow-slate-200">
              <span className="relative z-10 font-mono text-sm font-bold uppercase tracking-widest">Let&apos;s Talk</span>
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
