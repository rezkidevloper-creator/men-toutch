import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Users, Award } from 'lucide-react';
import { Button } from '../components/Button';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import { ThreeHero } from '../components/ThreeHero';

export const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.filter(p => p.isBestSeller || p.isNewArrival).slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ThreeHero />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-luxury-black to-luxury-dark border-y border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Users, value: '10K+', label: 'Clients Satisfaits' },
              { icon: Award, value: '500+', label: 'Produits Premium' },
              { icon: Star, value: '4.9', label: 'Note Moyenne' },
              { icon: TrendingUp, value: '98%', label: 'Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-gold"
                >
                  <stat.icon className="text-luxury-black" size={28} />
                </motion.div>
                <motion.h3
                  className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-end mb-12"
          >
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-serif font-bold text-white mb-3"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Collection <span className="gradient-text">Exclusive</span>
              </motion.h2>
              <p className="text-gray-400 text-lg">Découvrez nos pièces les plus prisées</p>
            </div>
            <Link
              to="/products"
              className="hidden md:flex items-center text-gold-500 hover:text-gold-300 transition-colors group mt-4 md:mt-0"
            >
              <span className="font-semibold">Voir Tout</span>
              <ArrowRight
                size={20}
                className="ml-2 transform group-hover:translate-x-2 transition-transform"
              />
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/products">
              <Button variant="outline" className="w-full">
                Voir Tous les Produits
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-luxury-dark to-luxury-card border-y border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-center mb-16"
          >
            Pourquoi <span className="gradient-text">Men-Touch</span> ?
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Qualité Premium',
                description: 'Tissus sélectionnés avec soin pour garantir durabilité et confort exceptionnel.',
                gradient: 'from-gold-500 to-gold-300'
              },
              {
                title: 'Coupe Parfaite',
                description: 'Designs taillés à la perfection pour sublimer votre silhouette avec élégance.',
                gradient: 'from-gold-400 to-gold-600'
              },
              {
                title: 'Style Intemporel',
                description: 'Collections qui transcendent les tendances pour un look toujours raffiné.',
                gradient: 'from-gold-600 to-gold-400'
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="card-glass p-8 text-center group hover:border-gold-500/50 transition-all"
              >
                <div className={`w-16 h-1 bg-gradient-to-r ${value.gradient} mx-auto mb-6 rounded-full`} />
                <h3 className="text-2xl font-serif font-bold text-gold-400 mb-4 group-hover:text-gold-300 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-luxury-black relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Prêt à Redéfinir Votre <span className="gradient-text">Style</span> ?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Rejoignez des milliers d'hommes qui ont choisi l'excellence et l'élégance
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/products">
                <button className="btn btn-primary text-lg px-12 py-4 hover-lift shadow-gold-lg">
                  Explorer la Collection
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
