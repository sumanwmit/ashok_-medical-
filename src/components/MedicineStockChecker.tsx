import React, { useState, useMemo } from 'react';
import medicineData from '../data/medicineStock.json';
import { Medicine } from '../types';
import { Search, Info, AlertTriangle, CheckCircle, XCircle, ShoppingCart, HelpCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function MedicineStockChecker() {
  const { openOrderModal } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Load static medicine stock
  const medicines: Medicine[] = medicineData as Medicine[];

  // Extract unique categories
  const categories = useMemo(() => {
    const list = medicines.map((m) => m.category);
    return ['All', ...Array.from(new Set(list))];
  }, [medicines]);

  // Filter medicines instantly
  const filteredMedicines = useMemo(() => {
    return medicines.filter((m) => {
      const matchesSearch =
        m.medicineName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || m.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [medicines, searchQuery, selectedCategory]);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 shadow-sm" id="medicine-stock-checker-section">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl font-sans font-bold text-slate-900 dark:text-white flex items-center space-x-2">
            <span className="w-2.5 h-6 bg-[#0A8F6A] rounded-full inline-block"></span>
            <span>Medicine Stock Availability Checker</span>
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">
            Search 100% genuine medicines and medical devices live in our Belaganj inventory.
          </p>
        </div>
        <div className="text-xs font-semibold bg-green-50 dark:bg-green-950/40 text-[#0A8F6A] px-3 py-1.5 rounded-full border border-green-100 dark:border-green-900/50 self-start md:self-auto flex items-center gap-1.5">
          <CheckCircle className="w-3.5 h-3.5" />
          <span>Last updated: Live Today</span>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="md:col-span-2 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            id="medicine-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Type Medicine Name or Brand (e.g. Calpol, Cipla, Pantocid)..."
            className="w-full pl-11 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full focus:ring-2 focus:ring-[#0A8F6A]/50 focus:border-[#0A8F6A] outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400 text-sm"
          />
        </div>
        <div>
          <select
            id="category-filter-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full focus:ring-2 focus:ring-[#0A8F6A]/50 focus:border-[#0A8F6A] outline-none transition-all text-slate-900 dark:text-white text-sm"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid of Medicines */}
      {filteredMedicines.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="medicine-stock-list">
          {filteredMedicines.map((med, index) => {
            const isAvailable = med.status === 'Available';
            const isLimited = med.status === 'Limited Stock';
            const isOut = med.status === 'Out of Stock';

            return (
              <div
                key={med.medicineName + index}
                className="p-5 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50/30 dark:bg-slate-800/20 hover:border-[#0A8F6A] dark:hover:border-[#0A8F6A] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-[#0A8F6A] px-2 py-0.5 rounded-md bg-green-50 dark:bg-green-950/40 border border-green-100/50 dark:border-green-900/30">
                      {med.category}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                        isAvailable
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400'
                          : isLimited
                          ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400'
                          : 'bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400'
                      }`}
                    >
                      {isAvailable && <CheckCircle className="w-3 h-3" />}
                      {isLimited && <AlertTriangle className="w-3 h-3" />}
                      {isOut && <XCircle className="w-3 h-3" />}
                      {med.status}
                    </span>
                  </div>

                  <h4 className="font-bold text-base text-slate-900 dark:text-white leading-tight">
                    {med.medicineName}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Brand: {med.brand}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/50 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold uppercase tracking-wider">MRP</span>
                    <span className="text-base font-bold text-slate-900 dark:text-white">
                      ₹{med.mrp.toFixed(2)}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block font-semibold uppercase tracking-wider">Expiry</span>
                    <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                      {med.expiry}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => openOrderModal(`${med.medicineName} (Brand: ${med.brand})`)}
                  disabled={isOut}
                  className={`mt-4 w-full py-2 px-3 rounded-full font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isOut
                      ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed border border-slate-200 dark:border-slate-700'
                      : 'bg-[#0A8F6A] text-white hover:bg-[#087a5a] shadow-sm'
                  }`}
                  id={`order-btn-${index}`}
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>{isOut ? 'Temporarily Out' : 'Order Now'}</span>
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-800/20" id="empty-stock-search">
          <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <h4 className="text-base font-bold text-slate-900 dark:text-white">Medicine Not Listed Online?</h4>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-1 text-xs leading-relaxed">
            We stock over 5,000+ general and critical care medicines. Click below to inquire directly via WhatsApp or call our store!
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <button
              onClick={() => openOrderModal(searchQuery)}
              className="bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold px-5 py-2 rounded-full text-xs transition-colors cursor-pointer"
            >
              Inquire "{searchQuery || 'Any Medicine'}" via WhatsApp
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 flex items-start gap-3 bg-slate-50 dark:bg-slate-900/40 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <Info className="w-5 h-5 text-[#0A8F6A] shrink-0 mt-0.5" />
        <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          <strong>Important Note:</strong> Under drug safety regulations, prescription medicines require a valid prescription upload or presentation at our retail counter in Belaganj before dispensing. We practice 100% legal & ethical pharmacy compliance.
        </div>
      </div>
    </div>
  );
}
