import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="h-[90vh] flex flex-col items-center justify-center">
      <h1 className="text-5xl m-0">Lorem Ipsum</h1>
      <p className="text-xl m-0">Nature and wildlife photography</p>
      <button 
        onClick={() => navigate('/gallery')} 
        className="mt-8 px-8 py-4 text-lg bg-transparent border-2 border-white text-white 
                 cursor-pointer transition-all duration-300 hover:bg-white hover:text-black"
      >
        Gallery
      </button>
    </div>
  );
}

export default LandingPage;
