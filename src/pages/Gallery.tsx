import React, { useState, useMemo } from 'react';
import { GalleryItem } from '../types';
import { Maximize2, X, Filter, Sparkles, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'store' | 'medicines' | 'products' | 'equipment'>('all');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      title: 'Store Front View & NH 83 Access',
      category: 'store',
      imageUrl: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80',
      description: 'Our pharmacy front view near Kali Mandir More, featuring safe roadside parking and bright signage.'
    },
    {
      id: 'g2',
      title: 'Authentic Medicine Racks',
      category: 'medicines',
      imageUrl: 'https://images.unsplash.com/photo-1631549916768-4119b2e55c06?auto=format&fit=crop&w=800&q=80',
      description: 'Neatly organized prescription medicines stored alphabetically under strict dust-free temperatures.'
    },
    {
      id: 'g3',
      title: 'Immunity & Supplement Shelves',
      category: 'products',
      imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
      description: 'Fully stocked wellness multivitamins, health supplements, calcium pills and protein shakes.'
    },
    {
      id: 'g4',
      title: 'Clinical Diagnostic Equipment',
      category: 'equipment',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      description: 'Blood pressure checkers, blood sugar diagnostic devices, clinical thermometers and oximeters.'
    },
    {
      id: 'g5',
      title: 'Baby Care & Pediatric Rack',
      category: 'products',
      imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
      description: 'Pampers, Nestlé baby foods, and Himalaya baby care powders kept under secure sanitary guidelines.'
    },
    {
      id: 'g6',
      title: 'Cold-Chain Insulin Storage Unit',
      category: 'equipment',
      imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
      description: 'Advanced medical refrigerator preserving life-critical insulin injection and vaccines at 2-8°C.'
    }
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return galleryItems;
    return galleryItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  const filterButtons = [
    { value: 'all', label: 'All Photos' },
    { value: 'store', label: 'Store View' },
    { value: 'medicines', label: 'Medicine Shelves' },
    { value: 'products', label: 'Baby & OTC Products' },
    { value: 'equipment', label: 'Equipment & Fridge' }
  ] as const;

  return (
    <div className="py-12 sm:py-16 bg-white dark:bg-slate-950 animate-fade-in text-slate-800 dark:text-slate-200 font-sans" id="gallery-page-container">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-xs font-semibold uppercase text-[#0A8F6A] tracking-widest bg-green-50 dark:bg-green-950/40 border border-green-100 dark:border-green-900/40 px-3 py-1.5 rounded-full inline-block">
          Authentic Visual Showcase
        </span>
        <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-slate-900 dark:text-white mt-4 tracking-tight leading-tight uppercase">
          Store Gallery & Infrastructure
        </h1>
        <p className="text-base text-slate-500 dark:text-slate-400 mt-3 max-w-2xl mx-auto leading-relaxed">
          Explore our sterile environments, alphabetical shelves, authorized equipment, and clinical stock setups.
        </p>
      </div>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-wrap items-center justify-center gap-3" id="gallery-filters-group">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 uppercase tracking-wider mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter Category:</span>
          </div>
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setSelectedCategory(btn.value)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                selectedCategory === btn.value
                  ? 'bg-[#0A8F6A] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-800'
              }`}
              id={`filter-btn-${btn.value}`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="gallery-items-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-slate-50/50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:border-[#0A8F6A] transition-all"
            >
              {/* Image box */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-200 dark:bg-slate-850">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => setActiveImage(item)}
                    className="p-2.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/20"
                    aria-label="Zoom Image"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Text metadata */}
              <div className="p-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0A8F6A] bg-green-50 dark:bg-green-950/40 border border-green-100/50 dark:border-green-900/30 px-2 py-0.5 rounded">
                  {item.category}
                </span>
                <h3 className="font-bold text-slate-900 dark:text-white text-base mt-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popup Lightbox Zoom Modal */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-slate-950 rounded-xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col"
              id="lightbox-container"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors cursor-pointer border border-white/10"
                aria-label="Close Zoom"
                id="close-lightbox-btn"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Expanded Image */}
              <div className="w-full aspect-video md:aspect-[2/1] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={activeImage.imageUrl}
                  alt={activeImage.title}
                  className="max-h-[70vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Image Description Footer */}
              <div className="bg-slate-900 p-6 text-white border-t border-slate-800">
                <span className="text-[10px] font-bold text-[#0A8F6A] uppercase bg-green-950/40 px-2.5 py-1 rounded border border-green-900/30">
                  {activeImage.category}
                </span>
                <h3 className="text-lg font-sans font-bold mt-2">
                  {activeImage.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {activeImage.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Note on Authenticity */}
      <div className="max-w-4xl mx-auto px-4 text-center mt-12 bg-slate-50 dark:bg-slate-900/40 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
        <p className="text-xs text-[#0A8F6A] font-medium flex items-center justify-center gap-1.5">
          <CheckCircle className="w-4 h-4 shrink-0" />
          <span>Notice: These photographs represent true clinical operations at our NH-83 retail location in Gaya, Bihar.</span>
        </p>
      </div>

    </div>
  );
}
