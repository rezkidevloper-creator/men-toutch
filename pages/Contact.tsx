import React from 'react';
import { MessageCircle, Send, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '../components/Button';
import { SOCIAL_LINKS } from '../constants';

export const Contact: React.FC = () => {
  const handleWhatsApp = () => {
    window.open(SOCIAL_LINKS.whatsapp, '_blank');
  };

  return (
    <div className="min-h-screen bg-luxury-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-gray-400">We are here to assist you with your sartorial needs.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-luxury-card p-8 rounded-sm border border-white/5">
            <h2 className="text-2xl font-serif text-white mb-6">Send us a message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input type="text" className="w-full bg-luxury-black border border-white/10 p-3 text-white focus:border-gold-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input type="email" className="w-full bg-luxury-black border border-white/10 p-3 text-white focus:border-gold-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea rows={4} className="w-full bg-luxury-black border border-white/10 p-3 text-white focus:border-gold-500 focus:outline-none"></textarea>
              </div>
              <Button className="w-full flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </Button>
            </form>
          </div>

          {/* Direct Contact Info */}
          <div className="space-y-8">
            
            <div className="bg-green-900/20 border border-green-500/30 p-8 rounded-sm text-center">
              <MessageCircle size={48} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Chat on WhatsApp</h3>
              <p className="text-gray-400 mb-6">Need immediate assistance? Chat directly with our stylists.</p>
              <Button onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-500 text-white w-full">
                Open WhatsApp
              </Button>
            </div>

            <div className="bg-luxury-card p-8 rounded-sm border border-white/5 space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-gold-500 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-bold">Headquarters</h4>
                  <p className="text-gray-400 text-sm mt-1">123 Fashion Avenue, Suite 100<br/>New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="text-gold-500 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-bold">Phone</h4>
                  <p className="text-gray-400 text-sm mt-1">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="text-gold-500 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-bold">Email</h4>
                  <p className="text-gray-400 text-sm mt-1">support@mentoutch.com</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
