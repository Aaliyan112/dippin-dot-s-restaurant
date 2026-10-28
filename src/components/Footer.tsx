import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white border-t border-zinc-900 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative top red glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Dippin Dot's Logo" 
                className="h-16 w-auto object-contain"
              />
              <div>
                <span className="font-black text-2xl tracking-tight text-white block">
                  DIPPIN <span className="text-red-500">DOT'S</span>
                </span>
                <span className="text-xs font-bold text-amber-500 tracking-widest uppercase block">
                  Restaurant & Bar B Q • Estd 2017
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Sukkur's premier dining and delivery experience. Serving sizzling hot Charcoal Bar B Q, crispy Zinger burgers, cheesy pizza sandwiches, loaded fries, and the world famous flash-frozen Dippin' Dots ice cream!
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-3.5 py-2 rounded-xl text-xs font-bold border border-zinc-800 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-red-500" />
                <span>Call {RESTAURANT_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hi%20Dippin%20Dot's,%20I%20want%20to%20order`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-950/70 hover:bg-green-900/80 text-green-400 px-3.5 py-2 rounded-xl text-xs font-bold border border-green-800/50 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Menu Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-white">
              Quick Menu
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <button 
                  onClick={() => onNavigate('featured')} 
                  className="hover:text-red-400 transition-colors"
                >
                  8 Featured Burgers & Fries
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('deals')} 
                  className="hover:text-red-400 transition-colors"
                >
                  Exclusive Deals & Platters (Mega Savings)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('menu')} 
                  className="hover:text-red-400 transition-colors"
                >
                  Full Menu (All Categories)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('menu')} 
                  className="hover:text-red-400 transition-colors"
                >
                  Momo's Special (Steam, Kurkure, Afghani)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('dippin_dots')} 
                  className="hover:text-red-400 transition-colors"
                >
                  Dippin' Dots Ice Cream Flavors
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-red-400 transition-colors"
                >
                  Sukkur Branch Location & Hours
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-white">
              Branch & Timings
            </h4>
            <div className="space-y-3 text-xs text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Near IBA University, 100ft Road, Sukkur, Sindh, Pakistan</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">Open 7 Days a Week:</span>
                  <span>12:00 PM Afternoon to 02:00 AM Midnight</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>0312 3655216</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Dippin Dot's Restaurant & Bar B Q (ESTD 2017). All Rights Reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
