import React from 'react';
import { ShoppingCart, CreditCard, Wallet, ArrowRight, Play } from 'lucide-react';

const steps = [
  {
    icon: ShoppingCart,
    title: 'Shop Online',
    description: 'Browse our retailers and click through to their websites',
  },
  {
    icon: CreditCard,
    title: 'Make a Purchase',
    description: 'Buy as normal, directly on the retailer\'s website',
  },
  {
    icon: Wallet,
    title: 'Earn Cashback',
    description: 'Get up to 12% cashback credited to your account',
  },
];

export default function HowItWorks() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
        How Cashback Works
      </h2>

      {/* Video Section */}
      <div className="mb-12 relative aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl">
        <video
          className="w-full h-full object-cover"
          src="https://assets.mixkit.co/videos/preview/mixkit-online-shopping-on-smartphone-4050-large.mp4"
          poster="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop"
          controls={isPlaying}
          onClick={() => setIsPlaying(true)}
        >
          Your browser does not support the video tag.
        </video>
        
        {!isPlaying && (
          <div 
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center cursor-pointer group"
            onClick={() => setIsPlaying(true)}
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-indigo-600 ml-1" />
            </div>
          </div>
        )}
      </div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <step.icon className="w-8 h-8 text-indigo-600" />
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
  );
}