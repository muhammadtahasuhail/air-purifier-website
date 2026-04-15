"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

function ImmersiveSection({
  children,
  gradient,
  id,
}: {
  children: React.ReactNode;
  gradient: string;
  id: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.35], [60, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);

  return (
    <div ref={ref} id={id} className="relative min-h-screen flex items-center justify-center py-32 md:py-40">
      {/* Atmospheric background per section */}
      <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 ${gradient}`} />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full max-w-5xl mx-auto px-5 md:px-12"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function NarrativeSection() {
  return (
    <section className="relative text-white">
      {/* Global subtle texture */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* ──────────────────────────────────────────────── */}
      {/* SECTION 1 — The Smoking Reality                 */}
      {/* ──────────────────────────────────────────────── */}
      <ImmersiveSection
        id="crisis"
        gradient="bg-gradient-to-b from-black via-rose-950/20 to-black"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-zinc-500 font-mono text-xs md:text-sm tracking-[0.25em] uppercase mb-8"
          >
            The reality of air pollution
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8"
          >
            You&apos;re smoking
            <br />
            <span className="text-rose-400/90">without a cigarette.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-20"
          >
            PM2.5 particles — 30x smaller than a human hair — cross into your
            bloodstream, reaching your heart and brain.
          </motion.p>

          {/* Stats — large, cinematic numbers */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden"
          >
            {[
              { value: "5–7", label: "Cigarettes/day", sub: "Islamabad winters" },
              { value: "10–12", label: "Cigarettes/day", sub: "Lahore winters" },
              { value: "3.9", label: "Years of life lost", sub: "Average Pakistani" },
              { value: "7+", label: "Years of life lost", sub: "Lahore & Kasur" },
            ].map((stat) => (
              <motion.div
                key={stat.sub}
                variants={fadeUp}
                className="bg-black/80 backdrop-blur-sm p-6 md:p-8 text-center"
              >
                <p className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-zinc-400 text-sm font-medium">{stat.label}</p>
                <p className="text-zinc-600 text-xs mt-1">{stat.sub}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-xs text-zinc-600 font-mono mt-8"
          >
            Source: Berkeley Earth, AQLI. PM2.5 of 22 µg/m³ ≈ 1 cigarette.
          </motion.p>
        </motion.div>
      </ImmersiveSection>

      {/* ──────────────────────────────────────────────── */}
      {/* SECTION 2 — The Health Impact                   */}
      {/* ──────────────────────────────────────────────── */}
      <ImmersiveSection
        id="impact"
        gradient="bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.06),transparent_50%)]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center mb-20"
        >
          <motion.p
            variants={fadeUp}
            className="text-zinc-500 font-mono text-xs md:text-sm tracking-[0.25em] uppercase mb-8"
          >
            Why it matters
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]"
          >
            It doesn&apos;t stop
            <br />
            <span className="text-zinc-500">at your lungs.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-px bg-white/[0.04] rounded-2xl overflow-hidden"
        >
          {[
            {
              title: "No Help Is Coming",
              text: "Government measures project only ~4% improvement by 2030. The air will not get significantly better in the next decade.",
            },
            {
              title: "Crosses the Blood Barrier",
              text: "PM2.5 enters your circulatory system, triggering chronic inflammation in your heart, lungs, and brain.",
            },
            {
              title: "Children & Elderly",
              text: "Children breathe faster — exposure means stunted lung growth for life. For the elderly, polluted air is a silent trigger for emergencies.",
            },
            {
              title: "7–8 Million Deaths/Year",
              text: "More than malaria, HIV, and tuberculosis combined. Air pollution is the world's #1 environmental killer.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="bg-black/70 backdrop-blur-sm p-8 md:p-10 group"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-rose-300/80 transition-colors duration-500">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </ImmersiveSection>

      {/* ──────────────────────────────────────────────── */}
      {/* SECTION 3 — The Turning Point (CTA)             */}
      {/* ──────────────────────────────────────────────── */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background image with heavy overlay */}
        <div className="absolute inset-0">
          <Image
            src="/hero/forest-aerial.jpg"
            alt="Clean forest at golden hour"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="relative z-10 text-center px-5 md:px-12 py-32 md:py-40 max-w-4xl mx-auto"
        >
          <motion.p
            variants={fadeUp}
            className="text-zinc-400 font-mono text-xs md:text-sm tracking-[0.25em] uppercase mb-8"
          >
            Take action
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          >
            Protect your
            <br />
            own lungs.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-zinc-300 max-w-lg mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          >
            You can&apos;t wait for the air to get better. But you can clean the
            air you breathe right now.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
