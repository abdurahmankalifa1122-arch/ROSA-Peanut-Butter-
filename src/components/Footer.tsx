import React from 'react';
import { BRAND_ASSETS, ResilientImage } from './BrandImage';

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Product', href: '#product' },
  { label: 'Why ROSA', href: '#why-rosa' },
  { label: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFF8E7] border-t border-[#4A2C1A]/15 py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 pb-12 border-b border-[#4A2C1A]/10">
          {/* Brand Lockup */}
          <div className="flex items-center gap-4">
            <a
              href="#home"
              className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B5A2B] rounded-lg"
              aria-label="ROSA Peanut Butter Home"
            >
              <ResilientImage
                primarySrc={BRAND_ASSETS.logo.local}
                fallbackSrc={BRAND_ASSETS.logo.remote}
                alt={BRAND_ASSETS.logo.alt}
                className="h-14 w-auto object-contain"
              />
            </a>
            <div>
              <p className="font-serif-display text-lg font-semibold text-[#4A2C1A] tracking-tight">
                ROSA Peanut Butter
              </p>
              <p className="text-xs text-[#8B5A2B] mt-0.5">
                Pure Peanut Perfection
              </p>
            </div>
          </div>

          {/* Navigation Mirror */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium text-[#4A2C1A]/80"
          >
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#4A2C1A] transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#4A2C1A]/70">
          <p>© 2026 ROSA Peanut Butter. All rights reserved.</p>
          <p className="text-[#8B5A2B]">Made for simple everyday enjoyment.</p>
        </div>
      </div>
    </footer>
  );
};
