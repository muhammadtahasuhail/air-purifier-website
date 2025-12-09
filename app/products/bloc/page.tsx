"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, Wind, Shield, Zap, Maximize, Sliders, Box, Volume2 } from "lucide-react";
import { useRef } from "react";

export default function BlocProductPage() {
  const specsRef = useRef<HTMLElement>(null);

  const scrollToSpecs = () => {
    specsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const specs = [
    { label: "Room Size", value: "Up to 250 sq. ft.", icon: Maximize },
    { label: "Air Changes", value: "5+ per hour (12x15ft)", icon: Wind },
    { label: "Filtration", value: "True HEPA H13", icon: Shield },
    { label: "Power", value: "40 Watts", icon: Zap },
    { label: "Noise", value: "< 53 dB (White Noise)", icon: Volume2 },
    { label: "Dimensions", value: "30 x 30 x 30 cm", icon: Box },
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-zinc-500 tracking-[0.3em] text-xs font-bold uppercase mb-4 block">
              The Aether Collection
            </span>
            <h1 className="text-7xl font-bold tracking-tighter mb-6">Bloc.</h1>
            <p className="text-2xl text-zinc-300 font-light leading-relaxed mb-6 max-w-lg">
              Clean Air. By Design. High-performance filtration hidden inside a minimalist side table.
            </p>
            <p className="text-4xl font-bold text-white mb-8">Rs. 12,999</p>
            <div className="flex gap-4">
               <button className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors">
                Order Now
              </button>
              <button 
                onClick={scrollToSpecs}
                className="border border-white/20 text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                Tech Specs
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] w-full bg-zinc-900/50 rounded-3xl overflow-hidden border border-white/5"
          >
             <div className="absolute inset-0 flex items-center justify-center">
                <Image 
                  src="/products/bloc/bloc_front.png" 
                  alt="Aether Bloc Front View" 
                  fill 
                  className="object-cover opacity-90 hover:scale-105 transition-transform duration-700" 
                />
             </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Highlight: Furniture First */}
      <section className="container mx-auto px-6 mb-32">
        <div className="bg-zinc-900/30 border border-white/5 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Built like furniture, not an appliance.</h2>
                <p className="text-xl text-zinc-400 leading-relaxed mb-12">
                    "Plastic turns yellow. Wood lasts forever." Unlike standard plastic air purifiers designed to be thrown away, Bloc is crafted from 16mm High-Density Wooden Composite with an Ash/Oak Veneer finish. It's a functioning side table that supports up to 10kg.
                </p>
            </div>
            
            {/* Acoustic Visualization */}
            <div className="grid md:grid-cols-2 gap-8 mt-16 text-left max-w-4xl mx-auto">
                <div className="bg-black/40 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <Volume2 className="text-zinc-500" /> Silence through Physics
                    </h3>
                    <p className="text-zinc-400">
                        We don't just use a fan; we use a <span className="text-white">Plenum Chamber</span>. The deep 30cm internal depth creates a vacuum that pulls air evenly, while the wooden body blocks noise that thin plastic shells can't.
                    </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <Sliders className="text-zinc-500" /> Industrial Reliability
                    </h3>
                    <p className="text-zinc-400">
                        Heavy-duty metal body axial motor mounted vertically for maximum bearing lifespan. 5-step hum-free speed regulator. Built to run 24/7.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Tech Specs Grid */}
      <section ref={specsRef} className="container mx-auto px-6 mb-32 scroll-mt-32">
        <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3 sticky top-32">
                <h2 className="text-4xl font-bold mb-6">The Numbers.</h2>
                <p className="text-zinc-400 text-lg mb-8">
                    Medical grade filtration. Industrial reliability. Furniture aesthetics.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-zinc-300">
                        <Check className="text-green-500" size={20} />
                        <span>Captures 99.97% of particles (0.3 microns)</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-300">
                        <Check className="text-green-500" size={20} />
                        <span>Removes Smoke, Pollen, Bacteria</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-300">
                        <Check className="text-green-500" size={20} />
                        <span>Low annual maintenance (~Rs. 2k-4k)</span>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {specs.map((spec, i) => (
                    <div key={i} className="bg-zinc-900/20 border border-white/10 p-6 rounded-2xl hover:bg-zinc-900/40 transition-colors">
                        <spec.icon className="text-zinc-500 mb-4" size={32} />
                        <h4 className="text-zinc-500 text-sm uppercase tracking-wider mb-2">{spec.label}</h4>
                        <p className="text-2xl font-semibold text-white">{spec.value}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Maintenance & CTA */}
      <section className="container mx-auto px-6 text-center">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Designed for low-cost ownership.</h2>
            <p className="text-xl text-zinc-400 mb-12">
                Uses standard 300x300x25mm Flat HEPA Panels available widely. Replaced in seconds via a tool-free rear hatch.
            </p>
            <button className="bg-white text-black px-12 py-4 rounded-full text-xl font-bold uppercase tracking-wider hover:bg-zinc-200 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                Order Aether Bloc
            </button>
            <p className="mt-6 text-zinc-500 text-sm">
                Ships within 3-5 business days. 1 Year Warranty.
            </p>
         </div>
      </section>
    </main>
  );
}
