import React from 'react';
import { motion } from 'motion/react';
import { BRAND_ASSETS, ResilientImage } from './BrandImage';

export const ProductShowcase: React.FC = () => {
  return (
    <section
      id="product"
      className="py-24 md:py-32 bg-[#FFF8E7] border-t border-[#4A2C1A]/10"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="rounded-[2rem] bg-[#FFFFFF]/65 border border-[#8B5A2B]/15 p-8 md:p-16 lg:p-20 shadow-[0_20px_50px_rgba(74,44,26,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Product Visual Pedestal */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex items-center justify-center relative py-8 px-6 rounded-2xl bg-[#FFF8E7] border border-[#8B5A2B]/10"
            >
              {/* Soft warm ambient ring behind the jar */}
              <div
                aria-hidden="true"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-b from-[#D4A017]/15 to-[#8B5A2B]/5 absolute blur-2xl"
              />
              <div className="relative z-10 py-4">
                <ResilientImage
                  primarySrc={BRAND_ASSETS.productClean.local}
                  fallbackSrc={BRAND_ASSETS.productClean.remote}
                  alt={BRAND_ASSETS.productClean.alt}
                  className="w-60 md:w-72 lg:w-80 h-auto object-contain mx-auto drop-shadow-[0_24px_32px_rgba(74,44,26,0.22)] transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </motion.div>

            {/* Editorial Product Description */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8B5A2B]">
                <span>Signature Spread</span>
                <span aria-hidden="true">·</span>
                <span>Everyday Pantry Essential</span>
              </div>

              <h2 className="font-serif-display text-3xl md:text-5xl font-semibold tracking-tight text-[#4A2C1A] text-balance">
                ROSA Peanut Butter
              </h2>

              <p className="text-base md:text-lg text-[#4A2C1A]/80 leading-relaxed">
                Smooth, inviting, and unmistakably peanut-forward. ROSA Peanut Butter is prepared to bring a comforting, velvety texture and roasted peanut depth to your table—whether spread generously over fresh bread or enjoyed straight from the spoon.
              </p>

              <div className="pt-4 border-t border-[#4A2C1A]/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-serif-display text-lg font-semibold text-[#4A2C1A]">
                    Smooth Consistency
                  </h3>
                  <p className="text-sm text-[#4A2C1A]/75 mt-1 leading-relaxed">
                    Spreads effortlessly across warm toast, slices of bread, and morning pastries.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif-display text-lg font-semibold text-[#4A2C1A]">
                    Authentic Character
                  </h3>
                  <p className="text-sm text-[#4A2C1A]/75 mt-1 leading-relaxed">
                    Created for families and food lovers who appreciate honest peanut flavor.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-[#FFFFFF] bg-[#8B5A2B] hover:bg-[#4A2C1A] rounded-xl transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A2C1A]"
                >
                  Inquire About ROSA
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
