import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-center mb-8 text-3xl font-bold text-primary">Contact Us</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-darker p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-4">Get in Touch</h2>
          <p className="mb-6">Have questions? We'd love to hear from you.</p>
          <div className="space-y-2">
            <p><span className="font-bold">Email:</span> example@email.com</p>
            <p><span className="font-bold">Phone:</span> (123) 456-7890</p>
            <p><span className="font-bold">Address:</span> 123 Main Street, City, Country</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex-[2] bg-darker p-8 rounded-lg shadow-lg space-y-6">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button type="submit" className="w-full p-2 bg-primary text-white rounded-md">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
