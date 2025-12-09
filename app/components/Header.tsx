"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-transparent mix-blend-difference text-white pointer-events-none"
    >
      <div className="pointer-events-auto">
        <Link href="/" className="flex items-center gap-3 group">
          {/* Minimalist Logo: Letter 'A' stylized or simple symbol */}
          <div className="w-10 h-10 border border-white/50 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
            <span className="font-mono text-lg tracking-tighter">A</span>
          </div>
          {/* Always visible Aether text, larger size */}
          <span className="font-bold tracking-tight text-2xl md:text-3xl">
            Aether
          </span>
        </Link>
      </div>

      <nav className="pointer-events-auto flex items-center gap-8 md:gap-10">
        <Link 
          href="/products/bloc" 
          className={`text-lg font-medium tracking-wide hover:text-white/70 transition-colors ${pathname === '/products/bloc' ? 'text-white' : 'text-white/80'}`}
        >
          Bloc
        </Link>
        <Link 
          href="/about" 
          className="text-lg font-medium tracking-wide text-white/80 hover:text-white/70 transition-colors"
        >
          About
        </Link>
        <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors">
          Order
        </button>
      </nav>
    </motion.header>
  );
}
