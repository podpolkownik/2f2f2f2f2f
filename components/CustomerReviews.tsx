import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import ReviewCard from './ReviewCard';

const initialReviews = [
  {
    name: "Хуан Карлос Перес",
    date: "4 дня назад",
    image: "https://sun9-26.userapi.com/impg/lpQ6hNwR752pFnNibh_3h1KUCfJlYDBg5Qr1VA/YOsVpiM-xYI.jpg?size=736x736&quality=96&sign=dd729b60bd5a52d36ea34da41508a5d0&type=album",
    text: "Vitacaps помог мне справиться с дискомфортом, который мешал активной жизни. Прекрасное средство с натуральным составом!",
    rating: 5,
    partialStar: true
  },
  {
    name: "Мария Хименес",
    date: "3 дня назад",
    image: "https://sun9-40.userapi.com/impg/tnv-9s_z7tUqpmeeJOwmLrOnJiBU6c0uWzOA6Q/M-Tutnhm63M.jpg?size=736x736&quality=96&sign=91666027b4a5a99a37a7bbf12b208122&type=album",
    text: "С Vitacaps я смогла вернуться к привычной жизни. Теперь дискомфорт и боль в прошлом.",
    rating: 4,
    partialStar: true
  },
  {
    name: "Карлос Ортега",
    date: "6 дней назад",
    image: "https://sun9-60.userapi.com/impg/hcq2OyGID-LVZqpc4RFYZ7RthiaCQ2GEoxMXUQ/dEDNApOvb7c.jpg?size=736x736&quality=96&sign=6e2b351b1ef013c2c46c873a7be0a161&type=album",
    text: "После долгих поисков нашел Vitacaps — препарат действительно работает! Очень рекомендую.",
    rating: 5,
    partialStar: true
  },
  {
    name: "Анна Лопес",
    date: "5 дней назад",
    image: "https://sun9-75.userapi.com/impg/AmjGMLD5e43y4_ZERCFhYJUUzia_WGTBQIoAhA/nZ4GVaeRiX4.jpg?size=736x736&quality=96&sign=49a2f92b399a1fb48b670f515accb81c&type=album",
    text: "Натуральный состав и отсутствие побочных эффектов для меня были важными факторами. Vitacaps справился на ура!",
    rating: 5
  },
  {
    name: "Роберто Гонсалес",
    date: "3 дня назад",
    image: "https://sun9-16.userapi.com/impg/rtcikau-Vf6XMUxhadMB_iHa4ipNaNz9Mw4Aag/hyiIxSEGx9Y.jpg?size=1024x1024&quality=96&sign=a4ecce19a72d198b508c67650648d638&type=album",
    text: "Vitacaps помог справиться с проблемой за считаные недели. Огромное спасибо за это средство!",
    rating: 5
  },
  {
    name: "Лусия Фуэнтес",
    date: "2 дня назад",
    image: "https://sun9-59.userapi.com/impg/zdKaEej6dQbeDSC3-U_wrS6T--h1bYCjDSknuw/a_psc-KavB0.jpg?size=736x736&quality=96&sign=cce26bae4d64e6b25625b4fbecf4bc00&type=album",
    text: "Уже после первой недели использования я заметила улучшения. Боль ушла, снова чувствую себя хорошо.",
    rating: 5
  },
  {
    name: "Фелипе Варгас",
    date: "сегодня",
    image: "https://sun9-26.userapi.com/impg/LCBtdjBhJT97LiqnqstbYIdUIAa1DakjPQDCIg/CYkOLiuj33o.jpg?size=751x751&quality=96&sign=d3931cae661815c315fab4db6b1dc541&type=album",
    text: "Этот препарат изменил мою жизнь к лучшему. Забыл, что такое постоянный дискомфорт.",
    rating: 4
  }
];

const CompactReviewForm = ({ onSubmit }: { onSubmit: (review: { name: string; text: string; rating: number }) => void }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, text, rating });
    setName('');
    setText('');
    setRating(5);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 max-w-2xl mx-auto mt-8"
    >
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ваше имя"
            required
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setRating(value)}
              className="focus:outline-none"
            >
              <Star
                className={`w-5 h-5 ${
                  rating >= value
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ваш отзыв"
          required
          rows={3}
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="mt-3 w-full bg-blue-600 text-white py-2 px-4 text-sm rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Отправить отзыв
      </button>
    </motion.form>
  );
};

const CustomerReviews: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const displayedReviews = showAll ? initialReviews : initialReviews.slice(0, 3);

  const handleReviewSubmit = (review: { name: string; text: string; rating: number }) => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Отзывы наших клиентов
          </h2>
          <p className="text-sm text-gray-600">
            Узнайте, что говорят люди о своем опыте использования Vitacaps
          </p>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {displayedReviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </AnimatePresence>
        </motion.div>

        {initialReviews.length > 3 && (
          <motion.div 
            layout
            className="text-center mt-6"
          >
            <button
              onClick={() => {
                setShowAll(!showAll);
                if (!showAll) setShowForm(true);
              }}
              className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              {showAll ? 'Показать меньше' : 'Смотреть больше отзывов'}
            </button>
          </motion.div>
        )}

        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
            >
              Ваш отзыв отправлен на модерацию
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showForm && showAll && (
            <CompactReviewForm onSubmit={handleReviewSubmit} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CustomerReviews;