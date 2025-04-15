// StarryBackground.jsx
import React from 'react';
import './starry.css';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const StarryBackground = () => {
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    top: getRandom(0, 100),
    left: getRandom(0, 100),
    animationDelay: `${Math.random() * 5}s`,
  }));

  return (
    <div className="starry-sky">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: `${star.top}vh`,
            left: `${star.left}vw`,
            animationDelay: star.animationDelay,
          }}
        ></div>
      ))}
    </div>
  );
};

export default StarryBackground;
