import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import GalleryItem from '@/components/GalleryItem';

// Import Logo for Preloader
import logo from '../assets/logo.png'; 

// Asset Imports
import img1 from '../assets/ead/1.jpg';
import img2 from '../assets/ead/2.jpg';
import img3 from '../assets/ead/3.jpg';
import img4 from '../assets/ead/4.jpg';
import img5 from '../assets/ead/5.jpg';
import img6 from '../assets/ead/6.jpg';
import img7 from '../assets/esum/esum1.jpg';
import img8 from '../assets/esum/esum2.png';
import img24 from '../assets/esum/5.jpg';
import img25 from '../assets/esum/6.jpg';
import img26 from '../assets/esum/7.png';
import img27 from '../assets/esum/esum3.png';
import img28 from '../assets/esum/8.png';
import img29 from '../assets/esum/9.png';
import img30 from '../assets/esum/10.png';
import img31 from '../assets/esum/11.png';


import img10 from '../assets/competetions/1.png';
import img11 from '../assets/competetions/2.png';
import img12 from '../assets/competetions/3.png';
import img13 from '../assets/competetions/4.png';
import img14 from '../assets/competetions/5.png';
import img15 from '../assets/competetions/6.png';
import img16 from '../assets/competetions/7.png';
import img17 from '../assets/competetions/8.png';
import img18 from '../assets/ens/1.png';
import img19 from '../assets/ens/2.png';
import img20 from '../assets/ens/3.png';
import img21 from '../assets/ens/4.png';
import img22 from '../assets/ens/5.png';
import img23 from '../assets/ens/6.png';

const categories = ['All', 'E-Summit', 'EAD', 'Earn and Sell', 'Competitions'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  // Preloader Effect: Hide after 2 seconds or when window loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Minimum 2 seconds to show branding

    return () => clearTimeout(timer);
  }, []);

  const galleryItems = [
    { image: img1, title: 'EAD', event: 'EAD', category: 'EAD' },
    { image: img2, title: 'EAD', event: 'EAD', category: 'EAD' },
    { image: img3, title: 'EAD', event: 'EAD', category: 'EAD' },
    { image: img4, title: 'EAD', event: 'EAD', category: 'EAD' },
    { image: img5, title: 'EAD', event: 'EAD', category: 'EAD' },
    { image: img6, title: 'EAD', event: 'EAD', category: 'EAD' },
    { image: img7, title: 'E-Summit', event: 'E-Summit', category: 'E-Summit' },
    { image: img8, title: 'E-Summit', event: 'E-Summit', category: 'E-Summit' },
    { image: img24, title: 'E-Summit', event: 'E-Summit', category: 'E-Summit' },
    { image: img25, title: 'E-Summit', event: 'E-Summit', category: 'E-Summit' },
    { image: img26, title: 'E-Summit', event: 'E-Summit', category: 'E-Summit' },
    { image: img27, title: 'E-Summit', event: 'E-Summit', category: 'E-Summit' },
    { image: img28, title: 'E-Summit', event: 'E-Summit', category: 'E-Summit' },
    // { image: img29, title: 'E-Summit', event: 'E-Summit', category: 'E-Summit' },
    { image: img30, title: 'E-Summit', event: 'E-Summit', category: 'E-Summit' },
    { image: img31, title: 'E-Summit', event: 'E-Summit', category: 'E-Summit' },
    { image: img10, title: 'Competitions', event: 'Competitions', category: 'Competitions' },
    { image: img11, title: 'Competitions', event: 'Competitions', category: 'Competitions' },
    { image: img12, title: 'Competitions', event: 'Competitions', category: 'Competitions' },
    { image: img13, title: 'Competitions', event: 'Competitions', category: 'Competitions' },
    { image: img14, title: 'Competitions', event: 'Competitions', category: 'Competitions' },
    { image: img15, title: 'Competitions', event: 'Competitions', category: 'Competitions' },
    { image: img16, title: 'Competitions', event: 'Competitions', category: 'Competitions' },
    { image: img17, title: 'Competitions', event: 'Competitions', category: 'Competitions' },
    { image: img18, title: 'Earn and Sell', event: 'Earn and Sell', category: 'Earn and Sell' },
    { image: img19, title: 'Earn and Sell', event: 'Earn and Sell', category: 'Earn and Sell' },
    { image: img20, title: 'Earn and Sell', event: 'Earn and Sell', category: 'Earn and Sell' },
    { image: img21, title: 'Earn and Sell', event: 'Earn and Sell', category: 'Earn and Sell' },
    { image: img22, title: 'Earn and Sell', event: 'Earn and Sell', category: 'Earn and Sell' },
    { image: img23, title: 'Earn and Sell', event: 'Earn and Sell', category: 'Earn and Sell' },
  ];

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter(item => item.category === activeCategory || item.event === activeCategory);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0c10]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                repeat: Infinity, 
                repeatType: "reverse", 
                ease: "easeInOut" 
              }}
              className="relative"
            >
              {/* Pulsing Glow behind logo */}
              <div className="absolute inset-0 bg-[#2C6EA1] blur-3xl opacity-20 animate-pulse"></div>
              <img 
                src={logo} 
                alt="Logo" 
                className="w-32 h-32 md:w-48 md:h-48 object-contain relative z-10" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-[#0a0c10] text-[#D6D6DB] relative overflow-hidden">
        <Navbar />

        <div className="container mx-auto px-4 pt-40 pb-20 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-6 font-heading tracking-tighter uppercase">
              Gallery
            </h1>
            <p className="text-xl text-[#AFB7C7] max-w-2xl mx-auto">
              Moments from our entrepreneurial journey.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-4 justify-center mb-20"
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-2.5 rounded-full font-bold uppercase text-[10px] tracking-[0.2em] transition-all duration-500 border ${
                  activeCategory === category
                    ? 'bg-[#2C6EA1] border-[#2C6EA1] text-white shadow-[0_0_30px_rgba(44,110,161,0.5)]'
                    : 'bg-[#16212e]/50 border-[#8A9BB4]/20 text-[#8A9BB4] hover:border-[#2C6EA1]/50 hover:text-[#D6D6DB]'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`${item.title}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="group"
                >
                  <div className="rounded-3xl border border-[#8A9BB4]/20 bg-[#16212e] overflow-hidden hover:border-[#2C6EA1]/50 transition-colors shadow-2xl">
                    <GalleryItem image={item.image} title={item.title} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-40">
              <p className="text-[#8A9BB4] text-xl italic">
                Content coming soon for this category.
              </p>
            </div>
          )}
        </div>

        <footer className="py-20 text-center opacity-40">
          <p className="text-[#8A9BB4] text-[10px] tracking-[0.6em] font-black uppercase">
            V-EDC GALLERY • VIT PUNE
          </p>
        </footer>
      </div>
    </>
  );
};

export default Gallery;