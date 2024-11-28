import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/photography-portfolio" element={<LandingPage />} />
        <Route path="/photography-portfolio/gallery" element={<Gallery />} />
        <Route path="/photography-portfolio/about" element={<About />} />
        <Route path="/photography-portfolio/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;