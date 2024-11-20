import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DealsPage from './pages/DealsPage';
import CategoryPage from './pages/CategoryPage';
import ReferralPage from './pages/ReferralPage';
import NewsletterPopup from './components/NewsletterPopup';
import WhatsAppChat from './components/WhatsAppChat';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewsletter(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<DealsPage />} />
              <Route path="/deals" element={<DealsPage />} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route path="/refer" element={<ReferralPage />} />
            </Routes>
          </main>
          <Footer />
          <NewsletterPopup
            isOpen={showNewsletter}
            onClose={() => setShowNewsletter(false)}
          />
          <WhatsAppChat />
        </div>
      </Router>
    </LanguageProvider>
  );
}