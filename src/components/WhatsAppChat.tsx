import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function WhatsAppChat() {
  const { translations: t } = useLanguage();
  const whatsappNumber = '+34600000000'; // Replace with your actual WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full 
                 shadow-lg hover:bg-green-600 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden group-hover:inline whitespace-nowrap">
          {t.chat.startChat}
        </span>
      </a>
    </div>
  );
}