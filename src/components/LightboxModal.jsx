import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Maximize2, Tag, Info } from 'lucide-react';

export default function LightboxModal({
  isOpen,
  project,
  currentIndex,
  totalProjects,
  onClose,
  onPrev,
  onNext
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md transition-all duration-300 animate-in fade-in"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-6xl max-h-[96vh] sm:max-h-[92vh] bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-black/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-20 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full bg-white/95 hover:bg-white text-neutral-800 shadow-md border border-black/10 transition-transform active:scale-95 sm:hover:scale-110 cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Previous Navigation Button (Desktop) */}
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 hover:bg-white text-neutral-900 shadow-lg border border-black/10 transition-transform hover:scale-110 cursor-pointer hidden sm:flex items-center justify-center"
          aria-label="Previous Project"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Navigation Button (Desktop) */}
        <button
          onClick={onNext}
          className="absolute right-4 lg:right-[380px] top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 hover:bg-white text-neutral-900 shadow-lg border border-black/10 transition-transform hover:scale-110 cursor-pointer hidden sm:flex items-center justify-center"
          aria-label="Next Project"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Left Side: Large Uncropped Image View */}
        <div className="flex-1 bg-neutral-950/5 flex items-center justify-center p-2 sm:p-8 overflow-auto min-h-[220px] max-h-[48vh] lg:max-h-none lg:min-h-[580px]">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-[44vh] lg:max-h-[80vh] w-auto max-w-full object-contain rounded-xl shadow-lg transition-all"
          />
        </div>

        {/* Right Side: Project Metadata & Controls */}
        <div className="w-full lg:w-96 p-4 sm:p-8 flex flex-col justify-between bg-white border-t lg:border-t-0 lg:border-l border-black/8 overflow-y-auto max-h-[48vh] lg:max-h-[92vh]">
          <div>
            {/* Counter & Category */}
            <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
              <span className="text-[11px] sm:text-xs font-mono-tag font-bold text-blue-700 uppercase bg-blue-50 px-2.5 sm:px-3 py-1 rounded-full border border-blue-100">
                {project.category}
              </span>
              <span className="text-xs font-mono-tag text-neutral-500 font-semibold">
                {String(currentIndex + 1).padStart(2, '0')} / {String(totalProjects).padStart(2, '0')}
              </span>
            </div>

            <h3 className="text-xl sm:text-3xl font-extrabold text-[#111111] leading-tight mb-1.5 sm:mb-2">
              {project.title}
            </h3>

            <p className="text-[11px] sm:text-xs font-mono-tag text-neutral-500 mb-4 sm:mb-6 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-neutral-400" />
              {project.subtitle || project.software}
            </p>

            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#F7F7F5] border border-black/5">
                <span className="text-[10px] sm:text-[11px] font-mono-tag uppercase tracking-wider text-neutral-500 font-semibold block mb-1">
                  Project Description
                </span>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs p-2.5 sm:p-3 rounded-xl bg-neutral-50 border border-black/5 font-mono-tag">
                <span className="text-neutral-500 text-[11px] sm:text-xs">Production Tool:</span>
                <span className="font-bold text-neutral-900 text-[11px] sm:text-xs">
                  {project.tool || project.software}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-4 sm:pt-6 border-t border-black/8 space-y-2.5 sm:space-y-3">
            {/* Mobile Next / Prev Buttons */}
            <div className="flex sm:hidden items-center justify-between gap-2.5">
              <button
                onClick={onPrev}
                className="flex-1 py-3 rounded-xl border border-neutral-300 text-xs font-bold flex items-center justify-center gap-1.5 text-neutral-800 active:bg-neutral-100 cursor-pointer min-h-[44px]"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              <button
                onClick={onNext}
                className="flex-1 py-3 rounded-xl border border-neutral-300 text-xs font-bold flex items-center justify-center gap-1.5 text-neutral-800 active:bg-neutral-100 cursor-pointer min-h-[44px]"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <a
              href={project.image}
              download={`${project.id}.png`}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 sm:py-3 px-4 rounded-xl bg-[#111111] hover:bg-neutral-800 active:bg-neutral-900 text-white text-xs font-bold shadow-xs transition-colors min-h-[44px]"
            >
              <Download className="w-4 h-4" />
              <span>Download High-Res Graphic</span>
            </a>

            <p className="text-[10px] sm:text-[11px] text-center text-neutral-400 font-mono-tag">
              Tap outside to dismiss &bull; Swipe or tap buttons to navigate
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
