import React, { useState, useEffect } from 'react';


const images = [
  'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80'
];

function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 3500); // Cambia cada 3.5 segundos
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="freak-slider-container">
      <img src={images[current]} alt="slider" className="freak-slider-img" />
      <div className="freak-slider-dots">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`freak-slider-dot${idx === current ? ' active' : ''}`}
            aria-label={`Ir a la imagen ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
