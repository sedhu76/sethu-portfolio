import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Graphics', href: '#graphics' },
    { label: 'Video', href: '#video' },
    { label: 'Motion', href: '#motion' },
    { label: '3D Modeling', href: '#threed' },
    { label: 'About & Skills', href: '#about' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      const navClearance = 90; // comfortable breathing room below sticky header
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navClearance;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'py-2.5 sm:py-3 glass-nav shadow-[0_4px_24px_rgba(0,0,0,0.04)]'
            : 'py-3 sm:py-3.5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#111111] text-white flex items-center justify-center font-bold text-base sm:text-lg tracking-tight group-hover:scale-105 transition-transform duration-200 shadow-sm">
              C
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-lg sm:text-xl text-[#111111] group-hover:text-blue-700 transition-colors leading-tight">
                {personalInfo.brandName}
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase font-mono-tag tracking-wider text-neutral-500 font-semibold">
                Sethu Kumaran D
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-black/5 shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-tight transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#111111] font-semibold bg-neutral-100 shadow-xs'
                      : 'text-neutral-600 hover:text-[#111111] hover:bg-neutral-50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 bg-[#111111] hover:bg-neutral-800 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button - 44px tap target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-white/90 border border-black/8 text-[#111111] hover:bg-white shadow-xs transition-colors"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-xs lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-[#F7F7F5] z-50 lg:hidden shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out border-l border-black/8 overflow-y-auto ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-5 border-b border-black/8 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#111111] text-white flex items-center justify-center font-bold text-sm">
                C
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base text-[#111111] leading-tight">{personalInfo.brandName}</span>
                <span className="text-[10px] uppercase font-mono-tag text-neutral-500 font-semibold">Creative Designer</span>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl text-neutral-600 hover:text-black hover:bg-black/5 transition-colors"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-white text-blue-700 font-bold shadow-xs'
                      : 'text-neutral-700 hover:bg-white/60 hover:text-black active:bg-white/80'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-black/8 flex flex-col gap-3 mt-4">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="w-full flex items-center justify-center gap-2 bg-[#111111] active:bg-neutral-800 text-white text-xs font-bold py-3.5 rounded-xl shadow-xs"
          >
            <span>Let's Work Together</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <p className="text-center text-[11px] text-neutral-500 font-mono-tag break-all">
            {personalInfo.email}
          </p>
        </div>
      </div>
    </>
  );
}
