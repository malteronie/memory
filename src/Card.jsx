import './card.css';
import React from 'react';

const Card = ({ value, index, onCardFlip, flipped }) => {
  const handleCardClick = () => {
    if (!flipped) {
      onCardFlip(index, value); 
    }
  };

  return (
    <div className="card" onClick={handleCardClick}>
      {flipped ? value : "?"}
    </div>
  );
};

export default Card;