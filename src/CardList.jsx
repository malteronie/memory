//Définir la liste des cartes

import React, { useEffect, useState } from 'react';
import Card from './Card';
import './card.css';

const cardValues = ([1,2,3,4,5])
const doubleCard= [...cardValues, ...cardValues]


function List () {
    
    return (
        <div className='card-list'>
            {doubleCard.map((element,index) => (
                <div className='color-card' key={element.id}>
                    <Card key={index} value={element} etat={false} trouve={false}/>
                </div>
           )).sort(() => Math.random() - 0.5)}
           
        </div>
   );
   
}

export default List;
