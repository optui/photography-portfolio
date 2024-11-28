import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const contactInfo = [
    {
      title: 'Email',
      value: 'contact@example.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Phone',
      value: '+1 (555) 123-4567',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: 'Location',
      value: 'New York City, NY',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Instagram',
      value: '@photographyportfolio',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-dark pt-24 px-4 md:px-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Contact
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's connect and discuss your photography needs
          </p>
        </motion.div>
      </div>

      {/* Contact Information Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
      >
        {contactInfo.map((info, index) => (
          <div 
            key={index}
            className="bg-black/40 p-6 rounded-lg flex items-center space-x-4"
          >
            <div className="text-white">
              {info.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
              <p className="text-gray-300">{info.value}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Business Hours */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-4xl mx-auto mb-16"
      >
        <div className="bg-black/40 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Business Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Weekdays</h3>
              <p className="text-gray-300">9:00 AM - 6:00 PM</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Weekends</h3>
              <p className="text-gray-300">By Appointment</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Additional Information */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="text-gray-300">
          For urgent inquiries, please contact via phone or email.
          <br />
          Typically responding within 24 hours.
        </p>
      </motion.div>
    </div>
  );
}

export default Contact;
