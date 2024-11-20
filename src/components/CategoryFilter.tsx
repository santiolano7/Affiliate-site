import React from 'react';
import { categories } from '../data/deals';
import * as Icons from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export default function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <button
        onClick={() => onSelectCategory(null)}
        className={`flex items-center px-5 py-2.5 rounded-lg font-medium transition-all duration-300 
                   ${selectedCategory === null
          ? 'bg-indigo-600 text-white shadow-md'
          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
        }`}
      >
        All Deals
      </button>
      {categories.map((category) => {
        const IconComponent = Icons[category.icon as keyof typeof Icons];
        return (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`flex items-center px-5 py-2.5 rounded-lg font-medium transition-all duration-300
                       ${selectedCategory === category.id
              ? 'bg-indigo-600 text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {IconComponent && <IconComponent className="w-4 h-4 mr-2" />}
            {category.name}
          </button>
        );
      })}
    </div>
  );
}