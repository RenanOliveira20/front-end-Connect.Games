import styled from "styled-components";

export const Card = styled.div `    
    width:400px;
    height: 40vh;
    padding: 2%;
    margin: 2%;
    background: radial-gradient(circle at 50.4% 50.5%, rgb(135, 2, 35) 10%, rgb(10, 10, 10) 90%);
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    color: white;

    img{
        width: 80%
    }

`

export const Title = styled.h1`
    font-weight: bold;

    font-size: 3vh;

`

export const SubTitle = styled.h2`
    font-size:2.5vh;

`