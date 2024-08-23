// src/Carousel.js
import React, { useState } from 'react';
import './Carousel.css'; // Importa o arquivo de estilos CSS
import Foto1 from '../assets/carousel2.png'; // Importe a imagem local
import Foto2 from '../assets/banner.jpg'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array de URLs de imagens
  const items = [
    Foto1, // Imagem local
    Foto2
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className='container'>
    <div className="carousel">
      <button className="carousel-button prev" onClick={handlePrev}>
        &#10094;
      </button>
      <div
        className="carousel-items"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={handleNext}>
        &#10095;
      </button>
      </div>
    </div>
  );
};

export default Carousel;
