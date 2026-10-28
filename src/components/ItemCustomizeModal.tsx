import React, { useState } from 'react';
import { X, Flame, Plus, Minus, Check } from 'lucide-react';
import { MenuItem } from '../types';

interface ItemCustomizeModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onConfirm: (
    item: MenuItem,
    quantity: number,
    options: {
      spiciness?: string;
      extraCheese?: boolean;
      drink?: string;
      specialInstructions?: string;
    }
  ) => void;
}

export const ItemCustomizeModal: React.FC<ItemCustomizeModalProps> = ({
  item,
  onClose,
  onConfirm,
}) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedSpiciness, setSelectedSpiciness] = useState<string>(
    item.options?.spiciness?.[0] || 'Medium Spicy'
  );
  const [extraCheese, setExtraCheese] = useState(false);
  const [selectedDrink, setSelectedDrink] = useState<string>(
    item.options?.drinks?.[0] || 'None'
  );
  const [specialInstructions, setSpecialInstructions] = useState('');

  const cheesePrice = extraCheese ? 60 : 0;
  const drinkPrice = selectedDrink && selectedDrink !== 'None' ? 90 : 0;
  const unitPrice = item.price + cheesePrice + drinkPrice;
  const totalPrice = unitPrice * quantity;

  const handleAdd = () => {
    onConfirm(item, quantity, {
      spiciness: item.options?.spiciness ? selectedSpiciness : undefined,
      extraCheese: item.options?.addCheese ? extraCheese : undefined,
      drink: item.options?.drinks ? selectedDrink : undefined,
      specialInstructions: specialInstructions.trim() || undefined,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col max-h-[90vh] text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative aspect-[16/9] w-full bg-black overflow-hidden flex-shrink-0">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-90" />
          
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-zinc-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute bottom-3 left-4 right-4">
            <span className="text-xs font-black uppercase tracking-wider text-red-500">
              Customize Your Order
            </span>
            <h3 className="text-xl font-black text-white">{item.name}</h3>
            {item.urduName && (
              <span className="text-xs text-amber-400 block">{item.urduName}</span>
            )}
          </div>
        </div>

        {/* Customization Options Body */}
        <div className="p-5 overflow-y-auto space-y-5 flex-1 divide-y divide-zinc-800/80">
          
          {/* Spiciness Level */}
          {item.options?.spiciness && (
            <div className="space-y-2.5">
              <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-red-500" />
                Select Spice Level
              </label>
              <div className="grid grid-cols-3 gap-2">
                {item.options.spiciness.map((spice) => (
                  <button
                    key={spice}
                    type="button"
                    onClick={() => setSelectedSpiciness(spice)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      selectedSpiciness === spice
                        ? 'bg-red-600 text-white border-red-500 shadow-md shadow-red-950/60'
                        : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    {spice}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add-on: Extra Cheese */}
          {item.options?.addCheese && (
            <div className="pt-4 flex items-center justify-between">
              <div>
                <span className="text-sm font-bold text-white block">Add Extra Melted Cheese Slice</span>
                <span className="text-xs text-amber-400">+ Rs. 60</span>
              </div>
              <button
                type="button"
                onClick={() => setExtraCheese(!extraCheese)}
                className={`w-6 h-6 rounded-md flex items-center justify-center border transition-all ${
                  extraCheese 
                    ? 'bg-red-600 border-red-500 text-white' 
                    : 'bg-zinc-950 border-zinc-700 text-transparent'
                }`}
              >
                <Check className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          )}

          {/* Optional Drink */}
          {item.options?.drinks && (
            <div className="pt-4 space-y-2.5">
              <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
                Add Chilled Soft Drink (+ Rs. 90)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {item.options.drinks.map((drk) => (
                  <button
                    key={drk}
                    type="button"
                    onClick={() => setSelectedDrink(drk)}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold border text-center transition-all truncate ${
                      selectedDrink === drk
                        ? 'bg-red-600 text-white border-red-500'
                        : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    {drk}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Special Cooking Instructions */}
          <div className="pt-4 space-y-2">
            <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
              Special Instructions
            </label>
            <textarea
              rows={2}
              placeholder="e.g. No onions, extra ketchup, crispy fries, less mayo..."
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              className="w-full p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-red-600 resize-none"
            />
          </div>
        </div>

        {/* Footer with Quantity & Confirm Button */}
        <div className="p-4 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between gap-4 flex-shrink-0">
          {/* Quantity Controls */}
          <div className="flex items-center gap-3 bg-zinc-900 px-3 py-1.5 rounded-xl border border-zinc-800">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-7 h-7 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center transition-colors"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="font-extrabold text-base text-white w-5 text-center">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="w-7 h-7 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleAdd}
            className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white py-3 px-5 rounded-xl font-extrabold text-sm flex items-center justify-between shadow-lg shadow-red-950/70 transition-all active:scale-95"
          >
            <span>Add to Cart</span>
            <span>Rs. {totalPrice}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
