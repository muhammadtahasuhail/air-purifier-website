"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function SolutionSection() {
  return (
    <section className="bg-zinc-950 py-24 text-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            The &ldquo;2,000 Rupee&rdquo; Math
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Many think air purifiers are a luxury. But the running cost is lower
            than a single doctor&apos;s visit.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-green-500/30 transition-all duration-500 relative overflow-hidden group glow-card glow-green"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/5 rounded-full blur-3xl group-hover:bg-green-500/10 transition-all duration-700" />
            <div className="relative z-10">
              <div className="absolute top-0 right-0 bg-green-500/10 text-green-400 px-4 py-1 rounded-bl-2xl text-sm font-medium">
                Smart Choice
              </div>
              <h3 className="text-2xl font-bold mb-2">Filter Replacement</h3>
              <p className="text-zinc-500 mb-8">One season of clean air</p>

              <div className="space-y-4 mb-8">
                {[
                  { label: "Standard HEPA Filter", value: "Rs. 2,000" },
                  {
                    label: "Usage (3-4 Months)",
                    value: "Included",
                    green: true,
                  },
                  {
                    label: "Health Benefit",
                    value: "Priceless",
                    green: true,
                  },
                ].map((row, i) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center justify-between border-b border-zinc-800 pb-2"
                  >
                    <span className="text-zinc-300">{row.label}</span>
                    <span
                      className={`font-mono ${
                        row.green ? "text-green-400" : ""
                      }`}
                    >
                      {row.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-zinc-500 text-sm">Total Cost</p>
                  <p className="text-4xl font-bold text-white">Rs. 2,000</p>
                </div>
                <div className="bg-green-500/20 p-3 rounded-full text-green-400 group-hover:scale-110 transition-transform">
                  <Check size={24} />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zinc-900/20 border border-zinc-800/50 rounded-3xl p-8 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
          >
            <h3 className="text-2xl font-bold mb-2">Getting Sick</h3>
            <p className="text-zinc-500 mb-8">Single chest infection</p>

            <div className="space-y-4 mb-8">
              {[
                { label: "Doctor Consultation", value: "Rs. 1,500+" },
                { label: "Antibiotics Course", value: "Rs. 1,000+" },
                { label: "Lost Work Days", value: "Variable", red: true },
              ].map((row, i) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center justify-between border-b border-zinc-800 pb-2"
                >
                  <span className="text-zinc-300">{row.label}</span>
                  <span
                    className={`font-mono ${row.red ? "text-red-400" : ""}`}
                  >
                    {row.value}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-zinc-500 text-sm">Total Cost</p>
                <p className="text-4xl font-bold text-red-400">
                  &gt; Rs. 2,500
                </p>
              </div>
              <div className="bg-red-500/20 p-3 rounded-full text-red-400">
                <X size={24} />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Compatible with Standard HEPA Filters
          </h3>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Fits perfectly with widely available filters. One filter easily lasts
            the whole smog season (Oct–Feb).
          </p>
        </motion.div>
      </div>
    </section>
  );
}
