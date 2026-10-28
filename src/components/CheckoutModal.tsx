import React, { useState } from 'react';
import { 
  X, 
  CheckCircle, 
  ShoppingBag, 
  MapPin, 
  Phone, 
  User, 
  CreditCard, 
  Banknote, 
  MessageCircle, 
  Clock, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { CartItem } from '../types';
import { RESTAURANT_INFO } from '../data/menuData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  orderType: 'delivery' | 'takeaway';
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  subtotal,
  deliveryFee,
  discount,
  total,
  orderType,
  onOrderSuccess,
}) => {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'card' | 'jazzcash'>('cod');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');

  const effectiveDeliveryFee = orderType === 'takeaway' ? 0 : deliveryFee;
  const finalTotal = subtotal + effectiveDeliveryFee - discount;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phoneNumber || (orderType === 'delivery' && !address)) {
      alert('Please fill in your name, phone number, and delivery address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedId = `DD-${Math.floor(1000 + Math.random() * 9000)}`;
      setOrderId(generatedId);
      setIsSubmitting(false);
      setOrderConfirmed(true);
      onOrderSuccess();
    }, 1000);
  };

  const getWhatsAppOrderText = () => {
    let text = `*New Order from Dippin Dot's Website!*\n`;
    text += `*Order ID:* ${orderId || 'PENDING'}\n`;
    text += `*Order Type:* ${orderType === 'delivery' ? 'Home Delivery' : 'Self Takeaway'}\n`;
    text += `*Customer:* ${customerName}\n`;
    text += `*Phone:* ${phoneNumber}\n`;
    if (orderType === 'delivery') {
      text += `*Address:* ${address}\n`;
    }
    if (notes) {
      text += `*Notes:* ${notes}\n`;
    }
    text += `\n*Items Ordered:*\n`;
    cartItems.forEach((item, index) => {
      text += `${index + 1}. ${item.quantity}x ${item.menuItem.name} - Rs. ${item.totalPrice}\n`;
      if (item.selectedOptions?.spiciness) {
        text += `   • Spice: ${item.selectedOptions.spiciness}\n`;
      }
      if (item.selectedOptions?.extraCheese) {
        text += `   • Extra Cheese Slice\n`;
      }
      if (item.selectedOptions?.drink && item.selectedOptions.drink !== 'None') {
        text += `   • Drink: ${item.selectedOptions.drink}\n`;
      }
    });
    text += `\n*Subtotal:* Rs. ${subtotal}\n`;
    if (discount > 0) text += `*Discount:* -Rs. ${discount}\n`;
    if (orderType === 'delivery') text += `*Delivery Fee:* Rs. ${effectiveDeliveryFee}\n`;
    text += `*Grand Total:* Rs. ${finalTotal}\n`;
    text += `*Payment:* ${paymentMethod.toUpperCase()}`;
    return encodeURIComponent(text);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 border-b border-zinc-800/80 flex items-center justify-between bg-zinc-900/50">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Dippin Dots Logo" 
              className="h-10 w-auto object-contain"
            />
            <div>
              <h3 className="font-black text-lg text-white">
                {orderConfirmed ? 'Order Confirmed!' : 'Checkout & Delivery'}
              </h3>
              <span className="text-xs text-amber-500 font-semibold block">
                {orderConfirmed ? 'Your meal is being prepared hot' : 'Fast Delivery in Sukkur City'}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {orderConfirmed ? (
            /* Order Confirmed Screen */
            <div className="text-center space-y-6 py-4 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500 text-green-400 flex items-center justify-center mx-auto shadow-lg shadow-green-950/60">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs font-black uppercase tracking-widest text-zinc-400">
                  Receipt #{orderId}
                </span>
                <h4 className="text-2xl font-black text-white mt-1">Thank You, {customerName}!</h4>
                <p className="text-sm text-zinc-300 mt-1 max-w-md mx-auto">
                  Your order has been sent to our kitchen at Dippin Dot's IBA University Road Sukkur.
                </p>
              </div>

              {/* Status Timeline */}
              <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 text-left space-y-3">
                <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-zinc-800 pb-2.5">
                  <span className="flex items-center gap-1.5 font-bold text-white">
                    <Clock className="w-4 h-4 text-amber-400" />
                    Estimated Delivery: 30 - 45 Mins
                  </span>
                  <span className="text-red-400 font-bold">Total: Rs. {finalTotal}</span>
                </div>

                <div className="space-y-2 pt-1 text-xs">
                  <div className="flex items-center gap-2 text-green-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    <span>1. Order Received & Confirmed</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                    <span>2. Charcoal Grilling & Frying in Kitchen</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-500">
                    <span className="w-2 h-2 rounded-full bg-zinc-600"></span>
                    <span>3. Rider Dispatched to {address || 'Your Location'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-500">
                    <span className="w-2 h-2 rounded-full bg-zinc-600"></span>
                    <span>4. Delivered Fresh & Hot</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action for Confirmed Order */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${getWhatsAppOrderText()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-green-950/60 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Order to WhatsApp (Instant Tracking)</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-3 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold text-sm transition-colors"
                >
                  Done / Close Window
                </button>
              </div>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handlePlaceOrder} className="space-y-5">
              
              {/* Order summary pill */}
              <div className="bg-zinc-900 p-3.5 rounded-2xl border border-zinc-800 flex items-center justify-between text-xs">
                <div>
                  <span className="text-zinc-400 block">Total Items:</span>
                  <span className="font-extrabold text-white text-sm">
                    {cartItems.reduce((acc, i) => acc + i.quantity, 0)} Items ({orderType === 'delivery' ? 'Home Delivery' : 'Self Pickup'})
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-zinc-400 block">Payable Amount:</span>
                  <span className="font-black text-red-500 text-lg">
                    Rs. {finalTotal}
                  </span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-zinc-400">
                  Your Details
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-zinc-400 block mb-1 font-semibold">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ali Khan"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-red-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-zinc-400 block mb-1 font-semibold">
                      Phone / WhatsApp Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="0312-XXXXXXX"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-red-600"
                      />
                    </div>
                  </div>
                </div>

                {orderType === 'delivery' && (
                  <div>
                    <label className="text-xs text-zinc-400 block mb-1 font-semibold">
                      Delivery Address (in Sukkur) *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                      <textarea
                        required
                        rows={2}
                        placeholder="House / Flat #, Street, Colony or Landmark (e.g. Near IBA Sukkur, Military Road, Minara Road...)"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-red-600 resize-none"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="text-xs text-zinc-400 block mb-1 font-semibold">
                    Order Note / Instructions (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Call upon arrival, bring extra napkins, ring doorbell"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-zinc-400">
                  Select Payment Method
                </h4>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      paymentMethod === 'cod'
                        ? 'bg-red-600/20 border-red-500 text-white shadow-md'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    <Banknote className="w-5 h-5 mx-auto mb-1 text-green-400" />
                    <span className="text-[11px] font-bold block">Cash on Delivery</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-red-600/20 border-red-500 text-white shadow-md'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 mx-auto mb-1 text-blue-400" />
                    <span className="text-[11px] font-bold block">Card on Delivery</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('jazzcash')}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      paymentMethod === 'jazzcash'
                        ? 'bg-red-600/20 border-red-500 text-white shadow-md'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    <ShieldCheck className="w-5 h-5 mx-auto mb-1 text-amber-400" />
                    <span className="text-[11px] font-bold block">EasyPaisa / JazzCash</span>
                  </button>
                </div>
              </div>

              {/* Action Submit */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white py-3.5 px-6 rounded-xl font-extrabold text-sm sm:text-base flex items-center justify-between shadow-xl shadow-red-950/70 transition-all active:scale-95 disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Placing Order...' : 'Confirm & Place Order'}</span>
                  <span>Rs. {finalTotal} →</span>
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
