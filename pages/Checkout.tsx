import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '../components/Button';
import { CheckoutDetails } from '../types';
import { CheckCircle, MapPin, User, Phone, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { WILAYAS } from '../constants';

export const Checkout: React.FC = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<CheckoutDetails>({
    fullName: '',
    phone: '',
    wilaya: '',
    city: '',
    address: ''
  });

  if (cart.length === 0 && !isSubmitted) {
    navigate('/');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    clearCart();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-luxury-black flex items-center justify-center px-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-luxury-card p-8 rounded-sm border border-gold-900 max-w-md w-full text-center"
        >
          <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-black" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-white mb-4">Order Confirmed!</h2>
          <p className="text-gray-400 mb-6">
            Shukran, {formData.fullName}. Your order has been received. 
            <br/>We will contact you at <span className="text-gold-500">{formData.phone}</span> to confirm delivery to {formData.wilaya}.
          </p>
          <div className="bg-white/5 p-4 rounded mb-6 text-sm text-gray-300">
             Payment Method: <strong>Cash On Delivery (Paiement à la livraison)</strong>
          </div>
          <Button onClick={() => navigate('/')} fullWidth>Return Home</Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury-black py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif font-bold text-white mb-8 text-center">Checkout / إتمام الطلب</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Form */}
          <div className="bg-luxury-card p-6 md:p-10 rounded-sm border border-white/5 h-fit">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-gold-500 mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                  <User size={20}/> Personal Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Full Name (الاسم واللقب)</label>
                    <input 
                      required type="text" name="fullName" value={formData.fullName} onChange={handleChange}
                      placeholder="e.g. Mohamed Amine"
                      className="w-full bg-luxury-black border border-white/10 rounded-sm px-4 py-3 text-white focus:border-gold-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number (رقم الهاتف)</label>
                    <input 
                      required type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      placeholder="05/06/07..."
                      className="w-full bg-luxury-black border border-white/10 rounded-sm px-4 py-3 text-white focus:border-gold-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gold-500 mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                  <MapPin size={20}/> Delivery Address
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Wilaya (الولاية)</label>
                    <select 
                      required name="wilaya" value={formData.wilaya} onChange={handleChange}
                      className="w-full bg-luxury-black border border-white/10 rounded-sm px-4 py-3 text-white focus:border-gold-500 focus:outline-none appearance-none"
                    >
                      <option value="">Select Wilaya</option>
                      {WILAYAS.map((wilaya) => (
                        <option key={wilaya} value={wilaya}>{wilaya}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">City / Commune (المدينة)</label>
                      <input 
                        required type="text" name="city" value={formData.city} onChange={handleChange}
                        placeholder="e.g. Bab Ezzouar"
                        className="w-full bg-luxury-black border border-white/10 rounded-sm px-4 py-3 text-white focus:border-gold-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Detailed Address (العنوان)</label>
                    <input 
                      required type="text" name="address" value={formData.address} onChange={handleChange}
                      placeholder="House number, Street name"
                      className="w-full bg-luxury-black border border-white/10 rounded-sm px-4 py-3 text-white focus:border-gold-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-bold text-gold-500 mb-4 border-b border-white/10 pb-2">Payment Method</h3>
                <div className="flex items-center p-4 border border-gold-500/50 bg-gold-500/10 rounded-sm">
                  <input type="radio" checked readOnly className="text-gold-500 focus:ring-gold-500 h-4 w-4" />
                  <span className="ml-3 text-white font-medium">Paiement à la livraison (Cash On Delivery)</span>
                </div>
              </div>

              <Button type="submit" fullWidth className="text-lg py-4 mt-6">
                Confirm Order (تأكيد الطلب)
              </Button>

            </form>
          </div>

          {/* Right Column: Summary */}
          <div>
             <div className="bg-luxury-card p-6 md:p-10 rounded-sm border border-white/5 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                   <ShoppingBag size={20} className="text-gold-500"/> Order Summary
                </h3>
                
                <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                   {cart.map((item) => (
                     <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 py-4 border-b border-white/5">
                        <div className="w-16 h-20 bg-gray-800 rounded-sm overflow-hidden flex-shrink-0">
                           <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                           <h4 className="text-white font-medium text-sm mb-1">{item.name}</h4>
                           <div className="flex flex-wrap gap-3 text-xs text-gray-400 mt-1">
                              <span className="bg-white/5 px-2 py-1 rounded">Size (المقاس): <strong className="text-gold-500">{item.selectedSize}</strong></span>
                              <span className="bg-white/5 px-2 py-1 rounded">Qty (الكمية): <strong className="text-gold-500">{item.quantity}</strong></span>
                           </div>
                           <p className="text-gold-500 font-bold mt-2 text-right">
                              {(item.price * item.quantity).toLocaleString()} DA
                           </p>
                        </div>
                     </div>
                   ))}
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>{totalPrice.toLocaleString()} DA</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Delivery (Yalidine/Wilaya)</span>
                    <span className="text-gold-500">Free</span>
                  </div>
                  <div className="flex justify-between text-white font-bold text-xl pt-4 border-t border-white/10 mt-4">
                    <span>Total</span>
                    <span className="text-gold-500">{totalPrice.toLocaleString()} DA</span>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};