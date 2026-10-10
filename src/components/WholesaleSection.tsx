import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const PARTNERS = [
  'Retailers',
  'Supermarkets',
  'Shops',
  'Wholesalers',
  'Distributors',
  'Cafés',
  'Food Businesses',
];

export const WholesaleSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#FFF8E7] border-t border-[#4A2C1A]/10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[2rem] bg-[#FFFFFF] border border-[#8B5A2B]/20 p-8 md:p-16 lg:p-20 shadow-[0_20px_50px_rgba(74,44,26,0.05)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-sm font-semibold tracking-wider text-[#8B5A2B]">
                Trade & Partnerships
              </p>

              <h2 className="font-serif-display text-3xl md:text-5xl font-semibold tracking-tight text-[#4A2C1A] text-balance">
                Bring ROSA to Your Customers
              </h2>

              <p className="text-base md:text-lg text-[#4A2C1A]/80 leading-relaxed max-w-2xl">
                We welcome inquiries from commercial partners looking to stock or work with ROSA Peanut Butter. Connect with our team to discuss retail shelves, wholesale supply, or foodservice collaborations.
              </p>

              {/* Clean unboxed partner metadata list with middle-dot separators */}
              <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-[#8B5A2B]">
                {PARTNERS.map((partner, index) => (
                  <React.Fragment key={partner}>
                    <span>{partner}</span>
                    {index < PARTNERS.length - 1 && (
                      <span aria-hidden="true" className="text-[#D4A017]">
                        ·
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex lg:justify-end">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-[15px] font-semibold text-[#FFFFFF] bg-[#4A2C1A] hover:bg-[#8B5A2B] rounded-xl transition-colors duration-200 shadow-[0_8px_24px_rgba(74,44,26,0.14)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A2C1A]"
              >
                <span>Business Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
