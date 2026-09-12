import React from 'react';
import { Play, Film, CheckCircle2 } from 'lucide-react';
import { videoProjects } from '../data/portfolioData';
import ScrollCard from './ScrollCard';

export default function VideoSection({ onOpenVideoModal }) {
  return (
    <section id="video" className="py-14 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 sm:pb-5 border-b border-black/8 max-w-[960px] mx-auto">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 font-mono-tag text-xs font-bold uppercase tracking-widest mb-1.5 sm:mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
            <span>Curated Portfolio &bull; 02</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight">
            Video Editing
          </h2>
        </div>
        <p className="max-w-md text-neutral-600 text-xs sm:text-[13px] leading-relaxed mt-2 md:mt-0">
          Cinematic pacing, sound sync, color grading, and dynamic sequence cutting built using Adobe Premiere Pro for maximum audience engagement.
        </p>
      </div>

      {/* Compact Video Card Presentation (Max 960px) */}
      <div className="max-w-[960px] mx-auto">
        {videoProjects.map((project) => (
          <ScrollCard
            key={project.id}
            direction="left"
            distance={110}
            triggerStart="top 98%"
            triggerEnd="top 32%"
            className="w-full"
          >
            <div className="bg-white rounded-[20px] p-4 sm:p-6 border border-black/6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.07)] transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center">
                
                {/* 16:9 Video Container - Compact Controlled Height */}
                <div className="lg:col-span-7 relative group rounded-[15px] sm:rounded-[17px] overflow-hidden bg-neutral-950 aspect-video max-h-[260px] sm:max-h-[290px] shadow-xs flex items-center justify-center">
                  <video
                    src={project.videoSrc}
                    preload="metadata"
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* Glass Play Overlay */}
                  <div
                    onClick={() => onOpenVideoModal(project)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors cursor-pointer backdrop-blur-[2px]"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 text-[#111111] flex items-center justify-center shadow-lg transform group-hover:scale-110 active:scale-95 transition-transform duration-300">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 fill-indigo-600 ml-0.5" />
                    </div>
                  </div>

                  {/* Corner Software Badge */}
                  <div className="absolute top-2.5 left-2.5 pointer-events-none">
                    <span className="bg-black/75 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-mono-tag uppercase px-2.5 py-0.5 rounded-full border border-white/10 flex items-center gap-1.5">
                      <Film className="w-3 h-3 text-indigo-400" />
                      Adobe Premiere Pro
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 right-2.5 pointer-events-none">
                    <span className="bg-black/75 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-mono-tag px-2 py-0.5 rounded-md">
                      Play Video &nearr;
                    </span>
                  </div>
                </div>

                {/* Video Info Details */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] sm:text-[11px] font-mono-tag font-semibold mb-2">
                      <span>Project {project.projectNumber}</span>
                      <span>&bull;</span>
                      <span>{project.category}</span>
                    </div>

                    <h3 className="text-base sm:text-xl font-bold text-[#111111] tracking-tight mb-2">
                      {project.title}
                    </h3>

                    <p className="text-neutral-600 text-xs sm:text-[13px] leading-relaxed mb-3 sm:mb-4">
                      {project.description}
                    </p>

                    {/* Skill points strictly from resume */}
                    <div className="space-y-1.5 mb-4 sm:mb-5">
                      <div className="flex items-start gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                        <span>Edited and produced short video content using Premiere Pro</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                        <span>Seamless scene transitions, rhythm matching, and audio sync</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                        <span>High-definition rendering and color consistency</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenVideoModal(project)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-neutral-800 active:bg-neutral-900 text-white text-xs sm:text-[13px] font-semibold px-4.5 py-2.5 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 text-indigo-400 fill-indigo-400" />
                    <span>Watch Full Showcase Video</span>
                  </button>
                </div>

              </div>
            </div>
          </ScrollCard>
        ))}
      </div>
    </section>
  );
}
