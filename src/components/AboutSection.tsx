import React from 'react';
import { motion } from 'motion/react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[#FFF8E7] border-t border-[#4A2C1A]/10"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <p className="text-sm font-semibold tracking-wider text-[#8B5A2B]">
            About ROSA
          </p>

          <h2 className="font-serif-display text-3xl md:text-5xl font-semibold tracking-tight text-[#4A2C1A] text-balance">
            Pure Peanut Goodness
          </h2>

          <p className="text-lg md:text-xl text-[#4A2C1A]/85 leading-relaxed font-normal text-balance pt-2">
            ROSA Peanut Butter brings the rich, familiar taste of peanuts into a simple spread made for everyday enjoyment. Crafted with care for warm mornings, shared tables, and effortless snacks, it celebrates the natural comfort of quality peanut butter.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
