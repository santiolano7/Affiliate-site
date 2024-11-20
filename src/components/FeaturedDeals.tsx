import React, { useState, useEffect } from 'react';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const featuredDeals = [
  {
    id: 'f1',
    retailer: 'Amazon',
    cashbackPercent: 12,
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&h=400&fit=crop',
    description: 'Limited time offer: Enhanced cashback on all purchases',
  },
  {
    id: 'f2',
    retailer: 'Nike',
    cashbackPercent: 15,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=400&fit=crop',
    description: 'Extra cashback on new season items',
  },
  {
    id: 'f3',
    retailer: 'Apple',
    cashbackPercent: 8,
    image: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800&h=400&fit=crop',
    description: 'Special cashback rate on MacBooks and iPads',
  },
  {
    id: 'f4',
    retailer: 'Booking.com',
    cashbackPercent: 10,
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=400&fit=crop',
    description: 'Exclusive travel deals with enhanced cashback',
  },
];

export default function FeaturedDeals() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const dealsPerPage = 2;
  const totalPages = Math.ceil(featuredDeals.length / dealsPerPage);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [currentPage, isAnimating]);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const visibleDeals = featuredDeals.slice(
    currentPage * dealsPerPage,
    (currentPage + 1) * dealsPerPage
  );

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-900">Featured Offers</h2>
        </div>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentPage === index
                  ? 'bg-indigo-600 w-4'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="relative overflow-hidden">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-transform duration-500 ${
              isAnimating ? 'opacity-50' : 'opacity-100'
            }`}
            style={{
              transform: `translateX(-${currentPage * 100}%)`,
            }}
          >
            {visibleDeals.map((deal) => (
              <div key={deal.id} className="featured-card group cursor-pointer">
                <div className="absolute inset-0">
                  <img
                    src={deal.image}
                    alt={deal.retailer}
                    className="w-full h-full object-cover opacity-40"
                  />
                </div>
                <div className="relative p-8">
                  <h3 className="text-2xl font-bold mb-2">{deal.retailer}</h3>
                  <p className="text-4xl font-bold mb-4">{deal.cashbackPercent}%</p>
                  <p className="text-lg opacity-90">{deal.description}</p>
                  <button className="mt-6 bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold
                                   group-hover:bg-opacity-95 transition-all duration-300">
                    Activate Offer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-colors"
          aria-label="Previous deals"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-colors"
          aria-label="Next deals"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}