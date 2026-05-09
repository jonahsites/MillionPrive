import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden px-8 bg-miami-dark">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=2670" 
          className="w-full h-full object-cover opacity-40" 
          alt="Luxury Yacht Miami" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-miami-dark/60 via-transparent to-miami-dark" />
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        <motion.span 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-xs font-bold tracking-[0.8em] text-miami-pink uppercase mb-8 font-sans"
        >
          MillionPrive Elite Registry
        </motion.span>
        
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          className="text-[12vw] md:text-[8vw] font-black italic tracking-tighter leading-none text-white uppercase text-center mb-12 font-serif"
        >
          MIAMI <br /> 
          <span className="text-outline text-transparent">YACHTS</span>
        </motion.h1>
        
        <div className="flex flex-col md:flex-row gap-6">
          <button className="px-12 py-5 bg-miami-pink text-white font-black uppercase text-xs tracking-[0.4em] hover:bg-miami-yellow hover:text-miami-dark transition-colors duration-300">
            Book Now
          </button>
          <button className="px-12 py-5 border border-white/20 text-white font-black uppercase text-xs tracking-[0.4em] hover:bg-white hover:text-miami-dark transition-colors duration-300">
            View Fleet
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
         <span className="text-[8px] uppercase tracking-[0.5em] text-white/40">Scroll to Explore</span>
         <div className="w-px h-12 bg-gradient-to-b from-miami-pink to-transparent" />
      </div>
    </section>
  );
}
