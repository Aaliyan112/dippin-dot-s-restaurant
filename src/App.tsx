import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedHome } from './components/FeaturedHome';
import { DealsSection } from './components/DealsSection';
import { MenuSection } from './components/MenuSection';
import { MomosShowcase } from './components/MomosShowcase';
import { DippinDotsSection } from './components/DippinDotsSection';
import { ReviewsAndLocation } from './components/ReviewsAndLocation';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ItemCustomizeModal } from './components/ItemCustomizeModal';
import { CheckoutModal } from './components/CheckoutModal';
import { 
  ALL_MENU_ITEMS, 
  RESTAURANT_INFO 
} from './data/menuData';
import { MenuItem, CartItem, CategoryId } from './types';
import { ShoppingBag, Flame, MessageCircle, Home, Utensils, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Cart State with LocalStorage sync
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('dippin_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [orderType, setOrderType] = useState<'delivery' | 'takeaway'>('delivery');
  const [promoCode, setPromoCode] = useState<string>('');
  const [discount, setDiscount] = useState<number>(0);

  // Modals state
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('dippin_cart', JSON.stringify(cartItems));
    } catch {
      // Ignore
    }
  }, [cartItems]);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const deliveryFee = orderType === 'takeaway' || subtotal >= RESTAURANT_INFO.freeDeliveryThreshold ? 0 : RESTAURANT_INFO.deliveryFee;
  const grandTotal = Math.max(0, subtotal + deliveryFee - discount);

  // Filter 8 featured items for Home Page as requested
  const featuredHomeItems = ALL_MENU_ITEMS.filter((item) => item.isFeaturedHome).slice(0, 8);

  // Filter deals
  const dealsItems = ALL_MENU_ITEMS.filter((item) => item.isDeal);

  // Filter momos
  const momoItems = ALL_MENU_ITEMS.filter((item) => item.category === 'momos');

  // Filter Dippin Dots
  const dippinDotsItems = ALL_MENU_ITEMS.filter((item) => item.category === 'dippin_dots');

  // Cart operations
  const handleAddToCart = (item: MenuItem, quantity = 1, options?: {
    spiciness?: string;
    extraCheese?: boolean;
    drink?: string;
    specialInstructions?: string;
  }) => {
    const cheeseCost = options?.extraCheese ? 60 : 0;
    const drinkCost = options?.drink && options.drink !== 'None' ? 90 : 0;
    const unitPrice = item.price + cheeseCost + drinkCost;
    const itemTotalPrice = unitPrice * quantity;

    // Check if duplicate with same options exists
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (i) => 
          i.menuItem.id === item.id &&
          i.selectedOptions?.spiciness === options?.spiciness &&
          i.selectedOptions?.extraCheese === options?.extraCheese &&
          i.selectedOptions?.drink === options?.drink &&
          i.selectedOptions?.specialInstructions === options?.specialInstructions
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        const current = updated[existingIndex];
        const newQty = current.quantity + quantity;
        updated[existingIndex] = {
          ...current,
          quantity: newQty,
          totalPrice: unitPrice * newQty,
        };
        return updated;
      } else {
        const newItem: CartItem = {
          id: `${item.id}-${Date.now()}-${Math.random()}`,
          menuItem: item,
          quantity,
          selectedOptions: options,
          totalPrice: itemTotalPrice,
        };
        return [...prevItems, newItem];
      }
    });
  };

  const handleUpdateQuantity = (id: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const unitPrice = item.totalPrice / item.quantity;
          return {
            ...item,
            quantity: newQty,
            totalPrice: unitPrice * newQty,
          };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
    setDiscount(0);
    setPromoCode('');
  };

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCategory = (cat: CategoryId) => {
    setSelectedCategory(cat);
    scrollToSection('menu');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col font-sans selection:bg-red-600 selection:text-white pb-20 lg:pb-0">
      
      {/* Sticky Header with Logo and Cart Counter */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreBurgers={() => scrollToSection('featured')}
          onExploreDeals={() => scrollToSection('deals')}
        />

        {/* 1. HOME FEATURED: Exactly 8 Cards for Burgers & Loaded Fries as requested */}
        <FeaturedHome
          items={featuredHomeItems}
          onAddToCart={handleAddToCart}
          onCustomize={(item) => setCustomizingItem(item)}
        />

        {/* 2. DEALS SECTION: All Deals as requested */}
        <DealsSection
          deals={dealsItems}
          onAddToCart={handleAddToCart}
          onCustomize={(item) => setCustomizingItem(item)}
        />

        {/* 3. MOMO'S SPECIAL SHOWCASE: Real flyer items */}
        <MomosShowcase
          momos={momoItems}
          onAddToCart={handleAddToCart}
        />

        {/* 4. FULL MENU: Filterable by every category as requested */}
        <MenuSection
          items={ALL_MENU_ITEMS}
          onAddToCart={handleAddToCart}
          onCustomize={(item) => setCustomizingItem(item)}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* 5. DIPPIN' DOTS ICE CREAM: Signature beaded dessert collection */}
        <DippinDotsSection
          items={dippinDotsItems}
          onAddToCart={handleAddToCart}
        />

        {/* 6. REVIEWS & SUKKUR LOCATION / HOURS */}
        <ReviewsAndLocation />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Sliding Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onProceedCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        orderType={orderType}
        setOrderType={setOrderType}
        promoCode={promoCode}
        setPromoCode={setPromoCode}
        discount={discount}
        setDiscount={setDiscount}
      />

      {/* Item Customization Modal */}
      <ItemCustomizeModal
        item={customizingItem}
        onClose={() => setCustomizingItem(null)}
        onConfirm={(item, qty, options) => {
          handleAddToCart(item, qty, options);
          setIsCartOpen(true);
        }}
      />

      {/* Checkout and Receipt Confirmation Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        subtotal={subtotal}
        deliveryFee={deliveryFee}
        discount={discount}
        total={grandTotal}
        orderType={orderType}
        onOrderSuccess={handleClearCart}
      />

      {/* Floating Action Button (WhatsApp & Quick Call) */}
      <div className="fixed bottom-22 right-4 z-30 flex flex-col gap-2.5">
        <a
          href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hi%20Dippin%20Dot's,%20I%20want%20to%20order%20food`}
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          className="w-13 h-13 rounded-full bg-green-500 hover:bg-green-400 text-white flex items-center justify-center shadow-xl shadow-green-950/70 hover:scale-105 active:scale-95 transition-all"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar for instant access */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-zinc-950/98 border-t border-zinc-800/90 px-3 py-2 flex items-center justify-around backdrop-blur-md">
        <button
          onClick={() => scrollToSection('home')}
          className={`flex flex-col items-center gap-1 text-[11px] font-bold ${
            activeTab === 'home' ? 'text-red-500' : 'text-zinc-400'
          }`}
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </button>

        <button
          onClick={() => scrollToSection('featured')}
          className={`flex flex-col items-center gap-1 text-[11px] font-bold ${
            activeTab === 'featured' ? 'text-red-500' : 'text-zinc-400'
          }`}
        >
          <Flame className="w-5 h-5 text-amber-500" />
          <span>8 Burgers</span>
        </button>

        <button
          onClick={() => scrollToSection('deals')}
          className={`flex flex-col items-center gap-1 text-[11px] font-bold relative ${
            activeTab === 'deals' ? 'text-red-500' : 'text-zinc-400'
          }`}
        >
          <Sparkles className="w-5 h-5 text-red-500" />
          <span>All Deals</span>
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[8px] font-black px-1 rounded-full">
            HOT
          </span>
        </button>

        <button
          onClick={() => scrollToSection('menu')}
          className={`flex flex-col items-center gap-1 text-[11px] font-bold ${
            activeTab === 'menu' ? 'text-red-500' : 'text-zinc-400'
          }`}
        >
          <Utensils className="w-5 h-5" />
          <span>Menu</span>
        </button>

        <button
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center gap-1 text-[11px] font-bold text-white relative bg-red-600 px-3 py-1.5 rounded-xl shadow-lg shadow-red-950"
        >
          <div className="flex items-center gap-1">
            <ShoppingBag className="w-4 h-4" />
            <span className="text-xs font-black">{totalCartCount}</span>
          </div>
          <span className="text-[10px]">Rs. {grandTotal}</span>
        </button>
      </div>

    </div>
  );
}
