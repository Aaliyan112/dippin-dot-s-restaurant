import React, { useState } from 'react';
import { 
  Phone, 
  ShoppingBag, 
  Menu as MenuIcon, 
  X, 
  Search,
  MessageCircle
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'featured', label: 'Burgers & Fries' },
    { id: 'deals', label: 'All Deals', badge: 'Hot' },
    { id: 'menu', label: 'Full Menu' },
    { id: 'dippin_dots', label: "Dippin' Dots Ice Cream" },
    { id: 'contact', label: 'Location & Hours' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-zinc-950/95 backdrop-blur-md border-b border-red-950/60 shadow-lg shadow-black/80">
      {/* Main Nav Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo - Image Only */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center cursor-pointer group"
          >
            <img 
              src="/logo.png" 
              alt="Dippin Dot's Logo" 
              className="h-14 sm:h-16 md:h-18 w-auto object-contain drop-shadow-[0_4px_16px_rgba(220,38,38,0.45)] group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  activeTab === link.id
                    ? 'text-white bg-red-600/20 text-red-400 border border-red-500/30 shadow-[0_0_15px_rgba(220,38,38,0.25)]'
                    : 'text-zinc-300 hover:text-white hover:bg-zinc-900/80'
                }`}
              >
                {link.label}
                {link.badge && (
                  <span className="bg-red-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                    {link.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Search, Hotline & Cart Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Input on Desktop */}
            <div className="relative hidden md:block">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search burgers, deals, sajji..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 lg:w-64 pl-9 pr-4 py-2 text-xs rounded-full bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
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

            {/* Mobile Search Toggle */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2.5 rounded-lg bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800"
              aria-label="Toggle search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Trigger Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-3.5 sm:px-4 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-red-950/60 transition-all duration-200 active:scale-95 group border border-red-500/40"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Cart</span>
              <span className="bg-white text-red-700 font-extrabold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-inner">
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Input Drawer */}
        {isSearchOpen && (
          <div className="md:hidden pb-3 pt-1">
            <div className="relative">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                autoFocus
                placeholder="Search burgers, deals, sajji, momos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-9 py-2.5 text-sm rounded-xl bg-zinc-900 border border-red-600/50 text-white placeholder-zinc-500 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 text-sm"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950/98 border-b border-red-900/50 px-4 pt-3 pb-6 space-y-1.5 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold flex items-center justify-between transition-colors ${
                activeTab === link.id
                  ? 'bg-red-600 text-white'
                  : 'text-zinc-200 hover:bg-zinc-900'
              }`}
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="bg-amber-400 text-black text-xs font-black px-2 py-0.5 rounded-full">
                  {link.badge}
                </span>
              )}
            </button>
          ))}

          <div className="pt-4 border-t border-zinc-900 mt-3 flex flex-col gap-2">
            <a
              href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white py-3 rounded-xl font-bold border border-zinc-800"
            >
              <Phone className="w-4 h-4 text-red-500" />
              Call Order Hotline: {RESTAURANT_INFO.phone}
            </a>
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hi%20Dippin%20Dot's,%20I%20want%20to%20order%20food`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white py-3 rounded-xl font-bold"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Direct Order
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
