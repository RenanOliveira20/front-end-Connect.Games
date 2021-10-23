import React from "react";
import { Card } from './styles';

const GameCard = (props) => {

    return (
        <Card>
            <img src={`${props.background_image}`} alt={`${props.name}`}></img>
            <h1>{props.name}</h1>
            <h2>Score: {props.rating}</h2>
        </Card>
    )
}

export default GameCard;