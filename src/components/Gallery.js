import React from 'react';
import './Gallery.css';

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
    <div className="gallery-page">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
