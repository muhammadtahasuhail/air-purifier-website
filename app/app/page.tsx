"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Settings2,
  Bluetooth,
  Gauge,
  Timer,
  Zap,
  ArrowLeft,
  Smartphone,
  Activity,
  SlidersHorizontal,
  Wifi,
  Database,
  Clock,
  ChevronRight,
} from "lucide-react";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface FeatureShowcaseProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  badges?: string[];
  index: number;
}

function FeatureShowcase({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse,
  badges,
  index,
}: FeatureShowcaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-8 md:gap-16 items-center`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-2/5 flex justify-center"
      >
        <div className="relative w-[280px] h-[560px] overflow-hidden shadow-2xl shadow-black/50 bg-zinc-900 group">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </motion.div>
      <div className="w-full md:w-3/5">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-zinc-600 font-mono text-sm tracking-widest uppercase mb-3 block"
        >
          0{index + 1}
        </motion.span>
        <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          {title}
        </h3>
        <p className="text-lg text-zinc-400 leading-relaxed mb-6">
          {description}
        </p>
        {badges && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {badges.map((badge) => (
              <motion.span
                key={badge}
                variants={staggerItem}
                className="bg-zinc-800/80 text-zinc-300 px-3 py-1.5 rounded-full text-sm border border-zinc-700/50 hover:border-zinc-600 hover:text-white transition-all duration-300"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

const featureGrid = [
  {
    icon: Gauge,
    title: "Target AQI Auto-Adjust",
    description:
      "Set a target PM2.5 level and the purifier automatically raises or lowers fan speed to maintain it.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "hover:border-blue-500/20",
  },
  {
    icon: Timer,
    title: "Room Clean Time Estimate",
    description:
      "Exponential decay model calculates exactly how long until your room reaches clean air, based on room volume and current AQI.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "hover:border-emerald-500/20",
  },
  {
    icon: Activity,
    title: "PMS Sensor Lifespan",
    description:
      "Tracks your sensor's lifetime based on reading frequency against its 30,000-hour rated life. Typical lifespan: 20+ years.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "hover:border-amber-500/20",
  },
  {
    icon: Database,
    title: "Offline Data Sync",
    description:
      "Missed readings while away? The ESP32 buffers up to 500 readings locally and syncs them to the app automatically on reconnect.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "hover:border-purple-500/20",
  },
  {
    icon: Clock,
    title: "Automatic Time Sync",
    description:
      "Unix timestamps are synced on first connection, ensuring all sensor readings have accurate timestamps regardless of power cycles.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "hover:border-cyan-500/20",
  },
  {
    icon: Wifi,
    title: "WiFi & OTA Updates",
    description:
      "Configure WiFi credentials and push over-the-air firmware updates. Keep your purifier up to date without cables.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "hover:border-orange-500/20",
  },
  {
    icon: Zap,
    title: "Energy Tracking",
    description:
      "Real-time power draw monitoring and 24-hour cumulative energy usage in kWh. Know exactly what your purifier costs to run.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "hover:border-yellow-500/20",
  },
  {
    icon: SlidersHorizontal,
    title: "Filter Health Intelligence",
    description:
      "Compares first-3-day vs. last-3-day PM2.5 averages to compute real filter degradation — not just a timer countdown.",
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "hover:border-teal-500/20",
  },
  {
    icon: Timer,
    title: "Auto-Off Timer",
    description:
      "Schedule the purifier to automatically shut off after a set duration. Set it and forget it.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "hover:border-pink-500/20",
  },
  {
    icon: Settings2,
    title: "Multi-Device Dashboard",
    description:
      "Manage multiple Aether purifiers from a single app with per-device analytics and independent controls.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "hover:border-indigo-500/20",
  },
];

export default function AppPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20 overflow-x-hidden relative">
      {/* Background accents */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[15%] right-[10%] w-[500px] h-[500px] bg-indigo-500/[0.04] rounded-full blur-[150px] animate-drift" />
        <div className="absolute top-[55%] left-[5%] w-[400px] h-[400px] bg-purple-500/[0.03] rounded-full blur-[130px] animate-drift-delayed" />
      </div>

      {/* Back Link */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="container mx-auto px-6 mb-8 relative z-10"
      >
        <Link
          href="/products/bloc"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors duration-300 text-sm group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />{" "}
          Back to Bloc
        </Link>
      </motion.div>

      {/* Hero */}
      <section className="container mx-auto px-6 mb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="bg-indigo-500/20 p-2.5 rounded-xl">
              <Smartphone className="text-indigo-400" size={24} />
            </div>
            <span className="text-zinc-500 tracking-[0.3em] text-xs font-bold uppercase">
              Aether Companion App
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 glow-text"
          >
            Your Air,
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-zinc-500"
            >
              Under Control.
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl"
          >
            A full-featured companion app that turns your Aether Bloc into an
            intelligent air quality system. Real-time monitoring, smart
            automation, and deep analytics — all from your phone.
          </motion.p>
        </motion.div>
      </section>

      {/* Feature Showcases */}
      <section className="container mx-auto px-6 space-y-32 mb-32 relative z-10">
        <FeatureShowcase
          index={0}
          title="Real-Time Air Quality Dashboard"
          description="Live AQI card with PM2.5 readings and a 7-tier color-coded status system — from Excellent to Hazardous. See PM1.0, PM2.5, and PM10 particle data at a glance. Fan speed control with a 0–100% slider, CFM display, and three preset modes: Quiet, Balanced, and Turbo. Performance metrics show Air Changes per Hour, estimated room clean time, and filter life remaining."
          imageSrc="/app/config.jpeg"
          imageAlt="Aether App Dashboard showing AQI, fan controls, and performance"
          badges={[
            "Live AQI",
            "PM1.0 / PM2.5 / PM10",
            "Fan Presets",
            "Air Changes/hr",
            "Filter Life",
          ]}
        />

        <FeatureShowcase
          index={1}
          title="Analytics & Historical Charts"
          description="Four interactive time-range charts (1h, 24h, 7d, 30d) for Air Quality Trends tracking PM1.0, PM2.5, and PM10 simultaneously. Monitor energy consumption patterns, fan speed (RPM) history, and AQI Drop Rate over time. Summary cards show total Energy Used (kWh) and current filtering efficiency."
          imageSrc="/app/analytics.png"
          imageAlt="Aether App Analytics with air quality trends and energy data"
          reverse
          badges={[
            "1h / 24h / 7d / 30d",
            "Multi-particle Trends",
            "Energy Consumption",
            "Drop Rate",
          ]}
        />

        <FeatureShowcase
          index={2}
          title="Room Configuration & Sensor Settings"
          description="Enter your room dimensions (Length × Width × Height) and the app calculates volume to provide accurate Air Changes per Hour and estimated clean time. Configure AQI reading frequency from 30s to 300s, enable Live Mode for continuous 1-second streaming, and set a Target AQI for Smart Mode auto-adjustment."
          imageSrc="/app/settings.jpeg"
          imageAlt="Aether App Configuration screen with room setup and sensor settings"
          badges={[
            "Room Volume Calc",
            "Live Mode (1s)",
            "Target AQI",
            "Smart Mode",
          ]}
        />

        <FeatureShowcase
          index={3}
          title="LED Light Customization"
          description="Two LED modes to match your preference: AQI Mode dynamically changes colors based on air quality levels across 4 tiers (Good, Moderate, Unhealthy, Hazardous) with fully customizable color assignment. Static Color mode lets you pick from pure RGB presets. Choose between Breathing (smooth fade) or Fixed (constant) effects. 13 color swatches available for each AQI category."
          imageSrc="/app/connect.jpeg"
          imageAlt="Aether App LED customization with AQI color categories"
          reverse
          badges={[
            "AQI Mode",
            "Static Color",
            "Breathing Effect",
            "13 Color Swatches",
          ]}
        />

        <FeatureShowcase
          index={4}
          title="Energy & Filter Monitoring"
          description="Track real-time power draw and 24-hour energy consumption with detailed bar charts. Monitor filter efficiency over time — the app computes health from actual PM2.5 performance data, not just a simple timer. Know exactly when your filter needs replacement based on real degradation metrics."
          imageSrc="/app/dashboard.png"
          imageAlt="Aether App energy consumption and filtering efficiency charts"
          badges={[
            "Power Draw (W)",
            "24h Energy (kWh)",
            "Filter Efficiency %",
            "Real Degradation Data",
          ]}
        />
      </section>

      {/* Detailed Feature Grid */}
      <section className="container mx-auto px-6 mb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight glow-text">
            Under the Hood
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            More than a remote control. The Aether app is a full air quality
            management platform built on real engineering.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          {featureGrid.map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              className={`bg-zinc-900/30 border border-white/5 rounded-2xl p-6 hover:bg-zinc-900/50 transition-all duration-400 group glow-card ${feature.border}`}
            >
              <div
                className={`${feature.bg} p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className={feature.color} size={22} />
              </div>
              <h4 className="text-base font-bold mb-2">{feature.title}</h4>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Connectivity */}
      <section className="container mx-auto px-6 mb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-900/20 border border-white/5 rounded-[2rem] p-10 md:p-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 gradient-mesh pointer-events-none" />
          <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 mb-6"
              >
                <Bluetooth className="text-blue-400" size={28} />
                <span className="text-zinc-500 text-sm tracking-widest uppercase font-bold">
                  Connectivity
                </span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight glow-text">
                Seamless Bluetooth Connection
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Scans for bonded Bluetooth devices, connects via Classic SPP, and
                auto-reconnects to your last paired device on launch. Device
                nicknames, firmware info, and connection status — all at a
                glance.
              </p>
              <div className="space-y-4">
                {[
                  "Auto-reconnect on app launch",
                  "Custom device nicknames",
                  "Firmware version display",
                  "Multi-device support ready",
                ].map((text, i) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 text-zinc-300"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-breathe" />
                    <span>{text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full md:w-1/2 flex justify-center gap-6"
            >
              <div className="relative w-[200px] h-[400px] overflow-hidden shadow-2xl shadow-black/50 bg-zinc-900 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] transition-shadow duration-500">
                <Image
                  src="/app/home.jpeg"
                  alt="LED and system settings"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-[200px] h-[400px] overflow-hidden shadow-2xl shadow-black/50 bg-zinc-900 mt-12 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] transition-shadow duration-500">
                <Image
                  src="/app/controls.jpeg"
                  alt="Analytics and history view"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight glow-text">
            Get the Aether Bloc.
          </h2>
          <p className="text-xl text-zinc-400 mb-10">
            The app is included free with every Aether Bloc. No subscriptions,
            no cloud fees, no accounts. Just connect and breathe.
          </p>
          <Link
            href="/order"
            className="inline-flex items-center gap-2 bg-white text-black px-12 py-4 rounded-full text-xl font-bold uppercase tracking-wider hover:bg-zinc-200 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)] group"
          >
            Order Aether Bloc
            <ChevronRight
              size={22}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <p className="mt-6 text-zinc-500 text-sm">
            Rs. 12,999 · Ships within 3-5 business days
          </p>
        </motion.div>
      </section>
    </main>
  );
}
