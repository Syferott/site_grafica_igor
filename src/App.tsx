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
import { HowItWorks } from './components/HowItWorks';
import { AboutSection } from './components/AboutSection';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [quoteCategory, setQuoteCategory] = useState<string>('offset');
  const [quoteProduct, setQuoteProduct] = useState<string>('');

  const handleSelectProductForQuote = (productName: string, category: string) => {
    setQuoteCategory(category);
    setQuoteProduct(productName);
    const element = document.querySelector('#orcamento');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuote = () => {
    const element = document.querySelector('#orcamento');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const element = document.querySelector('#servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0f141c] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
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

        {/* How It Works (Step 1 to 4) */}
        <HowItWorks />

        {/* About Gráfica Vinigor (Company Story since 90s, Values, Mission) */}
        <AboutSection onOpenQuote={handleOpenQuote} />

        {/* Customer Testimonials for High Credibility */}
        <Testimonials />

        {/* Technical FAQ */}
        <FaqSection />

        {/* Contact Section (Penha address, email, phone, WhatsApp) */}
        <ContactSection />
      </main>

      {/* Official Footer with CNPJ, site seguro badge & credits */}
      <Footer />

      {/* Floating WhatsApp with Quick Messages */}
      <FloatingWhatsApp />
    </div>
  );
}
