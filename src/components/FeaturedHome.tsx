import React, { useState } from 'react';
import { Plus, Flame, Sparkles, Check, SlidersHorizontal, ShoppingBag } from 'lucide-react';
import { MenuItem } from '../types';

interface FeaturedHomeProps {
  items: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
  onCustomize: (item: MenuItem) => void;
}

export const FeaturedHome: React.FC<FeaturedHomeProps> = ({
  items,
  onAddToCart,
  onCustomize,
}) => {
  const [addedIds, setAddedIds] = useState<{ [key: string]: boolean }>({});

  const handleQuickAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  return (
    <section id="featured" className="py-16 sm:py-20 bg-zinc-950 relative">
      {/* Decorative accent background lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider mb-2.5">
              <Flame className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span>Chef's Choice • Top 8 Fast Food Bestsellers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Featured <span className="text-red-500">Burgers</span> & Loaded <span className="text-amber-400">Fries</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              Freshly grilled, battered in signature secret spices, and assembled with hot melted cheese and toasted buns.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 bg-zinc-900/80 px-3.5 py-2 rounded-xl border border-zinc-800 self-start md:self-auto">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>8 Exclusive Items for Home Page</span>
          </div>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const isAdded = addedIds[item.id];

            return (
              <div
                key={item.id}
                className="group relative bg-zinc-900/90 hover:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-600/60 shadow-lg hover:shadow-2xl hover:shadow-red-950/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

                  {/* Badges */}
                  <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5 z-10">
                    <span className="bg-black/80 backdrop-blur-md text-zinc-300 text-[10px] font-bold px-2 py-0.5 rounded-md border border-zinc-700">
                      #{index + 1}
                    </span>
                    {item.isBestseller && (
                      <span className="bg-red-600/95 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider shadow-sm">
                        Bestseller
                      </span>
                    )}
                    {item.isSpicy && (
                      <span className="bg-amber-500/95 text-zinc-950 text-[10px] font-extrabold px-2 py-0.5 rounded-md flex items-center gap-0.5">
                        <Flame className="w-2.5 h-2.5" /> Spicy
                      </span>
                    )}
                  </div>

                  {/* Price Tag in Image */}
                  <div className="absolute bottom-2.5 right-2.5 bg-black/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-red-900/50 shadow-md">
                    <span className="text-white font-black text-base">
                      Rs. {item.price}
                    </span>
                    {item.originalPrice && (
                      <span className="text-[11px] text-zinc-400 line-through ml-1.5 font-normal">
                        Rs. {item.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-extrabold text-white text-base sm:text-lg group-hover:text-red-400 transition-colors leading-snug line-clamp-1">
                      {item.name}
                    </h3>
                    {item.urduName && (
                      <span className="text-xs text-amber-500/90 font-medium block mt-0.5">
                        {item.urduName}
                      </span>
                    )}
                    <p className="text-zinc-400 text-xs mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Action Controls */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => handleQuickAdd(item)}
                      className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all duration-200 active:scale-95 shadow-md ${
                        isAdded
                          ? 'bg-green-600 text-white'
                          : 'bg-red-600 hover:bg-red-500 text-white shadow-red-950/50'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => onCustomize(item)}
                      title="Customize item (Spice, drinks, cheese)"
                      className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors border border-zinc-700/60"
                      aria-label="Customize"
                    >
                      <SlidersHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
