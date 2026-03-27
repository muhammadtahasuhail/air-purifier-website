"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  Wind,
  Lightbulb,
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
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

interface FeatureShowcaseProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  badges?: string[];
}

function FeatureShowcase({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse,
  badges,
}: FeatureShowcaseProps) {
  return (
    <motion.div
      {...fadeUp}
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-8 md:gap-16 items-center`}
    >
      <div className="w-full md:w-2/5 flex justify-center">
        <div className="relative w-[280px] h-[560px] overflow-hidden shadow-2xl shadow-black/50 bg-zinc-900">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-full md:w-3/5">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          {title}
        </h3>
        <p className="text-lg text-zinc-400 leading-relaxed mb-6">
          {description}
        </p>
        {badges && (
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="bg-zinc-800/80 text-zinc-300 px-3 py-1.5 rounded-full text-sm border border-zinc-700/50"
              >
                {badge}
              </span>
            ))}
          </div>
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
  },
  {
    icon: Timer,
    title: "Room Clean Time Estimate",
    description:
      "Exponential decay model calculates exactly how long until your room reaches clean air, based on room volume and current AQI.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Activity,
    title: "PMS Sensor Lifespan",
    description:
      "Tracks your sensor's lifetime based on reading frequency against its 30,000-hour rated life. Typical lifespan: 20+ years.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: Database,
    title: "Offline Data Sync",
    description:
      "Missed readings while away? The ESP32 buffers up to 500 readings locally and syncs them to the app automatically on reconnect.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: Clock,
    title: "Automatic Time Sync",
    description:
      "Unix timestamps are synced on first connection, ensuring all sensor readings have accurate timestamps regardless of power cycles.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Wifi,
    title: "OTA Firmware Updates",
    description:
      "Push firmware updates over WiFi. The app configures WiFi credentials and triggers HTTP-based OTA updates to the ESP32.",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
  },
  {
    icon: Zap,
    title: "Energy Tracking",
    description:
      "Real-time power draw monitoring and 24-hour cumulative energy usage in kWh. Know exactly what your purifier costs to run.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    icon: SlidersHorizontal,
    title: "Filter Health Intelligence",
    description:
      "Compares first-3-day vs. last-3-day PM2.5 averages to compute real filter degradation — not just a timer countdown.",
    color: "text-teal-400",
    bg: "bg-teal-500/10",
  },
  {
    icon: Wifi,
    title: "WiFi Configuration & OTA",
    description:
      "Dedicated screen for WiFi setup and over-the-air firmware updates. Keep your purifier up to date without cables.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    icon: Timer,
    title: "Auto-Off Timer",
    description:
      "Schedule the purifier to automatically shut off after a set duration. Set it and forget it.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    icon: Settings2,
    title: "Multi-Device Dashboard",
    description:
      "Manage multiple Aether purifiers from a single app with per-device analytics and independent controls.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
];

export default function AppPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20 overflow-x-hidden">
      {/* Back Link */}
      <div className="container mx-auto px-6 mb-8">
        <Link
          href="/products/bloc"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm"
        >
          <ArrowLeft size={16} /> Back to Bloc
        </Link>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-indigo-500/20 p-2.5 rounded-xl">
              <Smartphone className="text-indigo-400" size={24} />
            </div>
            <span className="text-zinc-500 tracking-[0.3em] text-xs font-bold uppercase">
              Aether Companion App
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Your Air,
            <br />
            <span className="text-zinc-500">Under Control.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl">
            A full-featured companion app that turns your Aether Bloc into an
            intelligent air quality system. Real-time monitoring, smart
            automation, and deep analytics — all from your phone.
          </p>
        </motion.div>
      </section>

      {/* Feature Showcases */}
      <section className="container mx-auto px-6 space-y-32 mb-32">
        <FeatureShowcase
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
      <section className="container mx-auto px-6 mb-32">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Under the Hood
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            More than a remote control. The Aether app is a full air quality
            management platform built on real engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureGrid.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 hover:bg-zinc-900/50 hover:border-white/10 transition-all group"
            >
              <div
                className={`${feature.bg} p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className={feature.color} size={24} />
              </div>
              <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Connectivity */}
      <section className="container mx-auto px-6 mb-32">
        <div className="bg-zinc-900/20 border border-white/5 rounded-[2rem] p-10 md:p-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <Bluetooth className="text-blue-400" size={28} />
                <span className="text-zinc-500 text-sm tracking-widest uppercase font-bold">
                  Connectivity
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Seamless Bluetooth Connection
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Scans for bonded Bluetooth devices, connects via Classic SPP,
                and auto-reconnects to your last paired device on launch. Device
                nicknames, firmware info, and connection status — all at a
                glance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-zinc-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Auto-reconnect on app launch</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Custom device nicknames</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Firmware version display</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Multi-device support ready</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center gap-6">
              <div className="relative w-[200px] h-[400px] overflow-hidden shadow-2xl shadow-black/50 bg-zinc-900">
                <Image
                  src="/app/home.jpeg"
                  alt="LED and system settings"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-[200px] h-[400px] overflow-hidden shadow-2xl shadow-black/50 bg-zinc-900 mt-12">
                <Image
                  src="/app/controls.jpeg"
                  alt="Analytics and history view"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Get the Aether Bloc.
          </h2>
          <p className="text-xl text-zinc-400 mb-10">
            The app is included free with every Aether Bloc. No subscriptions,
            no cloud fees, no accounts. Just connect and breathe.
          </p>
          <Link
            href="/products/bloc"
            className="inline-block bg-white text-black px-12 py-4 rounded-full text-xl font-bold uppercase tracking-wider hover:bg-zinc-200 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
          >
            Order Aether Bloc
          </Link>
          <p className="mt-6 text-zinc-500 text-sm">
            Rs. 12,999 · Ships within 3-5 business days
          </p>
        </div>
      </section>
    </main>
  );
}
