import React, { useState } from 'react';
import './MemoryGame.css';

const MemoryGame = () => {
  // Définir les valeurs uniques des cartes
  const uniqueCards = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  
  // Créer un tableau de cartes en doublant chaque valeur unique
  const initialCards = [...uniqueCards, ...uniqueCards]
    .map(value => ({ value, flipped: false })) // Ajouter la propriété flipped
    .sort(() => Math.random() - 0.5); // Mélanger les cartes

  // Utiliser l'état pour stocker les cartes
  const [cards] = useState(initialCards);

  return (
    <div className="memory-game">
      <h1>Jeu de Memory</h1>
      <div className="grid">
        {cards.map((card, index) => (
          <div key={index} className="card">
            ❓
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;