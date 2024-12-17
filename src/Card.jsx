//Définir une carte
import React, { useState, useEffect } from 'react';
import './card.css';

export default function Card ({value, etat, trouve}) {
    const [showCard, setVal] = useState(etat)
    var test = false
    const clickButton=()=>{
        setVal(showCard ===false ? true:false);
        
    }
    // const isMatched=()=>{
       useEffect(()=>{
            if (showCard===true){
                if (test==true){
                    console.log("salut")
                    test = false
                } else {
                    test=true
                    console.log("ok")
                }
                console.log(value)
                
            } else {
                console.log("hi")
            }
        })
    // }


    return (
        <div className="card">
            <div>{value}</div>
            <button onClick={() => clickButton()}>{showCard} coucou </button>
        </div>
    )
}



/*
créer une variable (showCard) carte retourné
si carte retourné
vérifier la variable carte retourné
vérifier s'il y a déjà une carte retourné
si showCard = true
    récupéré dans la liste la carte avec l'état true dans une variable
    récupérer la valeur de la carte cliqué
    comparer la valeur des 2 cartes
        Si les cartes ont la même valeur:
changer le match (la valeur des 2 cartes) en True
vérifier si c'et la dernière paire à trouver
    sinon
changer le stat des 2 cartes en false
  réinitialiser showCard = false
*/