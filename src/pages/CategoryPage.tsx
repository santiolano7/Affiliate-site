import React from 'react';
import { useParams } from 'react-router-dom';
import { Search, Star, TrendingUp, Percent } from 'lucide-react';
import { deals, categories } from '../data/deals';
import DealCard from '../components/DealCard';
import { useLanguage } from '../contexts/LanguageContext';
import * as Icons from 'lucide-react';

interface CategoryStats {
  [key: string]: {
    totalRetailers: number;
    avgCashback: number;
    topDeal: number;
    monthlyUsers: number;
  };
}

const categoryStats: CategoryStats = {
  sports: {
    totalRetailers: 245,
    avgCashback: 7.5,
    topDeal: 15,
    monthlyUsers: 25000,
  },
  beauty: {
    totalRetailers: 180,
    avgCashback: 8.2,
    topDeal: 12,
    monthlyUsers: 32000,
  },
  electronics: {
    totalRetailers: 320,
    avgCashback: 6.8,
    topDeal: 10,
    monthlyUsers: 45000,
  },
  retail: {
    totalRetailers: 400,
    avgCashback: 5.5,
    topDeal: 12,
    monthlyUsers: 50000,
  },
};

const featuredRetailers = {
  sports: [
    {
      name: 'Nike',
      logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&h=150&fit=crop',
      cashback: 12,
      special: 'Extra 3% on outlet items',
    },
    {
      name: 'Adidas',
      logo: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=150&h=150&fit=crop',
      cashback: 10,
      special: 'Limited time offer',
    },
    {
      name: 'Under Armour',
      logo: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=150&h=150&fit=crop',
      cashback: 8,
      special: 'Free shipping over £50',
    },
  ],
  // Add other categories...
};

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [searchQuery, setSearchQuery] = React.useState('');
  const { translations: t } = useLanguage();

  const category = categories.find((c) => c.id === categoryId);
  const IconComponent = category ? Icons[category.icon as keyof typeof Icons] : null;
  const stats = categoryStats[categoryId || ''] || categoryStats.sports;

  const filteredDeals = deals.filter((deal) => {
    const matchesCategory = deal.category === categoryId;
    const matchesSearch = deal.retailer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         deal.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (!category) {
    return <div className="text-center py-12">Category not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl p-8 mb-12 text-white">
        <div className="flex items-center gap-3 mb-6">
          {IconComponent && <IconComponent className="w-10 h-10" />}
          <h1 className="text-4xl font-bold">{category.name} Cashback</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <p className="text-3xl font-bold mb-1">{stats.totalRetailers}</p>
            <p className="text-sm opacity-90">Retailers</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <p className="text-3xl font-bold mb-1">{stats.avgCashback}%</p>
            <p className="text-sm opacity-90">Avg. Cashback</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <p className="text-3xl font-bold mb-1">Up to {stats.topDeal}%</p>
            <p className="text-sm opacity-90">Top Deal</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <p className="text-3xl font-bold mb-1">{(stats.monthlyUsers / 1000).toFixed(0)}k+</p>
            <p className="text-sm opacity-90">Monthly Users</p>
          </div>
        </div>

        <div className="relative max-w-2xl">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder={`Search ${category.name.toLowerCase()} retailers...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
          />
        </div>
      </div>

      {/* Featured Retailers */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <Star className="w-6 h-6 text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-900">Featured Retailers</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredRetailers.sports.map((retailer) => (
            <div key={retailer.name} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={retailer.logo}
                  alt={retailer.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{retailer.name}</h3>
                  <p className="text-sm text-gray-500">{retailer.special}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-indigo-600">{retailer.cashback}%</p>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Deals */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <Percent className="w-6 h-6 text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-900">All {category.name} Deals</h2>
        </div>
        {filteredDeals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDeals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <p className="text-gray-500">No deals found for this category</p>
          </div>
        )}
      </div>

      {/* Trending Deals */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-6 h-6 text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-900">Trending This Week</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredDeals.slice(0, 3).map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </div>
    </div>
  );
}