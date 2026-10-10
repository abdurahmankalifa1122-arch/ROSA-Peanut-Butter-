/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductShowcase } from './components/ProductShowcase';
import { BreadLifestyleSection } from './components/BreadLifestyleSection';
import { WhyRosaSection } from './components/WhyRosaSection';
import { StoryAndEnjoySection } from './components/StoryAndEnjoySection';
import { WholesaleSection } from './components/WholesaleSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8E7] text-[#4A2C1A]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ProductShowcase />
        <BreadLifestyleSection />
        <WhyRosaSection />
        <StoryAndEnjoySection />
        <WholesaleSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
