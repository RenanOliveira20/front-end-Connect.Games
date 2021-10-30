import React from "react";

import { Card, UserContainer, UserDiv} from './styles'

const UserCard = (props) => {

    return(
        <Card>
            <UserContainer>
                <img src={`${props.profilePicture}`} alt={`${props.name}`}/>
                <a href={`/profile/${props._id}`}>{props.username}</a>
            </UserContainer>
            <UserDiv>
                <h3>Nome:</h3>
                <p>{props.name}</p>
                <button>Follow</button>
            </UserDiv>
        </Card>
    )
}

export default UserCard;