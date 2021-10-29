import styled from "styled-components";
import imgBack from '../../../images/preview.jpg';

export const PageContainer = styled.div`

    background-image: url(${imgBack});

    background-repeat: repeat;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 94.8vh;

`

export const Section = styled.section`
    
    width: 50vw;
    height: 40vh;

    margin: 2vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     
    img{
        margin-top: 2vh;
        height: 25vh;
    }

`

export const Buttons = styled.div `

    width: 30vw;
    
    margin: 4vh auto;

    display: flex;
    justify-content: space-around;

`
