//Définir une carte

import React from 'react';
import './memory.css';

const memoryCard = ({ value }) => {
    return (
        <div className="card">
            {value}
        </div>
    )
}
export default memoryCard;