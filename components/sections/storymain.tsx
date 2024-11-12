import React, { useEffect, useRef } from 'react';
import Hero from './components/Hero';
import StoryContent from './components/StoryContent';
import './styles/animations.css';

const StoryMain = () => {
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    const paragraphs = storyRef.current?.querySelectorAll('p');
    paragraphs?.forEach(p => {
      p.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000');
      observer.observe(p);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <StoryContent ref={storyRef} />
    </div>
  );
};

export default StoryMain;