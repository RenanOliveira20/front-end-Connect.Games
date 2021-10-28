import styled from "styled-components";

export const Card = styled.div `    
    width:400px;
    height: 40vh;
    padding: 2%;
    margin: 2.5vw;
    background: radial-gradient(circle at 50.4% 50.5%, rgb(135, 2, 35) 10%, rgb(10, 10, 10) 90%);

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;


    img{
        width: 80%
    }


`

export const Title = styled.a`

    font-weight: bold;
    font-size: 3vh;

`

export const SubTitle = styled.a`

    font-size:2.5vh;

`