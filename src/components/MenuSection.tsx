import React, { useState, useMemo } from 'react';
import { 
  Plus, 
  Check, 
  Flame, 
  SlidersHorizontal, 
  Search, 
  Sparkles,
  UtensilsCrossed,
  Pizza,
  IceCream2,
  CupSoda,
  Beef,
  Soup,
  Sandwich
} from 'lucide-react';
import { MenuItem, CategoryId } from '../types';
import { CATEGORIES } from '../data/menuData';

interface MenuSectionProps {
  items: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
  onCustomize: (item: MenuItem) => void;
  selectedCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  items,
  onAddToCart,
  onCustomize,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  setSearchQuery,
}) => {
  const [onlySpicy, setOnlySpicy] = useState(false);
  const [onlyBestsellers, setOnlyBestsellers] = useState(false);
  const [addedIds, setAddedIds] = useState<{ [key: string]: boolean }>({});

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-4 h-4" />;
      case 'Sandwich': return <Sandwich className="w-4 h-4" />;
      case 'Pizza': return <Pizza className="w-4 h-4" />;
      case 'Soup': return <Soup className="w-4 h-4" />;
      case 'Beef': return <Beef className="w-4 h-4" />;
      case 'IceCream2': return <IceCream2 className="w-4 h-4" />;
      case 'CupSoda': return <CupSoda className="w-4 h-4" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      default: return <UtensilsCrossed className="w-4 h-4" />;
    }
  };

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesUrdu = item.urduName?.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesUrdu) return false;
      }
      // Spicy filter
      if (onlySpicy && !item.isSpicy) return false;
      // Bestseller filter
      if (onlyBestsellers && !item.isBestseller) return false;

      return true;
    });
  }, [items, selectedCategory, searchQuery, onlySpicy, onlyBestsellers]);

  const handleQuickAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  return (
    <section id="menu" className="py-16 sm:py-24 bg-zinc-950 relative border-b border-red-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-bold uppercase tracking-wider">
            <UtensilsCrossed className="w-3.5 h-3.5 text-red-500" />
            <span>Complete Restaurant Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Explore Our <span className="text-red-500">Full Menu</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Choose your favorite category below or search for specific dishes. Everything is prepared fresh upon order!
          </p>
        </div>

        {/* Category Navigation Carousel / Grid */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none snap-x mb-8">
          {CATEGORIES.map((cat) => {
            const count = cat.id === 'all' 
              ? items.length 
              : items.filter(i => i.category === cat.id).length;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`snap-start flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 border ${
                  isSelected
                    ? 'bg-red-600 text-white border-red-500 shadow-lg shadow-red-950/70 scale-105'
                    : 'bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 border-zinc-800'
                }`}
              >
                <span className={isSelected ? 'text-white' : 'text-red-400'}>
                  {getCategoryIcon(cat.icon)}
                </span>
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                  isSelected ? 'bg-red-800 text-white' : 'bg-zinc-800 text-zinc-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Filters Bar: Search & Quick Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-zinc-900/80 p-3.5 rounded-2xl border border-zinc-800 mb-8">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 text-xs rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-red-600"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Quick Toggles */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              onClick={() => setOnlyBestsellers(!onlyBestsellers)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors border ${
                onlyBestsellers
                  ? 'bg-amber-500 text-black border-amber-400 font-bold'
                  : 'bg-zinc-950 text-zinc-400 hover:text-zinc-200 border-zinc-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bestsellers Only</span>
            </button>

            <button
              onClick={() => setOnlySpicy(!onlySpicy)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors border ${
                onlySpicy
                  ? 'bg-red-600 text-white border-red-500 font-bold'
                  : 'bg-zinc-950 text-zinc-400 hover:text-zinc-200 border-zinc-800'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Spicy</span>
            </button>
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-xs text-zinc-400 mb-4 flex items-center justify-between">
          <span>
            Showing <strong className="text-white">{filteredItems.length}</strong> items
            {selectedCategory !== 'all' && ` in ${CATEGORIES.find(c => c.id === selectedCategory)?.name}`}
          </span>
          {(searchQuery || onlySpicy || onlyBestsellers) && (
            <button
              onClick={() => {
                setSearchQuery('');
                setOnlySpicy(false);
                setOnlyBestsellers(false);
                onSelectCategory('all');
              }}
              className="text-red-400 hover:underline text-xs"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-zinc-900/40 rounded-2xl border border-zinc-800">
            <UtensilsCrossed className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No items found</h3>
            <p className="text-zinc-400 text-xs mt-1">Try clearing your search or filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setOnlySpicy(false);
                setOnlyBestsellers(false);
                onSelectCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-xl"
            >
              Show All Menu
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => {
              const isAdded = addedIds[item.id];

              return (
                <div
                  key={item.id}
                  className="group bg-zinc-900/90 hover:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-600/60 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

                    {/* Tag Badges */}
                    <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5 z-10">
                      {item.isBestseller && (
                        <span className="bg-red-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider shadow-sm">
                          Popular
                        </span>
                      )}
                      {item.isSpicy && (
                        <span className="bg-amber-500 text-black text-[10px] font-extrabold px-2 py-0.5 rounded-md flex items-center gap-0.5">
                          <Flame className="w-2.5 h-2.5" /> Spicy
                        </span>
                      )}
                      {item.serving && (
                        <span className="bg-zinc-950/90 text-zinc-300 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-zinc-700">
                          {item.serving}
                        </span>
                      )}
                    </div>

                    {/* Price in image corner */}
                    <div className="absolute bottom-2.5 right-2.5 bg-black/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-red-900/50">
                      <span className="text-white font-black text-base">
                        Rs. {item.price}
                      </span>
                      {item.originalPrice && (
                        <span className="text-[11px] text-zinc-400 line-through ml-1.5">
                          Rs. {item.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h4 className="font-extrabold text-white text-base group-hover:text-red-400 transition-colors leading-snug line-clamp-1">
                        {item.name}
                      </h4>
                      {item.urduName && (
                        <span className="text-xs text-amber-500/90 font-medium block mt-0.5">
                          {item.urduName}
                        </span>
                      )}
                      <p className="text-zinc-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Actions */}
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
                        title="Customize options"
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
        )}

      </div>
    </section>
  );
};
