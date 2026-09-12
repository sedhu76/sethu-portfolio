import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * ScrollCard
 * A reusable scroll-linked wrapper component powered by GSAP + ScrollTrigger.
 * Ties translation, scale, and opacity directly to user scroll position with scrub.
 * 
 * Optimized Tuning:
 * - Start: As soon as the card enters the viewport bottom ('top 98%')
 * - End: When the card reaches comfortable reading eye level ('top 32%')
 * - Linear Ease ('none'): Guarantees the entire slide unfolds smoothly and
 *   visibly across the entire scroll journey without rushing or ending prematurely.
 * - Reverse: Smoothly reverses back towards origin when scrolling up.
 * - Stop: Stops immediately when scrolling stops.
 */
export default function ScrollCard({
  children,
  direction = 'left', // 'left' | 'right' | 'center'
  distance = 130,     // Desktop translation distance in px (80-140px range)
  className = '',
  triggerStart = 'top 98%',
  triggerEnd = 'top 32%',
  ...props
}) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    // Desktop & Large Screens (>= 1024px): Full, clearly visible horizontal slide
    mm.add('(min-width: 1024px)', () => {
      const xOffset = direction === 'left' ? -distance : direction === 'right' ? distance : 0;

      const tween = gsap.fromTo(
        el,
        {
          x: xOffset,
          y: 28,
          opacity: 0.55,
          scale: 0.95,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          ease: 'none', // Linear progression tied 1:1 to scroll
          scrollTrigger: {
            trigger: el,
            start: triggerStart,
            end: triggerEnd,
            scrub: 1, // Smooth physical inertia
            invalidateOnRefresh: true,
          },
        }
      );

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    // Tablets (768px to 1023px): Moderate smooth slide
    mm.add('(min-width: 768px) and (max-width: 1023px)', () => {
      const tabletDistance = Math.round(distance * 0.65); // ~85px
      const xOffset = direction === 'left' ? -tabletDistance : direction === 'right' ? tabletDistance : 0;

      const tween = gsap.fromTo(
        el,
        {
          x: xOffset,
          y: 22,
          opacity: 0.65,
          scale: 0.96,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: triggerStart,
            end: triggerEnd,
            scrub: 0.9,
            invalidateOnRefresh: true,
          },
        }
      );

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    // Mobile (< 768px): Noticeable yet safe movement (±32px) without overflow
    mm.add('(max-width: 767px)', () => {
      const mobileDistance = direction === 'left' ? -32 : direction === 'right' ? 32 : 0;

      const tween = gsap.fromTo(
        el,
        {
          x: mobileDistance,
          y: 20,
          opacity: 0.7,
          scale: 0.97,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top 98%',
            end: 'top 40%',
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        }
      );

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    // Accessibility: Reduced Motion (opacity only)
    mm.add('(prefers-reduced-motion: reduce)', () => {
      const tween = gsap.fromTo(
        el,
        {
          x: 0,
          y: 0,
          opacity: 0.8,
          scale: 1,
        },
        {
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top 98%',
            end: 'top 50%',
            scrub: 0.5,
          },
        }
      );

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, [direction, distance, triggerStart, triggerEnd]);

  return (
    <div
      ref={cardRef}
      className={`will-change-transform ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
