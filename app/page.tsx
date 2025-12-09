import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Hero from "./components/Hero";
import NarrativeSection from "./components/NarrativeSection";
import SolutionSection from "./components/SolutionSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black overflow-x-hidden">
      <Hero />
      <NarrativeSection />
      
      {/* Product Teaser: Aether Bloc - Moved after Narrative */}
      <section className="py-32 bg-zinc-950 text-white border-t border-zinc-900">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2">
                  <Link href="/products/bloc">
                    <div className="aspect-square bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                        <Image 
                            src="/products/bloc/bloc_front.png" 
                            alt="Aether Bloc Air Purifier"
                            fill
                            className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                  </Link>
              </div>
              <div className="w-full md:w-1/2">
                  <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-4 block">Introducing</span>
                  <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">Aether Bloc</h2>
                  <p className="text-xl text-zinc-400 mb-6 leading-relaxed">
                      Clean air, by design. A medical-grade air purifier hidden inside a minimalist side table. Built with wood, acoustics, and physics to last a lifetime.
                  </p>
                  <p className="text-3xl font-bold text-white mb-8">Rs. 12,999</p>
                  <Link href="/products/bloc" className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-zinc-300 hover:border-zinc-300 transition-colors text-lg tracking-wide group">
                      Explore Bloc <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
              </div>
           </div>
        </div>
      </section>

      <SolutionSection />
      
      {/* Simple Footer */}
      <footer className="py-12 text-center text-zinc-600 text-sm border-t border-zinc-900 bg-black">
        <div className="flex justify-center gap-8 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/products/bloc" className="hover:text-white transition-colors">Bloc</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Aether. Clean Air. By Design.</p>
      </footer>
    </main>
  );
}
