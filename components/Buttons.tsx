import React from 'react'

export const PrimaryButton: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ children, className, ...props }) => (
  <a
    href="https://wa.me/5599984428630"
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-medium bg-gradient-to-br from-[#23A5A9] to-[#0D3F48] text-[#EEF3F3] hover:opacity-90 hover:shadow-lg hover:shadow-[#23A5A9]/30 active:scale-95 transition-all ${className}`}
    {...props}
  >
    {children}
  </a>
);

export const GhostButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => (
  <button
    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border border-[#23A5A9]/20 bg-[#0D3F48]/20 text-[#EEF3F3] hover:bg-[#0D3F48]/40 hover:border-[#23A5A9]/40 backdrop-blur-sm active:scale-95 transition ${className}`}
    {...props}
  >
    {children}
  </button>
);