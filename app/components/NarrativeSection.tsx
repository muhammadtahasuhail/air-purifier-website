"use client";

import { motion } from "framer-motion";
import { useRef, ReactNode } from "react";
import { Cigarette, HeartPulse, Clock, Activity, Baby, Skull } from "lucide-react";

interface NarrativeStepProps {
  title: string;
  children: ReactNode;
  icon: ReactNode;
  index: number;
}

const NarrativeStep = ({ title, children, icon, index }: NarrativeStepProps) => {
  return (
    // Removed 'snap-center' to disable snap scrolling.
    // Kept min-h-screen to ensure full spacing and focus for each point.
    <div className="min-h-screen w-full flex items-center justify-center">
        <motion.div 
            // Initial state: hidden and slightly lower
            initial={{ opacity: 0, y: 50 }}
            // When in view: fade in and move up to neutral position
            whileInView={{ opacity: 1, y: 0 }}
            // Transition: Smooth ease-out duration
            transition={{ duration: 1.2, ease: "easeOut" }}
            // Viewport: Trigger animation when element is 20% into the view
            viewport={{ margin: "-20% 0px -20% 0px", once: false }}
            className="max-w-2xl w-full p-8 md:p-12"
        >
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full text-zinc-300 border border-white/10 backdrop-blur-md">
                    {icon}
                </div>
                <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">0{index + 1}</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-tight">
                {title}
            </h2>
            
            {/* Staggered animation for content could be added, but keeping it simple as a group fade for now */}
            <div className="text-xl md:text-2xl text-zinc-400 space-y-6 font-light leading-relaxed tracking-tight">
                {children}
            </div>
        </motion.div>
    </div>
  );
};

export default function NarrativeSection() {
  const containerRef = useRef(null);
  
  return (
    <section ref={containerRef} className="relative bg-black text-white">
        {/* Sticky Background Visuals */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.03),_transparent_70%)]" />
        </div>

        <div className="relative z-10 flex flex-col items-center pb-32">
            <NarrativeStep 
                index={0}
                title="The Passive Smoker Reality" 
                icon={<Cigarette size={24} />}
            >
                <p>You are smoking without touching a cigarette.</p>
                <p className="text-white">
                    Living in Islamabad during winter is equivalent to smoking <span className="border-b border-red-500/50 pb-1">5-7 cigarettes</span> daily.
                </p>
                <p className="text-white">
                    In Lahore, this jumps to <span className="border-b border-red-500/50 pb-1">10-12 cigarettes</span>.
                </p>
                <p className="text-base text-zinc-600 mt-4 font-mono">
                    Source: Berkeley Earth. PM2.5 of 22 µg/m³ ≈ 1 cigarette.
                </p>
            </NarrativeStep>

            <NarrativeStep 
                index={1}
                title="It’s Not Just a Cough" 
                icon={<HeartPulse size={24} />}
            >
                <p>
                    PM2.5 particles are <span className="text-white">30x smaller than a hair</span>.
                </p>
                <p>
                    They don't just sit in your lungs. They cross the lung-blood barrier, entering your circulatory system and traveling to your heart and brain.
                </p>
            </NarrativeStep>

            <NarrativeStep 
                index={2}
                title="The Deadly Waiting Game" 
                icon={<Clock size={24} />}
            >
                <p>
                    Even with planned government measures, reports suggest only marginal improvements by 2030.
                </p>
                <p className="text-white font-medium">
                    The air will not get significantly better in the next 10 years.
                </p>
                <p>
                    You cannot wait. You have to protect your own lungs now.
                </p>
            </NarrativeStep>

            <NarrativeStep 
                index={3}
                title="Lifespan Reduction" 
                icon={<Activity size={24} />}
            >
                <p>
                    Air pollution reduces the average Pakistani's life expectancy by <span className="text-red-400">3.9 years</span>.
                </p>
                <p>
                    If you live in Lahore, Sheikhupura, or Kasur, you are losing up to <span className="text-white text-3xl font-bold block mt-2">7 years</span> of your life.
                </p>
            </NarrativeStep>

            <NarrativeStep 
                index={4}
                title="The Invisible Victims" 
                icon={<Baby size={24} />}
            >
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-white font-medium mb-4 text-lg border-l-2 border-zinc-700 pl-4">Children</h3>
                        <p className="text-lg">
                            Breathe faster than adults. Exposure now leads to stunted lung growth that affects them forever.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white font-medium mb-4 text-lg border-l-2 border-zinc-700 pl-4">Elderly</h3>
                        <p className="text-lg">
                            For those with hypertension, dirty air is a "silent trigger" for health emergencies.
                        </p>
                    </div>
                </div>
            </NarrativeStep>

            <NarrativeStep 
                index={5}
                title="Global Death Toll" 
                icon={<Skull size={24} />}
            >
                <p className="text-8xl font-bold text-white/10 absolute -z-10 select-none">
                    7M+
                </p>
                <p className="text-4xl font-bold text-white mb-4">
                    7 to 8 Million
                </p>
                <p>
                    Premature deaths every year due to air pollution. That is more than malaria, HIV, and tuberculosis <span className="text-white">combined</span>.
                </p>
                <p className="mt-8 text-xl font-medium text-red-500">
                    Don't be a statistic.
                </p>
            </NarrativeStep>
        </div>
    </section>
  );
}
