import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ["Fleet", "Service", "Concierge", "Pricing"];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-8 py-6 ${scrolled ? 'bg-miami-dark/95 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 overflow-hidden rounded-full border border-miami-pink">
               <img 
                src="https://scontent-lga3-2.cdninstagram.com/v/t51.82787-19/670829590_17950295850129929_8001089015348782337_n.jpg?cb=8438d1d6-89aba764&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDI0LmMyIn0&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=105&_nc_oc=Q6cZ2gF8nwJ7tiZIQAW7355BGXXUnsUNd1tPUWCk1YHI-0ItMictxFE2xzqdbPyZOCSB8kFPFGeyi1djN_yWd8BXLbBH&_nc_ohc=-t8ANCDhC90Q7kNvwFrj_xQ&_nc_gid=WnKEDFHL5GmqJ78c1IEAMw&edm=APoiHPcBAAAA&ccb=7-5&oh=00_Af7QpdQvgcBc7jtsh4QyNh-UGM6g5cppQMTdpWe0i_8zjQ&oe=6A05532B&_nc_sid=22de04" 
                className="w-full h-full object-cover"
                alt="MillionPrive Logo"
               />
            </div>
            <span className={`text-xl font-black uppercase tracking-tighter transition-colors ${scrolled ? 'text-white' : 'text-white'}`}>
              Million<span className="text-miami-pink">Prive</span>
            </span>
          </div>

          <div className="hidden md:flex gap-12 items-center">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/60 hover:text-miami-pink transition-colors">
                {link}
              </a>
            ))}
            <button className="px-8 py-3 bg-miami-pink text-white font-black uppercase text-[10px] tracking-widest hover:bg-miami-yellow hover:text-miami-dark transition-all">
              Inquire
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
            <Menu size={32} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-miami-dark p-12 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <span className="text-2xl font-black text-white uppercase italic">MENU.</span>
              <button onClick={() => setIsOpen(false)} className="text-miami-pink">
                <X size={48} />
              </button>
            </div>
            
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={link} 
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-6xl font-black uppercase text-white hover:text-miami-pink transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <button className="w-full py-6 bg-miami-pink text-white font-black uppercase tracking-widest text-sm">
                Reserve Now
              </button>
              <span className="text-[10px] uppercase tracking-widest opacity-40 text-white text-center italic">Miami // Operational Headquarters</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
