import React, { useEffect, useRef } from 'react';
import { X, Film, Sparkles, CheckCircle2 } from 'lucide-react';

export default function VideoModal({ isOpen, project, onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    // Auto-play when opened
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md transition-all duration-300 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#111111] text-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-3.5 py-3 sm:px-6 sm:py-4 border-b border-white/10 bg-neutral-900/80">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/30 text-indigo-400 flex items-center justify-center shrink-0">
              <Film className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-xs sm:text-base text-white truncate max-w-[200px] sm:max-w-md">
                {project.title}
              </h3>
              <p className="text-[10px] sm:text-[11px] font-mono-tag text-neutral-400 truncate">
                {project.category} &bull; {project.tool}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-neutral-300 hover:text-white transition-colors cursor-pointer shrink-0"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Box */}
        <div className="relative bg-black aspect-video flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            src={project.videoSrc}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          />
        </div>

        {/* Video Footer Metadata */}
        <div className="p-4 sm:p-6 bg-neutral-900/95 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 border-t border-white/10">
          <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
            {project.description}
          </p>

          <span className="shrink-0 text-[10px] sm:text-[11px] font-mono-tag text-neutral-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
            Native HTML5 Player &bull; No Redirects
          </span>
        </div>
      </div>
    </div>
  );
}
