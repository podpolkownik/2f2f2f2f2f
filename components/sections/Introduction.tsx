import React from 'react';
import { motion } from 'framer-motion';
import { User, Activity, Clock } from 'lucide-react';

export const Introduction = () => {
  const stats = [
    { icon: User, label: "Возраст", value: "45 лет" },
    { icon: Activity, label: "Образ жизни", value: "Активный" },
    { icon: Clock, label: "Начало истории", value: "6 месяцев назад" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <img
              src="https://sun6-21.userapi.com/impg/r4t0qeoWXvoS8fWNrtXhpVGMzBk7DRZEnEvWlA/Vw7KOM7FWag.jpg?size=1024x1024&quality=96&sign=952f3eacb6afa5061b1c765a85207a1b&type=album"
              alt="Марта Санз Серрано"
              className="w-48 h-48 rounded-full object-cover mx-auto shadow-xl border-4 border-white"
            />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Знакомьтесь, Марта</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Активная женщина, которая столкнулась с неожиданной проблемой, 
            но нашла в себе силы не только справиться с ней, но и помочь другим
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-blue-50 p-8 rounded-xl text-center"
            >
              <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <img
              src="https://sun9-15.userapi.com/impg/wI6R4Z_70m-y5whOdVy-vv_QidNEVGO9mlLCmw/Mlx3fChT1F0.jpg?size=1280x720&quality=96&sign=ca43fd20603bd95404d379754e45af91&type=album"
              alt="Активная жизнь"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Боль, о которой не говорят: мой личный опыт</h3>
            <div className="space-y-8">
              <div>
                <p className="text-lg font-semibold text-gray-800 mb-3">Первые тревожные звоночки появились неожиданно:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Легкий зуд в интимной зоне</li>
                  <li>Дискомфорт при ходьбе</li>
                  <li>Небольшое жжение после туалета</li>
                </ul>
              </div>
              
              <div>
                <p className="text-lg font-semibold text-gray-800 mb-3">Через неделю ситуация стала хуже:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Капли крови на туалетной бумаге</li>
                  <li>Острая боль при походе в туалет</li>
                  <li>Невозможность нормально сидеть</li>
                  <li>Постоянное желание почесать зудящее место</li>
                </ul>
              </div>

              <div>
                <p className="text-lg font-semibold text-gray-800 mb-3">Повседневная жизнь превратилась в настоящий ад:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Не могла находиться в сидячем положении больше 10 минут</li>
                  <li>Приходилось отказываться от любимой еды</li>
                  <li>Постоянный страх выходить из дома</li>
                  <li>Ночью просыпалась от сильной боли</li>
                  <li>Начала носить только свободную одежду</li>
                  <li>Появилась депрессия из-за постоянных мучений</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};