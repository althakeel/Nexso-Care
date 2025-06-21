import React from 'react';
import './three.css';

const ThreePics = () => {
  return (
    <div className="threepics-container">
      <h1 className="threepics-background-text">PRODUCTS</h1>
      <p className="threepics-question">Which type of gear are you looking for?</p>
      <a href="#" className="threepics-viewmore">View more →</a>

      <div className="threepics-cards">
  <div className="threepics-card">
    <div className="image-wrapper">
      <img src="https://res.cloudinary.com/drkfb976p/image/upload/v1750511311/28_csjkij.webp" alt="Cleanser" />
    </div>
    <h3>Gentle Cleanser</h3>
  </div>

  <div className="threepics-card">
    <div className="image-wrapper">
      <img src="https://res.cloudinary.com/drkfb976p/image/upload/v1750511310/29_tmnqyv.webp" alt="Perfume" />
    </div>
    <h3>Luxury Fragrance</h3>
  </div>

  <div className="threepics-card">
    <div className="image-wrapper">
      <img src="https://res.cloudinary.com/drkfb976p/image/upload/v1750511310/27_rh70xu.webp" alt="Face Wash" />
    </div>
    <h3>Foaming Face Wash</h3>
  </div>
</div>

    </div>
  );
}

export default ThreePics;
