import Card from './Card.jsx';
import './card.css';
import { useState } from 'react';

const cardList = [0, 1, 2, 4];

const dubbleCard = [...cardList, ...cardList].sort(() => Math.random() - 0.5); 

function List() {
  const [flippedCards, setFlippedCards] = useState([]); 
  const [matchCard, setMatchCard] = useState([]); 
  const [texte, setTexte] = useState(false);
  const [result, setResult] = useState(false)

  const [isStarted, setStarted] =useState(false)

  const gameStart = () => {
    setStarted(true)
  }
  const onCardFlip = (index, value) => {
    setTexte(false);
    if(isStarted){

    
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

        if (matchCardUpdated.length===8){
          setResult(true)
          setTexte(false)
          setTimeout(() => {
            setStarted(false)
            setMatchCard([]); 
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
    <div className="card-list">
      {!isStarted && <center><button className='button' onClick={gameStart}>Nouvelle Partie</button></center>}
      {isStarted && dubbleCard.map((value, index) => (
        <div className="color-card" key={index} style={{backgroundImage: isFlipped(index) ?  "" : `url(${process.env.PUBLIC_URL + '/img/dos3.jpg'})` }}> 
          <Card
            value={value}
            index={index}
            flipped={isFlipped(index)}
            onCardFlip={onCardFlip}
            />
        </div>
      ))}
      {result && <div >Bravo, tu as trouvé toutes les pairs</div>}
      {texte && <div>Carte matchée</div>}
    </div>
  );
}

export default List;