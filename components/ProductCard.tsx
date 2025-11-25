import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Eye, Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-luxury-card overflow-hidden rounded-xl border border-luxury-border hover:border-gold-500/50 transition-all duration-500 hover-glow"
      style={{
        transform: isHovered ? 'perspective(1000px) rotateX(2deg)' : 'none',
      }}
    >
      <Link to={`/product/${product.id}`}>
        {/* Image Container */}
        <div className="aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-luxury-dark to-luxury-card relative">
          <motion.img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center"
            animate={{
              scale: isHovered ? 1.1 : 1,
              filter: isHovered ? 'brightness(1.1)' : 'brightness(0.9)',
            }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Badges */}
          <AnimatePresence>
            {(product.isNewArrival || product.isBestSeller) && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="absolute top-4 left-4 z-10"
              >
                <motion.span
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`badge ${product.isNewArrival ? 'badge-gold' : 'bg-white text-luxury-black'} shadow-lg`}
                >
                  {product.isNewArrival ? '✨ Nouveau' : '🔥 Best Seller'}
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Buttons */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-4 left-4 right-4 flex gap-2 z-10"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 glass-gold py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-gold-500 font-semibold hover:bg-gold-500/20 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    // Add to cart logic
                  }}
                >
                  <ShoppingCart size={18} />
                  <span className="text-sm">Ajouter</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-gold p-3 rounded-lg text-gold-500 hover:bg-gold-500/20 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    // Quick view logic
                  }}
                >
                  <Eye size={18} />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Favorite Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-4 right-4 z-10 glass p-2.5 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
          >
            <Heart
              size={20}
              className={`transition-colors ${isFavorite ? 'fill-gold-500 text-gold-500' : 'text-white'}`}
            />
          </motion.button>
        </div>

        {/* Product Info */}
        <div className="p-5 relative">
          {/* Decorative line */}
          <motion.div
            className="absolute top-0 left-0 h-0.5 bg-gradient-gold"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? '100%' : '0%' }}
            transition={{ duration: 0.4 }}
          />

          <h3 className="text-lg font-serif text-white truncate mb-1 group-hover:text-gold-400 transition-colors">
            {product.name}
          </h3>

          <p className="text-sm text-gray-400 mb-3 capitalize">
            {product.category}
          </p>

          <div className="flex items-center justify-between">
            <motion.p
              className="text-gold-500 font-bold text-xl"
              animate={{
                scale: isHovered ? 1.05 : 1,
              }}
            >
              {product.price.toLocaleString()} <span className="text-sm">DA</span>
            </motion.p>

            <AnimatePresence>
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="text-xs text-gold-400 uppercase tracking-widest font-semibold flex items-center gap-1"
                >
                  Voir Plus
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};