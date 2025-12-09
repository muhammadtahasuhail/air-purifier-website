"use client";

import { Check, X } from "lucide-react";

export default function SolutionSection() {
  return (
    <section className="bg-zinc-950 py-24 text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The "2,000 Rupee" Math</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Many think air purifiers are a luxury. But the running cost is lower than a single doctor's visit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Option A: The Solution */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition-colors relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-green-500/10 text-green-400 px-4 py-1 rounded-bl-2xl text-sm font-medium">
              Smart Choice
            </div>
            <h3 className="text-2xl font-bold mb-2">DIY / Filter Replacement</h3>
            <p className="text-zinc-500 mb-8">One season of clean air</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-300">Guard i300 HEPA Filter</span>
                <span className="font-mono">Rs. 2,000</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-300">Usage (3-4 Months)</span>
                <span className="font-mono text-green-400">Included</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-300">Health Benefit</span>
                <span className="font-mono text-green-400">Priceless</span>
              </div>
            </div>

            <div className="flex items-end justify-between">
              <div>
                 <p className="text-zinc-500 text-sm">Total Cost</p>
                 <p className="text-4xl font-bold text-white">Rs. 2,000</p>
              </div>
              <div className="bg-green-500/20 p-3 rounded-full text-green-400">
                <Check size={24} />
              </div>
            </div>
          </div>

          {/* Option B: The Problem */}
          <div className="bg-zinc-900/20 border border-zinc-800/50 rounded-3xl p-8 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all">
             <h3 className="text-2xl font-bold mb-2">Getting Sick</h3>
            <p className="text-zinc-500 mb-8">Single chest infection</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-300">Doctor Consultation</span>
                <span className="font-mono">Rs. 1,500+</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-300">Antibiotics Course</span>
                <span className="font-mono">Rs. 1,000+</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-300">Lost Work Days</span>
                <span className="font-mono text-red-400">Variable</span>
              </div>
            </div>

            <div className="flex items-end justify-between">
              <div>
                 <p className="text-zinc-500 text-sm">Total Cost</p>
                 <p className="text-4xl font-bold text-red-400">&gt; Rs. 2,500</p>
              </div>
              <div className="bg-red-500/20 p-3 rounded-full text-red-400">
                <X size={24} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-white">Compatible with Guard i300</h3>
            <p className="text-zinc-400 max-w-2xl mx-auto">
                Fits perfectly with your DIY build. One filter easily lasts the whole smog season (Oct–Feb).
            </p>
        </div>
      </div>
    </section>
  );
}

