import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const Header = () => (
  <header className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-32 relative overflow-hidden">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 relative z-10"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm"
        >
          <Heart className="w-8 h-8" />
        </motion.div>
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Путь к здоровью
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl opacity-90 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          История Марты Санз Серрано, 43 года
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="inline-block"
        >
          <a href="#story" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-colors inline-flex items-center gap-2">
            Узнать мою историю
            <Heart className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </motion.div>
    <div className="absolute inset-0 bg-blue-600/10 background-pattern"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
  </header>
);