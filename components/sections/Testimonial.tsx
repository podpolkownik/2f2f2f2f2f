import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const Testimonial = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="flex justify-center gap-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        
        <blockquote className="text-2xl font-medium text-gray-900 mb-8">
          "Благодаря{' '}
          <a 
            href="https://vitacaps-hemorrhoid.fair-2sale.com/cl/2/" 
            className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-2 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vitacaps
          </a>{' '}
          я вернулась к полноценной жизни. Это не просто препарат – это возможность снова чувствовать себя здоровой и счастливой. Я благодарна за каждый день без боли и дискомфорта."
        </blockquote>
        
        <div className="flex items-center justify-center gap-4">
          <img
            src="https://sun9-54.userapi.com/impg/e5mE4pXwbiQModE9Xa0y53Mo_HkfpGFVaWI4Vw/sZpA5qJvwoc.jpg?size=1024x1024&quality=96&sign=d0fc03284d3d7a82e08694e65b314af7&type=album"
            alt="Марта Санз Серрано"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-left">
            <div className="font-bold text-gray-900">Марта Санз Серрано</div>
            <div className="text-gray-600">45 лет, Мадрид</div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
