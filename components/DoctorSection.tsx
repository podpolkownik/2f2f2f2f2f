import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Leaf, Award } from 'lucide-react';

export const DoctorSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          {...fadeInUp}
        >
          <div className="space-y-8">
            <motion.h2 
              className="text-3xl font-bold text-gray-900"
              {...fadeInUp}
            >
              Профессиональное решение
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed"
              {...fadeInUp}
            >
              После долгих месяцев безуспешного самолечения, я наконец обратилась к опытному проктологу. Доктор внимательно изучил мою ситуацию и порекомендовал инновационное решение - Vitacaps.
            </motion.p>
            
            <motion.div 
              className="space-y-6"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <img 
                src="https://sun9-47.userapi.com/impg/Z-wEU5OwS4EYUc3meYAdca0DqsoPnoYZJsdTVw/2K-WcaeonDU.jpg?size=1280x1280&quality=96&sign=9c5ab3faf0e75b933311b44ae8ac550b&type=album"
                alt="Vitacaps - инновационное решение"
                className="rounded-xl shadow-lg w-full h-[300px] object-cover"
              />
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                  <Shield className="w-10 h-10 text-blue-600 mb-3" />
                  <span className="text-sm font-medium text-center">Клинически доказано</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                  <Leaf className="w-10 h-10 text-blue-600 mb-3" />
                  <span className="text-sm font-medium text-center">100% натурально</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                  <Award className="w-10 h-10 text-blue-600 mb-3" />
                  <span className="text-sm font-medium text-center">Сертифицировано</span>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div 
            className="relative"
            {...fadeInUp}
          >
            <img 
              src="https://sun9-31.userapi.com/impg/-Lsxp0Prj6m9pZ22Q-XkQ_l8fL_ZSBGUU05f9Q/wxGvMgmYgnM.jpg?size=864x1080&quality=96&sign=5b148b0bc5b349d6fcd9feef3f3507fa&type=album"
              alt="Консультация с доктором"
              className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};