import React, { useState } from 'react';
import { Soup, Plus, Check, Flame, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';

interface MomosShowcaseProps {
  momos: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
}

export const MomosShowcase: React.FC<MomosShowcaseProps> = ({
  momos,
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
    <section className="py-16 sm:py-20 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 border-b border-red-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-700/50 text-red-400 text-xs font-bold uppercase tracking-wider">
            <Soup className="w-3.5 h-3.5" />
            <span>Trending in Sukkur</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Dippin's Special <span className="text-red-500">Momo's</span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm">
            Hand-pinched dumplings steamed fresh or fried with crunchy kurkure coating and fiery hot dipping sauces.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {momos.map((momo) => {
            const isAdded = addedIds[momo.id];

            return (
              <div
                key={momo.id}
                className="group bg-zinc-900/90 hover:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-600/60 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-black">
                  <img
                    src={momo.image}
                    alt={momo.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

                  <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5 z-10">
                    <span className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded-md uppercase">
                      8 Pieces
                    </span>
                    {momo.isSpicy && (
                      <span className="bg-amber-500 text-black text-[10px] font-black px-2 py-0.5 rounded-md flex items-center gap-0.5">
                        <Flame className="w-2.5 h-2.5" /> Spicy
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-2.5 right-2.5 bg-black/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-red-900/50">
                    <span className="text-white font-black text-base">
                      Rs. {momo.price}
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h4 className="font-extrabold text-white text-base group-hover:text-red-400 transition-colors line-clamp-1">
                      {momo.name}
                    </h4>
                    {momo.urduName && (
                      <span className="text-xs text-amber-500/90 font-medium block mt-0.5">
                        {momo.urduName}
                      </span>
                    )}
                    <p className="text-zinc-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                      {momo.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleAdd(momo)}
                    className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all duration-200 active:scale-95 shadow-md ${
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
                        <span>Add Momo's</span>
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
