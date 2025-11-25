import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Globe } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useCart();
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('collection'), path: '/products' },
    { name: t('about'), path: '/about' },
    { name: t('contact'), path: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLanguage = () => {
    if (language === 'FR') setLanguage('AR');
    else if (language === 'AR') setLanguage('EN');
    else setLanguage('FR');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled
          ? 'glass shadow-xl border-b border-gold-500/20'
          : 'bg-luxury-black/50 backdrop-blur-sm border-b border-white/5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 cursor-pointer"
          >
            <Link to="/" className="flex flex-col items-center">
              <span className="font-serif text-2xl font-bold gradient-text tracking-widest">
                MEN-TOUTCH
              </span>
              <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">
                Formal Elegance
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="relative px-3 py-2 text-sm font-medium transition-colors duration-300 font-sans uppercase tracking-wider group"
                  >
                    <span
                      className={`${isActive(link.path)
                          ? 'text-gold-500'
                          : 'text-gray-300 group-hover:text-gold-400'
                        }`}
                    >
                      {link.name}
                    </span>
                    {/* Underline animation */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-gold"
                      initial={{ width: isActive(link.path) ? '100%' : '0%' }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleLanguage}
              className="glass-gold px-3 py-2 rounded-lg text-gold-500 hover:bg-gold-500/20 transition-all flex items-center gap-2 text-sm font-bold"
            >
              <Globe size={18} />
              {language}
            </motion.button>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                to="/cart"
                className="relative text-gray-300 hover:text-gold-500 transition-colors"
              >
                <ShoppingBag size={24} />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-2 -right-2 bg-gradient-gold text-luxury-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-gold"
                    >
                      <motion.span
                        key={cartCount}
                        initial={{ scale: 1.5 }}
                        animate={{ scale: 1 }}
                      >
                        {cartCount}
                      </motion.span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden items-center gap-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleLanguage}
              className="glass-gold px-2 py-1 rounded text-gold-500 text-sm font-bold"
            >
              {language}
            </motion.button>

            <motion.div whileTap={{ scale: 0.9 }}>
              <Link to="/cart" className="relative text-gray-300">
                <ShoppingBag size={24} />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-2 -right-2 bg-gradient-gold text-luxury-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            </motion.div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gold-500 hover:text-white focus:outline-none"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={28} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-gold border-t border-gold-500/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-4 rounded-lg text-base font-medium text-center transition-all ${isActive(link.path)
                        ? 'text-gold-500 bg-gold-500/10 border border-gold-500/30'
                        : 'text-gray-300 hover:text-gold-500 hover:bg-gold-500/5'
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
