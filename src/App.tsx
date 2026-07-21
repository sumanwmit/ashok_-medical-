import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingControls from './components/FloatingControls';
import WhatsAppOrderForm from './components/WhatsAppOrderForm';
import { Plus } from 'lucide-react';

// Lazy load all pages for optimal load-speed performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

// Premium pulsing loading fallback screen
function PageLoader() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white dark:bg-gray-950 transition-colors" id="page-loader-fallback">
      <div className="relative flex items-center justify-center">
        <div className="absolute w-16 h-16 bg-medical-teal/20 rounded-full animate-ping"></div>
        <div className="relative w-12 h-12 bg-gradient-to-tr from-medical-teal to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-medical-teal/20">
          <Plus className="w-7 h-7 text-white" />
        </div>
      </div>
      <span className="text-xs font-mono font-bold text-medical-teal uppercase tracking-widest mt-6 animate-pulse">
        Loading Health Panel...
      </span>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors duration-300">
          
          {/* Global Sticky Navigation Header */}
          <Navbar />

          {/* Primary Main Content View with lazy load boundary */}
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                {/* Fallback route redirection */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>

          {/* Global Multi-Column Footer (includes tracking scripts) */}
          <Footer />

          {/* Global Overlays & Floating CTAs */}
          <WhatsAppOrderForm />
          <FloatingControls />

        </div>
      </BrowserRouter>
    </AppProvider>
  );
}
