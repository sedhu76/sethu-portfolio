import React from 'react';
import { Box, Maximize2, ArrowUpRight } from 'lucide-react';
import { threeDProjects } from '../data/portfolioData';
import ScrollCard from './ScrollCard';

export default function ThreeDSection({ onOpenLightbox }) {
  return (
    <section id="threed" className="py-14 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 sm:pb-5 border-b border-black/8 max-w-[1040px] mx-auto">
        <div>
          <div className="flex items-center gap-2 text-amber-600 font-mono-tag text-xs font-bold uppercase tracking-widest mb-1.5 sm:mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
            <span>Curated Portfolio &bull; 04</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight">
            3D Modeling & Environment
          </h2>
        </div>
        <p className="max-w-md text-neutral-600 text-xs sm:text-[13px] leading-relaxed mt-2 md:mt-0">
          Spatial environments, product visualization, and studio lighting setups created using Autodesk Maya for hyper-realistic and stylized presentations.
        </p>
      </div>

      {/* Compact 2-Column 3D Showcase Grid (Max 1040px) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 max-w-[1040px] mx-auto items-stretch">
        {threeDProjects.map((project, index) => {
          // Alternating entrance: 3D-01 from Left, 3D-02 from Right
          const direction = index % 2 === 0 ? 'left' : 'right';

          return (
            <ScrollCard
              key={project.id}
              direction={direction}
              distance={130}
              triggerStart={index % 2 === 0 ? 'top 98%' : 'top 96%'}
              triggerEnd="top 32%"
              className="group cursor-pointer flex flex-col h-full"
              onClick={() => onOpenLightbox(project, index, threeDProjects)}
            >
              <div className="bg-white rounded-[20px] p-3.5 sm:p-5 border border-black/6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between h-full active:scale-[0.99]">
                <div>
                  {/* Controlled 4:3 Image Preview Box - Compact Controlled Height */}
                  <div className="relative rounded-[15px] sm:rounded-[17px] overflow-hidden bg-[#F4F4F2] aspect-[4/3] max-h-[220px] sm:max-h-[250px] mb-3.5 sm:mb-4 flex items-center justify-center border border-black/3 group-hover:border-black/10 transition-colors">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-contain p-2 sm:p-2.5 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />

                    {/* Top Badge */}
                    <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5">
                      <span className="bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono-tag font-bold text-neutral-900 border border-black/5 shadow-xs">
                        3D-{project.projectNumber}
                      </span>
                    </div>

                    {/* Software Badge */}
                    <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5">
                      <span className="bg-amber-500/10 backdrop-blur-md text-amber-800 text-[9px] sm:text-[10px] font-mono-tag font-semibold px-2.5 py-0.5 rounded-full border border-amber-500/20 flex items-center gap-1">
                        <Box className="w-3 h-3 text-amber-600" />
                        {project.software}
                      </span>
                    </div>

                    {/* Desktop Hover Maximize Overlay */}
                    <div className="hidden sm:flex absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center backdrop-blur-[2px]">
                      <div className="bg-white/95 text-neutral-900 px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg transform translate-y-1.5 group-hover:translate-y-0 transition-transform">
                        <Maximize2 className="w-3.5 h-3.5 text-amber-600" />
                        <span>Inspect Render &nearr;</span>
                      </div>
                    </div>

                    {/* Mobile Tap Expand Indicator */}
                    <div className="sm:hidden absolute bottom-2 right-2 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-md border border-black/10 shadow-xs flex items-center gap-1 text-[10px] font-mono-tag font-bold text-neutral-800">
                      <Maximize2 className="w-3 h-3 text-amber-600" />
                      <span>Tap to inspect</span>
                    </div>
                  </div>

                  {/* Card Title & Info */}
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] sm:text-[11px] font-mono-tag font-semibold uppercase tracking-wider text-amber-700">
                      {project.category}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono-tag text-neutral-400">
                      Autodesk Maya
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#111111] group-hover:text-amber-700 transition-colors leading-snug mb-1.5">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed mb-3 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Meta */}
                <div className="pt-3 border-t border-black/5 flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] text-neutral-500 flex items-center gap-1.5 font-mono-tag">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>Render Ready &bull; High-Res</span>
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-900 group-hover:text-amber-700 transition-colors">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </ScrollCard>
          );
        })}
      </div>
    </section>
  );
}
