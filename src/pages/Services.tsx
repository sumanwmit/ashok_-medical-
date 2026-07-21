import React from 'react';
import { useApp } from '../context/AppContext';
import MedicineStockChecker from '../components/MedicineStockChecker';
import { 
  HeartPulse, Shield, ShoppingBag, Activity, Thermometer, Home, 
  Baby, Sparkles, AlertCircle, ShoppingCart, HelpCircle, FileText
} from 'lucide-react';

export default function Services() {
  const { openOrderModal } = useApp();

  const servicesList = [
    {
      category: 'Prescription Medicines (Rx)',
      desc: 'Authorized dispensing of highly regulated therapeutic medications including cardiology, oncology, nephrology, diabetes care, and respiratory care. Every medicine is sourced with rigid batch tracking.',
      icon: <HeartPulse className="w-5 h-5" />,
      cta: 'Submit Prescription',
      prefill: 'Prescription Medicines Inquiry'
    },
    {
      category: 'OTC Medicines',
      desc: 'Instant access to government-approved Over-the-Counter drugs for rapid relief of fever, digestive discomfort, seasonal flu, general body pain, and dermatological conditions.',
      icon: <Shield className="w-5 h-5" />,
      cta: 'Order OTC Medicines',
      prefill: 'OTC Medicines Inquiry'
    },
    {
      category: 'Baby Care & Nutrition',
      desc: 'Dedicated stock of certified pediatrician-approved baby goods. Formulated milk formulas, baby body oils, baby shampoos, moisturizing lotions, and ultra-dry diapers from trusted brands.',
      icon: <Baby className="w-5 h-5" />,
      cta: 'Inquire Baby Products',
      prefill: 'Baby Products Inquiry'
    },
    {
      category: 'Health Devices & Equipment',
      desc: 'Genuine clinical monitoring kits for homes and medical clinics. Certified digital blood pressure check panels, glucose level testing strips, pulse oximeters, and nebulizers.',
      icon: <Activity className="w-5 h-5" />,
      cta: 'Check Device Availability',
      prefill: 'Medical Devices Inquiry'
    },
    {
      category: 'Supplements & Vitamins',
      desc: 'Complete portfolio of wellness supplements. High-absorption multivitamins, calcium tablets, immunity-boosting zinc tablets, protein powders, and dietary herbal powders.',
      icon: <Sparkles className="w-5 h-5" />,
      cta: 'Inquire Supplements',
      prefill: 'Supplements Inquiry'
    },
    {
      category: 'Home Care & Personal Hygiene',
      desc: 'General lifestyle sanitization and hygiene products. Medicated soaps, antiseptic liquids, daily masks, gloves, household disinfectants, and professional wound care kits.',
      icon: <Home className="w-5 h-5" />,
      cta: 'Order Hygiene Kits',
      prefill: 'Home Care Hygiene Products'
    }
  ];

  return (
    <div className="py-12 sm:py-16 bg-white dark:bg-slate-950 animate-fade-in text-slate-800 dark:text-slate-200 font-sans" id="services-page-container">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-xs font-semibold uppercase text-[#0A8F6A] tracking-widest bg-green-50 dark:bg-green-950/40 border border-green-100 dark:border-green-900/40 px-3 py-1.5 rounded-full inline-block">
          Complete Pharmacy Categories
        </span>
        <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-slate-900 dark:text-white mt-4 tracking-tight leading-tight uppercase">
          Services & Health Categories
        </h1>
        <p className="text-base text-slate-500 dark:text-slate-400 mt-3 max-w-2xl mx-auto leading-relaxed">
          Explore our fully stocked retail categories, emergency service corridors, and live stock checker.
        </p>
      </div>

      {/* Complete Service Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-categories-grid">
          {servicesList.map((srv, index) => (
            <div 
              key={srv.category}
              className="p-6 bg-slate-50/50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-[#0A8F6A] hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 bg-green-50 dark:bg-green-950/50 text-[#0A8F6A] rounded-lg flex items-center justify-center mb-5 border border-green-100 dark:border-green-900/40">
                  {srv.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                  {srv.category}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  {srv.desc}
                </p>
              </div>

              <button
                onClick={() => openOrderModal(srv.prefill)}
                className="w-full py-2.5 px-4 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-[#0A8F6A] hover:border-[#0A8F6A] hover:text-white text-[#0A8F6A] font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                id={`services-cta-btn-${index}`}
              >
                <ShoppingCart className="w-3.5 h-3.5" />
                <span>{srv.cta}</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* EXCLUSIVE FEATURE: Medicine Stock Checker Integration */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
          {/* Header Strip inside stock checker container */}
          <div className="bg-[#0A8F6A] p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-sans font-bold uppercase tracking-tight">Search Our Live Inventory Stock</h2>
              <p className="text-emerald-100 text-xs mt-1">
                Enter your tablet, syrup, or health device brand name below to instantly check stock availability status.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-xs font-semibold border border-white/20">
              <FileText className="w-4 h-4" />
              <span>Registered Drug Licence BR-GAY-72110</span>
            </div>
          </div>
          
          {/* Live Checker Component */}
          <div className="p-4 sm:p-6 bg-slate-50/50 dark:bg-slate-900">
            <MedicineStockChecker />
          </div>
        </div>
      </section>

    </div>
  );
}
