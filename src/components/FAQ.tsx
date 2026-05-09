import React from 'react';

const faqItems = [
  { q: "MINIMUM AGE?", a: "Operational clearance requires 21+ with verified credentials for all primary charterers." },
  { q: "INSURANCE?", a: "Comprehensive maritime shield protocols are active on all MillionPrive vessels." },
  { q: "FUEL & CREW?", a: "Captain and crew are included in all pricing. Fuel is included for most local Miami routes." },
  { q: "LOCATION?", a: "Most vessels are docked at the Miami River hub. Synchronized pick-up options available." }
];

export default function FAQ() {
  return (
    <section className="relative w-full py-24 px-8 md:px-24 bg-miami-dark text-white font-grotesk overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 border-b border-white/10 pb-8 gap-8">
        <h2 className="text-8xl md:text-[10vw] font-black uppercase tracking-tighter leading-none">
          I N F O <br /> 
          <span className="text-miami-pink">DESK.</span>
        </h2>
        <div className="flex flex-col items-end">
          <span className="text-xs opacity-40 uppercase tracking-[0.5em] mb-4">MillionPrive // V6.1</span>
          <p className="text-xs max-w-[200px] text-right font-sans tracking-widest leading-loose opacity-60">
            Protocols and frequently requested operational specifications.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqItems.map((item, i) => (
          <div 
            key={i} 
            className="border border-white/10 p-12 hover:bg-miami-pink transition-all duration-500 group flex flex-col justify-between cursor-default min-h-[300px]"
          >
             <span className="text-3xl md:text-5xl font-black uppercase italic group-hover:italic transition-all font-outfit">
               {item.q}
             </span>
             <p className="text-xs font-bold uppercase tracking-[0.2em] leading-loose mt-8 opacity-40 group-hover:opacity-100 transition-opacity">
               {item.a}
             </p>
          </div>
        ))}
      </div>
      
      {/* Background Decorative Pink Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-t from-miami-pink/10 to-transparent pointer-events-none" />
    </section>
  );
}
