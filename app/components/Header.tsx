"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0.6)"]
  );
  const headerBlur = useTransform(scrollY, [0, 100], [0, 12]);

  const navLinks = [
    { href: "/products/bloc", label: "Bloc" },
    { href: "/app", label: "App" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          backgroundColor: headerBg,
          backdropFilter: useTransform(headerBlur, (v) => `blur(${v}px)`),
          WebkitBackdropFilter: useTransform(headerBlur, (v) => `blur(${v}px)`),
        }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 md:px-12 md:py-5 border-b border-transparent transition-colors"
      >
        <div>
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <span className="font-mono text-lg tracking-tighter">A</span>
            </div>
            <span className="font-bold tracking-tight text-2xl md:text-3xl text-white">
              Aether
            </span>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-xl font-medium tracking-wide transition-colors duration-300 ${
                pathname === link.href
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Link
            href="/order"
            className="bg-white text-black px-7 py-2.5 rounded-full text-base font-bold uppercase tracking-wider hover:bg-zinc-200 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] transition-all duration-300"
          >
            Order
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <span
            className={`block absolute h-[2px] w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
            }`}
          />
          <span
            className={`block absolute h-[2px] w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block absolute h-[2px] w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
            }`}
          />
        </button>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-3xl font-bold tracking-tight transition-colors ${
                    pathname === link.href
                      ? "text-white"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.24, duration: 0.3 }}
            >
              <Link
                href="/order"
                onClick={() => setMobileOpen(false)}
                className="bg-white text-black px-10 py-4 rounded-full text-lg font-bold uppercase tracking-wider"
              >
                Order Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
