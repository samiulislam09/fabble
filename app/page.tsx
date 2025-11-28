'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Music2, Check } from 'lucide-react';

export default function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    
    // Simulate submission delay
    setTimeout(() => {
      setSubmitted(true);
      setEmail('');
      setLoading(false);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 500);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 via-stone-50 to-stone-100 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl flex flex-col items-center justify-center space-y-8 text-center">
        
        {/* Logo */}
        <div className="mb-4">
          <Image
            src="/logo.png"
            alt="Fabble"
            width={120}
            height={120}
            className="mx-auto"
            priority
          />
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 text-balance">
            Coming Soon
          </h1>
          <p className="text-lg md:text-xl text-stone-600 font-light text-balance leading-relaxed">
            We're crafting something extraordinary. Get notified when Fabble launches.
          </p>
        </div>

        {/* Email Signup Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md pt-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-5 py-3 rounded-full border border-stone-300 bg-white text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition"
            />
            <button
              type="submit"
              disabled={loading || submitted}
              className="px-8 py-3 rounded-full bg-stone-900 text-white font-medium hover:bg-stone-800 transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {submitted ? (
                <>
                  <Check size={18} />
                  <span>Subscribed</span>
                </>
              ) : loading ? (
                'Subscribing...'
              ) : (
                'Notify Me'
              )}
            </button>
          </div>
        </form>

        {/* Social Links */}
        <div className="pt-8 border-t border-stone-300 w-full">
          <p className="text-sm text-stone-500 font-medium mb-6">Follow our journey</p>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://facebook.com/fabble32"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white border border-stone-300 text-stone-900 hover:bg-stone-50 hover:border-stone-400 transition"
              aria-label="Follow on Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com/fabble32"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white border border-stone-300 text-stone-900 hover:bg-stone-50 hover:border-stone-400 transition"
              aria-label="Follow on Instagram"
            >
              <Instagram size={20} />
            </a>
            
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 text-xs text-stone-500">
          <p>We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </main>
  );
}
