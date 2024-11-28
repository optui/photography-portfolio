import React from 'react';

function Gallery() {
  const images = [
    { id: 1, src: 'https://picsum.photos/300/200?random=1', alt: 'Gallery Image 1' },
    { id: 2, src: 'https://picsum.photos/300/200?random=2', alt: 'Gallery Image 2' },
    { id: 3, src: 'https://picsum.photos/300/200?random=3', alt: 'Gallery Image 3' },
    { id: 4, src: 'https://picsum.photos/300/200?random=4', alt: 'Gallery Image 4' },
    { id: 5, src: 'https://picsum.photos/300/200?random=5', alt: 'Gallery Image 5' },
    { id: 6, src: 'https://picsum.photos/300/200?random=6', alt: 'Gallery Image 6' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-center mb-8 text-3xl font-bold text-primary">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {images.map((image) => (
          <div key={image.id} className="transform transition-transform duration-300 hover:scale-105">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
