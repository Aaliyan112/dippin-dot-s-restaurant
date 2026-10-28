import React, { useState } from 'react';
import { Sparkles, Plus, Check, IceCream2, ShieldAlert } from 'lucide-react';
import { MenuItem } from '../types';

interface DippinDotsSectionProps {
  items: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
}

export const DippinDotsSection: React.FC<DippinDotsSectionProps> = ({
  items,
  onAddToCart,
}) => {
  const [addedIds, setAddedIds] = useState<{ [key: string]: boolean }>({});

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  return (
    <section id="dippin_dots" className="py-16 sm:py-24 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden border-b border-red-950/40">
      {/* Decorative gradient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-950 to-amber-950 border border-amber-500/40 text-amber-300 text-xs font-black tracking-widest uppercase shadow-md">
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
            <span>ORIGINAL FLASH-FROZEN BEADS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            The World Famous <span className="text-red-500">Dippin' Dots</span> Ice Cream
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Cryogenically flash-frozen at -40°C into delightful little ice cream beads that burst with creamy sweetness on your tongue. The perfect treat after a spicy Zinger Burger or BBQ Platter!
          </p>
        </div>

        {/* Ice Cream Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {items.map((item) => {
            const isAdded = addedIds[item.id];

            return (
              <div
                key={item.id}
                className="group bg-zinc-900/90 hover:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-amber-500/60 shadow-lg hover:shadow-2xl hover:shadow-amber-950/30 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative aspect-square w-full overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-70" />

                  {item.isBestseller && (
                    <span className="absolute top-2.5 left-2.5 bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                      Favorite
                    </span>
                  )}

                  <div className="absolute bottom-2.5 right-2.5 bg-black/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-500/40">
                    <span className="text-amber-400 font-black text-sm">
                      Rs. {item.price}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h4 className="font-extrabold text-white text-sm sm:text-base group-hover:text-amber-400 transition-colors leading-snug line-clamp-1">
                      {item.name}
                    </h4>
                    {item.urduName && (
                      <span className="text-[11px] text-amber-500/90 font-medium block mt-0.5">
                        {item.urduName}
                      </span>
                    )}
                    <p className="text-zinc-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleAdd(item)}
                    className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 active:scale-95 shadow-md ${
                      isAdded
                        ? 'bg-green-600 text-white'
                        : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-amber-950/40'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added to Cart</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Order</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
