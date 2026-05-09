import React from 'react';

const stats = [
  { l: "ACTIVE FLEET", v: "14" },
  { l: "CHARTER HOURS", v: "4,200+" },
  { l: "MAX GUESTS", v: "13" },
  { l: "CLIENT SAT", v: "99.9%" }
];

export default function Stats() {
  return (
    <section className="relative w-full flex flex-col p-8 md:p-16 overflow-hidden bg-miami-pink text-white font-black italic">
      <div className="flex-1 grid grid-cols-2 md:grid-cols-4 border-t-8 border-miami-dark">
         {stats.map((s, i) => (
           <div key={i} className="border-r-8 border-miami-dark p-12 flex flex-col justify-between hover:bg-miami-dark hover:text-miami-pink transition-colors group">
              <span className="text-[10px] uppercase tracking-widest leading-none opacity-40 group-hover:opacity-100">{s.l}</span>
              <span className="text-5xl md:text-[6vw] leading-none tracking-tighter mt-8">{s.v}</span>
           </div>
         ))}
      </div>
      
      {/* Infinite Scroll Ticker */}
      <div className="mt-8 h-24 bg-miami-dark text-miami-pink flex items-center justify-between px-12 overflow-hidden -mx-16">
         <div className="flex gap-24 animate-infinite-scroll whitespace-nowrap">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-xs tracking-[1em] font-sans font-bold uppercase">
                MILLIONPRIVE OPERATIONAL READY // STATUS OK // MIAMI RIVER ACTIVE // 
              </span>
            ))}
         </div>
      </div>
    </section>
  );
}
