"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/#services" },
];

export default function Navigation() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [navVisible, setNavVisible] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  // Determine if we are on a "Light" background page (About/Contact)
  // On these pages, the header elements should be black (invert-0 or text-black)
  const isLightPage = pathname === "/about" || pathname === "/contact";

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest < 50) {
      setIsAtTop(true);
      setNavVisible(false);
      return;
    } else {
      setIsAtTop(false);
    }

    if (latest > previous && latest > 50) {
      setNavVisible(true);
    } else if (latest < previous) {
      setNavVisible(false);
    }
  });

  return (
    <>
      {/* Centered Big Logo at the top of the page */}
      <motion.div
        className="fixed top-12 left-1/2 -translate-x-1/2 z-40 pointer-events-none"
        initial={{ opacity: 1, y: 0 }}
        animate={{ 
          opacity: isAtTop ? 1 : 0, 
          y: isAtTop ? 0 : -20,
          scale: isAtTop ? 1 : 0.9 
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Image
          alt="Abhi Kansara Photography"
          src="/Logo.png"
          width={240}
          height={120}
          className={cn(
            "h-16 w-auto transition-all duration-500 opacity-90",
            isLightPage ? "invert-0" : "invert mix-blend-difference"
          )}
          priority
        />
      </motion.div>

      {/* Floating Glassmorphism Pill Navbar */}
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        animate={navVisible ? "visible" : "hidden"}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 z-50 flex justify-center pt-6 px-6 pointer-events-none"
      >
        <nav
          className={cn(
            "pointer-events-auto flex items-center justify-between w-full max-w-4xl rounded-full px-8 py-3 transition-all duration-500 shadow-2xl border",
            isLightPage 
              ? "bg-white/90 backdrop-blur-md border-black/5" 
              : "bg-[#1a1a1a]/80 backdrop-blur-md border-white/10"
          )}
        >
          {/* Logo inside nav pill */}
          <Link href="/" className="flex items-center group">
               <Image
                 src="/Logo.png"
                 alt="Logo"
                 width={100}
                 height={40}
                 className={cn(
                   "h-8 w-auto transition-all duration-500 opacity-80 group-hover:opacity-100",
                   isLightPage ? "invert-0" : "invert"
                 )}
               />
          </Link>

          {/* Links */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-[10px] uppercase tracking-[0.25em] font-bold transition-all duration-300",
                    isLightPage 
                      ? "text-slate-500 hover:text-black" 
                      : "text-foreground-muted hover:text-accent-gold"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="/contact"
            className={cn(
              "px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-lg",
              isLightPage
                ? "bg-black text-white hover:bg-accent-gold"
                : "bg-accent-gold text-black hover:bg-white"
            )}
          >
            Inquire
          </Link>
        </nav>
      </motion.header>
    </>
  );
}
