import React from 'react';
import { Hero } from './components/sections/Hero';
import { Introduction } from './components/sections/Introduction';
import { StoryMain } from './components/sections/storymain'; // Предполагаем, что компонент называется StoryMain
import { Timeline } from './components/sections/Timeline';
import { Solution } from './components/sections/Solution';
import { Testimonial } from './components/sections/Testimonial';
import { CTASection } from './components/CTASection';
import CustomerReviews from './components/CustomerReviews';
import ProductDescription from './components/ProductDescription';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Introduction />
      <StoryMain /> {/* Изменено на корректное имя компонента */}
      <Timeline />
      <Solution />
      <Testimonial />
      <CTASection />
      <CustomerReviews />
      <ProductDescription />

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-75">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
