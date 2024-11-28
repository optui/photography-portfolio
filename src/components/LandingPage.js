import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/1920/1080"
          alt="Nature"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content - Using flex to center perfectly */}
      <div className="relative flex items-center justify-center h-full px-4">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Photography
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Capturing moments in time
          </p>
          <button
            onClick={() => navigate('/gallery')}
            className="px-8 py-3 text-lg bg-white text-black rounded-full
                     hover:bg-opacity-90 transition-all duration-300
                     transform hover:scale-105"
          >
            View Gallery
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
