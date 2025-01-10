import React from 'react';
import Card from './Card.jsx';
import './card.css';

const CardList = ({ cards, isFlipped, onCardFlip, isStarted }) => {
  return (
    <div className="card-list">
      {isStarted &&
        cards.map((value, index) => (
          <div
            className="color-card"
            key={index}
            style={{
              backgroundImage: isFlipped(index) ? '': `url(${process.env.PUBLIC_URL + '/img/dos3.jpg'})`,}}>
            <Card
              value={value}
              index={index}
              flipped={isFlipped(index)}
              onCardFlip={onCardFlip}
            />
          </div>
        ))}
    </div>
  );
};

export default CardList;