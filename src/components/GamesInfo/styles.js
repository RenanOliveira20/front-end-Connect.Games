import styled from "styled-components";

import imgRight from '../../images/back-right.png';
import imgLeft from '../../images/back-left.png';
import imgBack from '../../images/back.png';

export const PageComponent = styled.div`
    background-image: url(${imgBack});

    display: flex;

`

export const ImageRight = styled.div`
    background-image: url(${imgRight});
    background-repeat: repeat-y;
   
    width: 20%;
   
    
` 

export const ImageLeft = styled.div`
    background-image: url(${imgLeft});
    background-repeat: no-repeat;

    width: 20%;


`

export const Article = styled.article`
    font-family: 'Poppins', sans-serif;

    display: flex;
    flex-direction: column;
    align-items: center;

    width:90%;
    
`

export const Banner = styled.img `
    width: 40%;

    margin: 1.5vh;

`

export const Title = styled.h1`
  
    font-weight: bold;

    padding: 2vh 0;


`

export const TitleSection = styled.h2`
    
    font-weight: bold;

    margin: 1.5vh;

`

export const Section = styled.section`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 1vh;
    
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(189,183,183,1) 50%, rgba(255,255,255,0) 100%);

    border-radius: 1vw;

`

export const Info = styled.p `
    
    font-size: 1.8vh;

    background: radial-gradient(circle, rgba(52,52,52,1) 93%, rgba(52,52,52,1) 93%, rgba(126,42,42,0.76234243697479) 100%);
    width: 80%;
    padding: 4vh 2vw;

    text-align: center;
    color: white;

    border-radius: 1.5vw;
    
`

export const InputComment = styled.input`

    width: 60vw;
    height: 20vh;


`

export const LobbyComment = styled.div`

    background-color: green;

    width: 60vw;
    height:40vh;

    margin: 3vh;

`





