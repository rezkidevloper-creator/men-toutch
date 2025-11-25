import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-luxury-black">
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=2574&auto=format&fit=crop" 
          alt="Tailor working" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
           <h1 className="text-5xl md:text-7xl font-serif font-bold text-white text-center">The Legacy</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="prose prose-lg prose-invert mx-auto text-center"
        >
          <h2 className="text-gold-500 font-serif">Our Vision</h2>
          <p className="text-gray-300 leading-relaxed text-xl">
            "Men-Toutch" was born from a simple desire: to restore the art of dressing well for the modern man.
          </p>
          <p className="text-gray-400">
            In a world of fast fashion, we stand still. We believe that a suit is not just clothing; it is armor. 
            It is a statement of intent. Whether you are walking into a boardroom, a wedding, or a gala, 
            what you wear speaks before you do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          <div className="bg-luxury-card p-8 border-l-4 border-gold-500">
            <h3 className="text-2xl text-white font-serif mb-4">Craftsmanship</h3>
            <p className="text-gray-400">
              Every stitch counts. We partner with master tailors who understand the geometry of the male form, 
              ensuring a fit that feels as good as it looks.
            </p>
          </div>
          <div className="bg-luxury-card p-8 border-l-4 border-gold-500">
            <h3 className="text-2xl text-white font-serif mb-4">Material</h3>
            <p className="text-gray-400">
              We source fabrics that breathe, move, and last. From Italian wools to Egyptian cottons, 
              luxury is tactile in every piece we sell.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
