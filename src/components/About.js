import React from 'react';
import { motion } from 'framer-motion';

function About() {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '100+' },
    { label: 'Countries Visited', value: '15' },
    { label: 'Happy Clients', value: '50+' }
  ];

  const equipment = [
    { category: 'Camera', items: ['Sony A7 III', 'Canon EOS R5'] },
    { category: 'Lenses', items: ['24-70mm f/2.8', '70-200mm f/2.8', '16-35mm f/2.8'] },
    { category: 'Drone', items: ['DJI Mavic 3 Pro', 'DJI Mini 3 Pro'] },
    { category: 'Accessories', items: ['Tripod', 'ND Filters', 'LED Lights'] }
  ];

  return (
    <div className="min-h-screen bg-dark py-24 px-4 md:px-8">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate photographer capturing the beauty of nature and urban landscapes
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <img 
            src="https://picsum.photos/seed/photographer/600/800" 
            alt="Professional Photography"
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black/50 rounded-lg" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">My Journey</h2>
            <p className="text-gray-300 leading-relaxed">
              With over 5 years of experience in photography, I've developed a keen eye for capturing 
              moments that tell compelling stories. My work spans across wildlife, landscapes, and 
              aerial photography, always seeking to showcase the extraordinary in the ordinary.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">My Approach</h2>
            <p className="text-gray-300 leading-relaxed">
              Every photo tells a story, and I believe in capturing authentic moments that resonate 
              with viewers. Whether it's the subtle interplay of light and shadow or the grand 
              vistas of nature, my goal is to create images that inspire and move people.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
      >
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Equipment Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-6xl mx-auto mb-16"
      >
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Equipment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipment.map((category, index) => (
            <div key={index} className="bg-black/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default About;
