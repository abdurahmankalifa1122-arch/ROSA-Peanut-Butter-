import React from 'react';
import { motion } from 'motion/react';

const WAYS_TO_ENJOY = [
  {
    number: '01',
    title: 'Breakfast',
    description:
      'Start the day with a generous swirl over warm toast, fresh flatbread, or morning porridge.',
  },
  {
    number: '02',
    title: 'Snack',
    description:
      'Enjoy a quick, satisfying spoonful between meals or pair with crisp apple and banana slices.',
  },
  {
    number: '03',
    title: 'Sharing',
    description:
      'Bring people together around the table with sandwiches, tea-time spreads, and family favorites.',
  },
];

export const StoryAndEnjoySection: React.FC = () => {
  return (
    <>
      {/* 13. INGREDIENT / NATURAL FEEL */}
      <section className="py-24 md:py-32 bg-[#4A2C1A] text-[#FFF8E7] relative overflow-hidden">
        {/* Subtle decorative organic peanut-inspired rings */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -bottom-24 w-96 h-96 text-[#D4A017]/10"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M65 40C40 40 25 65 35 95C42 115 42 125 35 145C25 170 45 190 75 185C100 180 115 160 135 150C160 138 180 115 170 85C160 55 135 55 110 48C90 42 80 40 65 40Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M75 55C55 55 42 75 50 100C56 116 56 124 50 140C42 160 58 176 82 172C102 168 114 152 130 144C150 134 166 116 158 92C150 68 130 68 110 62C94 57 86 55 75 55Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>

        <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-6"
          >
            <p className="text-sm font-semibold tracking-wide text-[#D4A017]">
              Natural Character
            </p>
            <h2 className="font-serif-display text-3xl md:text-5xl font-semibold tracking-tight text-[#FFF8E7] text-balance">
              From Peanuts to Something Delicious
            </h2>
            <p className="text-base md:text-lg text-[#FFF8E7]/85 leading-relaxed tracking-[0.01em] max-w-2xl">
              Great peanut butter begins with the unmistakable warmth of golden roasted peanuts. Turned into a smooth, comforting spread, ROSA honours simple ingredients and the pleasure of real food.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 14. HOW TO ENJOY */}
      <section className="py-24 md:py-32 bg-[#FFF8E7] border-t border-[#4A2C1A]/10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16 space-y-4">
            <p className="text-sm font-semibold tracking-wider text-[#8B5A2B]">
              How to Enjoy
            </p>
            <h2 className="font-serif-display text-3xl md:text-5xl font-semibold tracking-tight text-[#4A2C1A] text-balance">
              Three Everyday Rituals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 border-t border-[#4A2C1A]/15 pt-12">
            {WAYS_TO_ENJOY.map((ritual, idx) => (
              <motion.div
                key={ritual.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: idx * 0.1,
                }}
                className="space-y-4"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-serif-display text-sm font-semibold text-[#8B5A2B] tabular-nums">
                    {ritual.number}
                  </span>
                  <span aria-hidden="true" className="text-[#8B5A2B]/40">
                    —
                  </span>
                  <h3 className="font-serif-display text-2xl font-semibold text-[#4A2C1A]">
                    {ritual.title}
                  </h3>
                </div>
                <p className="text-base text-[#4A2C1A]/80 leading-relaxed">
                  {ritual.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
