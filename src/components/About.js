import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-image">
          <img src="https://picsum.photos/400/300" alt="About Us" />
        </div>
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h2>Our Mission</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
