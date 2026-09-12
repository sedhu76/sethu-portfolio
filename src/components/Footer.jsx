import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-8 max-w-7xl mx-auto border-t border-black/8 mt-8 sm:mt-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
        
        {/* Brand & Tagline */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#111111] text-white flex items-center justify-center font-bold text-sm shrink-0">
              C
            </div>
            <span className="font-extrabold text-lg text-[#111111] tracking-tight">
              {personalInfo.brandName}
            </span>
          </div>

          <span className="hidden sm:inline text-neutral-300">&bull;</span>

          <span className="text-xs text-neutral-600 font-mono-tag">
            Graphic Design &bull; UI/UX &bull; Motion Graphics &bull; 3D Modeling
          </span>
        </div>

        {/* Back to top & Copyright */}
        <div className="flex items-center gap-4 sm:gap-6">
          <p className="text-[11px] sm:text-xs text-neutral-400 font-mono-tag text-center sm:text-left">
            &copy; {new Date().getFullYear()} Sethu Kumaran D. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="min-w-[40px] min-h-[40px] rounded-full bg-white hover:bg-neutral-100 active:bg-neutral-200 text-neutral-700 border border-black/8 transition-colors flex items-center justify-center shadow-xs cursor-pointer shrink-0"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
