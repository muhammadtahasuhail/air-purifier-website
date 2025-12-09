"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";
import { Cigarette, HeartPulse, Clock, Activity, Baby, Skull } from "lucide-react";
import { SmokeBg, VeinsBg, ClockBg, HeartbeatBg, GrowthBg, MortalityBg, VoidBg } from "./backgrounds/AbstractBgs";

interface NarrativeStepProps {
  title: string;
  children: ReactNode;
  icon: ReactNode;
  index: number;
  BackgroundComponent: React.ComponentType;
}

const NarrativeStep = ({ title, children, icon, index, BackgroundComponent }: NarrativeStepProps) => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] 
  });

  const headingOpacity = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const headingY = useTransform(scrollYProgress, [0.15, 0.25], [40, 0]);

  const textOpacity = useTransform(scrollYProgress, [0.25, 0.40], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.25, 0.40], [20, 0]);

  const bgOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8, 1], [0, 0.6, 0.6, 0]);
  const containerOpacity = useTransform(scrollYProgress, [0.8, 0.9], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.95]);

  return (
    <div ref={containerRef} className="h-[140vh] w-full relative">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Dynamic Abstract Background */}
        <motion.div 
            style={{ opacity: bgOpacity }}
            className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-screen"
        >
            <BackgroundComponent />
        </motion.div>

        <motion.div 
            style={{ opacity: containerOpacity, scale }}
            className="max-w-4xl w-full p-6 md:p-12 flex flex-col justify-center h-full relative z-10"
        >
            <motion.div style={{ opacity: headingOpacity, y: headingY }}>
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full text-zinc-300 border border-white/10 backdrop-blur-md">
                        {icon}
                    </div>
                    <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">0{index + 1}</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
                    {title}
                </h2>
            </motion.div>
            
            <motion.div 
                style={{ opacity: textOpacity, y: textY }}
                className="text-2xl md:text-3xl text-zinc-400 space-y-8 font-light leading-relaxed tracking-tight"
            >
                {children}
            </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default function NarrativeSection() {
  return (
    <section className="relative bg-black text-white">
        {/* Global Texture Overlay */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.03),_transparent_70%)]" />
        </div>

        <div className="relative z-10 flex flex-col items-center pb-32">
            <NarrativeStep 
                index={0}
                title="The Passive Smoker Reality" 
                icon={<Cigarette size={24} />}
                BackgroundComponent={SmokeBg}
            >
                <p>You are smoking without touching a cigarette.</p>
                <p className="text-white">
                    Living in Islamabad during winter is equivalent to smoking <span className="border-b border-red-500/50 pb-1 text-red-500 font-medium">5-7 cigarettes</span> daily.
                </p>
                <p className="text-white">
                    In Lahore, this jumps to <span className="border-b border-red-500/50 pb-1 text-red-500 font-medium">10-12 cigarettes</span>.
                </p>
                <p className="text-base text-zinc-600 mt-4 font-mono">
                    Source: Berkeley Earth. PM2.5 of 22 µg/m³ ≈ 1 cigarette.
                </p>
            </NarrativeStep>

            <NarrativeStep 
                index={1}
                title="It’s Not Just a Cough" 
                icon={<HeartPulse size={24} />}
                BackgroundComponent={VeinsBg}
            >
                <p>
                    PM2.5 particles are <span className="text-white font-medium">30x smaller than a hair</span>.
                </p>
                <p>
                    They don't just sit in your lungs. They cross the <span className="text-white border-b border-white/20 pb-1">lung-blood barrier</span>, entering your circulatory system and traveling to your heart and brain.
                </p>
            </NarrativeStep>

            <NarrativeStep 
                index={2}
                title="The Deadly Waiting Game" 
                icon={<Clock size={24} />}
                BackgroundComponent={ClockBg}
            >
                <p>
                    Even with planned government measures, reports suggest only marginal improvements (~4%) by 2030.
                </p>
                <p className="text-white font-medium">
                    The air will not get significantly better in the next 10 years.
                </p>
                <p>
                    You cannot wait. You have to <span className="text-white border-b border-white/20 pb-1">protect your own lungs now</span>.
                </p>
            </NarrativeStep>

            <NarrativeStep 
                index={3}
                title="Lifespan Reduction" 
                icon={<Activity size={24} />}
                BackgroundComponent={MortalityBg}
            >
                <p>
                    Air pollution reduces the average Pakistani's life expectancy by <span className="text-red-500 font-medium">3.9 years</span>.
                </p>
                <p>
                    If you live in Lahore, Sheikhupura, or Kasur, you are losing up to <br/>
                    <span className="text-red-500 font-bold">7 years</span> of your life.
                </p>
            </NarrativeStep>

            <NarrativeStep 
                index={4}
                title="The Invisible Victims" 
                icon={<Baby size={24} />}
                BackgroundComponent={GrowthBg}
            >
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-white font-bold mb-4 text-2xl border-l-4 border-zinc-700 pl-6">Children</h3>
                        <p className="text-xl leading-relaxed">
                            Breathe faster than adults. Exposure now leads to <span className="text-white border-b border-white/20">stunted lung growth</span> that affects them forever.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-4 text-2xl border-l-4 border-zinc-700 pl-6">Elderly</h3>
                        <p className="text-xl leading-relaxed">
                            For those with hypertension, dirty air is a <span className="text-white border-b border-white/20">"silent trigger"</span> for health emergencies.
                        </p>
                    </div>
                </div>
            </NarrativeStep>

            <NarrativeStep 
                index={5}
                title="Global Death Toll" 
                icon={<Skull size={24} />}
                BackgroundComponent={VoidBg}
            >
                <div className="relative">
                    <p className="text-[12rem] font-bold text-white/5 absolute -top-32 -left-10 select-none z-0">
                        7M+
                    </p>
                    <div className="relative z-10 pt-10">
                        <p className="text-6xl font-bold text-white mb-8 tracking-tight">
                            7 to 8 Million
                        </p>
                        <p>
                            Premature deaths every year. That is more than malaria, HIV, and tuberculosis <span className="text-white font-medium">combined</span>.
                        </p>
                        <p className="mt-12 text-4xl font-bold text-red-500 tracking-tight">
                            Don't be a statistic.
                        </p>
                    </div>
                </div>
            </NarrativeStep>
        </div>
    </section>
  );
}
