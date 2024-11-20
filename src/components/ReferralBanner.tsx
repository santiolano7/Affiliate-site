import React, { useState } from 'react';
import { Users, Copy, Check } from 'lucide-react';

export default function ReferralBanner() {
  const [copied, setCopied] = useState(false);
  const referralLink = 'https://cashbackpro.com/ref/user123';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl p-6 text-white mb-12">
      <div className="flex items-start justify-between flex-wrap gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-6 h-6" />
            <h2 className="text-xl font-bold">Refer Friends, Earn More</h2>
          </div>
          <p className="text-indigo-100 mb-4">
            Get £10 bonus when your friends join and make their first purchase.
            They'll receive £5 welcome bonus too!
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[240px] bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <p className="text-xs text-indigo-100 mb-1">Your Referral Link</p>
              <div className="flex items-center justify-between gap-2">
                <code className="text-sm font-mono truncate">
                  {referralLink}
                </code>
                <button
                  onClick={copyToClipboard}
                  className="shrink-0 p-2 hover:bg-white/10 rounded-md transition-colors"
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-8 flex-wrap">
          <div className="text-center">
            <p className="text-3xl font-bold">£50</p>
            <p className="text-sm text-indigo-100">Total Earned</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">5</p>
            <p className="text-sm text-indigo-100">Friends Referred</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">£10</p>
            <p className="text-sm text-indigo-100">Per Referral</p>
          </div>
        </div>
      </div>
    </div>
  );
}