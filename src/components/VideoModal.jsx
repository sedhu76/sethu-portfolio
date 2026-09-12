import React, { useEffect, useRef, useState } from 'react';
import { X, Film, Loader2, AlertCircle, RotateCcw } from 'lucide-react';

export default function VideoModal({ isOpen, project, onClose }) {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    setIsLoading(true);
    setHasError(false);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    // Explicitly load and attempt play
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback (user can click play via native controls)
      });
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, [isOpen, project, onClose]);

  if (!isOpen || !project) return null;

  const handleRetry = () => {
    setHasError(false);
    setIsLoading(true);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  };

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
          {isLoading && !hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10 bg-black/60 pointer-events-none">
              <Loader2 className="w-8 h-8 text-indigo-400 animate-spin" />
              <span className="text-xs text-neutral-400 font-mono-tag">Buffering video...</span>
            </div>
          )}

          {hasError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center z-10 bg-neutral-950">
              <AlertCircle className="w-10 h-10 text-red-400" />
              <p className="text-sm font-semibold text-neutral-200">Unable to load video stream</p>
              <p className="text-xs text-neutral-500 max-w-sm">
                Please check your internet connection or try refreshing the player.
              </p>
              <button
                onClick={handleRetry}
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Try Again</span>
              </button>
            </div>
          ) : (
            <video
              ref={videoRef}
              src={project.videoSrc}
              controls
              autoPlay
              playsInline
              onWaiting={() => setIsLoading(true)}
              onCanPlay={() => setIsLoading(false)}
              onPlaying={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setHasError(true);
              }}
              className="w-full h-full object-contain"
            />
          )}
        </div>

        {/* Video Footer Metadata */}
        <div className="p-4 sm:p-6 bg-neutral-900/95 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 border-t border-white/10">
          <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
            {project.description}
          </p>

          <span className="shrink-0 text-[10px] sm:text-[11px] font-mono-tag text-neutral-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
            Native HTML5 Player &bull; 1080p HD
          </span>
        </div>
      </div>
    </div>
  );
}
