import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Minus, Plus, MapPin, Phone, User, ShoppingBag } from 'lucide-react';
import { PRODUCTS, WILAYAS } from '../constants';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const product = PRODUCTS.find((p) => p.id === Number(id));
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    wilaya: '',
    city: ''
  });
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center text-white">Product not found.</div>;
  }

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!selectedSize) {
      setError('يرجى اختيار المقاس (Please select a size)');
      return;
    }

    // Simulate API call
    setIsOrderPlaced(true);
  };

  if (isOrderPlaced) {
    return (
      <div className="min-h-screen bg-luxury-black flex items-center justify-center px-4 py-12">
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
            شكراً لك، {formData.fullName}.<br/>
            تم استلام طلبك بنجاح.<br/>
            سنتصل بك على الرقم <span className="text-gold-500">{formData.phone}</span> لتأكيد الطلب.
          </p>
          
          <div className="bg-white/5 p-4 rounded text-left mb-6 text-sm space-y-2">
            <div className="flex justify-between text-gray-300">
              <span>Product:</span>
              <span className="text-white font-medium">{product.name}</span>
            </div>
             <div className="flex justify-between text-gray-300">
              <span>Size:</span>
              <span className="text-white font-medium">{selectedSize}</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Quantity:</span>
              <span className="text-white font-medium">{quantity}</span>
            </div>
             <div className="flex justify-between text-gray-300 border-t border-white/10 pt-2 mt-2">
              <span>Total:</span>
              <span className="text-gold-500 font-bold">{(product.price * quantity).toLocaleString()} DA</span>
            </div>
          </div>

          <Button onClick={() => navigate('/')} fullWidth>Return Home</Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-400 hover:text-gold-500 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" /> Back to Collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Section */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-[3/4] bg-gray-800 rounded-sm overflow-hidden sticky top-24"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Details & Form Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <span className="text-gold-500 font-bold uppercase tracking-wider text-sm mb-2">{product.category}</span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">{product.name}</h1>
            <p className="text-3xl text-gold-500 font-light mb-6">{product.price.toLocaleString()} DA</p>
            
            <div className="prose prose-invert mb-8">
              <p className="text-gray-400 leading-relaxed">{product.description}</p>
            </div>

            {/* Selection Section */}
            <div className="bg-luxury-card border border-white/5 p-6 rounded-sm mb-8">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <ShoppingBag size={18} className="text-gold-500"/> Product Options
              </h3>
              
              {/* Size */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-400 mb-3">Select Size (المقاس)</label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => {setSelectedSize(size); setError('');}}
                      className={`w-12 h-12 rounded-sm flex items-center justify-center border transition-all ${
                        selectedSize === size
                          ? 'border-gold-500 bg-gold-500 text-black font-bold'
                          : 'border-gray-700 text-gray-400 hover:border-gold-500 hover:text-gold-500'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {error && <p className="text-red-500 text-sm mt-2 animate-pulse">{error}</p>}
              </div>

              {/* Quantity */}
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-400 mb-3">Quantity (الكمية)</label>
                <div className="flex items-center w-32 border border-gray-700 rounded-sm bg-luxury-black">
                  <button 
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="p-3 text-gray-400 hover:text-white disabled:opacity-30"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="flex-1 text-center text-white font-medium">{quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(1)}
                    className="p-3 text-gray-400 hover:text-white"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Direct Checkout Form */}
            <div className="bg-luxury-card border border-gold-500/30 p-6 md:p-8 rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.05)]">
               <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                  <h3 className="text-xl font-bold text-white">Express Checkout</h3>
                  <span className="text-xs bg-gold-500/20 text-gold-500 px-2 py-1 rounded uppercase tracking-wider">الدفع عند الاستلام</span>
               </div>

               <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1 flex items-center gap-2">
                      <User size={16}/> Full Name (الاسم واللقب)
                    </label>
                    <input 
                      required type="text" name="fullName" value={formData.fullName} onChange={handleChange}
                      placeholder="Mohamed Amine"
                      className="w-full bg-luxury-black border border-white/10 rounded-sm px-4 py-3 text-white focus:border-gold-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1 flex items-center gap-2">
                      <Phone size={16}/> Phone Number (رقم الهاتف)
                    </label>
                    <input 
                      required type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      placeholder="05 xx xx xx xx"
                      className="w-full bg-luxury-black border border-white/10 rounded-sm px-4 py-3 text-white focus:border-gold-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1 flex items-center gap-2">
                        <MapPin size={16}/> Wilaya (الولاية)
                      </label>
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
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">City (البلدية)</label>
                      <input 
                        required type="text" name="city" value={formData.city} onChange={handleChange}
                        placeholder="e.g. Hydra"
                        className="w-full bg-luxury-black border border-white/10 rounded-sm px-4 py-3 text-white focus:border-gold-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 mt-4">
                    <div className="flex justify-between items-center mb-6">
                       <span className="text-gray-400">Total Amount:</span>
                       <span className="text-2xl font-bold text-gold-500">{(product.price * quantity).toLocaleString()} DA</span>
                    </div>
                    <Button 
                      type="submit" 
                      fullWidth
                      className="text-lg py-4 font-bold tracking-wider"
                    >
                      Commander Maintenant (Order Now)
                    </Button>
                    <p className="text-center text-xs text-gray-500 mt-3">
                      Free delivery to 58 Wilayas within 24-48 hours.
                    </p>
                  </div>
               </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};