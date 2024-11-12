import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => (
  <div className="relative h-screen flex items-center justify-center">
    <div 
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: "url('https://sun9-43.userapi.com/impg/HfPo7K_9AdI_h9xQg6Y_kPifvpllAko9nO7j2g/IJhV7c8S08U.jpg?size=1024x1024&quality=96&sign=b4f568047a9dc8e369b49396d2145d88&type=album')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.7)'
      }}
    />
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
        Секрет, Который Помог Мне Забыть о Геморрое Раз и Навсегда!
      </h1>
      <ChevronDown 
        className="w-12 h-12 text-white animate-bounce mx-auto mt-12 cursor-pointer" 
        onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})} 
      />
    </div>
  </div>
);

export default Hero;