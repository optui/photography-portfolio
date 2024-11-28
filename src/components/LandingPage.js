import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
        <h1>Lorem Ipsum</h1>
        <p>Nature and wildlife photography</p>
        <button onClick={() => navigate('/gallery')} className="gallery-button">Gallery</button>
    </div>
  );
}

export default LandingPage;
