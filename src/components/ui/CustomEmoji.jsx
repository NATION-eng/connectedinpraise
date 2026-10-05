import React from "react";

// ============================================================================
// CONNECTED IN PRAISE 2026 — EXCLUSIVE CUSTOM SVG EMOJIS
// Custom-crafted liturgical & worship emoji assets styled with gold & neon amber.
// Zero reliance on native OS/device emojis or unstyled text unicode characters.
// ============================================================================

/** Custom Sacred Sparkle Emoji (replaces raw unicode ✦) */
export function CustomSparkleEmoji({ className = "w-3.5 h-3.5 inline-block text-gold-bright" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

/** Custom Praying Hands Emoji (replaces generic 🙏) */
export function CustomPrayingHandsEmoji({ className = "w-5 h-5 inline-block" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="prayGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF7" />
          <stop offset="45%" stopColor="#FFC400" />
          <stop offset="100%" stopColor="#F2760A" />
        </linearGradient>
        <radialGradient id="prayGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFC400" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FFC400" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Ambient Halo */}
      <circle cx="16" cy="14" r="12" fill="url(#prayGlow)" />
      {/* Left Hand */}
      <path
        d="M13.2 4.5C13.2 3.7 13.9 3 14.7 3C15.1 3 15.5 3.2 15.7 3.5L16 4V22H11.5L9.2 16.5C8.8 15.5 9.1 14.4 10 13.8L13.2 11.5V4.5Z"
        fill="url(#prayGold)"
      />
      {/* Right Hand */}
      <path
        d="M18.8 4.5C18.8 3.7 18.1 3 17.3 3C16.9 3 16.5 3.2 16.3 3.5L16 4V22H20.5L22.8 16.5C23.2 15.5 22.9 14.4 22 13.8L18.8 11.5V4.5Z"
        fill="url(#prayGold)"
      />
      {/* Sleeve Cuffs */}
      <path
        d="M8 22H15V28C15 28.6 14.6 29 14 29H9C8.4 29 8 28.6 8 28V22Z"
        fill="#FFC400"
        opacity="0.9"
      />
      <path
        d="M17 22H24V28C24 28.6 23.6 29 23 29H18C17.4 29 17 28.6 17 28V22Z"
        fill="#FFC400"
        opacity="0.9"
      />
    </svg>
  );
}

/** Custom Praise Hands Emoji (replaces generic 🙌) */
export function CustomPraiseHandsEmoji({ className = "w-5 h-5 inline-block" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="praiseGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF7" />
          <stop offset="50%" stopColor="#FFC400" />
          <stop offset="100%" stopColor="#F2760A" />
        </linearGradient>
      </defs>
      {/* Left Praise Hand */}
      <path
        d="M7 6C7 4.9 7.9 4 9 4C9.8 4 10.5 4.5 10.8 5.2L12 8.5V17L7.5 14.5C6.7 14 6.3 13 6.6 12.1L7 10.5V6Z"
        fill="url(#praiseGold)"
      />
      <path
        d="M6 16.5L11 19.5V26C11 26.6 10.6 27 10 27H7C6.4 27 6 26.6 6 26V16.5Z"
        fill="#FFC400"
      />
      {/* Right Praise Hand */}
      <path
        d="M25 6C25 4.9 24.1 4 23 4C22.2 4 21.5 4.5 21.2 5.2L20 8.5V17L24.5 14.5C25.3 14 25.7 13 25.4 12.1L25 10.5V6Z"
        fill="url(#praiseGold)"
      />
      <path
        d="M26 16.5L21 19.5V26C21 26.6 21.4 27 22 27H25C25.6 27 26 26.6 26 26V16.5Z"
        fill="#FFC400"
      />
      {/* Radiant Glory Rays */}
      <circle cx="16" cy="6" r="1.5" fill="#FFFDF7" />
      <path d="M16 1V3.5" stroke="#FFC400" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12.5 2L13.8 4" stroke="#FFC400" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19.5 2L18.2 4" stroke="#FFC400" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Custom Sacred Heart of Praise Emoji (replaces generic ❤️) */
export function CustomSacredHeartEmoji({ className = "w-5 h-5 inline-block" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFC400" />
          <stop offset="50%" stopColor="#E53935" />
          <stop offset="100%" stopColor="#8E0000" />
        </linearGradient>
      </defs>
      <path
        d="M16 28C16 28 3 20 3 11C3 6.5 6.5 3 11 3C13.8 3 15.2 4.5 16 5.8C16.8 4.5 18.2 3 21 3C25.5 3 29 6.5 29 11C29 20 16 28 16 28Z"
        fill="url(#heartGrad)"
        filter="drop-shadow(0 2px 8px rgba(229,57,53,0.5))"
      />
      {/* Golden Radiance Sparkle */}
      <path
        d="M12 7.5C9.5 8 7.5 10 7 12.5"
        stroke="#FFFDF7"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}

/** Custom Holy Fire Flame Emoji (replaces generic 🔥) */
export function CustomHolyFlameEmoji({ className = "w-5 h-5 inline-block" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="flameOuter" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF7" />
          <stop offset="25%" stopColor="#FFC400" />
          <stop offset="70%" stopColor="#F2760A" />
          <stop offset="100%" stopColor="#B71C1C" />
        </linearGradient>
        <linearGradient id="flameInner" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF7" />
          <stop offset="100%" stopColor="#FFC400" />
        </linearGradient>
      </defs>
      {/* Outer Tongues of Fire */}
      <path
        d="M16 2C16 2 19 8 18 13C19.5 11 20 8.5 20 8.5C24 13 26 17 26 21C26 26.5 21.5 31 16 31C10.5 31 6 26.5 6 21C6 14 12 7 16 2Z"
        fill="url(#flameOuter)"
      />
      {/* Inner Heart of Fire */}
      <path
        d="M16 15C17.5 18 19 19 19 22C19 24.5 17.5 26.5 16 26.5C14.5 26.5 13 24.5 13 22C13 18.5 15.5 17 16 15Z"
        fill="url(#flameInner)"
      />
    </svg>
  );
}

/** Custom Golden Crown Emoji (replaces generic 👑) */
export function CustomGoldenCrownEmoji({ className = "w-5 h-5 inline-block" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="crownGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF7" />
          <stop offset="50%" stopColor="#FFC400" />
          <stop offset="100%" stopColor="#F2760A" />
        </linearGradient>
      </defs>
      {/* 5-Point Regal Crown */}
      <path
        d="M4 22L7 9L12 16L16 6L20 16L25 9L28 22H4Z"
        fill="url(#crownGrad)"
        filter="drop-shadow(0 2px 6px rgba(255,196,0,0.4))"
      />
      {/* Base Band */}
      <rect x="4" y="22" width="24" height="4" rx="2" fill="#FFC400" />
      {/* Jewels on Tips */}
      <circle cx="7" cy="9" r="1.5" fill="#FFFDF7" />
      <circle cx="16" cy="6" r="2" fill="#FFFDF7" />
      <circle cx="25" cy="9" r="1.5" fill="#FFFDF7" />
    </svg>
  );
}

/** Custom Musical Worship Notes Emoji (replaces generic 🎵/🎶) */
export function CustomWorshipNotesEmoji({ className = "w-5 h-5 inline-block" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="musicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF7" />
          <stop offset="60%" stopColor="#FFC400" />
          <stop offset="100%" stopColor="#F2760A" />
        </linearGradient>
      </defs>
      <path
        d="M10 20C7.8 20 6 21.8 6 24C6 26.2 7.8 28 10 28C12.2 28 14 26.2 14 24V10L24 6V20C21.8 20 20 21.8 20 24C20 26.2 21.8 28 24 28C26.2 28 28 26.2 28 24V4L10 8V20Z"
        fill="url(#musicGrad)"
      />
    </svg>
  );
}

/** Custom TikTok Brand Emoji (Exact official SVG mark, replaces raw text ♪) */
export function CustomTikTokEmoji({ className = "w-4 h-4 inline-block" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.08a8.28 8.28 0 0 0 4.77 1.49V7.12a4.85 4.85 0 0 1-1-.43z" />
    </svg>
  );
}

/** Custom Total Inclusion Star Emblem (replaces generic 🌟) */
export function CustomInclusionStarEmoji({ className = "w-5 h-5 inline-block" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF7" />
          <stop offset="50%" stopColor="#FFC400" />
          <stop offset="100%" stopColor="#F2760A" />
        </linearGradient>
      </defs>
      {/* 8-Point Holy Star of Possibility */}
      <path
        d="M16 2L19.2 10.8L28 14L19.2 17.2L16 26L12.8 17.2L4 14L12.8 10.8L16 2Z"
        fill="url(#starGrad)"
        filter="drop-shadow(0 0 8px rgba(255,196,0,0.5))"
      />
      <circle cx="16" cy="14" r="3" fill="#FFFDF7" />
    </svg>
  );
}

/** Custom Close Cancel Emoji (replaces text ✕) */
export function CustomCloseEmoji({ className = "w-4 h-4 inline-block" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
