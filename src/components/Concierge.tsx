import React from 'react';
import { Radio, MessageSquare, Phone } from 'lucide-react';

export default function Concierge() {
  return (
    <section className="relative w-full flex flex-col md:flex-row overflow-hidden bg-miami-light text-miami-dark font-serif h-screen">
      <div className="flex-1 p-12 md:p-32 flex flex-col justify-between border-r border-miami-dark/5">
        <div>
          <span className="text-xl italic text-miami-pink mb-8 block">At Your Service</span>
          <h2 className="text-7xl md:text-9xl font-black leading-[0.8] tracking-tighter uppercase mb-12">
            THE <br /> CONCIERGE.
          </h2>
        </div>
        
        <div className="flex flex-col gap-12 font-sans not-italic">
          <p className="max-w-md text-lg opacity-60 leading-relaxed italic">
            Elite human expertise driving digital precision. Our specialists are available 24/7 for bespoke voyage planning across Miami's waters.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-miami-dark text-white font-bold uppercase text-[10px] tracking-widest hover:bg-miami-pink transition-colors">
              Request a Callback
            </button>
            <button className="px-8 py-4 border border-miami-dark/10 font-bold uppercase text-[10px] tracking-widest hover:bg-miami-dark hover:text-white transition-colors">
              Live Chat
            </button>
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-1/3 bg-miami-dark text-white p-12 md:p-32 flex flex-col justify-between font-sans not-italic">
        <div className="flex flex-col gap-6">
          <div className="w-20 h-20 rounded-full border border-miami-pink flex items-center justify-center animate-pulse">
            <Radio size={32} className="text-miami-pink" />
          </div>
          <span className="text-xs uppercase tracking-widest text-miami-pink font-bold italic">Operational Readiness</span>
        </div>
        
        <div className="flex flex-col gap-4 text-center md:text-left">
           <span className="text-9xl font-black italic text-outline text-transparent group-hover:text-white transition-colors">24/7</span>
           <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4 group">
                <Phone size={16} className="text-miami-pink" />
                <span className="text-xs tracking-widest opacity-60 group-hover:opacity-100 transition-opacity uppercase">+1 (305) ELITE-PRV</span>
              </div>
              <div className="flex items-center gap-4 group">
                <MessageSquare size={16} className="text-miami-pink" />
                <span className="text-xs tracking-widest opacity-60 group-hover:opacity-100 transition-opacity uppercase">HQ@MILLIONPRIVE.COM</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
