import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const fleetData = [
  {
    id: '50ft',
    name: "50' FT YACHT",
    price: "$1,700",
    time: "4 HRS",
    img: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=1200",
    color: "bg-miami-pink",
    textColor: "text-white"
  },
  {
    id: '55ft',
    name: "55' FT LUXURY",
    price: "$800",
    time: "2 HRS (MON-THU)",
    img: "https://images.unsplash.com/photo-1605281317010-fe5ffe798156?auto=format&fit=crop&q=80&w=1200",
    color: "bg-white/5",
    textColor: "text-white"
  },
  {
    id: '60ft',
    name: "60' TIFFANY BLUE",
    price: "$1,700",
    time: "4 HRS",
    img: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&q=80&w=1200",
    color: "bg-miami-blue",
    textColor: "text-miami-dark"
  },
  {
    id: '70ft',
    name: "70' FT AICON",
    price: "$1,950",
    time: "4 HRS",
    img: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=1200",
    color: "bg-miami-yellow",
    textColor: "text-miami-dark"
  }
];

export default function Fleet() {
  return (
    <section className="relative w-full p-8 md:p-24 bg-miami-dark text-white overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-[0.6em] text-miami-pink font-sans font-bold">The Curated Collection</span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase font-outfit">AVAILABLE // FLEET</h2>
        </div>
        <button className="text-xs font-bold uppercase border-b border-miami-pink text-miami-pink pb-2 tracking-widest hover:text-white hover:border-white transition-colors">
          View Full Specifications
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[70vh]">
        {/* Featured 50' Yacht */}
        <div className="md:col-span-2 md:row-span-2 bg-white/5 border border-white/10 relative group overflow-hidden rounded-sm hover:border-miami-pink transition-colors duration-500">
          <img 
            src={fleetData[0].img} 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" 
            alt={fleetData[0].name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-miami-dark via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-12 left-12">
             <span className="text-sm font-bold text-miami-pink uppercase tracking-widest block mb-2">{fleetData[0].time}</span>
             <span className="text-5xl md:text-7xl font-black italic uppercase font-serif">{fleetData[0].name}</span>
             <p className="mt-4 text-white/60 max-w-xs text-xs uppercase tracking-widest leading-loose">
               Includes Captain, Steward, Floating Mat, Water, Ice, Decor & Heart Cake.
             </p>
          </div>
          <div className="absolute top-12 right-12">
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm">
              <ArrowRight className="text-miami-pink group-hover:rotate-[-45deg] transition-transform duration-500" />
            </div>
          </div>
        </div>

        {/* 55' Yacht */}
        <div className="col-span-1 bg-white/5 border border-white/10 p-12 flex flex-col justify-between hover:bg-miami-pink transition-colors duration-500 group">
           <span className="text-[10px] opacity-40 uppercase tracking-widest group-hover:text-white">Starting from</span>
           <div>
             <span className="text-4xl font-bold uppercase block mb-2 font-outfit">{fleetData[1].name}</span>
             <span className="text-xl font-black text-miami-pink group-hover:text-white">{fleetData[1].price}</span>
           </div>
        </div>

        {/* 60' Tiffany Blue */}
        <div className="col-span-1 bg-miami-blue p-12 flex flex-col justify-between hover:brightness-110 transition-all cursor-pointer">
           <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Pretty in Tiffany</span>
           <div>
             <span className="text-4xl font-bold uppercase block mb-2 font-outfit text-miami-dark">{fleetData[2].name}</span>
             <span className="text-xl font-black text-white">$1,700</span>
           </div>
        </div>

        {/* 70' Aicon and Summary */}
        <div className="col-span-2 bg-miami-yellow text-miami-dark p-12 flex items-center justify-between hover:brightness-110 transition-all cursor-pointer">
           <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Highest Performance</span>
              <span className="text-4xl font-black uppercase font-outfit">{fleetData[3].name}</span>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest opacity-40">Miami River Hub // 13 Passengers Max</p>
           </div>
           <div className="text-right">
             <span className="text-3xl font-black block">$1,950</span>
             <span className="text-[10px] uppercase font-bold tracking-widest opacity-40">Per 4 Hours</span>
           </div>
        </div>
      </div>
    </section>
  );
}
