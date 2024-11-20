import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Shield, Cookie, FileText, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const footerLinks = {
  help: [
    { title: 'FAQ', href: '/faq' },
    { title: 'Contact Us', href: '/contact' },
    { title: 'Help Centre', href: '/help' },
    { title: 'How It Works', href: '/how-it-works' },
  ],
  legal: [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms & Conditions', href: '/terms' },
    { title: 'Cookie Policy', href: '/cookies' },
    { title: 'Legal Information', href: '/legal' },
  ],
  company: [
    { title: 'About Us', href: '/about' },
    { title: 'Careers', href: '/careers' },
    { title: 'Press', href: '/press' },
    { title: 'Blog', href: '/blog' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com' },
  { icon: Twitter, href: 'https://twitter.com' },
  { icon: Instagram, href: 'https://instagram.com' },
  { icon: Youtube, href: 'https://youtube.com' },
];

export default function Footer() {
  const { translations: t } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-2xl font-bold text-indigo-600 mb-4 block">
              CashbackPro
            </Link>
            <p className="text-gray-500 mb-4">
              Earn cashback on your everyday purchases from thousands of retailers.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-600 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-indigo-600" />
              Help & Support
            </h3>
            <ul className="space-y-2">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-500 hover:text-indigo-600 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-indigo-600" />
              Legal
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-500 hover:text-indigo-600 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-600" />
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-500 hover:text-indigo-600 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cookie Notice */}
        <div className="border-t border-gray-100 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-500">
              <Cookie className="w-5 h-5" />
              <p className="text-sm">
                We use cookies to improve your experience. By using our site, you agree to our{' '}
                <Link to="/cookies" className="text-indigo-600 hover:text-indigo-700">
                  cookie policy
                </Link>
                .
              </p>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} CashbackPro. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}