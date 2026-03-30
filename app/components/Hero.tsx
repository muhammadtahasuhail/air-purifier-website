"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Layered Atmospheric Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        {/* Primary glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-white/[0.07] rounded-full blur-[160px] animate-pulse-glow" />
        {/* Drifting orbs */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-indigo-500/[0.08] rounded-full blur-[120px] animate-drift" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/[0.05] rounded-full blur-[100px] animate-drift-delayed" />
        <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-purple-500/[0.04] rounded-full blur-[140px] animate-float" />
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      {/* Rotating ring decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.04] animate-spin-slow pointer-events-none">
        <div className="w-full h-full border border-white/30 rounded-full" />
        <div className="absolute inset-8 border border-white/20 rounded-full" />
        <div className="absolute inset-16 border border-white/10 rounded-full" />
      </div>

      <motion.div
        style={{ y: textY, opacity, scale }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center mb-8 backdrop-blur-sm"
        >
          <div className="w-3 h-3 bg-emerald-400 rounded-full animate-breathe" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.85] glow-text"
        >
          Everyone deserves to <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="text-zinc-400"
          >
            breathe clean air.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="text-xl md:text-2xl text-zinc-300 font-normal max-w-xl mx-auto tracking-tight"
        >
          We&apos;re making it cheaper and affordable for everyone.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="/order"
            className="bg-white text-black px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-zinc-200 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]"
          >
            Order Now
          </a>
          <a
            href="/app"
            className="border border-white/20 text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          >
            See the App
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[2px] h-12 bg-gradient-to-b from-zinc-500 via-zinc-700 to-transparent"
        />
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
    </section>
  );
}
