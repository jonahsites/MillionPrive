import React from 'react';

const pricing55 = {
  monThu: [
    { h: "2 HRS", p: "$800" },
    { h: "3 HRS", p: "$950" },
    { h: "4 HRS", p: "$1,150" },
    { h: "5 HRS", p: "$1,350" },
    { h: "6 HRS", p: "$1,600" },
  ],
  satSun: [
    { h: "2 HRS", p: "$900" },
    { h: "3 HRS", p: "$1,050" },
    { h: "4 HRS", p: "$1,250" },
    { h: "5 HRS", p: "$1,450" },
    { h: "6 HRS", p: "$1,700" },
  ]
};

export default function PricingTable() {
  return (
    <section id="pricing" className="py-24 px-8 md:px-24 bg-miami-pink/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.5em] text-miami-pink font-bold">Transparent Rates</span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mt-4 font-outfit">DETAILED PRICING</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 55' FT YACHT */}
          <div className="bg-white p-12 shadow-sm rounded-sm border border-miami-dark/5">
            <h3 className="text-4xl font-black italic mb-8 pb-4 border-b border-miami-dark/5 font-serif">55' FT LUXURY</h3>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <span className="text-[10px] font-black uppercase text-miami-pink block mb-4">Monday - Thursday</span>
                <div className="space-y-3">
                  {pricing55.monThu.map(row => (
                    <div key={row.h} className="flex justify-between items-center border-b border-miami-dark/5 pb-2">
                      <span className="text-xs font-bold uppercase opacity-60">{row.h}</span>
                      <span className="text-lg font-black">{row.p}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-miami-pink block mb-4">Saturday - Sunday</span>
                <div className="space-y-3">
                  {pricing55.satSun.map(row => (
                    <div key={row.h} className="flex justify-between items-center border-b border-miami-dark/5 pb-2">
                      <span className="text-xs font-bold uppercase opacity-60">{row.h}</span>
                      <span className="text-lg font-black">{row.p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 50' FT YACHT */}
          <div className="bg-miami-dark text-white p-12 shadow-sm rounded-sm overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8">
              <div className="w-16 h-16 rounded-full border border-miami-pink flex items-center justify-center">
                 <span className="text-miami-pink text-[8px] font-bold uppercase tracking-tighter leading-none text-center italic">ALL<br/>INCL.</span>
              </div>
            </div>
            <h3 className="text-4xl font-black italic mb-8 pb-4 border-b border-white/10 font-serif">50' FT PRESTIGE</h3>
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div>
                   <span className="text-[10px] font-bold uppercase text-miami-pink block mb-2 tracking-widest">Mon-Fri (4h/6h)</span>
                   <div className="text-2xl font-black">$1,700 / $2,100</div>
                </div>
                <div>
                   <span className="text-[10px] font-bold uppercase text-miami-pink block mb-2 tracking-widest">Sat-Sun (4h/6h)</span>
                   <div className="text-2xl font-black">$1,750 / $2,150</div>
                </div>
              </div>
              <div className="pt-8 border-t border-white/10 grid grid-cols-1 gap-2">
                <span className="text-[10px] font-bold uppercase text-white/40 block mb-4 tracking-widest italic">Experience Inclusion Protocol</span>
                {["Captain & Steward", "Floating Mat", "Water & Ice", "Decor & Heart Cake"].map(inc => (
                  <div key={inc} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest opacity-80">
                    <div className="w-1.5 h-1.5 bg-miami-pink rounded-sm" />
                    {inc}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
