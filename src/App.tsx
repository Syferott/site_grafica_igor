/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceCategories } from './components/ServiceCategories';
import { MedicalCorporateSection } from './components/MedicalCorporateSection';
import { QuoteAssistant } from './components/QuoteAssistant';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { scrollToSection } from './utils/scroll';

export default function App() {
  const [quoteCategory, setQuoteCategory] = useState<string>('offset');
  const [quoteProduct, setQuoteProduct] = useState<string>('');

  const handleSelectProductForQuote = (productName: string, category: string) => {
    setQuoteCategory(category);
    setQuoteProduct(productName);
    scrollToSection('#orcamento', 75, 750);
  };

  const handleOpenQuote = () => {
    scrollToSection('#orcamento', 75, 750);
  };

  const handleExploreServices = () => {
    scrollToSection('#servicos', 75, 700);
  };

  return (
    <div className="min-h-screen bg-[#0f141c] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950 w-full max-w-full">
      {/* Navigation */}
      <Header onOpenQuoteModal={handleOpenQuote} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero with Tagline & Key Value */}
        <Hero 
          onExploreServices={handleExploreServices}
          onOpenQuote={handleOpenQuote}
        />

        {/* Complete Catalog of Services from original site */}
        <ServiceCategories 
          onSelectProductForQuote={handleSelectProductForQuote}
        />

        {/* Specialized Focus: Medical & Corporate Stationery */}
        <MedicalCorporateSection />

        {/* Interactive Quote Simulator & WhatsApp Order Form */}
        <QuoteAssistant 
          initialCategory={quoteCategory}
          initialProduct={quoteProduct}
        />

        {/* Visual Showcase / Portfolio of Printed Materials */}
        <PortfolioShowcase />

        {/* About Gráfica Vinigor (Company Story since 90s, Values, Mission) */}
        <AboutSection onOpenQuote={handleOpenQuote} />

        {/* Technical FAQ */}
        <FaqSection />
      </main>

      {/* Official Footer with CNPJ, site seguro badge & credits */}
      <Footer />

      {/* Floating WhatsApp with Quick Messages */}
      <FloatingWhatsApp />
    </div>
  );
}
