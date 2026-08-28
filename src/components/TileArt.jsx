import React from 'react';

function Svg({ children }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

const icons = {
  flask: (
    <Svg>
      <path d="M24 8h16v10l8 22a12 12 0 1 1-32 0l8-22V8z" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M22 8h20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="28" cy="40" r="3" fill="currentColor" />
      <circle cx="36" cy="46" r="2.2" fill="currentColor" />
      <circle cx="32" cy="36" r="1.8" fill="currentColor" />
    </Svg>
  ),
  cube: (
    <Svg>
      <path d="M32 10l18 10v20L32 50 14 40V20z" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M32 10v20M14 20l18 10 18-10" fill="none" stroke="currentColor" strokeWidth="3" />
    </Svg>
  ),
  moth: (
    <Svg>
      <path d="M32 18c-8-10-20-8-20 4 0 10 12 16 20 22 8-6 20-12 20-22 0-12-12-14-20-4z" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M32 18v26" stroke="currentColor" strokeWidth="3" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
      <circle cx="40" cy="24" r="2" fill="currentColor" />
    </Svg>
  ),
  skull: (
    <Svg>
      <path d="M20 28a12 12 0 1 1 24 0v10H20z" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M24 38v8h6v-4h4v4h6v-8" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="26" cy="30" r="3" fill="currentColor" />
      <circle cx="38" cy="30" r="3" fill="currentColor" />
    </Svg>
  ),
  planet: (
    <Svg>
      <circle cx="32" cy="32" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
      <ellipse cx="32" cy="32" rx="24" ry="7" fill="none" stroke="currentColor" strokeWidth="3" transform="rotate(-18 32 32)" />
    </Svg>
  ),
  eye: (
    <Svg>
      <path d="M10 32c8-14 36-14 44 0-8 14-36 14-44 0z" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="32" cy="32" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="32" cy="32" r="3.5" fill="currentColor" />
    </Svg>
  ),
  tower: (
    <Svg>
      <path d="M32 8v40M22 18l20 8M22 38l20-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="32" cy="8" r="4" fill="currentColor" />
      <path d="M18 52h28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </Svg>
  ),
  beetle: (
    <Svg>
      <ellipse cx="32" cy="34" rx="12" ry="16" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M32 18v32M20 28h24" stroke="currentColor" strokeWidth="3" />
      <path d="M24 12l4 8M40 12l-4 8M16 40l8-4M48 40l-8-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </Svg>
  ),
  key: (
    <Svg>
      <circle cx="22" cy="32" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="22" cy="32" r="3" fill="currentColor" />
      <path d="M32 32h20v6h-6v6h-6v-6h-4" fill="none" stroke="currentColor" strokeWidth="3" />
    </Svg>
  ),
  seed: (
    <Svg>
      <path d="M32 8l5 14 15 5-15 5-5 14-5-14-15-5 15-5z" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="32" cy="32" r="4" fill="currentColor" />
    </Svg>
  ),
  core: (
    <Svg>
      <circle cx="32" cy="32" r="16" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="32" cy="32" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="32" cy="32" r="3.5" fill="currentColor" />
      <path d="M32 8v8M32 48v8M8 32h8M48 32h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </Svg>
  ),
  drone: (
    <Svg>
      <rect x="20" y="22" width="24" height="20" rx="6" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="12" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="52" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="12" cy="44" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="52" cy="44" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="32" cy="32" r="4" fill="currentColor" />
    </Svg>
  ),
};

export default function TileArt({ id }) {
  return icons[id] || null;
}
