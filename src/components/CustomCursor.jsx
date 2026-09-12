import React, { useEffect, useRef, useState } from 'react';

/**
 * CustomCursor
 * Premium interactive cursor following effect for multimedia & animation portfolio.
 * 
 * Features:
 * - Precision micro-dot with zero lag.
 * - Smooth fluid follower ring using lerp interpolation.
 * - Interactive hover state (expands & glows on clickable elements).
 * - High-performance canvas particle/bubble trail that gently floats and dissolves.
 * - Automatically disabled on touchscreens and reduced motion devices.
 * - pointer-events: none ensures zero interference with clicking or selecting.
 */
export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const canvasRef = useRef(null);

  // Mouse coordinates and smooth follower coordinates
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const lastSpawnPos = useRef({ x: -100, y: -100 });
  const particles = useRef([]);
  const animationFrameId = useRef(null);

  useEffect(() => {
    // Check for touch / coarse pointer devices or reduced motion
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Resize canvas to match screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Color palette matching Sethu's brand: Royal Blue, Violet, Indigo & Soft Silver
    const colors = [
      'rgba(29, 78, 216, ',   // Blue 700
      'rgba(79, 70, 229, ',   // Indigo 600
      'rgba(124, 58, 237, ',  // Violet 600
      'rgba(59, 130, 246, ',  // Blue 500
      'rgba(217, 249, 157, ', // Lime tint subtle pop
    ];

    // Track mouse movement
    const onMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible) setIsVisible(true);

      // Instantly position the precision micro-dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check distance from last particle spawn to create a spaced, natural bubble trail
      const dx = e.clientX - lastSpawnPos.current.x;
      const dy = e.clientY - lastSpawnPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 9 && particles.current.length < 35) {
        lastSpawnPos.current = { x: e.clientX, y: e.clientY };

        const colorBase = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 3.5 + 2; // 2px - 5.5px bubble radius
        const speed = (Math.random() * 0.8 + 0.2);
        const angle = Math.random() * Math.PI * 2;

        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed * 0.8,
          vy: Math.sin(angle) * speed * 0.8 - 0.4, // Slight upward buoyant drift
          size: size,
          initialSize: size,
          colorBase: colorBase,
          alpha: 0.75,
          life: 1,
          decay: Math.random() * 0.025 + 0.02, // Dissolves over ~35-45 frames
        });
      }

      // Detect hover over interactive elements
      const target = e.target;
      const isInteractive = target && (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.group') ||
        target.getAttribute('role') === 'button' ||
        window.getComputedStyle(target).cursor === 'pointer'
      );
      setIsHovered(Boolean(isInteractive));
    };

    const onMouseLeave = () => {
      setIsVisible(false);
      setIsHovered(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Animation render loop (fluid ring lerp + particle canvas rendering)
    const render = () => {
      // 1. Smooth lerp for outer follower ring (spring damping)
      const lerpFactor = 0.16;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      // 2. Render particle trail on canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        p.alpha = Math.max(0, p.life * 0.75);
        p.size = p.initialSize * (0.3 + p.life * 0.7);

        if (p.life <= 0 || p.size <= 0.2) {
          particles.current.splice(i, 1);
          continue;
        }

        // Draw luminous glowing bubble particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorBase}${p.alpha})`;
        ctx.fill();

        // Subtle soft outer glow for larger particles
        if (p.size > 2.5) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 1.8, 0, Math.PI * 2);
          ctx.fillStyle = `${p.colorBase}${p.alpha * 0.25})`;
          ctx.fill();
        }
      }

      animationFrameId.current = requestAnimationFrame(render);
    };

    animationFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* 1. Canvas for Floating Interactive Particle/Bubble Trail */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 w-full h-full"
      />

      {/* 2. Outer Smooth Follower Ring */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height,background-color,border-color,opacity] duration-200 ease-out will-change-transform ${
          !isVisible ? 'opacity-0' : 'opacity-100'
        } ${
          isHovered
            ? 'w-12 h-12 bg-blue-500/15 border border-blue-600/60 shadow-[0_0_20px_rgba(37,99,235,0.25)] backdrop-blur-[1px]'
            : 'w-8 h-8 bg-blue-600/5 border border-blue-600/35 shadow-[0_0_12px_rgba(37,99,235,0.12)]'
        }`}
      />

      {/* 3. Inner Precision Micro-Dot */}
      <div
        ref={dotRef}
        className={`pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 shadow-[0_0_6px_rgba(37,99,235,0.6)] transition-[width,height,opacity,transform] duration-150 ease-out will-change-transform ${
          !isVisible ? 'opacity-0' : 'opacity-100'
        } ${isHovered ? 'w-2 h-2 scale-75 bg-blue-700' : 'w-1.5 h-1.5'}`}
      />
    </div>
  );
}
