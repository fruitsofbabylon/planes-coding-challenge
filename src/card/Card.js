import React from 'react';
import './Card.css';

function Card(props) {
    return(
        <div className="Card" draggable={props.draggable}>
            <div className="Image"><img src={props.img} alt="Cat"></img></div>
            <p>{props.name}</p>
        </div>
    )
}

export default Card;