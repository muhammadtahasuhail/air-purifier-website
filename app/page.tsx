"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Hero from "./components/Hero";
import NarrativeSection from "./components/NarrativeSection";
import SolutionSection from "./components/SolutionSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black overflow-x-hidden">
      <Hero />
      <NarrativeSection />

      {/* Product Teaser: Aether Bloc */}
      <section className="py-32 bg-zinc-950 text-white border-t border-zinc-900 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/[0.03] rounded-full blur-[150px] animate-drift pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/[0.03] rounded-full blur-[120px] animate-drift-delayed pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <Link href="/products/bloc">
                <div className="aspect-square bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center relative overflow-hidden group cursor-pointer glow-card">
                  <Image
                    src="/products/bloc/bloc_front.png"
                    alt="Aether Bloc Air Purifier"
                    fill
                    className="object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2"
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-4 block"
              >
                Introducing
              </motion.span>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white glow-text">
                Aether Bloc
              </h2>
              <p className="text-xl text-zinc-400 mb-6 leading-relaxed">
                Clean air, by design. A medical-grade air purifier hidden inside
                a minimalist side table. Built with wood, acoustics, and physics
                to last a lifetime.
              </p>
              <p className="text-3xl font-bold text-white mb-8">Rs. 12,999</p>
              <Link
                href="/products/bloc"
                className="inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:text-zinc-300 hover:border-zinc-300 transition-all duration-300 text-lg tracking-wide group"
              >
                Explore Bloc{" "}
                <ArrowRight
                  className="group-hover:translate-x-2 transition-transform duration-300"
                  size={20}
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <SolutionSection />

      {/* Footer */}
      <footer className="py-16 text-center text-zinc-600 text-sm border-t border-zinc-900 bg-black relative">
        <div className="absolute inset-0 gradient-mesh opacity-30 pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="flex justify-center gap-8 mb-8">
            {[
              { href: "/", label: "Home" },
              { href: "/products/bloc", label: "Bloc" },
              { href: "/app", label: "App" },
              { href: "/about", label: "About" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-zinc-600">
            &copy; {new Date().getFullYear()} Aether. Clean Air. By Design.
          </p>
        </motion.div>
      </footer>
    </main>
  );
}
