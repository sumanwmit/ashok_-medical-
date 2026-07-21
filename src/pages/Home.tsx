import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { 
  Phone, MessageCircle, MapPin, ArrowRight, ShieldCheck, 
  Clock, Truck, ThumbsUp, ShoppingBag, Search, Check, AlertCircle, HelpCircle, Mail, Calendar, HeartPulse
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const { openOrderModal } = useApp();

  const featuredServices = [
    {
      title: 'Genuine Rx Medicines',
      desc: '100% authentic, batch-verified prescription medicines across oncology, cardiology, neurology & diabetes.',
      icon: <ShieldCheck className="w-6 h-6 text-medical-teal" />
    },
    {
      title: 'Over-The-Counter (OTC)',
      desc: 'Fast-acting wellness essentials, cold remedies, digestive health formulas, and skin treatments.',
      icon: <HeartPulse className="w-6 h-6 text-medical-teal" />
    },
    {
      title: 'Baby Care & Diapers',
      desc: 'Top-tier pediatric care brands including Himalaya Baby, Johnson’s, Pampers, and Nestlé baby foods.',
      icon: <ShoppingBag className="w-6 h-6 text-medical-teal" />
    },
    {
      title: 'Health Monitoring Devices',
      desc: 'Authorized digital BP checkers, blood glucose meters, clinical thermometers, and oximeters.',
      icon: <Search className="w-6 h-6 text-medical-teal" />
    }
  ];

  const faqs = [
    {
      q: 'Do you deliver medicines in Belaganj and nearby villages?',
      a: 'Yes, we provide home delivery and emergency delivery of medicines for senior citizens and critical care patients across Belaganj town and adjacent village areas near PG Road.'
    },
    {
      q: 'Can I order prescription drugs online through WhatsApp?',
      a: 'Absolutely! You can upload your prescription picture using our WhatsApp Order Form. Under government health rules, we verify the registered doctor Rx slip before dispatching.'
    },
    {
      q: 'Are your medicines 100% authentic with real batch numbers?',
      a: 'Yes, Ashok Medical Hall only sources directly from authorized pharmaceutical distributors. Every purchase comes with genuine GST bills and valid expiry guarantees.'
    }
  ];

  const healthTips = [
    {
      title: 'Prevent Heat Stroke & Dehydration on NH 83 Highway Travels',
      date: 'July 18, 2026',
      desc: 'Travelling on the Patna-Gaya NH 83 highway? Always carry an Electral ORS pack, drink purified water, and avoid traveling in open vehicles during peak solar noon.',
      tag: 'Heat Wellness'
    },
    {
      title: 'Essential Home First Aid Box Checklist for Belaganj Homes',
      date: 'June 30, 2026',
      desc: 'Every household should keep an active first-aid kit containing paracetamol tablets, antiseptic liquid, surgical cotton, bandages, and burn ointments.',
      tag: 'Home Safety'
    }
  ];

  return (
    <div className="animate-fade-in" id="home-page-container">
      
      {/* Premium Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden" id="hero-banner">
        {/* Modern decorative subtle background patterns or accent */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-100 dark:bg-emerald-950/20 rounded-full blur-3xl"></div>
          <div className="absolute left-10 bottom-10 w-80 h-80 bg-slate-200 dark:bg-slate-900/40 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 text-slate-900 dark:text-white">
          <div className="max-w-3xl">
            {/* Tagline Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/50 text-[#0A8F6A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase mb-6"
            >
              <span className="w-2 h-2 bg-[#0A8F6A] rounded-full"></span>
              <span>Trusted Healthcare Since 1995</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight leading-tight mb-6 text-slate-900 dark:text-white"
            >
              Your Trusted Partner for <span className="text-[#0A8F6A]">Genuine Medicines</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl"
            >
              Providing genuine medicines, healthcare products, baby care, and surgical supplies at affordable prices in Belaganj.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
              id="hero-action-buttons-group"
            >
              <button
                onClick={() => openOrderModal()}
                className="bg-[#0A8F6A] hover:bg-[#087a5a] text-white py-3.5 px-8 rounded-full font-bold text-sm shadow-md transition-all cursor-pointer"
                id="hero-whatsapp-order-btn"
              >
                Order on WhatsApp
              </button>
              
              <a
                href="tel:9504172110"
                className="bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 py-3.5 px-8 rounded-full font-bold text-sm shadow-sm transition-all text-center"
                id="hero-call-now-btn"
              >
                Call Pharmacist
              </a>

              <a
                href="https://maps.google.com/?q=Ashok+Medical+Hall+Belaganj+Gaya+Bihar+804403"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 py-3.5 px-8 rounded-full font-bold text-sm border border-slate-200 dark:border-slate-800 transition-all text-center"
                id="hero-directions-btn"
              >
                Get Directions
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Short About Preview */}
      <section className="py-20 bg-white dark:bg-gray-950" id="about-preview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-widest block font-sans">
                Store Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-slate-900 dark:text-white leading-tight">
                Serving Belaganj and NH-83 Communities for Over Two Decades
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                Ashok Medical Hall is the region's premier pharmaceutical care store, situated keyly near the famous Kali Mandir More in Belaganj. We pride ourselves on maintaining an extensive inventory of hard-to-find life-saving medications, chronic illness formulas, and daily hygiene commodities with absolute cold-chain integrity.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-50 dark:bg-green-950/40 rounded-full flex items-center justify-center text-[#0A8F6A] shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Registered Pharmacist</h4>
                    <p className="text-xs text-slate-500">100% lawful medication dispensing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-50 dark:bg-green-950/40 rounded-full flex items-center justify-center text-[#0A8F6A] shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Cold Chain Storage</h4>
                    <p className="text-xs text-slate-500">Keeps vaccines & insulins safe</p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 text-[#0A8F6A] hover:text-[#087a5a] font-bold text-base transition-colors"
                  id="view-about-more-link"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-2 bg-emerald-100 dark:bg-emerald-950/20 rounded-2xl blur-lg opacity-40"></div>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                alt="Pharmacist dispensing genuine tablets"
                className="relative rounded-xl w-full h-80 object-cover shadow-md border border-slate-200 dark:border-slate-800"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50" id="featured-services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#0A8F6A] bg-green-50 dark:bg-green-950/40 border border-green-100 dark:border-green-900/40 px-3 py-1 rounded-full uppercase tracking-widest block font-sans w-fit mx-auto">
              Expert Pharmacy
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-slate-900 dark:text-white mt-4">
              Our Core Pharmacy Offerings
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">
              Browse through our dedicated health categories, designed to bring affordable wellness directly to your family.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="featured-services-cards">
            {featuredServices.map((srv, index) => (
              <div 
                key={srv.title}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl hover:border-[#0A8F6A] hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-5 border border-slate-100 dark:border-slate-700">
                  <span className="text-[#0A8F6A]">{srv.icon}</span>
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2 leading-tight">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white font-semibold px-6 py-2.5 rounded-full text-xs transition-all"
              id="view-services-more-link"
            >
              <span>Explore All Health Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-slate-950" id="why-choose-us-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-2 bg-emerald-50 dark:bg-emerald-950/20 rounded-2xl blur-lg opacity-40"></div>
              <img
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
                alt="Packaged verified medical boxes"
                className="relative rounded-xl w-full h-96 object-cover shadow-md border border-slate-200 dark:border-slate-800"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <span className="text-xs font-bold text-[#0A8F6A] bg-green-50 dark:bg-green-950/40 border border-green-100 dark:border-green-900/40 px-3 py-1 rounded-full uppercase tracking-widest block font-sans w-fit">
                Pharmacy USP
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-slate-900 dark:text-white leading-tight">
                Why Ashok Medical Hall stands out
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                We believe healthcare is not a business; it is a vital public utility. We are dedicated to ensuring that every citizen has instant, transparent, and fair access to premium healthcare stocks.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-[#0A8F6A] shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Belaganj Express Home Delivery</h4>
                    <p className="text-sm text-slate-500 mt-0.5">Quick shipping directly to PG Road and neighbouring addresses.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-[#0A8F6A] shrink-0">
                    <ThumbsUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Direct Wholesale Sourcing</h4>
                    <p className="text-sm text-slate-500 mt-0.5">No middlemen means competitive prices and strictly genuine brands.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-[#0A8F6A] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Continuous 8 AM - 10 PM Service</h4>
                    <p className="text-sm text-slate-500 mt-0.5">Open every single day of the week, including Sundays and public holidays.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50" id="featured-products-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-[#0A8F6A] bg-green-50 dark:bg-green-950/40 border border-green-100 dark:border-green-900/40 px-3 py-1 rounded-full uppercase tracking-widest block font-sans w-fit">
                Store Highlights
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-slate-900 dark:text-white mt-4">
                Popular Healthcare Essentials
              </h2>
            </div>
            <Link
              to="/services"
              className="text-[#0A8F6A] hover:text-[#087a5a] font-bold text-sm flex items-center gap-1.5 mt-2 sm:mt-0"
            >
              <span>Search All Inventory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="home-featured-products-grid">
            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=300&q=80"
                alt="Multivitamins and Health Supplements"
                className="w-full h-40 object-cover rounded-lg mb-4 bg-slate-50"
                referrerPolicy="no-referrer"
              />
              <span className="text-[10px] uppercase font-sans font-bold text-[#0A8F6A] bg-green-50 dark:bg-green-950/50 px-2 py-0.5 rounded border border-green-100 dark:border-green-900/50">
                Supplements
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white mt-2 text-base">Zinc & Vitamin C Capsules</h3>
              <p className="text-xs text-slate-500 mt-1">Strengthen immunity during seasonal change.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=300&q=80"
                alt="Baby Skincare and Formula Lotions"
                className="w-full h-40 object-cover rounded-lg mb-4 bg-slate-50"
                referrerPolicy="no-referrer"
              />
              <span className="text-[10px] uppercase font-sans font-bold text-[#0A8F6A] bg-green-50 dark:bg-green-950/50 px-2 py-0.5 rounded border border-green-100 dark:border-green-900/50">
                Baby Care
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white mt-2 text-base">Himalaya Baby Care Kit</h3>
              <p className="text-xs text-slate-500 mt-1">Hypoallergenic skincare powders and shampoos.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=300&q=80"
                alt="Medical Monitoring Equipment"
                className="w-full h-40 object-cover rounded-lg mb-4 bg-slate-50"
                referrerPolicy="no-referrer"
              />
              <span className="text-[10px] uppercase font-sans font-bold text-[#0A8F6A] bg-green-50 dark:bg-green-950/50 px-2 py-0.5 rounded border border-green-100 dark:border-green-900/50">
                Devices
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white mt-2 text-base">Omron Digital BP Monitor</h3>
              <p className="text-xs text-slate-500 mt-1">Highly accurate, easy household monitoring.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=300&q=80"
                alt="OTC Cold & Fever Relievers"
                className="w-full h-40 object-cover rounded-lg mb-4 bg-slate-50"
                referrerPolicy="no-referrer"
              />
              <span className="text-[10px] uppercase font-sans font-bold text-[#0A8F6A] bg-green-50 dark:bg-green-950/50 px-2 py-0.5 rounded border border-green-100 dark:border-green-900/50">
                OTC Medicines
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white mt-2 text-base">Calpol 650mg Paracetamol</h3>
              <p className="text-xs text-slate-500 mt-1">Trusted fever reducer & pain reliever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Preview */}
      <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900" id="customer-reviews-preview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#0A8F6A] bg-green-50 dark:bg-green-950/40 border border-green-100 dark:border-green-900/40 px-3 py-1 rounded-full uppercase tracking-widest block font-sans w-fit mx-auto">
              Patient Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-slate-900 dark:text-white mt-4">
              Verified Reviews from Google Business
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="reviews-preview-cards">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
              <div className="flex items-center gap-1 text-amber-500 mb-3">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                "Very trustworthy medicine shop in Belaganj. They have almost all prescription medicines. The owner behaves very politely. WhatsApp order was very helpful for getting delivery for my elder parents."
              </p>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-4">- Ranjan Kumar, Belaganj Resident</h4>
              <span className="text-[10px] text-slate-400 uppercase font-sans block mt-1">Local Guide • Gaya</span>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
              <div className="flex items-center gap-1 text-amber-500 mb-3">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                "I was traveling on PG road near Kali Mandir More and urgently needed baby food formula. They immediately had it in stock. Excellent and very fast service!"
              </p>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-4">- Priya Sharma, Traveler</h4>
              <span className="text-[10px] text-slate-400 uppercase font-sans block mt-1">Google Maps Review</span>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
              <div className="flex items-center gap-1 text-amber-500 mb-3">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                "Highly recommended. Authentic medicine stock, real billing, and proper storage of cold injection items. They are the best medical shop in Gaya Bihar district."
              </p>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-4">- Dr. Alok Prasad, General Physician</h4>
              <span className="text-[10px] text-slate-400 uppercase font-sans block mt-1">Verified Medical practitioner</span>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-1.5 text-[#0A8F6A] hover:text-[#087a5a] font-bold text-sm"
              id="view-reviews-more-link"
            >
              <span>View All 50+ Google Reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50" id="faq-preview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            <div>
              <span className="text-xs font-bold text-[#0A8F6A] bg-green-50 dark:bg-green-950/40 border border-green-100 dark:border-green-900/40 px-3 py-1 rounded-full uppercase tracking-widest block font-sans w-fit">
                Common Doubts
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-slate-900 dark:text-white mt-4 leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mt-3 text-sm leading-relaxed">
                Have basic doubts regarding pharmacy licenses, drug billing, or home delivery slots? Read our standard guidelines.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-semibold px-5 py-2 rounded-full text-xs mt-6 transition-colors shadow-sm"
                id="view-faq-more-link"
              >
                <span>Ask A Custom Question</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="lg:col-span-2 space-y-4" id="home-faq-accordion-preview">
              {faqs.map((f, i) => (
                <div key={i} className="bg-white dark:bg-slate-950 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h4 className="font-bold text-slate-900 dark:text-white text-base flex items-start gap-2.5">
                    <HelpCircle className="w-5 h-5 text-[#0A8F6A] shrink-0 mt-0.5" />
                    <span>{f.q}</span>
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2.5 pl-7 leading-relaxed">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Latest Health Tips Preview */}
      <section className="py-20 bg-white dark:bg-slate-950" id="latest-health-tips-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#0A8F6A] bg-green-50 dark:bg-green-950/40 border border-green-100 dark:border-green-900/40 px-3 py-1 rounded-full uppercase tracking-widest block font-sans w-fit mx-auto">
              Expert Guidance
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-slate-900 dark:text-white mt-4">
              Latest Health & Wellness Tips
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="health-tips-preview-grid">
            {healthTips.map((tip, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
                    <span className="bg-green-50 dark:bg-green-950/40 text-[#0A8F6A] px-2.5 py-0.5 rounded font-bold border border-green-100 dark:border-green-900/40">
                      {tip.tag}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-slate-400">
                      <Calendar className="w-3.5 h-3.5" /> {tip.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white leading-tight">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
                <button 
                  onClick={() => openOrderModal(`Query about ${tip.tag}`)}
                  className="text-xs text-[#0A8F6A] hover:underline font-bold flex items-center gap-1 mt-5 self-start cursor-pointer"
                >
                  <span>Inquire with pharmacist about this</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action (CTA) */}
      <section className="py-12 bg-slate-900 text-white rounded-2xl mx-4 sm:mx-8 md:mx-12 my-10 shadow-md overflow-hidden relative border border-slate-800" id="cta-action-banner">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <p className="text-xs uppercase tracking-widest text-[#0A8F6A] font-bold mb-2">Emergency Assistance</p>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold mb-4 leading-tight">
            +91 95041 72110
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Need urgent healthcare products or checking on a life-saving medicine? Call our registered Belaganj pharmacist directly for instant verification.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => openOrderModal()}
              className="bg-[#0A8F6A] hover:bg-[#087a5a] text-white py-2.5 px-6 rounded-full font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              Order on WhatsApp
            </button>
            <a
              href="tel:9504172110"
              className="bg-white hover:bg-slate-100 text-slate-900 py-2.5 px-6 rounded-full font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#0A8F6A]" />
              <span>Call Pharmacist Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white dark:bg-slate-950" id="newsletter-subscription-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 rounded-xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 text-center">
          <Mail className="w-10 h-10 text-[#0A8F6A] mx-auto mb-4" />
          <h3 className="text-2xl font-sans font-bold text-slate-900 dark:text-white">Subscribe to Health Updates</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-md mx-auto">
            Get seasonal health tips, medicine stock arrival updates, and critical medical advice compiled by professional pharmacists.
          </p>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing to Ashok Medical Hall newsletter!');
            }}
            className="mt-6 max-w-md mx-auto flex flex-col sm:flex-row gap-3"
            id="newsletter-form"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2.5 bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-full focus:ring-2 focus:ring-[#0A8F6A]/50 focus:border-[#0A8F6A] outline-none text-sm text-slate-900 dark:text-white"
            />
            <button
              type="submit"
              className="bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </form>
          <span className="text-[10px] text-slate-400 dark:text-slate-500 block mt-3 font-medium">
            We value your privacy. No spam. Unsubscribe at any time.
          </span>
        </div>
      </section>

    </div>
  );
}
