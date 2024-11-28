import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const images = [
    { 
      id: 1, 
      src: 'https://picsum.photos/seed/fauna1/800/600', 
      alt: 'Wildlife in Natural Habitat',
      category: 'Fauna'
    },
    { 
      id: 2, 
      src: 'https://picsum.photos/seed/fauna2/800/800', 
      alt: 'Birds in Flight',
      category: 'Fauna'
    },
    { 
      id: 3, 
      src: 'https://picsum.photos/seed/fauna3/800/600', 
      alt: 'Marine Life',
      category: 'Fauna'
    },
    { 
      id: 4, 
      src: 'https://picsum.photos/seed/flora1/800/800', 
      alt: 'Wildflowers',
      category: 'Flora'
    },
    { 
      id: 5, 
      src: 'https://picsum.photos/seed/flora2/800/600', 
      alt: 'Forest Vegetation',
      category: 'Flora'
    },
    { 
      id: 6, 
      src: 'https://picsum.photos/seed/flora3/800/800', 
      alt: 'Desert Plants',
      category: 'Flora'
    },
    { 
      id: 7, 
      src: 'https://picsum.photos/seed/landscape1/800/600', 
      alt: 'Mountain Range',
      category: 'Landscape'
    },
    { 
      id: 8, 
      src: 'https://picsum.photos/seed/landscape2/800/800', 
      alt: 'Coastal Sunset',
      category: 'Landscape'
    },
    { 
      id: 9, 
      src: 'https://picsum.photos/seed/landscape3/800/600', 
      alt: 'Valley View',
      category: 'Landscape'
    },
    { 
      id: 10, 
      src: 'https://picsum.photos/seed/drone1/800/800', 
      alt: 'Aerial City View',
      category: 'Drone'
    },
    { 
      id: 11, 
      src: 'https://picsum.photos/seed/drone2/800/600', 
      alt: 'Coastal Patterns',
      category: 'Drone'
    },
    { 
      id: 12, 
      src: 'https://picsum.photos/seed/drone3/800/800', 
      alt: 'Agricultural Landscapes',
      category: 'Drone'
    }
  ];

  const categories = ['all', 'Fauna', 'Flora', 'Landscape', 'Drone'];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen py-24 px-4 md:px-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text">
        Gallery
      </h1>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full transition-all duration-300
                      ${activeCategory === category 
                        ? 'bg-white text-black' 
                        : 'bg-white/10 text-white hover:bg-white/20'}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredImages.map((image) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="aspect-square relative group cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 
                         group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                          transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4 transform translate-y-4 
                            group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-lg font-semibold">{image.alt}</p>
                  <p className="text-sm text-gray-300">{image.category}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-4 right-4 text-white hover:text-gray-300 
                     transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default Gallery;
