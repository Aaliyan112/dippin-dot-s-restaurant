import React from 'react';
import { 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle, 
  Bike, 
  ShieldCheck, 
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { RESTAURANT_INFO, TESTIMONIALS } from '../data/menuData';

export const ReviewsAndLocation: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-zinc-950 relative border-b border-red-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Customer Reviews Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-600/40 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>4.9 / 5.0 Rated by Sukkur Foodies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Loved by Thousands of <span className="text-red-500">Customers</span>
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm">
              See what our customers say about our sizzling BBQ platters, spicy zinger burgers, and creamy Dippin' Dots!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((review, i) => (
              <div
                key={i}
                className="bg-zinc-900/90 rounded-2xl p-6 border border-zinc-800/90 shadow-lg flex flex-col justify-between hover:border-red-900/50 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed italic">
                    "{review.comment}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <div>
                    <h5 className="font-extrabold text-white text-sm">{review.name}</h5>
                    <span className="text-xs text-zinc-500">{review.role}</span>
                  </div>
                  <span className="text-[10px] font-bold text-green-400 bg-green-950/60 border border-green-800/40 px-2 py-0.5 rounded-full">
                    {review.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Contact Grid */}
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 rounded-3xl border border-red-900/40 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-red-500 block">
                  Visit Our Restaurant or Order Delivery
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  Dippin Dot's Restaurant & Bar B Q
                </h3>
                <p className="text-xs text-amber-400 font-semibold mt-0.5">
                  Estd. 2017 • Sukkur's Finest Dine-In & Delivery Spot
                </p>
              </div>

              <div className="space-y-4 text-sm text-zinc-300">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 border border-red-600/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">Restaurant Address:</h5>
                    <p className="text-zinc-400 text-xs mt-0.5">
                      {RESTAURANT_INFO.address}
                    </p>
                    <span className="text-[11px] text-amber-400 font-medium block mt-1">
                      (Opposite / Near IBA University Gate, 100ft Road)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">Opening Hours:</h5>
                    <p className="text-zinc-400 text-xs mt-0.5">
                      {RESTAURANT_INFO.timing}
                    </p>
                    <span className="text-[11px] text-green-400 font-bold block mt-1">
                      Dine-in, Takeaway & Late Night Delivery available
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 text-green-400 border border-green-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">Hotline & WhatsApp:</h5>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <a
                        href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                        className="font-extrabold text-white hover:text-red-400 text-sm"
                      >
                        {RESTAURANT_INFO.phone}
                      </a>
                      <span className="text-zinc-500">•</span>
                      <a
                        href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hi%20Dippin%20Dot's,%20I%20want%20to%20order%20food`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-green-400 font-bold text-xs bg-green-950/60 border border-green-800/40 px-2 py-0.5 rounded-full hover:bg-green-900/60 transition-colors"
                      >
                        <MessageCircle className="w-3 h-3" />
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery areas tag cloud */}
              <div className="pt-2">
                <span className="text-xs font-bold text-zinc-400 block mb-2">
                  Delivery Coverage in Sukkur:
                </span>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  {[
                    'IBA University Campus',
                    '100ft Road',
                    'Military Road',
                    'Minara Road',
                    'Airport Road',
                    'Civil Lines',
                    'Barrage Colony',
                    'City Sukkur',
                    'Rohri Bypass'
                  ].map((area, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-zinc-950 text-zinc-300 border border-zinc-800"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Map / Branch Graphic Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 p-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bike className="w-5 h-5 text-red-500" />
                    <span className="font-extrabold text-sm text-white">Sukkur Delivery Map</span>
                  </div>
                  <span className="text-[11px] text-green-400 font-bold bg-green-950/80 px-2.5 py-1 rounded-full border border-green-800/50">
                    Active Delivery
                  </span>
                </div>

                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center text-center p-4">
                  <div className="space-y-2">
                    <div className="w-12 h-12 rounded-full bg-red-600/20 text-red-500 border border-red-500/40 flex items-center justify-center mx-auto animate-pulse">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-black text-white text-sm block">100 Ft Road Sukkur</span>
                      <span className="text-xs text-zinc-400 block">Near IBA University, Sukkur</span>
                    </div>
                    <a
                      href={RESTAURANT_INFO.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 pt-1"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="bg-zinc-900/90 p-2.5 rounded-xl border border-zinc-800">
                    <span className="text-zinc-500 block text-[10px] uppercase font-bold">Free Delivery</span>
                    <span className="text-white font-extrabold">Above Rs. 1500</span>
                  </div>
                  <div className="bg-zinc-900/90 p-2.5 rounded-xl border border-zinc-800">
                    <span className="text-zinc-500 block text-[10px] uppercase font-bold">Standard Delivery</span>
                    <span className="text-white font-extrabold">Only Rs. 150</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
