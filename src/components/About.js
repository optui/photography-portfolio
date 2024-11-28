import React from 'react';

function About() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-center mb-8 text-3xl font-bold text-primary">
        About Me
      </h1>
      
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1">
          <img 
            src="https://picsum.photos/400/300" 
            alt="About Us" 
            className="w-full rounded-lg shadow-md"
          />
        </div>
        
        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">
              Our Story
            </h2>
            <p className="text-gray-200 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">
              Our Mission
            </h2>
            <p className="text-gray-200 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
