import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 5,
    date: '2 weeks ago',
    text: 'I\'ve earned over £200 in cashback this year alone! The process is so simple and the payouts are always on time.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    rating: 5,
    date: '1 month ago',
    text: 'Great selection of retailers and excellent cashback rates. The referral program is a nice bonus too!',
  },
  {
    id: 3,
    name: 'Emma Thompson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    rating: 4,
    date: '3 months ago',
    text: 'Easy to use platform with competitive cashback rates. Would highly recommend to anyone who shops online regularly.',
  },
];

export default function Reviews() {
  return (
    <div className="mb-16 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-8 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900">What Our Members Say</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {reviews.map((review) => (
          <div key={review.id} className="p-8">
            <div className="flex items-start gap-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <div className="flex items-center gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600">{review.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}