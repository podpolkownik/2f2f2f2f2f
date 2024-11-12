import React, { forwardRef } from 'react';
import { Star } from 'lucide-react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ReviewProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  review: {
    name: string;
    date: string;
    image: string;
    text: string;
    rating: number;
    partialStar?: boolean;
  };
}

const ReviewCard = forwardRef<HTMLDivElement, ReviewProps>(({ review, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 border border-gray-100"
      {...props}
    >
      <div className="flex items-center space-x-3">
        <img 
          src={review.image} 
          alt={review.name} 
          className="w-10 h-10 rounded-full object-cover border border-gray-200"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-gray-900 truncate">{review.name}</h3>
          <p className="text-xs text-gray-500">{review.date}</p>
        </div>
        <div className="flex">
          {[...Array(Math.floor(review.rating))].map((_, i) => (
            <Star
              key={i}
              className="w-3.5 h-3.5 text-yellow-400 fill-current"
            />
          ))}
          {review.partialStar && (
            <div className="relative w-3.5 h-3.5">
              <Star className="absolute w-3.5 h-3.5 text-gray-300 fill-current" />
              <div className="absolute w-1/2 overflow-hidden">
                <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="text-sm text-gray-700 mt-2 line-clamp-3">{review.text}</p>
    </motion.div>
  );
});

ReviewCard.displayName = 'ReviewCard';

export default ReviewCard;