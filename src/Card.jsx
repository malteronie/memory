//Définir une carte

import React from 'react';
import './card.css';

export default function Card ({value, etat }) {
    return (
        <div className="card">
            <div>{value}</div>
            {etat}
        </div>
    )
}