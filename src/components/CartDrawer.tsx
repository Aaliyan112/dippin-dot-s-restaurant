import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  Bike, 
  Store,
  Tag,
  Check
} from 'lucide-react';
import { CartItem } from '../types';
import { RESTAURANT_INFO } from '../data/menuData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, newQty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onProceedCheckout: () => void;
  orderType: 'delivery' | 'takeaway';
  setOrderType: (type: 'delivery' | 'takeaway') => void;
  promoCode: string;
  setPromoCode: (code: string) => void;
  discount: number;
  setDiscount: (discount: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onProceedCheckout,
  orderType,
  setOrderType,
  promoCode,
  setPromoCode,
  discount,
  setDiscount,
}) => {
  if (!isOpen) return null;

  const [inputCode, setInputCode] = useState(promoCode);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState(discount > 0);

  const subtotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const deliveryFee = orderType === 'takeaway' || subtotal >= RESTAURANT_INFO.freeDeliveryThreshold ? 0 : RESTAURANT_INFO.deliveryFee;
  const grandTotal = Math.max(0, subtotal + deliveryFee - discount);

  // Free delivery calculation
  const amountNeededForFree = Math.max(0, RESTAURANT_INFO.freeDeliveryThreshold - subtotal);
  const freeDeliveryProgress = Math.min(100, (subtotal / RESTAURANT_INFO.freeDeliveryThreshold) * 100);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = inputCode.trim().toUpperCase();
    if (code === 'DIPPIN50') {
      setDiscount(50);
      setPromoCode(code);
      setPromoSuccess(true);
      setPromoError('');
    } else if (code === 'WELCOME100') {
      if (subtotal < 800) {
        setPromoError('WELCOME100 requires min. order of Rs. 800');
        return;
      }
      setDiscount(100);
      setPromoCode(code);
      setPromoSuccess(true);
      setPromoError('');
    } else {
      setPromoError('Invalid coupon. Try DIPPIN50 or WELCOME100');
      setPromoSuccess(false);
    }
  };

  const getQuickWhatsAppUrl = () => {
    let text = `*New Order from Dippin Dot's Website!*\n`;
    text += `*Order Type:* ${orderType === 'delivery' ? 'Delivery in Sukkur' : 'Self Pickup'}\n\n`;
    text += `*Items:*\n`;
    cartItems.forEach((item, index) => {
      text += `${index + 1}. ${item.quantity}x ${item.menuItem.name} (Rs. ${item.totalPrice})\n`;
      if (item.selectedOptions?.spiciness) {
        text += `   • Spice: ${item.selectedOptions.spiciness}\n`;
      }
      if (item.selectedOptions?.extraCheese) {
        text += `   • Extra Cheese Slice\n`;
      }
    });
    text += `\n*Subtotal:* Rs. ${subtotal}\n`;
    if (discount > 0) text += `*Discount:* -Rs. ${discount}\n`;
    if (deliveryFee > 0) text += `*Delivery Fee:* Rs. ${deliveryFee}\n`;
    text += `*Total Amount:* Rs. ${grandTotal}\n\n`;
    text += `Please confirm my order. My contact number:`;
    return `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-zinc-950 border-l border-zinc-800 h-full flex flex-col shadow-2xl text-white relative animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cart Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 border border-red-500/30 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-lg text-white">Your Food Basket</h3>
              <span className="text-xs text-zinc-400">
                {cartItems.reduce((acc, i) => acc + i.quantity, 0)} items selected
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {cartItems.length > 0 && (
              <button
                onClick={onClearCart}
                title="Clear Cart"
                className="p-2 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-zinc-900 text-xs transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-zinc-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Order Type Toggle (Delivery vs Takeaway) */}
        <div className="p-4 border-b border-zinc-800/80 bg-zinc-900/20">
          <div className="grid grid-cols-2 gap-2 bg-zinc-900 p-1 rounded-xl border border-zinc-800">
            <button
              onClick={() => setOrderType('delivery')}
              className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                orderType === 'delivery'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Bike className="w-4 h-4" />
              <span>Home Delivery</span>
            </button>
            <button
              onClick={() => setOrderType('takeaway')}
              className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                orderType === 'takeaway'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Store className="w-4 h-4" />
              <span>Self Takeaway</span>
            </button>
          </div>

          {/* Free delivery progress bar */}
          {orderType === 'delivery' && (
            <div className="mt-3">
              <div className="flex items-center justify-between text-[11px] mb-1">
                {amountNeededForFree > 0 ? (
                  <span className="text-zinc-400">
                    Add <strong className="text-amber-400">Rs. {amountNeededForFree}</strong> more for <strong className="text-white">FREE Delivery</strong>
                  </span>
                ) : (
                  <span className="text-green-400 font-bold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Congratulations! You got FREE Delivery
                  </span>
                )}
                <span className="text-zinc-500 font-bold">{Math.round(freeDeliveryProgress)}%</span>
              </div>
              <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-red-600 to-amber-500 transition-all duration-300"
                  style={{ width: `${freeDeliveryProgress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-600">
                <ShoppingBag className="w-10 h-10" />
              </div>
              <div>
                <h4 className="font-extrabold text-white text-lg">Your cart is empty</h4>
                <p className="text-zinc-400 text-xs mt-1 max-w-xs">
                  Looks like you haven't added any burgers, deals or loaded fries yet!
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-xl shadow-lg transition-all"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-zinc-900/90 rounded-2xl p-3 border border-zinc-800/80 flex gap-3 relative group"
              >
                {/* Thumbnail */}
                <div className="w-18 h-18 rounded-xl overflow-hidden bg-black flex-shrink-0">
                  <img
                    src={item.menuItem.image}
                    alt={item.menuItem.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-bold text-white text-xs sm:text-sm truncate">
                        {item.menuItem.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-zinc-500 hover:text-red-400 text-xs p-1"
                        title="Remove"
                      >
                        ✕
                      </button>
                    </div>

                    {/* Customized tags */}
                    <div className="text-[11px] text-zinc-400 space-y-0.5 mt-0.5">
                      {item.selectedOptions?.spiciness && (
                        <div>• Spice: <span className="text-red-400">{item.selectedOptions.spiciness}</span></div>
                      )}
                      {item.selectedOptions?.extraCheese && (
                        <div>• Extra Cheese (+Rs. 60)</div>
                      )}
                      {item.selectedOptions?.drink && item.selectedOptions.drink !== 'None' && (
                        <div>• Drink: <span className="text-amber-400">{item.selectedOptions.drink}</span></div>
                      )}
                      {item.selectedOptions?.specialInstructions && (
                        <div className="italic text-zinc-500 truncate">
                          "{item.selectedOptions.specialInstructions}"
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Quantity & Price Row */}
                  <div className="flex items-center justify-between pt-2 mt-1 border-t border-zinc-800/60">
                    <span className="font-black text-white text-sm">
                      Rs. {item.totalPrice}
                    </span>

                    <div className="flex items-center gap-2 bg-zinc-950 px-2 py-1 rounded-lg border border-zinc-800">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="text-zinc-400 hover:text-white"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-extrabold text-white w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="text-zinc-400 hover:text-white"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Promo Code Box */}
        {cartItems.length > 0 && (
          <div className="px-4 py-2.5 bg-zinc-900/60 border-t border-zinc-800">
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Promo code (DIPPIN50)"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 text-xs rounded-xl bg-zinc-950 border border-zinc-800 text-white uppercase placeholder-zinc-500 focus:outline-none focus:border-red-600"
                />
              </div>
              <button
                type="submit"
                className="px-3.5 py-2 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs rounded-xl transition-colors"
              >
                Apply
              </button>
            </form>
            {promoError && (
              <span className="text-[11px] text-red-400 block mt-1">{promoError}</span>
            )}
            {promoSuccess && (
              <span className="text-[11px] text-green-400 flex items-center gap-1 mt-1 font-semibold">
                <Check className="w-3 h-3" /> Coupon applied (-Rs. {discount})
              </span>
            )}
          </div>
        )}

        {/* Bill Summary & Action Buttons */}
        {cartItems.length > 0 && (
          <div className="p-4 sm:p-5 bg-zinc-950 border-t border-zinc-800 space-y-3">
            <div className="space-y-1.5 text-xs text-zinc-400">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-bold text-white">Rs. {subtotal}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-400">
                  <span>Promo Discount</span>
                  <span>- Rs. {discount}</span>
                </div>
              )}
              {orderType === 'delivery' && (
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>
                    {deliveryFee === 0 ? (
                      <strong className="text-green-400">FREE</strong>
                    ) : (
                      `Rs. ${deliveryFee}`
                    )}
                  </span>
                </div>
              )}
              <div className="flex justify-between text-base font-black text-white pt-2 border-t border-zinc-800">
                <span>Grand Total</span>
                <span className="text-red-500">Rs. {grandTotal}</span>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="space-y-2 pt-1">
              <button
                onClick={onProceedCheckout}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-sm flex items-center justify-between shadow-xl shadow-red-950/70 transition-all active:scale-95"
              >
                <span>Proceed to Checkout</span>
                <span className="flex items-center gap-1">
                  Rs. {grandTotal} <ArrowRight className="w-4 h-4" />
                </span>
              </button>

              <a
                href={getQuickWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-green-600/90 hover:bg-green-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order via WhatsApp ({RESTAURANT_INFO.phone})</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
