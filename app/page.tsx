'use client';

import { useState, useEffect, type MouseEvent } from 'react';
import Image from 'next/image';

export default function FabbleLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const products = [
    { id: 1, src: '/products/image1.jpeg', alt: 'Product 1', name: 'Product 1' },
    { id: 2, src: '/products/image2.jpeg', alt: 'Product 2', name: 'Product 2' },
    { id: 3, src: '/products/image3.jpeg', alt: 'Product 3', name: 'Product 3' },
    { id: 4, src: '/products/image4.jpeg', alt: 'Product 4', name: 'Product 4' },
    { id: 5, src: '/products/image5.jpeg', alt: 'Product 5', name: 'Product 5' },
    { id: 6, src: '/products/image6.jpeg', alt: 'Product 6', name: 'Product 6' },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  // Handle smooth scrolling
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  // Handle modal close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="font-sans overflow-x-hidden bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex justify-between items-center">
          {/* Logo */}
          <div className="relative h-20 w-32">
            <Image 
              src="/fabble.png" 
              alt="Fabble Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="text-gray-800 font-semibold hover:text-rose-500 transition-colors">
              Home
            </a>
            <a href="#features" onClick={(e) => handleScroll(e, '#features')} className="text-gray-800 font-semibold hover:text-rose-500 transition-colors">
              Features
            </a>
            <a href="#products" onClick={(e) => handleScroll(e, '#products')} className="text-gray-800 font-semibold hover:text-rose-500 transition-colors">
              Products
            </a>
            <a href="#gallery" onClick={(e) => handleScroll(e, '#gallery')} className="text-gray-800 font-semibold hover:text-rose-500 transition-colors">
              Gallery
            </a>
            {/* <a 
              href="#notify" 
              onClick={(e) => handleScroll(e, '#notify')} 
              className="bg-gradient-to-r from-rose-500 to-teal-400 text-white px-8 py-3 rounded-full font-bold hover:-translate-y-0.5 transition-transform"
            >
              Get Notified
            </a> */}
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative flex flex-col justify-center items-center w-10 h-10 z-50"
            aria-label="Toggle menu"
          >
            <span className={`absolute w-6 h-0.5 bg-gray-800 rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
            <span className={`absolute w-6 h-0.5 bg-gray-800 rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`absolute w-6 h-0.5 bg-gray-800 rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-white z-[45] transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl pt-20">
            <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="text-gray-800 font-semibold hover:text-rose-500 transition-colors">
              Home
            </a>
            <a href="#features" onClick={(e) => handleScroll(e, '#features')} className="text-gray-800 font-semibold hover:text-rose-500 transition-colors">
              Features
            </a>
            <a href="#products" onClick={(e) => handleScroll(e, '#products')} className="text-gray-800 font-semibold hover:text-rose-500 transition-colors">
              Products
            </a>
            <a href="#gallery" onClick={(e) => handleScroll(e, '#gallery')} className="text-gray-800 font-semibold hover:text-rose-500 transition-colors">
              Gallery
            </a>
            {/* <a
              href="#notify"
              onClick={(e) => handleScroll(e, '#notify')}
              className="bg-gradient-to-r from-rose-500 to-teal-400 text-white px-8 py-3 rounded-full font-bold"
            >
              Get Notified
            </a> */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/banner.png" 
            alt="Hero Background" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/85 via-purple-600/85 to-pink-400/85"></div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-white/10 animate-float"></div>
          <div className="absolute bottom-[15%] right-[10%] w-48 h-48 rounded-full bg-white/10 animate-float-delayed"></div>
          <div className="absolute top-[50%] right-[20%] w-36 h-36 rounded-full bg-white/10 animate-float-more-delayed"></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center relative z-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-black mb-8 leading-tight animate-fade-in-up drop-shadow-lg">
            Style Meets Comfort
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-10 font-light animate-fade-in-up animation-delay-200">
            Premium Shirts & T-Shirts <span className="font-bold">Coming Soon</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-400">
            <a 
              href="#products" 
              onClick={(e) => handleScroll(e, '#products')}
              className="bg-white text-purple-600 px-10 py-4 rounded-full text-lg font-bold hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              Explore Collection
            </a>
            {/* <a 
              href="#notify" 
              onClick={(e) => handleScroll(e, '#notify')}
              className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-purple-600 transition-all"
            >
              Join Waitlist
            </a> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Why Choose Fabble?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">✨</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Crafted from the finest materials for unmatched comfort and durability.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">🎨</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Modern Designs</h3>
              <p className="text-gray-600 leading-relaxed">
                Trendy styles that keep you ahead in fashion while staying timeless.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">💰</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Best Prices</h3>
              <p className="text-gray-600 leading-relaxed">
                Luxury quality at affordable prices. Premium doesn't have to be expensive.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">🚚</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Get your favorites delivered to your doorstep in record time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Collection
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Classic Shirts */}
            <div className="group relative bg-gradient-to-br from-purple-500 to-pink-500 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-6">👔</div>
                <h3 className="text-3xl font-bold text-white mb-4">Classic Shirts</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Timeless elegance meets modern comfort. Dress to impress.
                </p>
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-bold">
                  Coming Soon
                </span>
              </div>
            </div>

            {/* Premium T-Shirts */}
            <div className="group relative bg-gradient-to-br from-teal-500 to-blue-500 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-6">👕</div>
                <h3 className="text-3xl font-bold text-white mb-4">Premium T-Shirts</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Soft, breathable, and built to last. Perfect for any casual occasion.
                </p>
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-bold">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notify Section */}
      {/* <section id="notify" className="py-24 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Be the First to Know
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Join our waitlist and get exclusive early access to our premium collection
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-800 font-medium focus:outline-none focus:ring-4 focus:ring-white/50"
              required
            />
            <button
              type="submit"
              className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </section> */}

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Product Gallery
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Sneak peek at what's coming your way
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                onClick={() => setSelectedImage(product.src)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2"
              >
                <div className="relative h-96 overflow-hidden">
                  <Image 
                    src={product.src} 
                    alt={product.alt} 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Info */}
            <div>
              <div className="relative h-20 w-32 mb-6">
                <Image 
                  src="/fabble.png" 
                  alt="Fabble Logo" 
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Redefining fashion with premium quality shirts and t-shirts. Style meets comfort.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/fabble32" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/fabble32" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a 
                  href="https://www.tiktok.com/@fabble97" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                  aria-label="TikTok"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#features" onClick={(e) => handleScroll(e, '#features')} className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#products" onClick={(e) => handleScroll(e, '#products')} className="text-gray-400 hover:text-white transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#gallery" onClick={(e) => handleScroll(e, '#gallery')} className="text-gray-400 hover:text-white transition-colors">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-bold mb-6">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:fashionfabble@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                    fashionfabble@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Fabble. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Image Zoom Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer animate-fade-in"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-4xl hover:scale-110 transition-transform"
            aria-label="Close modal"
          >
            &times;
          </button>
          <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Zoomed product"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+8801624257024"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 group"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
      </a>
    </div>
  );
}