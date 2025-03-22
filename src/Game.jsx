import React, { useState } from 'react';
import CardList from './CardList.jsx';

const Game = () => {
  const cardList = [1, 2, 3, 4];

  const [dubbleCard, setDubbleCard] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchCard, setMatchCard] = useState([]);
  const [texte, setTexte] = useState(false);
  const [result, setResult] = useState(false);
  const [isStarted, setStarted] = useState(false);

  const gameStart = () => {
    const randomCards = [...cardList, ...cardList].sort(() => Math.random() - 0.5);
    setDubbleCard(randomCards);
    setStarted(true);
    setFlippedCards([]);
    setMatchCard([]);
    setResult(false);
    setTexte(false);
  };

  const onCardFlip = (index, value) => {
    setTexte(false);
    if (isStarted) {
      if (flippedCards.length === 0) {
        setFlippedCards([{ index, value }]);
      } else if (flippedCards.length === 1) {
        const newFlippedCards = [...flippedCards, { index, value }];
        setFlippedCards(newFlippedCards);

        if (newFlippedCards[0].value === newFlippedCards[1].value) {
          const matchCardUpdated = [...matchCard, newFlippedCards[0].index, newFlippedCards[1].index];
          setMatchCard(matchCardUpdated);
          setFlippedCards([]);
          setTexte(true);

          if (matchCardUpdated.length === dubbleCard.length) {
            setResult(true);
            setTexte(false);
            setTimeout(() => {
              setStarted(false);
            }, 1000);
          }
        } else {
          setTimeout(() => {
            setFlippedCards([]);
          }, 1000);
        }
      }
    }
  };

  const isFlipped = (index) => {
    for (let i = 0; i < flippedCards.length; i++) {
      if (flippedCards[i].index === index) {
        return true;
      }
    }
    for (let i = 0; i < matchCard.length; i++) {
      if (matchCard[i] === index) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="game" style={{width:'100%', height:'100%'}}>
      {!isStarted && (
        <center>
          <button className="button" onClick={gameStart}>
            Nouvelle Partie
          </button>
        </center>
      )}
      <CardList
        cards={dubbleCard}
        isFlipped={isFlipped}
        onCardFlip={onCardFlip}
        isStarted={isStarted}
      />
      {result && <div>Bravo, tu as trouvé toutes les paires !</div>}
      {texte && <div>Carte matchée</div>}
    </div>
  );
};

export default Game;