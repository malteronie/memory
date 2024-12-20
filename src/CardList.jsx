 
//Définir la liste des cartes

import Card from './Card.jsx';
import './card.css';
import { useState } from 'react';

const cardList = [0 , 1 , 2 , 4 ];
//Double les cartes
const dubbleCard = [...cardList, ...cardList]

function List () {

    const [flippedCards, setFlippedCards] =useState([]);
    const [matchCard, setMatchCard] =useState([]);
    const [texte, setTexte] =useState(false);
    const onCardFlip = (index, value) => {
        setTexte(false);
        if (flippedCards.length === 0) {
            setFlippedCards([{index, value}]);
            console.log("Aucune carte retournée")
        } else if (flippedCards.length === 1) {
            const newFlippedCards = [...flippedCards, { index, value }];
            setFlippedCards(newFlippedCards);
            console.log("Une carte est déjà retournée, deuxième carte retournée");
            console.log(newFlippedCards[0].value)
            console.log(newFlippedCards[1].value)
            if (newFlippedCards[0].value === newFlippedCards[1].value) {
                const matchCardUpdated = [...matchCard, ...newFlippedCards];
                setMatchCard(matchCardUpdated);
                setFlippedCards([]);
                console.log(matchCardUpdated);
                console.log("Match carte");
                setTexte (true)

            }
        }
    }

    return (
        <div className='card-list'>
            {dubbleCard.map((value, index) => (
                <div className='color-card' key={index}> 
                    <Card 
                    value={value} 
                    index = {index}
                    onCardFlip= {onCardFlip}
                    flipped={flippedCards.some(card => card.index === index)}/>
                </div>

           ))}
           {texte && <div>Carte match</div>}
        </div>
   );
}

export default List;