import React, { useState } from 'react';
import { 
  Flame, 
  Users, 
  CheckCircle2, 
  Plus, 
  Check, 
  MessageCircle, 
  Sparkles, 
  Percent,
  Clock
} from 'lucide-react';
import { MenuItem } from '../types';
import { RESTAURANT_INFO } from '../data/menuData';

interface DealsSectionProps {
  deals: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
  onCustomize: (item: MenuItem) => void;
}

export const DealsSection: React.FC<DealsSectionProps> = ({
  deals,
  onAddToCart,
  onCustomize,
}) => {
  const [filter, setFilter] = useState<string>('all');
  const [addedIds, setAddedIds] = useState<{ [key: string]: boolean }>({});

  const filterCategories = [
    { id: 'all', label: 'All Deals' },
    { id: 'bbq', label: 'BBQ Platters (2-8 Persons)' },
    { id: 'fast_food', label: 'Burger & Pizza Deals' },
    { id: 'desi', label: 'Sajji, Karahi & Dum Pukht' },
  ];

  const filteredDeals = deals.filter((deal) => {
    if (filter === 'all') return true;
    if (filter === 'bbq') return deal.id.includes('platter');
    if (filter === 'fast_food') return deal.id.includes('azadi') || deal.id.includes('pizza') || deal.id.includes('burger') || deal.id.includes('bucket');
    if (filter === 'desi') return deal.id.includes('sajji') || deal.id.includes('dumpukht') || deal.id.includes('karahi');
    return true;
  });

  const handleAddDeal = (deal: MenuItem) => {
    onAddToCart(deal);
    setAddedIds((prev) => ({ ...prev, [deal.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [deal.id]: false }));
    }, 1500);
  };

  return (
    <section id="deals" className="py-16 sm:py-24 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 border-t border-b border-red-950/40 relative">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-950 to-zinc-900 border border-red-600/40 text-red-400 text-xs font-black tracking-widest uppercase shadow-lg shadow-red-950/50">
            <Flame className="w-4 h-4 text-red-500 animate-bounce" />
            <span>SPECIAL MEGA OFFERS & FAMILY PACKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            All Exclusive <span className="text-red-500">Deals</span> & Platters
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            From our famous Signature BBQ Platters (feeding 2 to 8 persons) to Azadi Pizza Combos, Hot & Fried Zinger bucket deals, Dum Pukht and Traditional Sajji.
          </p>

          {/* Sub Filters for Deals */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  filter === cat.id
                    ? 'bg-red-600 text-white shadow-lg shadow-red-900/40 border border-red-500'
                    : 'bg-zinc-900/90 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDeals.map((deal) => {
            const isAdded = addedIds[deal.id];
            const savings = deal.originalPrice ? deal.originalPrice - deal.price : null;

            return (
              <div
                key={deal.id}
                className="group bg-zinc-900/90 hover:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800/90 hover:border-red-600/70 shadow-xl hover:shadow-2xl hover:shadow-red-950/50 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Poster / Flyer Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
                    <span className="bg-red-600 text-white text-xs font-black px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-lg shadow-red-950 flex items-center gap-1">
                      <Percent className="w-3.5 h-3.5" />
                      Special Deal
                    </span>
                    {deal.persons && (
                      <span className="bg-zinc-950/90 text-amber-400 text-xs font-bold px-2.5 py-1 rounded-lg border border-amber-500/30 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {deal.persons}
                      </span>
                    )}
                  </div>

                  {savings && (
                    <div className="absolute top-3 right-3 bg-amber-400 text-black font-black text-xs px-2.5 py-1 rounded-lg shadow-md animate-pulse">
                      Save Rs. {savings}
                    </div>
                  )}

                  {/* Price Banner on Image Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between z-10">
                    <div>
                      <span className="text-[11px] font-semibold text-zinc-300 block">Deal Price</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-white font-black text-2xl drop-shadow-md">
                          Rs. {deal.price}
                        </span>
                        {deal.originalPrice && (
                          <span className="text-sm font-semibold text-zinc-400 line-through">
                            Rs. {deal.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deal Body Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-red-400 transition-colors">
                      {deal.name}
                    </h3>
                    {deal.urduName && (
                      <span className="text-xs text-amber-500/90 font-medium block mt-0.5">
                        {deal.urduName}
                      </span>
                    )}
                    <p className="text-zinc-400 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                      {deal.description}
                    </p>

                    {/* Included items checklist */}
                    {deal.includes && deal.includes.length > 0 && (
                      <div className="mt-3.5 pt-3 border-t border-zinc-800/80 space-y-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                          What's Included:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                          {deal.includes.slice(0, 6).map((inc, i) => (
                            <div key={i} className="flex items-center gap-1.5 text-xs text-zinc-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                              <span className="truncate">{inc}</span>
                            </div>
                          ))}
                        </div>
                        {deal.includes.length > 6 && (
                          <span className="text-[11px] text-zinc-500 italic block">
                            + {deal.includes.length - 6} more delicious items
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Actions: Add to Cart & WhatsApp Link */}
                  <div className="pt-2 flex items-center gap-2.5">
                    <button
                      onClick={() => handleAddDeal(deal)}
                      className={`flex-1 py-3 px-4 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 shadow-lg ${
                        isAdded
                          ? 'bg-green-600 text-white'
                          : 'bg-red-600 hover:bg-red-500 text-white shadow-red-950/60'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Deal Added!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Claim Deal</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hi%20Dippin%20Dot's,%20I%20want%20to%20order%20the%20${encodeURIComponent(deal.name)}%20for%20Rs.%20${deal.price}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Direct WhatsApp Order"
                      className="p-3 rounded-xl bg-zinc-800/80 hover:bg-green-600/30 text-green-400 hover:text-green-300 transition-colors border border-zinc-700/60"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Deals */}
        <div className="mt-12 bg-gradient-to-r from-red-950/60 via-zinc-900 to-black p-5 sm:p-6 rounded-2xl border border-red-800/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-base">Custom Party / Catering Deals Available</h4>
              <p className="text-xs text-zinc-400">Hosting a birthday, family reunion or college party in Sukkur? Call us for customized bulk discounts!</p>
            </div>
          </div>
          <a
            href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
            className="flex-shrink-0 bg-zinc-800 hover:bg-zinc-700 text-amber-400 px-5 py-2.5 rounded-xl text-xs font-bold border border-zinc-700 transition-colors"
          >
            Call {RESTAURANT_INFO.phone}
          </a>
        </div>

      </div>
    </section>
  );
};
