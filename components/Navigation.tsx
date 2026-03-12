"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/#services" },
];

export default function Navigation() {
  const { scrollY } = useScroll();
  const [navVisible, setNavVisible] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  // Requirement: 
  // 1. At absolute top (scroll = 0): Nav pill is hidden. Big logo in center is visible.
  // 2. Scrolling down: Nav pill appears. Center logo hides.
  // 3. Scrolling up: Nav pill disappears. 
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest < 50) {
      setIsAtTop(true);
      setNavVisible(false); // Hide nav pill at top
      return;
    } else {
      setIsAtTop(false);
    }

    if (latest > previous && latest > 50) {
      // Scrolling down -> show nav
      setNavVisible(true);
    } else if (latest < previous) {
      // Scrolling up -> hide nav
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
          className="h-16 w-auto invert mix-blend-difference opacity-90"
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
            "pointer-events-auto flex items-center justify-between w-full max-w-4xl rounded-full px-8 py-3 transition-all duration-500",
            "bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 shadow-2xl"
          )}
        >
          {/* Logo inside nav pill */}
          <Link href="/" className="flex items-center group">
               {/* <span className="font-serif italic text-accent-gold text-xl tracking-wider">Abhi Kansara</span> */}
               <Image
                 src="/Logo.png"
                 alt="Logo"
                 width={100}
                 height={40}
                 className="h-8 w-auto invert opacity-80 group-hover:opacity-100 transition-opacity"
               />
          </Link>

          {/* Links */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-[10px] uppercase tracking-[0.25em] font-bold text-foreground-muted hover:text-accent-gold transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="/contact"
            className="px-6 py-2 rounded-full bg-accent-gold text-black text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white transition-colors duration-300"
          >
            Inquire
          </Link>
        </nav>
      </motion.header>
    </>
  );
}
