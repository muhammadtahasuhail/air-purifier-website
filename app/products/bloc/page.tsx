"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Check,
  Wind,
  Shield,
  Zap,
  Maximize,
  Sliders,
  Box,
  Volume2,
  ChevronRight,
  ChevronLeft,
  Smartphone,
  Radar,
  Paintbrush,
  Grid3x3,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BlocProductPage() {
  const specsRef = useRef<HTMLElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: "/products/bloc/bloc_front.png", alt: "Aether Bloc Front View" },
    { src: "/products/bloc/bloc_back.png", alt: "Aether Bloc Back View" },
  ];

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  const scrollToSpecs = () =>
    specsRef.current?.scrollIntoView({ behavior: "smooth" });

  const specs = [
    { label: "Room Size", value: "Up to 250 sq. ft.", icon: Maximize },
    { label: "Air Changes", value: "5+ per hour (12x15ft)", icon: Wind },
    { label: "Filtration", value: "True HEPA H13", icon: Shield },
    { label: "Power", value: "21 Watts", icon: Zap },
    { label: "Noise", value: "< 58 dB", icon: Volume2 },
    { label: "Dimensions", value: "30 x 30 x 30 cm", icon: Box },
    { label: "AQI Sensor", value: "High-Precision PMS5003", icon: Radar },
    {
      label: "App Control",
      value: "Bluetooth + Smart Modes",
      icon: Smartphone,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20 overflow-x-hidden relative">
      {/* Page-level background accents */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-indigo-500/[0.03] rounded-full blur-[150px] animate-drift" />
        <div className="absolute top-[60%] right-[10%] w-[400px] h-[400px] bg-emerald-500/[0.03] rounded-full blur-[130px] animate-drift-delayed" />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-zinc-500 tracking-[0.3em] text-xs font-bold uppercase mb-4 block"
            >
              The Aether Collection
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-7xl md:text-8xl font-bold tracking-tighter mb-6 glow-text"
            >
              Bloc.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl text-zinc-300 font-light leading-relaxed mb-6 max-w-lg"
            >
              Clean Air. By Design. High-performance filtration hidden inside a
              minimalist side table.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-4xl font-bold text-white mb-8"
            >
              Rs. 12,999
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4"
            >
              <button className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-zinc-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all duration-300">
                Order Now
              </button>
              <button
                onClick={scrollToSpecs}
                className="border border-white/20 text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                Tech Specs
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] w-full bg-zinc-900/50 rounded-3xl overflow-hidden border border-white/5 group glow-card"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    fill
                    className="object-cover opacity-90"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={prevImage}
                className="bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-md transition-all hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-md transition-all hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex
                      ? "bg-white w-8"
                      : "bg-white/30 hover:bg-white/50 w-2"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Highlight: Furniture First */}
      <section className="container mx-auto px-6 mb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-900/30 border border-white/5 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 gradient-mesh pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight glow-text">
              Built like furniture, not an appliance.
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12">
              &ldquo;Plastic turns yellow. Wood lasts forever.&rdquo; Unlike
              standard plastic air purifiers designed to be thrown away, Bloc is
              crafted from 16mm High-Density Wooden Composite with an Ash/Oak
              Veneer finish. It&apos;s a functioning side table that supports up
              to 10kg.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mt-16 text-left max-w-4xl mx-auto relative z-10"
          >
            <motion.div
              variants={staggerItem}
              className="bg-black/40 p-8 rounded-2xl border border-white/5 backdrop-blur-sm glow-card"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Volume2 className="text-zinc-500" /> Silence through Physics
              </h3>
              <p className="text-zinc-400">
                We don&apos;t just use a fan; we use a{" "}
                <span className="text-white">Plenum Chamber</span>. The deep
                30cm internal depth creates a vacuum that pulls air evenly, while
                the wooden body blocks noise that thin plastic shells can&apos;t.
              </p>
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="bg-black/40 p-8 rounded-2xl border border-white/5 backdrop-blur-sm glow-card"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Sliders className="text-zinc-500" /> Industrial Reliability
              </h3>
              <p className="text-zinc-400">
                Heavy-duty metal body axial motor mounted vertically for maximum
                bearing lifespan. 5-step hum-free speed regulator. Built to run
                24/7.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Customization Options */}
      <section className="container mx-auto px-6 mb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-900/30 border border-white/5 rounded-[3rem] p-12 md:p-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 gradient-mesh pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight glow-text">
              Make it Yours.
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Every space is different. Bloc adapts to yours with customizable
              finishes and grill designs.
            </p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10"
          >
            <motion.div
              variants={staggerItem}
              className="bg-black/40 p-8 rounded-2xl border border-white/5 backdrop-blur-sm group hover:border-amber-500/20 transition-all duration-500 glow-card"
            >
              <Paintbrush
                className="text-amber-400 mb-5 group-hover:scale-110 transition-transform duration-300"
                size={36}
              />
              <h3 className="text-2xl font-bold mb-3">Custom Wooden Designs</h3>
              <p className="text-zinc-400 leading-relaxed">
                Choose from a range of wood veneer finishes — Ash, Oak, Walnut,
                and more. Or request a fully custom design to match your
                interior. Your purifier, your aesthetic.
              </p>
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="bg-black/40 p-8 rounded-2xl border border-white/5 backdrop-blur-sm group hover:border-zinc-400/20 transition-all duration-500 glow-card"
            >
              <Grid3x3
                className="text-zinc-300 mb-5 group-hover:scale-110 transition-transform duration-300"
                size={36}
              />
              <h3 className="text-2xl font-bold mb-3">
                Custom Metal Grill Designs
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Upgrade the front grill with custom laser-cut metal patterns.
                Geometric, minimal, ornate — we cut it to your specification in
                powder-coated steel or raw metal.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Smart Features: App Control & AQI Sensor */}
      <section className="container mx-auto px-6 mb-32 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={staggerItem}
            className="bg-gradient-to-br from-indigo-950/40 to-zinc-900/30 border border-indigo-500/10 rounded-[2rem] p-10 relative overflow-hidden group glow-card glow-indigo"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/15 transition-all duration-700" />
            <div className="relative z-10">
              <Smartphone
                className="text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300"
                size={40}
              />
              <h3 className="text-3xl font-bold mb-4 tracking-tight">
                Companion App
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Full control from your phone. Real-time AQI dashboard, smart fan
                modes, historical analytics, energy tracking, and LED
                customization — all over Bluetooth.
              </p>
              <Link
                href="/app"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-medium group/link"
              >
                Explore the App{" "}
                <ChevronRight
                  size={18}
                  className="group-hover/link:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>
          <motion.div
            variants={staggerItem}
            className="bg-gradient-to-br from-emerald-950/40 to-zinc-900/30 border border-emerald-500/10 rounded-[2rem] p-10 relative overflow-hidden group glow-card glow-green"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/15 transition-all duration-700" />
            <div className="relative z-10">
              <Radar
                className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300"
                size={40}
              />
              <h3 className="text-3xl font-bold mb-4 tracking-tight">
                High-Precision AQI Sensor
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Built-in Plantower PMS5003 laser particle sensor measures PM1.0,
                PM2.5, and PM10 in real time. Know exactly what you&apos;re
                breathing — down to particles per 0.1 liters of air.
              </p>
              <div className="flex gap-3 text-sm">
                {["PM1.0", "PM2.5", "PM10"].map((pm) => (
                  <span
                    key={pm}
                    className="bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-full border border-emerald-500/20"
                  >
                    {pm}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Tech Specs Grid */}
      <section
        ref={specsRef}
        className="container mx-auto px-6 mb-32 scroll-mt-32 relative z-10"
      >
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/3 sticky top-32"
          >
            <h2 className="text-4xl font-bold mb-6 glow-text">The Numbers.</h2>
            <p className="text-zinc-400 text-lg mb-8">
              Medical grade filtration. Industrial reliability. Furniture
              aesthetics.
            </p>
            <div className="space-y-4">
              {[
                "Captures 99.97% of particles (0.3 microns)",
                "Removes Smoke, Pollen, Bacteria",
                "Low annual maintenance (~Rs. 2k-4k)",
              ].map((text, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 text-zinc-300"
                >
                  <Check className="text-green-500 flex-shrink-0" size={20} />
                  <span>{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {specs.map((spec) => (
              <motion.div
                key={spec.label}
                variants={staggerItem}
                className="bg-zinc-900/20 border border-white/10 p-6 rounded-2xl hover:bg-zinc-900/40 transition-all duration-400 glow-card group"
              >
                <spec.icon
                  className="text-zinc-500 mb-4 group-hover:text-white group-hover:scale-110 transition-all duration-300"
                  size={32}
                />
                <h4 className="text-zinc-500 text-sm uppercase tracking-wider mb-2">
                  {spec.label}
                </h4>
                <p className="text-2xl font-semibold text-white">
                  {spec.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Maintenance & CTA */}
      <section className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 glow-text">
            Designed for low-cost ownership.
          </h2>
          <p className="text-xl text-zinc-400 mb-12">
            Uses standard 300x300x25mm Flat HEPA Panels available widely.
            Replaced in seconds via a tool-free rear hatch.
          </p>
          <button className="bg-white text-black px-12 py-4 rounded-full text-xl font-bold uppercase tracking-wider hover:bg-zinc-200 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)]">
            Order Aether Bloc
          </button>
          <p className="mt-6 text-zinc-500 text-sm">
            Ships within 3-5 business days. 1 Year Warranty.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
