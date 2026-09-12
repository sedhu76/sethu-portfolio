import React from 'react';
import { SOFTWARE_LIST } from './SoftwareIcons';
import { Sparkles } from 'lucide-react';

export default function SoftwareMarquee() {
  // Duplicate array to enable seamless infinite loop
  const marqueeItems = [...SOFTWARE_LIST, ...SOFTWARE_LIST, ...SOFTWARE_LIST];

  return (
    <section className="relative w-full py-10 sm:py-14 overflow-hidden border-y border-black/6 bg-white/70 backdrop-blur-sm">
      {/* Background ambient accents */}
      <div className="absolute inset-0 bg-subtle-grid opacity-30 pointer-events-none" />
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-60 h-24 bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-60 h-24 bg-indigo-500/10 blur-3xl pointer-events-none" />

      {/* Header Pill */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-4 sm:mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping shrink-0" />
          <span className="text-[10px] sm:text-[11px] font-mono-tag uppercase tracking-wider sm:tracking-[0.2em] text-neutral-600 font-bold truncate">
            CREATIVE PRODUCTION PIPELINE &bull; CORE SUITE
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs font-mono-tag text-neutral-400">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>7 Industry-Standard Creative Tools</span>
        </div>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="relative w-full flex overflow-hidden mask-fade-edges touch-pan-x">
        <div className="flex shrink-0 items-center gap-3.5 sm:gap-6 animate-marquee hover:[animation-play-state:paused]">
          {marqueeItems.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <div
                key={`${item.id}-${idx}`}
                className={`group shrink-0 flex items-center gap-3 sm:gap-3.5 px-3.5 sm:px-5 py-2 sm:py-3 rounded-2xl bg-white border border-black/7 shadow-[0_4px_16px_rgba(0,0,0,0.03)] ${item.bgHover} hover:-translate-y-1 transition-all duration-300 cursor-pointer select-none`}
              >
                {/* Icon with subtle hover scale */}
                <div className="shrink-0 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300">
                  <Icon className="w-7 h-7 sm:w-9 sm:h-9 drop-shadow-xs" />
                </div>

                {/* Text Labels */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-extrabold text-[#111111] group-hover:text-blue-700 transition-colors">
                      {item.name}
                    </span>
                    <span className="text-[9px] font-mono-tag px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-600 border border-black/5 font-semibold">
                      {item.level}
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono-tag text-neutral-500">
                    {item.role}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
