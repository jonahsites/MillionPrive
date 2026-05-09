import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-24 px-8 md:px-24 bg-miami-light text-miami-dark border-t border-miami-dark/5 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 max-w-7xl mx-auto">
        <div className="md:col-span-6 flex flex-col justify-between gap-12">
          <div>
            <h2 className="text-6xl font-black italic tracking-tighter uppercase mb-6 font-serif">
              Million<span className="text-miami-pink">Prive</span>
            </h2>
            <p className="max-w-md text-xs uppercase tracking-widest leading-loose opacity-60">
              Elite yacht chartering across Miami's coastal landscape. Precision, luxury, and Miami's vibrant spirit manifested in maritime excellence.
            </p>
          </div>
          <div className="flex gap-8">
            {["Instagram", "Twitter", "Facebook"].map(social => (
              <a key={social} href="#" className="text-[10px] uppercase font-bold tracking-widest hover:text-miami-pink transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-3">
          <span className="text-[10px] font-black uppercase tracking-widest text-miami-pink block mb-8 italic">Navigation</span>
          <ul className="space-y-4">
            {["The Fleet", "Charter Process", "The Concierge", "Safety Protocols"].map(item => (
              <li key={item}>
                <a href="#" className="text-xs uppercase font-bold tracking-widest opacity-40 hover:opacity-100 transition-opacity">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <span className="text-[10px] font-black uppercase tracking-widest text-miami-pink block mb-8 italic">Contact</span>
          <div className="space-y-6">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase opacity-40 font-bold">Operational HQ</span>
              <span className="text-xs uppercase font-black tracking-widest">Miami River, FL 33125</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase opacity-40 font-bold">Direct Line</span>
              <span className="text-xs uppercase font-black tracking-widest">+1 (305) ELITE-PRV</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-24 pt-8 border-t border-miami-dark/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-[10px] uppercase tracking-widest opacity-40 italic">© 2026 MillionPrive Yachts. All Rights Reserved.</span>
        <div className="flex gap-12">
          <span className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity cursor-pointer">Privacy Protocol</span>
          <span className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
