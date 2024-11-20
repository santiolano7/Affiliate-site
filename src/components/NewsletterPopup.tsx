import React, { useState } from 'react';
import { X, Mail, Tag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterPopup({ isOpen, onClose }: NewsletterPopupProps) {
  const [email, setEmail] = useState('');
  const { translations: t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Newsletter subscription:', email);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white rounded-2xl w-full max-w-md relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Tag className="w-5 h-5" />
            <h2 className="text-xl font-bold">{t.newsletter.title}</h2>
          </div>
          <p className="text-indigo-100">{t.newsletter.subtitle}</p>
        </div>
        
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.newsletter.emailLabel}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder={t.newsletter.emailPlaceholder}
                  required
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              {t.newsletter.subscribe}
            </button>
          </form>
          
          <p className="mt-4 text-xs text-gray-500 text-center">
            {t.newsletter.terms}
          </p>
        </div>
      </div>
    </div>
  );
}