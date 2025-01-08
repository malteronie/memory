import Card from './Card.jsx';
import './card.css';
import { useState } from 'react';

const cardList = [0, 1, 2, 4];
// Doubler les cartes
const dubbleCard = [...cardList, ...cardList].sort(() => Math.random() - 0.5); // Mélanger les cartes

function List() {
  const [flippedCards, setFlippedCards] = useState([]); // Cartes retournées temporairement
  const [matchCard, setMatchCard] = useState([]); // Cartes trouvées
  const [texte, setTexte] = useState(false);

  const onCardFlip = (index, value) => {
    setTexte(false);

    if (flippedCards.length === 0) {
      // Première carte retournée
      setFlippedCards([{ index, value }]);
    } else if (flippedCards.length === 1) {
      // Deuxième carte retournée
      const newFlippedCards = [...flippedCards, { index, value }];
      setFlippedCards(newFlippedCards);

      if (newFlippedCards[0].value === newFlippedCards[1].value) {
        // Si les deux cartes correspondent
        const matchCardUpdated = [...matchCard, newFlippedCards[0].index, newFlippedCards[1].index];
        setMatchCard(matchCardUpdated);
        setFlippedCards([]);
        setTexte(true); // Afficher le message de match
      } else {

        setTimeout(() => {
          setFlippedCards([]); 
        }, 1000);
      }
    }
  };

  const isFlipped = (index) => {
    // Vérifier dans flippedCards
    for (let i = 0; i < flippedCards.length; i++) {
      if (flippedCards[i].index === index) {
        return true;
      }
    }
    // Vérifier dans matchCard
    for (let i = 0; i < matchCard.length; i++) {
      if (matchCard[i] === index) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="card-list">
      {dubbleCard.map((value, index) => (
        <div className="color-card" key={index}>
          <Card
            value={value}
            index={index}
            flipped={isFlipped(index)}
            onCardFlip={onCardFlip}
          />
        </div>
      ))}
      {texte && <div>Carte matchée</div>}
    </div>
  );
}

export default List;