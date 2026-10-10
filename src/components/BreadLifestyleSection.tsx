import React from 'react';
import { motion } from 'motion/react';
import { BRAND_ASSETS, ResilientImage } from './BrandImage';

export const BreadLifestyleSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#FFF8E7] border-t border-[#4A2C1A]/10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Copy Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="text-sm font-semibold tracking-wider text-[#8B5A2B]">
              Simple Pleasures
            </p>

            <h2 className="font-serif-display text-3xl md:text-5xl font-semibold tracking-tight text-[#4A2C1A] text-balance">
              Made for Everyday Moments
            </h2>

            <p className="text-base md:text-lg text-[#4A2C1A]/80 leading-relaxed">
              Spread it on warm bread, enjoy it at breakfast, or make it part of your favorite everyday snack.
            </p>
          </motion.div>

          {/* Image Right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl overflow-hidden border border-[#8B5A2B]/20 shadow-[0_24px_48px_rgba(74,44,26,0.12)] bg-[#4A2C1A]/5">
              <ResilientImage
                primarySrc={BRAND_ASSETS.breadLifestyle.local}
                fallbackSrc={BRAND_ASSETS.breadLifestyle.remote}
                alt={BRAND_ASSETS.breadLifestyle.alt}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
