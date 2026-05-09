import React from 'react';
import { motion } from 'motion/react';

const steps = [
  { n: "01", t: "IDENTITY VERIFICATION", d: "Secure credentials and documentation approval via our yachting protocol." },
  { n: "02", t: "VESSEL SELECTION", d: "Choose your desired apparatus from our live-status Miami River inventory." },
  { n: "03", t: "EMBARKATION", d: "GPS-synchronized handover at our private Miami docks or preferred location." }
];

export default function Process() {
  return (
    <section className="relative w-full py-24 px-8 md:px-24 bg-miami-light text-miami-dark overflow-hidden font-grotesk">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 max-w-7xl mx-auto">
        <div className="md:col-span-4 md:border-r border-miami-dark/10 md:pr-16 flex flex-col justify-between py-8">
          <div>
            <span className="text-xs font-bold text-miami-pink uppercase tracking-[0.5em] mb-6 block">Our Protocol</span>
            <h2 className="text-8xl md:text-[7vw] font-black uppercase leading-[0.85] tracking-tighter mb-8">
              THE <br /> PATH <br /> 
              <span className="text-miami-pink">TO SEA.</span>
            </h2>
          </div>
          <p className="text-xs opacity-60 uppercase tracking-widest leading-relaxed max-w-xs">
            Three precision-engineered stages to your ultimate Miami maritime experience.
          </p>
        </div>
        
        <div className="md:col-span-8 flex flex-col gap-1 relative">
           {steps.map((step, i) => (
             <motion.div 
               key={i} 
               initial={{ x: 50, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ delay: i * 0.1 }}
               className="flex flex-col md:flex-row items-center gap-12 group hover:bg-miami-pink/5 transition-all p-12 border-b border-miami-dark/5 cursor-default"
             >
                <span className="text-8xl font-black italic opacity-5 group-hover:opacity-20 group-hover:text-miami-pink transition-all duration-500 font-serif">
                  {step.n}
                </span>
                <div className="flex flex-col text-center md:text-left">
                  <span className="text-2xl font-black uppercase mb-3 tracking-tight font-outfit">{step.t}</span>
                  <p className="max-w-md text-xs opacity-50 uppercase tracking-widest leading-loose">{step.d}</p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
      
      {/* Decorative Miami Pink Circle */}
      <div className="absolute top-1/2 right-[-10vw] w-[40vw] h-[40vw] bg-miami-pink/5 rounded-full blur-[100px] -z-10" />
    </section>
  );
}
