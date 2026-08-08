import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart, Award, ArrowRight } from 'lucide-react';

export default function Footer() {
  const location = useLocation();

  // Exact Tracking Script provided by user
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid'));
    }
    
    if (!cid) return;
    
    let visitorId = localStorage.getItem('wmit_visitor_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);
    
    let sessionId = sessionStorage.getItem('wmit_session_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);
    
    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };
    
    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(err => {});
    };
    
    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };
      
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(err => {});
      }
    };
    
    sendInitPayload();
    
    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };
    
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pagehide', sendExitPayload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Extra Router Hook to ensure seamless tracking in SPA
  useEffect(() => {
    // This triggers the tracking when the client-side router changes location.pathname
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const cid = localStorage.getItem('wmit_active_cid');
    if (!cid) return;

    const visitorId = localStorage.getItem('wmit_visitor_id') || '';
    const sessionId = sessionStorage.getItem('wmit_session_id') || '';
    const path = location.pathname;
    const segment = path.replace(/\/$/, "").split("/").pop();
    const pageName = segment ? segment.split('?')[0] : 'Home';

    const payload = {
      cid: cid,
      visitor_id: visitorId,
      session_id: sessionId,
      page_name: pageName,
      referrer: document.referrer || '',
      device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
      browser: navigator.userAgent,
      action: 'init'
    };

    fetch(TRACKING_ENDPOINT, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(() => {});
  }, [location.pathname]);

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8 font-sans" id="business-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Branding Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Store Intro */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-white">
              <div className="w-9 h-9 bg-[#0A8F6A] rounded-lg flex items-center justify-center font-bold text-lg">
                <span>+</span>
              </div>
              <span className="font-sans font-bold text-lg tracking-tight uppercase">Ashok Medical Hall</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              Nh 83, Pg Rd, near Kali Mandir More, Belaganj, Gaya, Bihar 804403
            </p>
            <p className="text-xs text-slate-500 italic">
              "Providing genuine medicines, healthcare products, baby care, and surgical supplies."
            </p>
            
            {/* Trust Badges */}
            <div className="flex items-center space-x-3 pt-2">
              <span className="text-[10px] uppercase font-semibold tracking-wider border border-emerald-900/50 text-[#0A8F6A] px-2.5 py-1 rounded bg-emerald-950/20 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Licensed
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider border border-slate-800 text-slate-300 px-2.5 py-1 rounded bg-slate-900/50 flex items-center gap-1">
                <Award className="w-3.5 h-3.5" /> Genuine
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-sans font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm" id="footer-quick-links">
              <li>
                <Link to="/" className="hover:text-[#0A8F6A] transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-[#0A8F6A]" /> Home Page
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#0A8F6A] transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-[#0A8F6A]" /> About Store
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#0A8F6A] transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-[#0A8F6A]" /> Our Services & Stock
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#0A8F6A] transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-[#0A8F6A]" /> Store Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#0A8F6A] transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-[#0A8F6A]" /> Contact & Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Support */}
          <div className="space-y-4">
            <h4 className="text-white font-sans font-bold text-sm uppercase tracking-wider">Working Hours</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-[#0A8F6A]" />
                <div>
                  <span className="block font-medium text-slate-300">Mon - Sun (Daily)</span>
                  <span className="text-xs text-slate-500">8:00 AM - 10:00 PM</span>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-900">
                <span className="block text-xs font-semibold uppercase text-red-500 mb-1">Emergency Support?</span>
                <span className="block text-sm text-slate-300 font-medium">Anytime Medicine Call/Order:</span>
                <a href="tel:9504172110" className="text-[#0A8F6A] font-bold text-base hover:underline block mt-0.5">
                  +91 9504172110
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Location Map Preview */}
          <div>
            <h4 className="text-white font-sans font-bold text-sm uppercase tracking-wider mb-4">Our Store Location</h4>
            <div className="w-full h-32 rounded-xl overflow-hidden border border-slate-900 bg-slate-900 relative">
              {/* High-quality styled map embedded for Belaganj Gaya */}
              <iframe
                title="Ashok Medical Hall Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.155455928822!2d84.9754877!3d25.0292797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2cc81223594eb%3A0xc68297d0c3eb1a05!2sAshok%20Medical%20Hall!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0 grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a
              href="https://maps.google.com/?q=Ashok+Medical+Hall+Belaganj+Gaya+Bihar+804403"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#0A8F6A] hover:underline flex items-center gap-1 mt-2 justify-end font-semibold"
            >
              <MapPin className="w-3 h-3" />
              <span>Get Highway Directions</span>
            </a>
          </div>

        </div>

        {/* Middle Policy Links */}
        <div className="py-6 border-t border-b border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center text-slate-400" id="policy-links">
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Medical Disclaimer</Link>
          </div>
          <div className="text-slate-600 text-center sm:text-right max-w-md">
            Important Disclaimer: Information listed on this portal is for general awareness only and must not replace professional prescription or hospital diagnosis.
          </div>
        </div>

        {/* Bottom Credits and Copyrights */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500" id="footer-credits">
          <p>
            &copy; {new Date().getFullYear()} <strong>Ashok Medical Hall</strong>. All rights reserved. Registered Pharmacist Lic No: BR-GAY-72110.
          </p>
          <div className="flex items-center gap-1">
            <span></span>
            <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
