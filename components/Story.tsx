import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertCircle, Heart, CheckCircle2, XCircle } from 'lucide-react';

export const Story = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const symptoms = [
    { before: "Постоянный дискомфорт", after: "Полное отсутствие дискомфорта" },
    { before: "Боль при движении", after: "Свободное движение без боли" },
    { before: "Нарушенный сон", after: "Здоровый сон" },
    { before: "Ограниченная активность", after: "Возвращение к активной жизни" }
  ];

  return (
    <section className="py-20 bg-gray-50" id="story">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Начальная ситуация */}
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">История Марты</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            В 43 года моя жизнь изменилась. Несмотря на здоровый образ жизни, я столкнулась с деликатной проблемой, которая перевернула мой мир.
          </p>
        </motion.div>

        {/* Временная шкала */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          {...fadeInUp}
        >
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Clock className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Первые симптомы</h3>
            <p className="text-gray-700 mb-4">
              Всё началось с лёгкого дискомфорта, который я поначалу игнорировала
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                Небольшой дискомфорт
              </li>
              <li className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                Лёгкое жжение
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <AlertCircle className="w-12 h-12 text-red-600 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Прогрессирование</h3>
            <p className="text-gray-700 mb-4">
              Симптомы усиливались, значительно влияя на качество жизни
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500" />
                Сильные боли
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500" />
                Нарушение сна
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Heart className="w-12 h-12 text-green-600 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Выздоровление</h3>
            <p className="text-gray-700 mb-4">
              После обращения к специалисту началось мое восстановление
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Профессиональная помощь
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Эффективное лечение
              </li>
            </ul>
          </div>
        </motion.div>

        {/* До и После */}
        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
          {...fadeInUp}
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 bg-red-50">
              <h3 className="text-2xl font-bold text-red-900 mb-6">До лечения</h3>
              <ul className="space-y-4">
                {symptoms.map((symptom, index) => (
                  <li key={`before-${index}`} className="flex items-center gap-3">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <span className="text-red-900">{symptom.before}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-green-50">
              <h3 className="text-2xl font-bold text-green-900 mb-6">После Vitacaps</h3>
              <ul className="space-y-4">
                {symptoms.map((symptom, index) => (
                  <li key={`after-${index}`} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-green-900">{symptom.after}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Заключение */}
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          {...fadeInUp}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Мой путь к выздоровлению</h3>
          <p className="text-lg text-gray-700 mb-8">
            Благодаря Vitacaps я вернулась к полноценной жизни. Препарат не только устранил симптомы, 
            но и помог мне восстановить уверенность в себе. Сегодня я снова наслаждаюсь активной жизнью 
            и делюсь своей историей, чтобы помочь другим не бояться обращаться за помощью.
          </p>
          <motion.button
            className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Узнать больше о Vitacaps
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};