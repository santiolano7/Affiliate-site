import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { deals } from '../data/deals';
import DealCard from '../components/DealCard';
import CategoryFilter from '../components/CategoryFilter';
import FeaturedDeals from '../components/FeaturedDeals';
import HowItWorks from '../components/HowItWorks';
import Reviews from '../components/Reviews';
import { useLanguage } from '../contexts/LanguageContext';

export default function DealsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { translations: t } = useLanguage();

  const filteredDeals = deals.filter((deal) => {
    const matchesCategory = selectedCategory ? deal.category === selectedCategory : true;
    const matchesSearch = deal.retailer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         deal.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t.deals.title}
        </h1>
        <div className="relative max-w-2xl">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder={t.deals.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input pl-10"
          />
        </div>
      </div>

      <FeaturedDeals />

      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredDeals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>

      <HowItWorks />
      <Reviews />
    </div>
  );
}