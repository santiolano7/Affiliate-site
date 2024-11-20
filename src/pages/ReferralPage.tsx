import React from 'react';
import { Users, Gift, CreditCard, ArrowRight, Share2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ReferralPage() {
  const [referralLink] = React.useState('https://cashbackpro.com/ref/user123');
  const [copied, setCopied] = React.useState(false);
  const { translations: t } = useLanguage();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      icon: Share2,
      title: 'Share Your Link',
      description: 'Share your unique referral link with friends and family',
    },
    {
      icon: Gift,
      title: 'Friends Join & Shop',
      description: 'When they sign up and make their first purchase',
    },
    {
      icon: CreditCard,
      title: 'Both Earn Rewards',
      description: 'You get £10, they get £5 welcome bonus',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 mb-12 text-white">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Refer Friends, Earn Together</h1>
          </div>
          <p className="text-xl text-primary-100 mb-8">
            Share the savings with friends and family. You'll both earn rewards when they join and shop!
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <p className="text-sm text-primary-100 mb-2">Your Referral Link</p>
            <div className="flex gap-4 items-center">
              <code className="flex-1 bg-white/10 rounded-lg px-4 py-3 font-mono text-sm">
                {referralLink}
              </code>
              <button
                onClick={copyToClipboard}
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                {copied ? 'Copied!' : 'Copy Link'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold mb-1">£10</p>
              <p className="text-sm text-primary-100">You Earn</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold mb-1">£5</p>
              <p className="text-sm text-primary-100">They Earn</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold mb-1">∞</p>
              <p className="text-sm text-primary-100">No Limit</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          How Referrals Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              How long does it take to receive the referral bonus?
            </h3>
            <p className="text-gray-600">
              The referral bonus will be credited to your account within 30 days of your friend's first qualifying purchase.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Is there a limit to how many friends I can refer?
            </h3>
            <p className="text-gray-600">
              No! You can refer as many friends as you like and earn rewards for each successful referral.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              What counts as a qualifying purchase?
            </h3>
            <p className="text-gray-600">
              Any purchase made through our platform that earns cashback qualifies, as long as it's not refunded or canceled.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}