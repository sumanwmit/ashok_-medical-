import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { MessageCircle, Phone, ArrowUp, ShoppingCart, Shield } from 'lucide-react';

export default function FloatingControls() {
  const { openOrderModal } = useApp();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 p-3 rounded-full bg-white dark:bg-gray-800 text-medical-teal border border-gray-100 dark:border-gray-700 shadow-xl hover:-translate-y-1 active:scale-95 transition-all cursor-pointer"
          aria-label="Back to top"
          id="back-to-top-floating-btn"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Now - Primarily Mobile */}
      <a
        href="tel:9504172110"
        className="fixed bottom-24 left-6 z-40 p-3.5 rounded-full bg-blue-600 text-white shadow-xl hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center cursor-pointer md:hidden"
        aria-label="Call Store"
        id="call-store-floating-btn"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Primary Floating WhatsApp Order Button */}
      <button
        onClick={() => openOrderModal()}
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white pl-4 pr-5 py-3 rounded-full flex items-center gap-2 shadow-2xl transition-all cursor-pointer animate-pulse-slow hover:animate-none font-medium text-sm sm:text-base border border-emerald-400"
        aria-label="Order Medicines"
        id="whatsapp-floating-btn"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span>Order on WhatsApp</span>
      </button>

      {/* Sticky Bottom CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 px-4 py-3 sm:hidden flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-medical-teal shrink-0" />
          <div>
            <span className="block text-[10px] font-mono uppercase font-bold text-gray-400">Ashok Pharmacy</span>
            <span className="block text-xs font-semibold text-gray-800 dark:text-gray-200">Open Daily until 10 PM</span>
          </div>
        </div>
        <button
          onClick={() => openOrderModal()}
          className="bg-medical-teal text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-medical-teal/20"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          <span>Upload & Order</span>
        </button>
      </div>
    </>
  );
}
