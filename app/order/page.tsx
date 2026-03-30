"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Plus,
  Minus,
  ShoppingBag,
  Truck,
  ChevronRight,
} from "lucide-react";

// ---------------------------------------------------------------------------
// GOOGLE SHEETS SETUP
// ---------------------------------------------------------------------------
// 1. Create a new Google Sheet
// 2. Add these headers in Row 1:
//    Date | Name | Phone | Email | City | Address | Wood | Grill | AQI Sensor | HEPA Qty | MERV Qty | Note | Total
// 3. Go to Extensions > Apps Script
// 4. Paste the script from SHEETS_SETUP.md (created alongside this file)
// 5. Click Deploy > New Deployment > Web App > Anyone > Deploy
// 6. Copy the URL and paste it below:
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbwSH3E7erkoxip8ZSz2vUS-sLYcDzjtMBD2JvrfVidydt2guca_6VYwD-lAWizCRl35/exec";
// ---------------------------------------------------------------------------

const PRICING = {
  base: 12999,
  aqiSensor: 4999,
  hepaFilter: 2000,
  mervFilter: 1000,
  shipping: 500,
};

const woodPatterns = [
  {
    id: "natural-ash",
    name: "Natural Ash",
    gradient: "linear-gradient(135deg, #D4C5A9 0%, #C2B390 30%, #D9CCAF 60%, #BBA97D 100%)",
  },
  {
    id: "golden-oak",
    name: "Golden Oak",
    gradient: "linear-gradient(135deg, #B8860B 0%, #DAA520 30%, #C49A3C 60%, #A67B2E 100%)",
  },
  {
    id: "dark-walnut",
    name: "Dark Walnut",
    gradient: "linear-gradient(135deg, #3E2723 0%, #5D4037 30%, #4E342E 60%, #3E2723 100%)",
  },
  {
    id: "ebony-black",
    name: "Ebony Black",
    gradient: "linear-gradient(135deg, #1A1A1A 0%, #2C2C2C 30%, #1F1F1F 60%, #111111 100%)",
  },
  {
    id: "classic-maple",
    name: "Classic Maple",
    gradient: "linear-gradient(135deg, #F5DEB3 0%, #DEB887 30%, #EDCFA0 60%, #D2B48C 100%)",
  },
];

const grillDesigns = [
  {
    id: "geometric-grid",
    name: "Geometric Grid",
    pattern: `repeating-linear-gradient(0deg, transparent, transparent 8px, rgba(255,255,255,0.15) 8px, rgba(255,255,255,0.15) 9px),
              repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(255,255,255,0.15) 8px, rgba(255,255,255,0.15) 9px)`,
  },
  {
    id: "honeycomb",
    name: "Honeycomb",
    pattern: `radial-gradient(circle at 50% 50%, transparent 4px, rgba(255,255,255,0.08) 4px, rgba(255,255,255,0.08) 5px, transparent 5px),
              radial-gradient(circle at 0% 50%, transparent 4px, rgba(255,255,255,0.08) 4px, rgba(255,255,255,0.08) 5px, transparent 5px)`,
    patternSize: "12px 20px",
  },
  {
    id: "minimal-lines",
    name: "Minimal Lines",
    pattern: `repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(255,255,255,0.12) 5px, rgba(255,255,255,0.12) 6px)`,
  },
  {
    id: "diamond",
    name: "Diamond Pattern",
    pattern: `repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(255,255,255,0.1) 6px, rgba(255,255,255,0.1) 7px),
              repeating-linear-gradient(-45deg, transparent, transparent 6px, rgba(255,255,255,0.1) 6px, rgba(255,255,255,0.1) 7px)`,
  },
  {
    id: "solid-panel",
    name: "Solid Panel",
    pattern: "none",
  },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function QuantityControl({
  value,
  onChange,
  label,
  price,
}: {
  value: number;
  onChange: (v: number) => void;
  label: string;
  price: number;
}) {
  return (
    <div className="flex items-center justify-between bg-zinc-900/50 border border-white/5 rounded-xl p-4">
      <div>
        <p className="font-semibold text-white">{label}</p>
        <p className="text-sm text-zinc-500">Rs. {price.toLocaleString()} each</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(0, value - 1))}
          className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-white hover:bg-zinc-700 transition-colors disabled:opacity-30"
          disabled={value === 0}
        >
          <Minus size={14} />
        </button>
        <span className="text-lg font-bold text-white w-6 text-center">{value}</span>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-white hover:bg-zinc-700 transition-colors"
        >
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
}

export default function OrderPage() {
  const [woodPattern, setWoodPattern] = useState(woodPatterns[0].id);
  const [grillDesign, setGrillDesign] = useState(grillDesigns[0].id);
  const [aqiSensor, setAqiSensor] = useState(false);
  const [hepaFilters, setHepaFilters] = useState(0);
  const [mervFilters, setMervFilters] = useState(0);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const totalFilters = hepaFilters + mervFilters;

  const subtotal =
    PRICING.base +
    (aqiSensor ? PRICING.aqiSensor : 0) +
    hepaFilters * PRICING.hepaFilter +
    mervFilters * PRICING.mervFilter;
  const total = subtotal + PRICING.shipping;

  const canSubmit = name.trim() && phone.trim() && city.trim() && address.trim() && totalFilters > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setSubmitting(true);
    setError("");

    const orderData = {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      city: city.trim(),
      address: address.trim(),
      woodPattern: woodPatterns.find((w) => w.id === woodPattern)?.name || woodPattern,
      grillDesign: grillDesigns.find((g) => g.id === grillDesign)?.name || grillDesign,
      aqiSensor,
      hepaFilters,
      mervFilters,
      note: note.trim(),
      total,
    };

    if (!GOOGLE_SHEETS_URL) {
      const waText = encodeURIComponent(
        `*New Aether Bloc Order*\n\n` +
        `Name: ${orderData.name}\n` +
        `Phone: ${orderData.phone}\n` +
        `${orderData.email ? `Email: ${orderData.email}\n` : ""}` +
        `City: ${orderData.city}\n` +
        `Address: ${orderData.address}\n\n` +
        `*Configuration:*\n` +
        `Wood: ${orderData.woodPattern}\n` +
        `Grill: ${orderData.grillDesign}\n` +
        `AQI Sensor: ${orderData.aqiSensor ? "Yes (+Rs. 4,999)" : "No"}\n` +
        `HEPA-13 Filters: ${orderData.hepaFilters}\n` +
        `MERV-13 Filters: ${orderData.mervFilters}\n` +
        `${orderData.note ? `Note: ${orderData.note}\n` : ""}` +
        `\n*Total: Rs. ${orderData.total.toLocaleString()}*`
      );
      window.open(`https://wa.me/?text=${waText}`, "_blank");
      setSubmitted(true);
      setSubmitting(false);
      return;
    }

    try {
      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-black text-white pt-24 pb-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto text-center px-6"
        >
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="text-emerald-400" size={40} />
          </div>
          <h1 className="text-4xl font-bold mb-4 tracking-tight">Order Placed!</h1>
          <p className="text-xl text-zinc-400 mb-2">
            Thank you, {name}. We&apos;ve received your order.
          </p>
          <p className="text-3xl font-bold text-white mb-6">
            Rs. {total.toLocaleString()}
          </p>
          <p className="text-zinc-500 mb-10">
            We&apos;ll reach out on <span className="text-white">{phone}</span> to confirm
            your order and arrange delivery. Expect a call within 24 hours.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-zinc-200 hover:scale-105 transition-all duration-300"
          >
            Back to Home
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20 overflow-x-hidden relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] right-[5%] w-[500px] h-[500px] bg-indigo-500/[0.03] rounded-full blur-[150px] animate-drift" />
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-emerald-500/[0.03] rounded-full blur-[130px] animate-drift-delayed" />
      </div>

      {/* Back Link */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="container mx-auto px-6 mb-8 relative z-10"
      >
        <Link
          href="/products/bloc"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors duration-300 text-sm group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Bloc
        </Link>
      </motion.div>

      <form onSubmit={handleSubmit} className="container mx-auto px-6 relative z-10">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white/10 p-2.5 rounded-xl">
              <ShoppingBag className="text-white" size={24} />
            </div>
            <span className="text-zinc-500 tracking-[0.3em] text-xs font-bold uppercase">
              Configure &amp; Order
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 glow-text">
            Build Your Bloc.
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Choose your wood finish, grill design, and components. Every Bloc is assembled to your specification.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 max-w-7xl">
          {/* LEFT: Configurator */}
          <div className="lg:col-span-2 space-y-12">
            {/* Wood Pattern */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-2">Wood Finish</h2>
              <p className="text-zinc-500 mb-6">Choose the veneer finish for your Bloc body.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {woodPatterns.map((wood) => (
                  <button
                    key={wood.id}
                    type="button"
                    onClick={() => setWoodPattern(wood.id)}
                    className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 group ${
                      woodPattern === wood.id
                        ? "border-white shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                        : "border-white/5 hover:border-white/20"
                    }`}
                  >
                    <div
                      className="aspect-square"
                      style={{ background: wood.gradient }}
                    />
                    <div className="p-2.5 bg-zinc-900/80 text-center">
                      <span className="text-xs font-medium text-zinc-300">{wood.name}</span>
                    </div>
                    {woodPattern === wood.id && (
                      <motion.div
                        layoutId="wood-check"
                        className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center"
                      >
                        <Check size={14} className="text-black" />
                      </motion.div>
                    )}
                  </button>
                ))}
              </div>
            </motion.section>

            {/* Grill Design */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-2">Metal Grill Design</h2>
              <p className="text-zinc-500 mb-6">Select the front grill pattern. Laser-cut powder-coated steel.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {grillDesigns.map((grill) => (
                  <button
                    key={grill.id}
                    type="button"
                    onClick={() => setGrillDesign(grill.id)}
                    className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      grillDesign === grill.id
                        ? "border-white shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                        : "border-white/5 hover:border-white/20"
                    }`}
                  >
                    <div
                      className="aspect-square bg-zinc-800"
                      style={{
                        backgroundImage: grill.pattern,
                        backgroundSize: grill.patternSize || "auto",
                      }}
                    />
                    <div className="p-2.5 bg-zinc-900/80 text-center">
                      <span className="text-xs font-medium text-zinc-300">{grill.name}</span>
                    </div>
                    {grillDesign === grill.id && (
                      <motion.div
                        layoutId="grill-check"
                        className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center"
                      >
                        <Check size={14} className="text-black" />
                      </motion.div>
                    )}
                  </button>
                ))}
              </div>
            </motion.section>

            {/* AQI Sensor */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-2">AQI Sensor</h2>
              <p className="text-zinc-500 mb-6">Add a high-precision PMS5003 laser particle sensor for real-time air quality monitoring via the companion app.</p>
              <button
                type="button"
                onClick={() => setAqiSensor(!aqiSensor)}
                className={`w-full flex items-center justify-between p-5 rounded-xl border-2 transition-all duration-300 ${
                  aqiSensor
                    ? "border-emerald-500/50 bg-emerald-500/5"
                    : "border-white/5 bg-zinc-900/50 hover:border-white/15"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-7 rounded-full relative transition-colors duration-300 ${
                      aqiSensor ? "bg-emerald-500" : "bg-zinc-700"
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${
                        aqiSensor ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-white">Laser AQI Sensor (PMS5003)</p>
                    <p className="text-sm text-zinc-500">PM1.0, PM2.5, PM10 real-time readings</p>
                  </div>
                </div>
                <span className={`font-bold text-lg ${aqiSensor ? "text-emerald-400" : "text-zinc-400"}`}>
                  + Rs. {PRICING.aqiSensor.toLocaleString()}
                </span>
              </button>
            </motion.section>

            {/* Filters */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-2">Filters</h2>
              <p className="text-zinc-500 mb-6">
                Select at least one filter. You can order multiple for future replacements.
              </p>
              <div className="space-y-3">
                <QuantityControl
                  label="Aether Zenith — HEPA-13"
                  price={PRICING.hepaFilter}
                  value={hepaFilters}
                  onChange={setHepaFilters}
                />
                <QuantityControl
                  label="Aether Stratus — MERV-13"
                  price={PRICING.mervFilter}
                  value={mervFilters}
                  onChange={setMervFilters}
                />
              </div>
              {totalFilters === 0 && (
                <p className="text-amber-400 text-sm mt-3">Please select at least one filter.</p>
              )}
            </motion.section>

            {/* Customer Info */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-2">Delivery Details</h2>
              <p className="text-zinc-500 mb-6">We&apos;ll confirm your order via phone before shipping.</p>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                <motion.div variants={staggerItem} className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Muhammad Ali"
                      className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="0300-1234567"
                      className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all"
                    />
                  </div>
                </motion.div>
                <motion.div variants={staggerItem}>
                  <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block">
                    Email <span className="text-zinc-600">(optional)</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ali@example.com"
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all"
                  />
                </motion.div>
                <motion.div variants={staggerItem} className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block">
                      City *
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                      placeholder="Islamabad"
                      className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block">
                      Full Address *
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                      placeholder="House 5, Street 10, F-8/2"
                      className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all"
                    />
                  </div>
                </motion.div>
                <motion.div variants={staggerItem}>
                  <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block">
                    Custom Note <span className="text-zinc-600">(optional)</span>
                  </label>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Special requests, custom grill pattern description, etc."
                    rows={3}
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all resize-none"
                  />
                </motion.div>
              </motion.div>
            </motion.section>
          </div>

          {/* RIGHT: Order Summary (sticky) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-28 bg-zinc-900/50 border border-white/5 rounded-2xl p-6 space-y-5 backdrop-blur-sm">
              <h3 className="text-xl font-bold">Order Summary</h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-zinc-300">
                  <span>Aether Bloc (Base)</span>
                  <span className="font-mono">Rs. {PRICING.base.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-zinc-500">
                  <span>Wood: {woodPatterns.find((w) => w.id === woodPattern)?.name}</span>
                  <span className="font-mono text-zinc-600">Included</span>
                </div>

                <div className="flex justify-between text-zinc-500">
                  <span>Grill: {grillDesigns.find((g) => g.id === grillDesign)?.name}</span>
                  <span className="font-mono text-zinc-600">Included</span>
                </div>

                {aqiSensor && (
                  <div className="flex justify-between text-zinc-300">
                    <span>AQI Sensor (PMS5003)</span>
                    <span className="font-mono">Rs. {PRICING.aqiSensor.toLocaleString()}</span>
                  </div>
                )}

                {hepaFilters > 0 && (
                  <div className="flex justify-between text-zinc-300">
                    <span>Zenith HEPA-13 &times; {hepaFilters}</span>
                    <span className="font-mono">
                      Rs. {(hepaFilters * PRICING.hepaFilter).toLocaleString()}
                    </span>
                  </div>
                )}

                {mervFilters > 0 && (
                  <div className="flex justify-between text-zinc-300">
                    <span>Stratus MERV-13 &times; {mervFilters}</span>
                    <span className="font-mono">
                      Rs. {(mervFilters * PRICING.mervFilter).toLocaleString()}
                    </span>
                  </div>
                )}

                <div className="border-t border-white/5 pt-3 flex justify-between text-zinc-300">
                  <span>Subtotal</span>
                  <span className="font-mono">Rs. {subtotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Truck size={14} /> Shipping
                  </span>
                  <span className="font-mono">Rs. {PRICING.shipping.toLocaleString()}</span>
                </div>

                <div className="border-t border-white/10 pt-4 flex justify-between">
                  <span className="text-lg font-bold text-white">Total</span>
                  <span className="text-2xl font-bold text-white">
                    Rs. {total.toLocaleString()}
                  </span>
                </div>
              </div>

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={!canSubmit || submitting}
                className="w-full bg-white text-black py-4 rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-zinc-200 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center gap-2"
              >
                {submitting ? (
                  "Placing Order..."
                ) : (
                  <>
                    Place Order <ChevronRight size={18} />
                  </>
                )}
              </button>

              <p className="text-xs text-zinc-600 text-center">
                Cash on delivery. We&apos;ll call to confirm before shipping.
                <br />Ships within 3-5 business days.
              </p>
            </div>
          </motion.div>
        </div>
      </form>
    </main>
  );
}
