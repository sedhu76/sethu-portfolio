import React, { useState, useEffect } from 'react';
import { Maximize2, Tag, ArrowUpRight } from 'lucide-react';
import { graphicsProjects } from '../data/portfolioData';
import ScrollCard from './ScrollCard';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function GraphicsSection({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Product Advertising',
    'Beverage Campaign',
    'Movie Key Art',
    'Automotive Promo',
    'Editorial & Print',
    'Brand Identity'
  ];

  const filteredProjects = activeCategory === 'All'
    ? graphicsProjects
    : graphicsProjects.filter((p) => p.category === activeCategory);

  // Refresh ScrollTrigger calculations when the filter changes
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 120);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section id="graphics" className="py-14 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 sm:pb-5 border-b border-black/8 max-w-[1040px] mx-auto">
        <div>
          <div className="flex items-center gap-2 text-blue-600 font-mono-tag text-xs font-bold uppercase tracking-widest mb-1.5 sm:mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>Curated Portfolio &bull; 01</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight">
            Graphics Design
          </h2>
        </div>
        <p className="max-w-md text-neutral-600 text-xs sm:text-[13px] leading-relaxed mt-2 md:mt-0">
          Visual stories designed to communicate, connect and leave an impression. Crafted using professional digital techniques and typography hierarchy.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 sm:mb-9 scrollbar-none touch-pan-x -mx-4 px-4 sm:mx-0 sm:px-0 max-w-[1040px] mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#111111] text-white shadow-xs font-semibold'
                : 'bg-white hover:bg-neutral-100 text-neutral-600 border border-black/5 active:bg-neutral-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Compact 2-Column Grid (Max 1040px, controlled compact card sizing) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 max-w-[1040px] mx-auto items-start">
        {filteredProjects.map((project, index) => {
          // Alternating horizontal scroll entrance: Even from Left, Odd from Right
          const direction = index % 2 === 0 ? 'left' : 'right';
          const isLandscape = project.aspect === 'landscape';
          const aspectClass = isLandscape ? 'aspect-[16/10]' : 'aspect-[4/5]';
          // Compact image heights: 290px-320px max for portrait, 200px-220px for landscape
          const maxHClass = isLandscape ? 'max-h-[200px] sm:max-h-[220px]' : 'max-h-[290px] sm:max-h-[320px]';
          const neutralBg = project.id === 'graphic-3' ? 'bg-[#18181b]' : 'bg-[#F4F4F2]';

          return (
            <ScrollCard
              key={project.id}
              direction={direction}
              distance={130}
              triggerStart={index % 2 === 0 ? 'top 98%' : 'top 96%'}
              triggerEnd="top 32%"
              className="group cursor-pointer flex flex-col"
              onClick={() => onOpenLightbox(project, index, graphicsProjects)}
            >
              <div className="bg-white rounded-[20px] p-3.5 sm:p-5 border border-black/6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col h-full active:scale-[0.99]">
                
                {/* Controlled Compact Image Container (Contain for uncropped text) */}
                <div className={`relative w-full ${aspectClass} ${maxHClass} overflow-hidden rounded-[15px] sm:rounded-[17px] ${neutralBg} mb-3.5 sm:mb-4 flex items-center justify-center`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-contain p-2 sm:p-2.5 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Desktop Hover Overlay with Expand Button */}
                  <div className="hidden sm:flex absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center backdrop-blur-[2px]">
                    <div className="bg-white/95 text-[#111111] px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg transform translate-y-1.5 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Expand Project &nearr;</span>
                    </div>
                  </div>

                  {/* Mobile Tap Expand Badge Indicator */}
                  <div className="sm:hidden absolute bottom-2 right-2 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-md border border-black/10 shadow-xs flex items-center gap-1 text-[10px] font-mono-tag font-bold text-neutral-800">
                    <Maximize2 className="w-3 h-3 text-blue-600" />
                    <span>Tap to view</span>
                  </div>

                  {/* Project Tag Pill */}
                  <div className="absolute top-2 sm:top-2.5 left-2 sm:left-2.5">
                    <span className="bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono-tag font-bold text-neutral-800 shadow-xs border border-black/5">
                      Graphics-{project.projectNumber}
                    </span>
                  </div>
                </div>

                {/* Visually Connected Content Hierarchy */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category & Tool */}
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="inline-block text-[10px] sm:text-[11px] font-mono-tag uppercase tracking-wider text-blue-700 font-semibold">
                        {project.category}
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-mono-tag text-neutral-400">
                        {project.tool}
                      </span>
                    </div>

                    {/* Project Title - Compact and prominent */}
                    <h3 className="text-base sm:text-lg font-bold text-[#111111] group-hover:text-blue-700 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-1.5 text-xs sm:text-[13px] text-neutral-600 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Card Footer: Subtitle Tag & Expand CTA */}
                  <div className="mt-3.5 pt-3 border-t border-black/5 flex items-center justify-between text-xs text-neutral-600">
                    <span className="flex items-center gap-1.5 text-neutral-500 text-[10px] sm:text-[11px] font-mono-tag truncate max-w-[70%]">
                      <Tag className="w-3 h-3 text-neutral-400 shrink-0" />
                      <span className="truncate">{project.subtitle}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#111111] group-hover:text-blue-700 transition-colors shrink-0">
                      <span>Expand</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

              </div>
            </ScrollCard>
          );
        })}
      </div>
    </section>
  );
}
