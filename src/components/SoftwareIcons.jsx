import React from 'react';

/**
 * High-fidelity, authentic vector icons for creative software suite
 */

export function PremiereProIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#00005B" />
      <rect x="1" y="1" width="46" height="46" rx="11" stroke="#EA77FF" strokeWidth="1.5" strokeOpacity="0.8" />
      <text
        x="13"
        y="32"
        fill="#EA77FF"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontSize="22"
        fontWeight="800"
        letterSpacing="-0.5"
      >
        Pr
      </text>
    </svg>
  );
}

export function AfterEffectsIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#00005B" />
      <rect x="1" y="1" width="46" height="46" rx="11" stroke="#9999FF" strokeWidth="1.5" strokeOpacity="0.8" />
      <text
        x="11"
        y="32"
        fill="#9999FF"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontSize="22"
        fontWeight="800"
        letterSpacing="-0.5"
      >
        Ae
      </text>
    </svg>
  );
}

export function PhotoshopIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#001E36" />
      <rect x="1" y="1" width="46" height="46" rx="11" stroke="#31A8FF" strokeWidth="1.5" strokeOpacity="0.8" />
      <text
        x="12"
        y="32"
        fill="#31A8FF"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontSize="22"
        fontWeight="800"
        letterSpacing="-0.5"
      >
        Ps
      </text>
    </svg>
  );
}

export function IllustratorIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#330000" />
      <rect x="1" y="1" width="46" height="46" rx="11" stroke="#FF9A00" strokeWidth="1.5" strokeOpacity="0.8" />
      <text
        x="14"
        y="32"
        fill="#FF9A00"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontSize="22"
        fontWeight="800"
        letterSpacing="-0.5"
      >
        Ai
      </text>
    </svg>
  );
}

export function CanvaIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="canvaGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00C4CC" />
          <stop offset="100%" stopColor="#7D2AE8" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#canvaGrad)" />
      <rect x="1" y="1" width="46" height="46" rx="11" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.3" />
      {/* Signature cursive Canva C */}
      <path
        d="M29.5 16.5C28.2 15.2 26.3 14.5 24 14.5C18.2 14.5 13.8 18.8 13.8 24.8C13.8 30.5 18 34.5 24.2 34.5C27.5 34.5 30.4 33.2 32.2 31.2C32.8 30.5 32.4 29.5 31.5 29.5C31.1 29.5 30.7 29.7 30.4 30C28.8 31.6 26.6 32.5 24.2 32.5C19.5 32.5 16.4 29.2 16.4 24.7C16.4 19.8 20 16.5 24.2 16.5C26 16.5 27.5 17.1 28.5 18C29.1 18.6 30 18.3 30.2 17.5C30.3 17.1 30 16.8 29.5 16.5Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function MayaIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mayaGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0B1A24" />
          <stop offset="100%" stopColor="#052F3D" />
        </linearGradient>
        <linearGradient id="facetGrad1" x1="12" y1="12" x2="24" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#0091B2" />
        </linearGradient>
        <linearGradient id="facetGrad2" x1="24" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00B4D8" />
          <stop offset="100%" stopColor="#007799" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#mayaGrad)" />
      <rect x="1" y="1" width="46" height="46" rx="11" stroke="#00C1D5" strokeWidth="1.5" strokeOpacity="0.8" />
      {/* Faceted Maya 3D M */}
      <path d="M12 34V14L24 23L36 14V34L30 30V21L24 26L18 21V30L12 34Z" fill="url(#facetGrad1)" />
      <path d="M24 26L30 21V30L24 34L18 30V21L24 26Z" fill="url(#facetGrad2)" opacity="0.9" />
      <path d="M24 23L36 14L30 18L24 23Z" fill="#7DF9FF" opacity="0.6" />
    </svg>
  );
}

export function BlenderIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blenderBg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E2024" />
          <stop offset="100%" stopColor="#111215" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#blenderBg)" />
      <rect x="1" y="1" width="46" height="46" rx="11" stroke="#F5792A" strokeWidth="1.5" strokeOpacity="0.8" />
      {/* Blender Iconic Radial Camera & Center Eye */}
      {/* 3 spokes */}
      <path d="M24 13C24.8 13 25.5 13.7 25.5 14.5V20H22.5V14.5C22.5 13.7 23.2 13 24 13Z" fill="#F5792A" />
      <path d="M33 19C33.6 18.5 34.5 18.6 35 19.2C35.5 19.8 35.4 20.7 34.8 21.2L29.5 25.2L27.5 23.2L33 19Z" fill="#F5792A" />
      <path d="M15 19C15.6 19.5 15.7 20.4 15.2 21L10.5 27.5C10 28.2 9.1 28.3 8.4 27.8C7.8 27.3 7.7 26.4 8.2 25.7L13.2 18.8C13.6 18.2 14.5 18.1 15 19Z" fill="#F5792A" />
      {/* Main Orange Circle */}
      <circle cx="24" cy="27" r="9" fill="#F5792A" />
      {/* Inner Blue Eye */}
      <circle cx="24" cy="27" r="5" fill="#225789" />
      {/* Center White Pupil */}
      <circle cx="24" cy="27" r="2.2" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * Mapping helper
 */
export const SOFTWARE_LIST = [
  {
    id: "pr",
    name: "Adobe Premiere Pro",
    short: "Pr",
    role: "Video Editing & Transitions",
    level: "Advanced",
    color: "#EA77FF",
    bgHover: "hover:border-[#EA77FF]/50 hover:shadow-[0_8px_30px_rgba(234,119,255,0.15)]",
    Icon: PremiereProIcon
  },
  {
    id: "ae",
    name: "Adobe After Effects",
    short: "Ae",
    role: "Motion Graphics & VFX",
    level: "Proficient",
    color: "#9999FF",
    bgHover: "hover:border-[#9999FF]/50 hover:shadow-[0_8px_30px_rgba(153,153,255,0.15)]",
    Icon: AfterEffectsIcon
  },
  {
    id: "ps",
    name: "Adobe Photoshop",
    short: "Ps",
    role: "Graphic Design & Key Art",
    level: "Advanced",
    color: "#31A8FF",
    bgHover: "hover:border-[#31A8FF]/50 hover:shadow-[0_8px_30px_rgba(49,168,255,0.15)]",
    Icon: PhotoshopIcon
  },
  {
    id: "ai",
    name: "Adobe Illustrator",
    short: "Ai",
    role: "Vector Graphics & Branding",
    level: "Proficient",
    color: "#FF9A00",
    bgHover: "hover:border-[#FF9A00]/50 hover:shadow-[0_8px_30px_rgba(255,154,0,0.15)]",
    Icon: IllustratorIcon
  },
  {
    id: "canva",
    name: "Canva",
    short: "Canva",
    role: "Editorial Layout & Social Collateral",
    level: "Advanced",
    color: "#00C4CC",
    bgHover: "hover:border-[#00C4CC]/50 hover:shadow-[0_8px_30px_rgba(0,196,204,0.15)]",
    Icon: CanvaIcon
  },
  {
    id: "maya",
    name: "Autodesk Maya",
    short: "Maya",
    role: "3D Modeling & Environment",
    level: "Proficient",
    color: "#00C1D5",
    bgHover: "hover:border-[#00C1D5]/50 hover:shadow-[0_8px_30px_rgba(0,193,213,0.15)]",
    Icon: MayaIcon
  },
  {
    id: "blender",
    name: "Blender",
    short: "Blender",
    role: "3D Visual Assets & Shading",
    level: "Proficient",
    color: "#F5792A",
    bgHover: "hover:border-[#F5792A]/50 hover:shadow-[0_8px_30px_rgba(245,121,42,0.15)]",
    Icon: BlenderIcon
  }
];

export function getSoftwareIcon(name) {
  const normalized = (name || '').toLowerCase();
  if (normalized.includes('premiere')) return PremiereProIcon;
  if (normalized.includes('after')) return AfterEffectsIcon;
  if (normalized.includes('photoshop')) return PhotoshopIcon;
  if (normalized.includes('illustrator')) return IllustratorIcon;
  if (normalized.includes('canva')) return CanvaIcon;
  if (normalized.includes('maya')) return MayaIcon;
  if (normalized.includes('blender')) return BlenderIcon;
  return null;
}
