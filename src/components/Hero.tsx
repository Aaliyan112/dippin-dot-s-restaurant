import React from 'react';
import { Flame, Sparkles, ArrowRight, Phone, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface HeroProps {
  onExploreBurgers: () => void;
  onExploreDeals: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreBurgers, onExploreDeals }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-zinc-950 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-red-950/40">
      {/* Background glow & subtle ambient graphics */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[350px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-700/50 text-red-300 text-xs font-bold tracking-wide shadow-md shadow-red-950/40">
              <Flame className="w-4 h-4 text-red-500 animate-bounce" />
              <span>ESTD 2017 • RESTAURANT & BAR B Q</span>
              <span className="text-zinc-500">•</span>
              <span className="text-amber-400">Sukkur, Sindh</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Crispy <span className="text-red-500 underline decoration-red-600/60 decoration-wavy decoration-2">Burgers</span>, 
              Loaded <span className="text-amber-400">Fries</span> & Charcoal BBQ!
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Craving the crunchiest Zinger Burgers, cheesy Loaded Fries, sizzling Charcoal BBQ Platters, or freshly steamed Momos? Dippin Dot's delivers Sukkur's favorite fast food and authentic Bar B Q straight to your doorstep hot & fresh!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onExploreBurgers}
                className="flex items-center gap-2.5 bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-6 sm:px-7 py-3.5 rounded-xl font-extrabold text-sm sm:text-base shadow-xl shadow-red-950/70 hover:shadow-red-900/50 transition-all duration-200 active:scale-95 border border-red-500/50"
              >
                <span>Order Burgers & Fries</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreDeals}
                className="flex items-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 text-amber-400 hover:text-amber-300 px-5 sm:px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base border border-amber-500/30 shadow-lg transition-all duration-200 active:scale-95"
              >
                <Flame className="w-4 h-4 text-amber-500" />
                <span>View All Deals</span>
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-200 px-4 py-3.5 rounded-xl font-semibold text-sm border border-zinc-800 transition-all"
              >
                <Phone className="w-4 h-4 text-green-400" />
                <span>0312 3655216</span>
              </a>
            </div>

            {/* Trust & Guarantee Perks */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-zinc-900/90 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-left">
                <Clock className="w-5 h-5 text-red-500 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">30-45 Min</div>
                  <div className="text-[11px] text-zinc-400">Fast Delivery</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-left">
                <Flame className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">100% Fresh</div>
                  <div className="text-[11px] text-zinc-400">Charcoal Grilled</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-left">
                <Sparkles className="w-5 h-5 text-red-400 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Dippin' Dots</div>
                  <div className="text-[11px] text-zinc-400">Beaded Ice Cream</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-left">
                <ShieldCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Sukkur City</div>
                  <div className="text-[11px] text-zinc-400">100ft Road IBA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Feature Box */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-600 via-amber-500 to-red-700 opacity-30 blur-xl"></div>
              
              <div className="relative bg-zinc-900/90 rounded-3xl p-5 border border-red-900/40 shadow-2xl backdrop-blur-sm overflow-hidden">
                {/* Featured Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <img 
                      src="/logo.png" 
                      alt="Dippin Dots Logo" 
                      className="h-10 w-auto object-contain"
                    />
                    <div>
                      <span className="text-xs font-black uppercase text-white tracking-wider block">Today's Hot Special</span>
                      <span className="text-[10px] text-amber-400 font-semibold">Sukkur Bestseller Deal</span>
                    </div>
                  </div>
                  <div className="bg-red-600 text-white font-black text-xs px-2.5 py-1 rounded-full animate-pulse shadow-md">
                    Save Rs. 130
                  </div>
                </div>

                {/* Main Hero Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-950 border border-zinc-800 group">
                  <img
                    src="/menu-assets/WhatsApp Image 2026-10-28 at 3.35.01 AM (1).jpeg"
                    alt="Hot & Fried Burger Special Deal"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  
                  {/* Floating Price Pill */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div>
                      <span className="text-amber-400 text-xs font-bold block">Hot & Fried Zinger Combo</span>
                      <span className="text-white font-black text-xl sm:text-2xl drop-shadow-md">
                        Rs. 550 <span className="text-xs font-normal text-zinc-400 line-through">Rs. 680</span>
                      </span>
                    </div>
                    <button
                      onClick={onExploreDeals}
                      className="bg-red-600 hover:bg-red-500 text-white text-xs font-extrabold px-3 py-2 rounded-lg shadow-md transition-all active:scale-95"
                    >
                      Order Deal
                    </button>
                  </div>
                </div>

                {/* Sub-featured Mini Cards Carousel */}
                <div className="grid grid-cols-3 gap-2 mt-3.5">
                  <div 
                    onClick={onExploreBurgers}
                    className="bg-zinc-950 p-2 rounded-xl border border-zinc-800/80 hover:border-red-600/50 cursor-pointer transition-colors text-center"
                  >
                    <div className="w-full h-14 rounded-lg overflow-hidden mb-1.5 bg-zinc-900">
                      <img 
                        src="/menu-assets/WhatsApp Image 2026-10-28 at 3.35.02 AM (1).jpeg" 
                        alt="Helepeno Zinger"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-zinc-200 block truncate">Jalapeno Zinger</span>
                    <span className="text-[11px] font-black text-red-400">Rs. 470</span>
                  </div>

                  <div 
                    onClick={onExploreDeals}
                    className="bg-zinc-950 p-2 rounded-xl border border-zinc-800/80 hover:border-red-600/50 cursor-pointer transition-colors text-center"
                  >
                    <div className="w-full h-14 rounded-lg overflow-hidden mb-1.5 bg-zinc-900">
                      <img 
                        src="/menu-assets/WhatsApp Image 2026-10-28 at 3.34.58 AM.jpeg" 
                        alt="Azadi Deal"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-zinc-200 block truncate">Azadi Mega Deal</span>
                    <span className="text-[11px] font-black text-red-400">Rs. 1,499</span>
                  </div>

                  <div 
                    onClick={onExploreBurgers}
                    className="bg-zinc-950 p-2 rounded-xl border border-zinc-800/80 hover:border-red-600/50 cursor-pointer transition-colors text-center"
                  >
                    <div className="w-full h-14 rounded-lg overflow-hidden mb-1.5 bg-zinc-900">
                      <img 
                        src="/menu-assets/WhatsApp Image 2026-10-28 at 3.34.58 AM (3).jpeg" 
                        alt="Pizza Sandwich"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-zinc-200 block truncate">Pizza Sandwich</span>
                    <span className="text-[11px] font-black text-red-400">Rs. 450</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-400 pt-2 border-t border-zinc-800">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-red-500" />
                    100ft Road Near IBA University Sukkur
                  </span>
                  <span className="font-bold text-green-400">Cash on Delivery</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
