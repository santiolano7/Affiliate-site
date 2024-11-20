import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { Deal } from '../types';

interface DealCardProps {
  deal: Deal;
}

export default function DealCard({ deal }: DealCardProps) {
  return (
    <div className="deal-card">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <img
            src={deal.logo}
            alt={`${deal.retailer} logo`}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <span className="text-2xl font-bold text-indigo-600">
            {deal.cashbackPercent}%
          </span>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-900">{deal.retailer}</h3>
          <p className="text-gray-600 text-sm">{deal.description}</p>
          {deal.terms && (
            <p className="text-xs text-gray-500">{deal.terms}</p>
          )}
        </div>
        <button className="mt-4 w-full bg-gradient-to-r from-indigo-600 to-indigo-700 
                         text-white py-3 px-4 rounded-lg font-semibold hover:from-indigo-700 
                         hover:to-indigo-800 transition-all duration-300 flex items-center 
                         justify-center gap-2 group">
          <span>Activate Cashback</span>
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}