import React, { useState, useEffect } from 'react';
import {
  Eye,
  Download,
  Layers,
  PenTool,
  ArrowDown
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Subtle interactive parallax effect on desktop only
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth < 1024) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToWork = (e) => {
    e.preventDefault();
    document.querySelector('#graphics')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] lg:h-[100svh] flex flex-col justify-between pt-16 sm:pt-18 lg:pt-[72px] pb-2 sm:pb-3 overflow-hidden bg-white"
    >
      {/* 1. White Subtle Technical Grid Canvas Background (Matching First Reference) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.045) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.045) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* 2. Far-Left Technical Accent Guide (Matching First Reference) */}
      <div className="hidden lg:flex flex-col items-center gap-2.5 absolute top-28 left-4 sm:left-6 xl:left-8 z-10 select-none pointer-events-none">
        <span className="w-2 h-2 rounded-[2px] bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className="w-1 h-1 rounded-full bg-neutral-300/80" />
        ))}
      </div>

      {/* 3. Main Hero Composition (Typography Left, Large Portrait & Halo Right) */}
      <div className="relative z-10 max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full flex-1 min-h-0 flex flex-col lg:flex-row items-center justify-between my-auto">
        
        {/* ============================================================ */}
        {/* LEFT COLUMN: Typography, Introduction, CTAs & Statistics     */}
        {/* ============================================================ */}
        <div className="w-full lg:w-[46%] xl:w-[45%] flex flex-col justify-center text-left pt-4 sm:pt-6 lg:pt-0 z-20 shrink-0">
          
          {/* Label Pill */}
          <div className="inline-flex items-center gap-2 bg-white/90 border border-neutral-200/90 px-3.5 py-1.5 rounded-full shadow-xs mb-3.5 sm:mb-4 w-fit backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-mono-tag font-bold tracking-wider uppercase text-neutral-800">
              CREATIVE DESIGNER &bull; MULTIMEDIA ARTIST
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[66px] 2xl:text-[74px] font-black tracking-tight text-[#0F172A] leading-[1.02] mb-3.5 sm:mb-4">
            Turning Ideas <br />
            <span className="text-blue-600">Into Visual</span> <br />
            <span className="relative inline-block text-blue-600">
              Experiences.
              {/* Hand-drawn dynamic blue brush underline accent */}
              <svg
                className="absolute -bottom-1.5 sm:-bottom-2 xl:-bottom-2.5 left-0 w-full h-2.5 sm:h-3.5 xl:h-4 text-blue-600 pointer-events-none"
                viewBox="0 0 280 18"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 13.5C50 4.5 130 3.5 278 8.5C240 10 180 14.5 130 15.5C70 16.5 25 15.5 2 13.5Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </h1>

          {/* Subtext Description */}
          <p className="max-w-xl text-sm sm:text-base lg:text-[15px] xl:text-base text-neutral-600 leading-relaxed font-normal mb-5 sm:mb-6">
            I craft compelling visual narratives across{' '}
            <strong className="font-semibold text-neutral-900">Graphic Design</strong>,{' '}
            <strong className="font-semibold text-neutral-900">Motion Graphics</strong>,{' '}
            <strong className="font-semibold text-neutral-900">Video Editing</strong>, and{' '}
            <strong className="font-semibold text-neutral-900">3D Modeling</strong>.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 sm:mb-7">
            <a
              href="#graphics"
              onClick={scrollToWork}
              className="inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-neutral-800 active:bg-neutral-900 text-white font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group cursor-pointer"
            >
              <Eye className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>View My Work</span>
            </a>

            <a
              href={personalInfo.resumePdfUrl}
              download="SETHU_KUMARAN_D_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 active:bg-neutral-100 text-neutral-900 border border-neutral-300 font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <Download className="w-4 h-4 text-blue-600 transition-transform group-hover:translate-y-0.5" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Statistics Grid */}
          <div className="pt-4 border-t border-black/8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-xl">
            <div className="bg-white/60 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none border border-black/5 sm:border-none">
              <div className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-extrabold text-[#111111] font-mono-tag">
                6+
              </div>
              <div className="text-[10px] sm:text-[11px] xl:text-xs text-neutral-500 font-medium mt-0.5">
                Graphics Projects
              </div>
            </div>

            <div className="bg-white/60 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none border border-black/5 sm:border-none sm:border-l sm:border-black/8 sm:pl-4 xl:pl-6">
              <div className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-extrabold text-[#111111] font-mono-tag">
                2+
              </div>
              <div className="text-[10px] sm:text-[11px] xl:text-xs text-neutral-500 font-medium mt-0.5">
                Motion Projects
              </div>
            </div>

            <div className="bg-white/60 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none border border-black/5 sm:border-none sm:border-l sm:border-black/8 sm:pl-4 xl:pl-6">
              <div className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-extrabold text-[#111111] font-mono-tag">
                2+
              </div>
              <div className="text-[10px] sm:text-[11px] xl:text-xs text-neutral-500 font-medium mt-0.5">
                3D Models
              </div>
            </div>

            <div className="bg-white/60 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none border border-black/5 sm:border-none sm:border-l sm:border-black/8 sm:pl-4 xl:pl-6">
              <div className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-extrabold text-blue-600 font-mono-tag">
                &infin;
              </div>
              <div className="text-[10px] sm:text-[11px] xl:text-xs text-neutral-500 font-medium mt-0.5">
                Creative Ideas
              </div>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* RIGHT COLUMN: Large Authentic Portrait & Visual Halo Canvas */}
        {/* ============================================================ */}
        <div className="w-full lg:w-[54%] xl:w-[55%] relative h-[560px] sm:h-[660px] lg:h-full min-h-0 flex items-end justify-center select-none">
          
          {/* Stage Container: perfectly accommodates portrait, halo, and floating elements */}
          <div className="relative w-full max-w-[680px] lg:max-w-[760px] xl:max-w-[840px] 2xl:max-w-[920px] h-full flex items-end justify-center">
            
            {/* ------------------------------------------------------------ */}
            {/* ATMOSPHERIC BLUE HALO & ORBIT SYSTEM (Matching First Reference) */}
            {/* ------------------------------------------------------------ */}
            
            {/* 1a. Large Soft Blue Circular Glow Disc (Centered behind portrait) */}
            <div
              className="absolute left-1/2 lg:left-[43%] xl:left-[43%] top-[42%] -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[580px] lg:w-[660px] xl:w-[740px] 2xl:w-[780px] h-[480px] sm:h-[580px] lg:h-[660px] xl:h-[740px] 2xl:h-[780px] max-w-[calc(100svh-110px)] max-h-[calc(100svh-110px)] rounded-full pointer-events-none transition-transform duration-700 ease-out z-10"
              style={{
                background: 'radial-gradient(circle, rgba(191, 219, 254, 0.88) 0%, rgba(147, 197, 253, 0.52) 44%, rgba(191, 219, 254, 0.18) 68%, transparent 72%)',
                transform: `translate(calc(-50% + ${mouseOffset.x * 10}px), calc(-50% + ${mouseOffset.y * 10}px))`
              }}
            />

            {/* 1b. Inner Luminous Core Glow */}
            <div
              className="absolute left-1/2 lg:left-[43%] xl:left-[43%] top-[42%] -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[400px] lg:w-[460px] xl:w-[500px] h-[320px] sm:h-[400px] lg:h-[460px] xl:h-[500px] max-w-[calc(100svh-250px)] max-h-[calc(100svh-250px)] rounded-full pointer-events-none z-10"
              style={{
                background: 'radial-gradient(circle, rgba(147, 197, 253, 0.75) 0%, rgba(96, 165, 250, 0.35) 48%, transparent 68%)'
              }}
            />

            {/* 2. Outer Light Blue Circular Ring with Orbit Dots */}
            <div
              className="absolute left-1/2 lg:left-[43%] xl:left-[43%] top-[42%] -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[630px] lg:w-[700px] xl:w-[780px] 2xl:w-[820px] h-[520px] sm:h-[630px] lg:h-[700px] xl:h-[780px] 2xl:h-[820px] max-w-[calc(100svh-80px)] max-h-[calc(100svh-80px)] rounded-full border border-blue-400/40 pointer-events-none transition-transform duration-500 ease-out z-11"
              style={{
                transform: `translate(calc(-50% + ${mouseOffset.x * 8}px), calc(-50% + ${mouseOffset.y * 8}px))`
              }}
            >
              {/* Blue accent dot at 1 o'clock (matching Reference 1) */}
              <span className="absolute top-[14%] right-[14%] w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
              {/* Blue accent dot at 4 o'clock (matching Reference 1) */}
              <span className="absolute top-[56%] right-[0.5%] w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.7)]" />
            </div>

            {/* 3. Middle Dashed Orbital Ring */}
            <div
              className="absolute left-1/2 lg:left-[43%] xl:left-[43%] top-[42%] -translate-x-1/2 -translate-y-1/2 w-[390px] sm:w-[480px] lg:w-[540px] xl:w-[600px] 2xl:w-[640px] h-[390px] sm:h-[480px] lg:h-[540px] xl:h-[600px] 2xl:h-[640px] max-w-[calc(100svh-180px)] max-h-[calc(100svh-180px)] rounded-full border border-dashed border-blue-400/50 pointer-events-none transition-transform duration-500 ease-out z-11"
              style={{
                transform: `translate(calc(-50% + ${mouseOffset.x * 6}px), calc(-50% + ${mouseOffset.y * 6}px))`
              }}
            >
              {/* Satellite dot at 12 o'clock */}
              <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_6px_rgba(37,99,235,0.5)]" />
            </div>

            {/* 4. Inner Subtle Concentric Circle */}
            <div
              className="absolute left-1/2 lg:left-[43%] xl:left-[43%] top-[42%] -translate-x-1/2 -translate-y-1/2 w-[270px] sm:w-[340px] lg:w-[390px] xl:w-[430px] h-[270px] sm:h-[340px] lg:h-[390px] xl:h-[430px] rounded-full border border-blue-300/35 pointer-events-none z-11"
            />

            {/* 5. Dynamic Curved Orbit Swoosh Line & Satellite Dots (Matching Reference 1) */}
            <svg
              className="absolute left-1/2 lg:left-[43%] xl:left-[43%] top-[42%] -translate-x-1/2 -translate-y-1/2 w-[540px] sm:w-[650px] lg:w-[720px] xl:w-[800px] 2xl:w-[840px] h-[540px] sm:h-[650px] lg:h-[720px] xl:h-[800px] 2xl:h-[840px] max-w-[calc(100svh-70px)] max-h-[calc(100svh-70px)] pointer-events-none text-blue-500 transition-transform duration-700 ease-out z-12"
              style={{
                transform: `translate(calc(-50% + ${mouseOffset.x * 9}px), calc(-50% + ${mouseOffset.y * 9}px))`
              }}
              viewBox="0 0 600 600"
              fill="none"
            >
              {/* Upper dashed arc around the head */}
              <path
                d="M 110,220 C 170,85 390,75 480,150"
                stroke="#3B82F6"
                strokeWidth="1.8"
                strokeDasharray="6 6"
                opacity="0.65"
              />
              <circle cx="110" cy="220" r="3.5" fill="#3B82F6" />
              {/* Fluid, smooth solid curve looping around the waist */}
              <path
                d="M 60,390 C 80,480 240,540 400,480 C 530,430 560,320 515,245"
                stroke="#2563EB"
                strokeWidth="2.2"
                opacity="0.85"
              />
              {/* Dynamic orbit dot */}
              <circle cx="515" cy="245" r="4.5" fill="#2563EB" />
            </svg>

            {/* 6. Center Blue Dot Matrix Grid (5 cols x 6 rows - Matching Reference 1) */}
            <div className="absolute top-[17%] sm:top-[19%] lg:top-[17%] right-[calc(57%+55px)] xl:right-[calc(57%+65px)] z-12 pointer-events-none select-none">
              <div className="grid grid-cols-5 gap-2.5 sm:gap-3">
                {Array.from({ length: 30 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_6px_rgba(37,99,235,0.4)]"
                  />
                ))}
              </div>
            </div>

            {/* 7. Top-Right Decorative Marks: 3 Angled Strokes & Accent (Matching Reference 1) */}
            <div className="hidden lg:flex absolute top-[11%] sm:top-[12%] lg:top-[11%] left-[calc(43%+105px)] xl:left-[calc(43%+120px)] z-12 items-center gap-3 pointer-events-none select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-4 bg-blue-400 rounded-full rotate-45" />
                <span className="w-1 h-5.5 bg-blue-600 rounded-full rotate-45" />
                <span className="w-1 h-4 bg-blue-500 rounded-full rotate-45" />
              </div>
              <div className="flex items-center gap-1.5 text-blue-600">
                <span className="w-5 h-0.5 bg-blue-500 rotate-45" />
                <div className="w-2 h-2 rounded-full bg-blue-600 shadow-xs" />
              </div>
            </div>

            {/* 8a. Lower-Left Light Blue Diagonal Stripe Pattern (Matching Reference 1) */}
            <svg
              className="absolute bottom-[18%] sm:bottom-[20%] lg:bottom-[18%] right-[calc(57%+60px)] xl:right-[calc(57%+70px)] w-28 sm:w-32 h-28 sm:h-32 pointer-events-none text-blue-400/50 select-none z-11"
              viewBox="0 0 120 120"
              fill="none"
            >
              <line x1="0" y1="20" x2="20" y2="0" stroke="currentColor" strokeWidth="1.8" />
              <line x1="0" y1="40" x2="40" y2="0" stroke="currentColor" strokeWidth="1.8" />
              <line x1="0" y1="60" x2="60" y2="0" stroke="currentColor" strokeWidth="1.8" />
              <line x1="0" y1="80" x2="80" y2="0" stroke="currentColor" strokeWidth="1.8" />
              <line x1="0" y1="100" x2="100" y2="0" stroke="currentColor" strokeWidth="1.8" />
              <line x1="0" y1="120" x2="120" y2="0" stroke="currentColor" strokeWidth="1.8" />
              <line x1="20" y1="120" x2="120" y2="20" stroke="currentColor" strokeWidth="1.8" />
              <line x1="40" y1="120" x2="120" y2="40" stroke="currentColor" strokeWidth="1.8" />
              <line x1="60" y1="120" x2="120" y2="60" stroke="currentColor" strokeWidth="1.8" />
              <line x1="80" y1="120" x2="120" y2="80" stroke="currentColor" strokeWidth="1.8" />
              <line x1="100" y1="120" x2="120" y2="100" stroke="currentColor" strokeWidth="1.8" />
            </svg>

            {/* 8b. Lower-Right Light Blue Diagonal Stripe Pattern (Matching Reference 1) */}
            <svg
              className="hidden sm:block absolute bottom-[30%] sm:bottom-[32%] lg:bottom-[30%] left-[calc(43%+105px)] xl:left-[calc(43%+120px)] w-24 sm:w-28 h-24 sm:h-28 pointer-events-none text-blue-400/40 select-none z-11"
              viewBox="0 0 100 100"
              fill="none"
            >
              <line x1="0" y1="20" x2="20" y2="0" stroke="currentColor" strokeWidth="1.8" />
              <line x1="0" y1="40" x2="40" y2="0" stroke="currentColor" strokeWidth="1.8" />
              <line x1="0" y1="60" x2="60" y2="0" stroke="currentColor" strokeWidth="1.8" />
              <line x1="0" y1="80" x2="80" y2="0" stroke="currentColor" strokeWidth="1.8" />
              <line x1="0" y1="100" x2="100" y2="0" stroke="currentColor" strokeWidth="1.8" />
              <line x1="20" y1="100" x2="100" y2="20" stroke="currentColor" strokeWidth="1.8" />
              <line x1="40" y1="100" x2="100" y2="40" stroke="currentColor" strokeWidth="1.8" />
              <line x1="60" y1="100" x2="100" y2="60" stroke="currentColor" strokeWidth="1.8" />
              <line x1="80" y1="100" x2="100" y2="80" stroke="currentColor" strokeWidth="1.8" />
            </svg>

            {/* ------------------------------------------------------------ */}
            {/* FLOATING DESIGNER UI CARDS & EDITORIAL SCRIPTS               */}
            {/* ------------------------------------------------------------ */}

            {/* CARD 1 (Top-Right): Render Engine (Matching Reference 1 & 2) */}
            <div
              className="absolute top-6 sm:top-8 lg:top-5 xl:top-7 right-2 sm:right-4 lg:right-3 xl:right-4 z-30 pointer-events-none select-none transition-transform duration-500 ease-out animate-float-slow"
              style={{
                transform: `translate(${mouseOffset.x * -10}px, ${mouseOffset.y * -8}px)`
              }}
            >
              <div className="bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl border border-black/8 shadow-[0_12px_30px_rgba(0,0,0,0.06)] flex items-center gap-2.5 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-extrabold text-[#111111] leading-tight">
                    Render Engine
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-neutral-500 font-mono-tag">
                    Autodesk Maya &bull; VFX
                  </div>
                </div>
              </div>
            </div>

            {/* Upper Right: "Design Create Inspire" (Matching Reference 1 & 2) */}
            <div className="hidden sm:block absolute top-20 sm:top-24 lg:top-18 xl:top-22 right-4 sm:right-6 lg:right-4 xl:right-6 z-25 pointer-events-none select-none -rotate-6">
              <div className="font-handwriting text-3xl sm:text-4xl lg:text-[34px] xl:text-[40px] text-[#1F2937] font-bold leading-[0.95] drop-shadow-xs">
                Design <br />
                Create <br />
                Inspire
              </div>
              {/* Blue hand-drawn underline */}
              <svg
                className="w-24 sm:w-28 h-3 text-blue-600 mt-1"
                viewBox="0 0 100 12"
                fill="none"
              >
                <path
                  d="M2 9C25 3 65 2 98 8"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* CARD 2 (Middle-Left): Creative Tools */}
            <div
              className="absolute bottom-[27%] sm:bottom-[29%] lg:bottom-[27%] right-[calc(57%+55px)] xl:right-[calc(57%+65px)] z-30 pointer-events-none select-none transition-transform duration-500 ease-out animate-float-delayed"
              style={{
                transform: `translate(${mouseOffset.x * 10}px, ${mouseOffset.y * 8}px)`
              }}
            >
              <div className="bg-white/95 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl border border-black/8 shadow-[0_12px_30px_rgba(0,0,0,0.06)] flex items-center gap-2.5 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <PenTool className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-extrabold text-[#111111] leading-tight">
                    Creative Tools
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-neutral-500 font-mono-tag">
                    Ps &bull; Ai &bull; Pr &bull; Ae
                  </div>
                </div>
              </div>
            </div>

            {/* Lower Right: "Good Design Better Stories" */}
            <div className="hidden sm:block absolute bottom-[24%] sm:bottom-[26%] lg:bottom-[24%] right-1 sm:right-3 lg:right-2 xl:right-3 z-25 pointer-events-none select-none -rotate-3">
              <div className="font-handwriting text-2xl sm:text-3xl lg:text-[28px] xl:text-[34px] text-[#1F2937] font-bold leading-[0.95] drop-shadow-xs">
                Good <br />
                Design <br />
                Better <br />
                Stories
              </div>
              {/* Blue hand-drawn underline */}
              <svg
                className="w-20 sm:w-24 h-2.5 text-blue-600 mt-1"
                viewBox="0 0 90 10"
                fill="none"
              >
                <path
                  d="M2 8C22 3 58 2 88 7"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* CARD 3 (Bottom-Right): Ideas → Design → Impact */}
            <div
              className="absolute bottom-6 sm:bottom-8 lg:bottom-5 xl:bottom-7 right-10 sm:right-14 lg:right-12 xl:right-16 z-30 pointer-events-none select-none transition-transform duration-500 ease-out"
              style={{
                transform: `translate(${mouseOffset.x * -8}px, ${mouseOffset.y * -8}px)`
              }}
            >
              <div className="bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-2xl border border-black/8 shadow-[0_12px_28px_rgba(0,0,0,0.06)] flex flex-col items-center gap-0.5 text-[9px] sm:text-[11px] font-mono-tag text-neutral-700 font-semibold">
                <span>Ideas</span>
                <span className="text-blue-600 text-[8px] sm:text-[10px]">&darr;</span>
                <span>Design</span>
                <span className="text-blue-600 text-[8px] sm:text-[10px]">&darr;</span>
                <span className="text-neutral-900 font-bold">Impact</span>
              </div>
            </div>

            {/* Right Margin Studio Vertical Guide Line with Blue Target Circle */}
            <div className="hidden xl:flex absolute right-0 2xl:right-2 top-1/2 -translate-y-1/2 flex-col items-center gap-3 select-none pointer-events-none text-neutral-400 z-20">
              <div className="w-px h-14 2xl:h-16 bg-neutral-300" />
              <div className="w-4 h-4 rounded-full border border-blue-400/60 bg-blue-50/80 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              </div>
              <span className="text-[9px] font-mono-tag uppercase tracking-[0.25em] rotate-90 my-3 font-semibold text-neutral-500">
                CABII &bull; STUDIO
              </span>
              <div className="w-px h-14 2xl:h-16 bg-neutral-300" />
            </div>

            {/* Technical Pagination Dots (Bottom Right) */}
            <div className="hidden sm:flex items-center gap-1.5 absolute bottom-2 sm:bottom-3 right-10 sm:right-14 lg:right-12 xl:right-16 z-30 select-none pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="w-1 h-1 rounded-full bg-neutral-300" />
              <span className="w-1 h-1 rounded-full bg-neutral-300" />
              <span className="w-1 h-1 rounded-full bg-neutral-300" />
              <span className="w-1 h-1 rounded-full bg-neutral-300" />
            </div>

            {/* ------------------------------------------------------------ */}
            {/* THE DOMINANT HERO PORTRAIT                                   */}
            {/* Anchored to the exact same center as the halo & orbit        */}
            {/* ------------------------------------------------------------ */}
            <div
              className="absolute left-1/2 lg:left-[43%] xl:left-[43%] -translate-x-1/2 bottom-0 z-20 flex items-end justify-center pointer-events-none select-none"
            >
              <div
                className="transition-transform duration-700 ease-out"
                style={{
                  transform: `translate(${mouseOffset.x * 6}px, ${mouseOffset.y * 4}px)`
                }}
              >
                <img
                  src="/hero image.png"
                  alt="Sethu Kumaran D — Creative Designer & Multimedia Artist"
                  className="w-auto h-[540px] sm:h-[640px] lg:h-[720px] xl:h-[780px] 2xl:h-[840px] max-h-[calc(100svh-100px)] object-contain object-bottom drop-shadow-[0_16px_36px_rgba(0,0,0,0.08)] drop-shadow-[0_0_24px_rgba(59,130,246,0.3)]"
                  loading="eager"
                />
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* 4. Bottom-Left Scroll Down Indicator */}
      <div className="relative z-10 max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full shrink-0 pb-1.5">
        <a
          href="#graphics"
          onClick={scrollToWork}
          className="group inline-flex items-center gap-2.5 sm:gap-3 text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
          aria-label="Scroll to portfolio content"
        >
          <div className="w-4 h-7 sm:w-4.5 sm:h-7.5 rounded-full border-2 border-neutral-400 group-hover:border-neutral-900 p-0.5 sm:p-1 flex justify-center transition-colors">
            <div className="w-1 h-1.5 bg-neutral-500 group-hover:bg-neutral-900 rounded-full animate-bounce" />
          </div>

          <span className="text-[11px] font-mono-tag font-semibold tracking-wider uppercase">
            Scroll Down
          </span>

          <div className="w-12 sm:w-16 h-px bg-neutral-300 group-hover:bg-neutral-800 transition-colors" />
        </a>
      </div>

    </section>
  );
}
