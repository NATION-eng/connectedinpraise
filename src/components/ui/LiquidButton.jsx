import React from "react";

export function LiquidButton({
  children,
  href,
  onClick,
  variant = "primary", // "primary" (gold/amber) | "secondary" (festival orange) | "ghost"
  className = "",
  target,
  rel,
  type = "button",
}) {
  const isSecondary = variant === "secondary";
  const isGhost = variant === "ghost";

  const borderColor = isSecondary
    ? "border-secondary text-secondary"
    : isGhost
    ? "border-white/30 text-white"
    : "border-primary text-primary";

  const liquidBg = isSecondary
    ? "bg-secondary"
    : isGhost
    ? "bg-white/20"
    : "bg-primary";

  const hoverText = isSecondary
    ? "group-hover:text-white"
    : isGhost
    ? "group-hover:text-white"
    : "group-hover:text-obsidian";

  const hoverShadow = isSecondary
    ? "hover:shadow-[0_0_35px_rgba(242,101,34,0.45)]"
    : "hover:shadow-[0_0_35px_rgba(255,200,59,0.45)]";

  const baseStyles = `relative inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-extrabold cursor-pointer overflow-hidden transition-all duration-500 delay-75 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-95 group rounded-full border-2 ${borderColor} ${hoverShadow} hover:rounded-2xl select-none touch-manipulation ${className}`;

  const content = (
    <>
      {/* Sliding Entry Arrow on Hover */}
      <svg
        viewBox="0 0 24 24"
        className={`absolute w-5 h-5 z-10 -left-1/4 transition-all duration-[750ms] delay-75 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 ${
          isSecondary ? "fill-secondary group-hover:fill-milk" : "fill-primary group-hover:fill-obsidian"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>

      {/* Button Text with Smooth Shift */}
      <span
        className={`relative z-10 flex items-center gap-2 -translate-x-2 transition-all duration-[750ms] delay-75 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 whitespace-nowrap ${hoverText}`}
      >
        {children}
      </span>

      {/* Expanding Circular Liquid Fill */}
      <span
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 ${liquidBg} rounded-full opacity-0 transition-all duration-[750ms] delay-75 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[360px] group-hover:h-[360px] group-hover:opacity-100 pointer-events-none`}
        aria-hidden="true"
      />

      {/* Sliding Exit Arrow on Hover */}
      <svg
        viewBox="0 0 24 24"
        className={`absolute w-5 h-5 z-10 right-4 transition-all duration-[750ms] delay-75 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-right-1/4 ${
          isSecondary ? "fill-secondary group-hover:fill-milk" : "fill-primary group-hover:fill-obsidian"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseStyles} target={target} rel={rel} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseStyles}>
      {content}
    </button>
  );
}
