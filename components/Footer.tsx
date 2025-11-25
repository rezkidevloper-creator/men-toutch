import React from 'react';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-gold-500">MEN-TOUTCH</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Redefining masculine elegance with premium formal wear. 
              Crafted for the modern gentleman who commands attention.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-gray-400 hover:text-gold-500 text-sm transition-colors">New Arrivals</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-gold-500 text-sm transition-colors">Suits</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-gold-500 text-sm transition-colors">Accessories</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-gold-500 text-sm transition-colors">Best Sellers</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-400 hover:text-gold-500 text-sm transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-gold-500 text-sm transition-colors">About Brand</Link></li>
              <li><span className="text-gray-500 text-sm cursor-not-allowed">Shipping Policy</span></li>
              <li><span className="text-gray-500 text-sm cursor-not-allowed">Returns & Exchanges</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold-500 mt-0.5" />
                <span className="text-gray-400 text-sm">123 Didouche Mourad St,<br/>Algiers, Algeria 16000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gold-500" />
                <span className="text-gray-400 text-sm">+213 (0) 555 123 456</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gold-500" />
                <span className="text-gray-400 text-sm">contact@mentoutch.dz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Men-Toutch. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-600 text-xs cursor-pointer hover:text-gray-400">Privacy Policy</span>
            <span className="text-gray-600 text-xs cursor-pointer hover:text-gray-400">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};