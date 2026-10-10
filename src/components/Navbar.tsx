import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_ASSETS, ResilientImage } from './BrandImage';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Product', href: '#product' },
  { label: 'Why ROSA', href: '#why-rosa' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? 'bg-[#FFF8E7]/95 backdrop-blur-md border-b border-[#4A2C1A]/10 shadow-[0_4px_24px_rgba(74,44,26,0.04)]'
          : 'bg-[#FFF8E7] border-b border-[#4A2C1A]/5'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Logo */}
        <a
          href="#home"
          onClick={handleNavClick}
          className="flex items-center whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B5A2B] rounded-lg"
          aria-label="ROSA Peanut Butter Home"
        >
          <ResilientImage
            primarySrc={BRAND_ASSETS.logo.local}
            fallbackSrc={BRAND_ASSETS.logo.remote}
            alt={BRAND_ASSETS.logo.alt}
            className="h-12 md:h-14 w-auto object-contain"
          />
        </a>

        {/* Zone 2: Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#4A2C1A]/80"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#4A2C1A] relative py-1 transition-colors duration-150 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D4A017] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B5A2B] rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#FFFFFF] bg-[#4A2C1A] hover:bg-[#8B5A2B] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A2C1A]"
          >
            Contact Us
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl text-[#4A2C1A] hover:bg-[#4A2C1A]/5 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#4A2C1A]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF8E7] border-b border-[#4A2C1A]/10 px-6 pt-3 pb-6 shadow-lg">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="py-3 px-3 text-base font-medium text-[#4A2C1A] hover:bg-[#4A2C1A]/5 rounded-lg transition-colors duration-150"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#contact"
                onClick={handleNavClick}
                className="w-full inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-[#FFFFFF] bg-[#4A2C1A] hover:bg-[#8B5A2B] rounded-xl transition-colors duration-150"
              >
                Contact Us
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
