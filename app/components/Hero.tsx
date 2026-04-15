"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Full-bleed background image with parallax */}
      <motion.div
        style={{ scale: imgScale, y: imgY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/hero/misty-valley.jpg"
          alt="Misty valley with mountains in the background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
      </motion.div>

      {/* Gradient overlays — Starlink-style layered approach */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Bottom fade to black — seamless transition into page content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        {/* Top vignette for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        {/* Overall color tint for mood */}
        <div className="absolute inset-0 bg-black/20" />
        {/* Radial vignette — draws focus to center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
          }}
        />
      </div>

      {/* Subtle atmospheric particles */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-[120px] animate-drift" />
        <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-[100px] animate-drift-delayed" />
      </div>

      {/* Hero content */}
      <motion.div
        style={{ y: textY, opacity, scale }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6 md:mb-8 leading-[0.9] drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
        >
          Everyone deserves to <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="text-zinc-300"
          >
            breathe clean air.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="text-base sm:text-xl md:text-2xl text-zinc-200 font-normal max-w-xl mx-auto tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] px-2"
        >
          We&apos;re making it cheaper and affordable for everyone.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <a
            href="/order"
            className="bg-white text-black px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-sm text-center hover:bg-zinc-200 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]"
          >
            Order Now
          </a>
          <a
            href="/app"
            className="border border-white/30 text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-sm text-center hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
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
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[2px] h-12 bg-gradient-to-b from-zinc-400 via-zinc-600 to-transparent"
        />
      </motion.div>

      {/* Bottom fade — extra smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-[3] pointer-events-none" />
    </section>
  );
}
