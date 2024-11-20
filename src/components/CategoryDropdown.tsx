import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { categories } from '../data/deals';
import { useLanguage } from '../contexts/LanguageContext';
import * as Icons from 'lucide-react';

export default function CategoryDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { translations: t } = useLanguage();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
      >
        {t.nav.categories}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg py-2 z-50 animate-fade-in">
          {categories.map((category) => {
            const IconComponent = Icons[category.icon as keyof typeof Icons];
            return (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                {IconComponent && <IconComponent className="w-4 h-4" />}
                <span>{category.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}