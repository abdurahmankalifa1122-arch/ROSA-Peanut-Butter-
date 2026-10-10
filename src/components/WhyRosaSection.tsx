import React from 'react';
import { motion } from 'motion/react';

const BENEFITS = [
  {
    index: '01.',
    title: 'Rich Peanut Taste',
    description:
      'Full-bodied roasted peanut flavor that brings warmth and satisfaction to every bite.',
  },
  {
    index: '02.',
    title: 'Simple Everyday Enjoyment',
    description:
      'An effortless staple ready whenever you crave something comforting and familiar.',
  },
  {
    index: '03.',
    title: 'Versatile & Delicious',
    description:
      'Pairs naturally with fresh bread, morning toast, fruit slices, or home-baked treats.',
  },
  {
    index: '04.',
    title: 'Made for Sharing',
    description:
      'A welcoming centerpiece at the family breakfast table and casual gatherings alike.',
  },
];

export const WhyRosaSection: React.FC = () => {
  return (
    <section
      id="why-rosa"
      className="py-24 md:py-32 bg-[#FFF8E7] border-t border-[#4A2C1A]/10"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-16 space-y-4">
          <p className="text-sm font-semibold tracking-wider text-[#8B5A2B]">
            Why ROSA
          </p>
          <h2 className="font-serif-display text-3xl md:text-5xl font-semibold tracking-tight text-[#4A2C1A] text-balance">
            Crafted for the Table
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: idx * 0.08,
              }}
              className="p-8 rounded-2xl bg-[#FFFFFF]/60 border border-[#8B5A2B]/15 flex flex-col justify-between space-y-6"
            >
              <span className="font-serif-display text-base font-semibold text-[#D4A017] tabular-nums">
                {item.index}
              </span>
              <div className="space-y-3">
                <h3 className="font-serif-display text-xl font-semibold text-[#4A2C1A]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4A2C1A]/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
