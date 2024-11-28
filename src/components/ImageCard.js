import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ImageCard({ image, onClick }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="break-inside-avoid"
    >
      <div className="relative group cursor-pointer" onClick={() => onClick(image)}>
        {isLoading && (
          <div className="absolute inset-0 bg-gray-800 rounded-lg animate-pulse" />
        )}
        
        <img 
          src={image.src} 
          alt={image.alt}
          className={`w-full rounded-lg shadow-lg transition-all duration-300 
                   group-hover:shadow-2xl group-hover:scale-[1.02]
                   ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
          loading="lazy"
        />
        
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 rounded-lg flex items-center justify-center">
          <div className="text-white text-center p-4 transform translate-y-4 
                      group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-lg font-semibold">{image.alt}</p>
            <p className="text-sm text-gray-300">{image.category}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ImageCard;