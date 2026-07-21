import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Menu, X, Sun, Moon, ShoppingBag, PlusCircle } from 'lucide-react';

export default function Navbar() {
  const { darkMode, toggleDarkMode, openOrderModal } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors shadow-sm" id="main-navigation-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <NavLink to="/" className="flex items-center space-x-3 group" id="navbar-brand-logo">
            <div className="w-10 h-10 bg-[#0A8F6A] rounded-lg flex items-center justify-center text-white font-bold text-xl hover:scale-105 transition-transform shrink-0">
              <PlusCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-sans font-bold text-base tracking-tight text-slate-900 dark:text-white block leading-none uppercase">
                Ashok Medical Hall
              </span>
              <span className="text-[9px] font-sans tracking-widest text-slate-500 dark:text-slate-400 block uppercase font-bold mt-1">
                Belaganj, Gaya
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium" aria-label="Desktop navigation" id="desktop-navbar-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-sans font-semibold text-sm transition-all relative py-2 ${
                    isActive
                      ? 'text-[#0A8F6A]'
                      : 'text-slate-600 hover:text-[#0A8F6A] dark:text-slate-300 dark:hover:text-[#0A8F6A]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0A8F6A] rounded-full animate-fade-in" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Controls (Dark Mode, Order CTA, Mobile Toggle) */}
          <div className="flex items-center space-x-4">
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
              aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              id="theme-toggle-btn"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-blue-700" />}
            </button>

            {/* Quick WhatsApp Order CTA */}
            <button
              onClick={() => openOrderModal()}
              className="hidden sm:flex items-center space-x-2 bg-[#0A8F6A] hover:bg-[#087a5a] active:scale-95 text-white px-5 py-2 rounded-full font-semibold text-sm shadow-md transition-all cursor-pointer"
              id="navbar-order-cta-btn"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Menu"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 animate-fade-in" id="mobile-navbar-nav">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl font-semibold text-base transition-colors ${
                    isActive
                      ? 'bg-green-50 dark:bg-green-950/30 text-[#0A8F6A]'
                      : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-4 px-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openOrderModal();
                }}
                className="w-full bg-[#0A8F6A] hover:bg-[#087a5a] text-white py-3 rounded-full font-bold text-base flex items-center justify-center space-x-2 shadow-md"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Order on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
