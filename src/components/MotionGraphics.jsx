import React from 'react';
import { Play } from 'lucide-react';
import { motionProjects } from '../data/portfolioData';
import { AfterEffectsIcon } from './SoftwareIcons';
import ScrollCard from './ScrollCard';

export default function MotionGraphics({ onOpenVideoModal }) {
  return (
    <section id="motion" className="py-14 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 sm:pb-5 border-b border-black/8 max-w-[1040px] mx-auto">
        <div>
          <div className="flex items-center gap-2 text-violet-600 font-mono-tag text-xs font-bold uppercase tracking-widest mb-1.5 sm:mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
            <span>Curated Portfolio &bull; 03</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight">
            Motion Graphics
          </h2>
        </div>
        <p className="max-w-md text-neutral-600 text-xs sm:text-[13px] leading-relaxed mt-2 md:mt-0">
          Transforming static concepts into living, expressive digital animations with kinetic typography, After Effects visual effects, and fluid pacing.
        </p>
      </div>

      {/* Compact 2-Column Motion Grid (Max 1040px) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 max-w-[1040px] mx-auto items-stretch">
        {motionProjects.map((project, index) => {
          // Alternating entrance: Motion-01 from Left, Motion-02 from Right
          const direction = index % 2 === 0 ? 'left' : 'right';

          return (
            <ScrollCard
              key={project.id}
              direction={direction}
              distance={130}
              triggerStart={index % 2 === 0 ? 'top 98%' : 'top 96%'}
              triggerEnd="top 32%"
              className="flex flex-col h-full"
            >
              <div
                className={`group bg-white rounded-[20px] p-3.5 sm:p-5 border shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between h-full ${
                  project.featured ? 'border-violet-300 ring-2 ring-violet-500/15' : 'border-black/6'
                }`}
              >
                <div>
                  {/* 16:9 Video Thumbnail Box - Compact Controlled Height */}
                  <div
                    onClick={() => onOpenVideoModal(project)}
                    className="relative rounded-[15px] sm:rounded-[17px] overflow-hidden bg-neutral-950 aspect-video max-h-[210px] sm:max-h-[235px] mb-3.5 sm:mb-4 cursor-pointer group-hover:shadow-sm transition-all flex items-center justify-center"
                  >
                    <video
                      src={project.videoSrc}
                      preload="metadata"
                      muted
                      playsInline
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 flex items-center justify-center transition-colors">
                      <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 text-neutral-900 flex items-center justify-center shadow-lg group-hover:scale-110 active:scale-95 transition-transform">
                        <Play className="w-4 h-4 sm:w-5 sm:h-5 text-violet-600 fill-violet-600 ml-0.5" />
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 flex flex-wrap items-center gap-1.5 max-w-[85%]">
                      <span className="bg-black/75 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-mono-tag px-2.5 py-0.5 rounded-full border border-white/10">
                        Motion-{project.projectNumber}
                      </span>
                      {project.featured && (
                        <span className="bg-violet-600/90 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-mono-tag px-2 py-0.5 rounded-full font-bold shadow-xs">
                          UPDATED REEL
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-2 right-2 sm:bottom-2.5 sm:right-2.5 flex items-center gap-1.5 bg-black/75 backdrop-blur-md text-violet-300 text-[9px] sm:text-[10px] font-mono-tag px-2 py-0.5 rounded-md border border-white/10">
                      <AfterEffectsIcon className="w-3 h-3" />
                      <span>After Effects</span>
                    </div>
                  </div>

                  {/* Text Info */}
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] sm:text-[11px] font-mono-tag font-semibold text-violet-700 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono-tag text-neutral-400">
                      {project.duration}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#111111] group-hover:text-violet-700 transition-colors leading-snug mb-1.5">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed mb-3 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="pt-3 border-t border-black/5 flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-mono-tag text-neutral-500">
                    Tool: <strong className="text-neutral-800 font-semibold">{project.tool}</strong>
                  </span>

                  <button
                    onClick={() => onOpenVideoModal(project)}
                    className="text-xs font-semibold text-[#111111] group-hover:text-violet-600 active:text-violet-800 flex items-center gap-1 cursor-pointer py-0.5"
                  >
                    <span>Play Animation</span>
                    <Play className="w-3 h-3 fill-current" />
                  </button>
                </div>
              </div>
            </ScrollCard>
          );
        })}
      </div>
    </section>
  );
}
