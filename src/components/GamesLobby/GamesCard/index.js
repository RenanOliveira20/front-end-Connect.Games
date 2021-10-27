import React from "react";
import { Card , SubTitle, Title} from './styles';

const GameCard = (props) => {

    return (
        <Card>
            <img src={`${props.background_image}`} alt={`${props.name}`}></img>
            <Title>{props.name}</Title>
            <SubTitle>Score: {props.rating}</SubTitle>
        </Card>
    )
}

export default GameCard;