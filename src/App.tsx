/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Fleet from './components/Fleet';
import Process from './components/Process';
import Stats from './components/Stats';
import Concierge from './components/Concierge';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PricingTable from './components/PricingTable';

export default function App() {
  return (
    <div className="bg-miami-light min-h-screen selection:bg-miami-pink selection:text-white">
      <Navbar />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="fleet">
          <Fleet />
        </section>

        <section id="pricing">
          <PricingTable />
        </section>

        <section id="service" className="bg-miami-light">
          <Process />
        </section>

        <section id="stats">
          <Stats />
        </section>

        <section id="focus" className="bg-miami-dark py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 px-8">
            <div className="md:col-span-8 flex flex-col justify-between">
               <span className="text-xs uppercase tracking-[0.6em] text-miami-pink font-bold">Focus // Perspective No. 305</span>
               <div className="mt-12">
                  <h2 className="text-[12vw] md:text-[8vw] font-light italic leading-[0.8] tracking-tighter text-white font-serif">
                    VIBRANT <br /> 
                    <span className="text-outline text-miami-pink">ENERGY.</span>
                  </h2>
                  <p className="max-w-md text-lg text-white/40 italic font-light leading-relaxed mt-12">
                    It's the rhythm of the waves hitting the hull. The specfic shimmer of Miami's neon skyline reflected on the teak deck. We explore the minutiae of Miami's high-life.
                  </p>
               </div>
               <div className="flex gap-12 border-t border-white/5 pt-12 mt-12">
                  {["MIAMI RIVER", "BISCAYNE", "OCEAN"].map(f => (
                    <div key={f} className="flex flex-col gap-2">
                       <span className="text-[10px] opacity-20 uppercase font-sans not-italic font-black tracking-widest text-white">{f}</span>
                       <span className="text-xl font-serif italic text-miami-pink">Active</span>
                    </div>
                  ))}
               </div>
            </div>
            <div className="md:col-span-4 relative overflow-hidden flex items-center justify-center bg-white/5 rounded-sm min-h-[500px]">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,51,153,0.1)_0%,transparent_70%)]" />
               <img 
                src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&q=80&w=2670" 
                className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-1000" 
                alt="Yacht Focus"
               />
            </div>
          </div>
        </section>

        <section id="concierge">
          <Concierge />
        </section>

        <section id="info">
          <FAQ />
        </section>
      </main>

      <Footer />
    </div>
  );
}

