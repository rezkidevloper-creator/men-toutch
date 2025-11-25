import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, addToCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-luxury-black px-4 text-center">
        <h2 className="text-3xl font-serif font-bold text-white mb-4">Your Cart is Empty</h2>
        <p className="text-gray-400 mb-8">Looks like you haven't made your choice yet.</p>
        <Link to="/products">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <motion.div 
                layout
                key={`${item.id}-${item.selectedSize}`}
                className="flex flex-col sm:flex-row items-start sm:items-center bg-luxury-card p-4 rounded-sm border border-white/5 gap-4"
              >
                <div className="w-24 h-32 flex-shrink-0 bg-gray-800 rounded-sm overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium text-white truncate">{item.name}</h3>
                  <p className="text-gold-500 text-sm mb-1">{item.price.toLocaleString()} DA</p>
                  <p className="text-gray-500 text-sm">Size: {item.selectedSize}</p>
                </div>

                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                  <div className="flex items-center border border-gray-700 rounded-sm">
                    <button 
                      onClick={() => { /* logic handled in context usually, simplified here */ }}
                      disabled={item.quantity <= 1}
                      className="p-2 text-gray-400 hover:text-white disabled:opacity-30"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-2 text-white">{item.quantity}</span>
                    <button 
                      onClick={() => addToCart(item, item.selectedSize)}
                      className="p-2 text-gray-400 hover:text-white"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id, item.selectedSize)}
                    className="p-2 text-red-400 hover:bg-red-400/10 rounded-full transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-luxury-card p-6 rounded-sm border border-white/5 sticky top-24">
              <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 border-b border-white/10 pb-6">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>{totalPrice.toLocaleString()} DA</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
              </div>

              <div className="flex justify-between text-white font-bold text-lg mb-8">
                <span>Total</span>
                <span className="text-gold-500">{totalPrice.toLocaleString()} DA</span>
              </div>

              <Link to="/checkout">
                <Button fullWidth className="flex items-center justify-center gap-2">
                  Proceed to Checkout <ArrowRight size={18} />
                </Button>
              </Link>
              
              <Link to="/products">
                <Button variant="ghost" fullWidth className="mt-4 text-sm">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};