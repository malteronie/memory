import './card.css';
import React from 'react';

const Card = ({ value, index, onCardFlip, flipped }) => {
  const handleCardClick = () => {
    if (!flipped) {
      onCardFlip(index, value); // Notifier le parent du clic
    }
  };

  return (
    <div className="card" onClick={handleCardClick}>
      {flipped ? value : "?"}
    </div>
  );
};

export default Card;