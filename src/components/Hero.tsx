import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { BRAND_ASSETS, ResilientImage } from './BrandImage';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-16 md:py-24 lg:py-32 bg-[#FFF8E7]"
    >
      {/* Subtle warm radial glow in the background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#D4A017]/10 blur-3xl"
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* LEFT SIDE: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 md:space-y-8"
          >
            <p className="text-sm font-semibold tracking-wider text-[#8B5A2B]">
              ROSA Peanut Butter
            </p>

            <h1 className="font-serif-display text-[clamp(2.5rem,4.5vw,4.25rem)] font-semibold leading-[1.08] tracking-tight text-[#4A2C1A] text-balance">
              Pure Peanut Perfection in Every Spoon
            </h1>

            <p className="text-base md:text-lg text-[#4A2C1A]/80 leading-relaxed max-w-[54ch]">
              Rich, creamy peanut butter made for simple moments, delicious breakfasts, and everyday enjoyment.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#product"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-[15px] font-semibold text-[#FFFFFF] bg-[#4A2C1A] hover:bg-[#8B5A2B] rounded-xl transition-all duration-200 shadow-[0_8px_24px_rgba(74,44,26,0.16)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A2C1A]"
              >
                <span>Discover ROSA</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-4 text-[15px] font-semibold text-[#4A2C1A] bg-transparent border border-[#4A2C1A]/20 hover:border-[#4A2C1A] hover:bg-[#4A2C1A]/5 rounded-xl transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A2C1A]"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Explosion Image Visual Centerpiece */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-6 relative"
          >
            {/* Warm golden halo behind the hero showcase frame */}
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-[#8B5A2B]/20 via-[#D4A017]/20 to-transparent blur-2xl opacity-80"
            />

            <div className="relative rounded-3xl overflow-hidden bg-[#120701] border border-[#8B5A2B]/25 shadow-[0_28px_60px_-15px_rgba(74,44,26,0.38)] group">
              <div className="animate-float-slow">
                <ResilientImage
                  primarySrc={BRAND_ASSETS.heroExplosion.local}
                  fallbackSrc={BRAND_ASSETS.heroExplosion.remote}
                  alt={BRAND_ASSETS.heroExplosion.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
