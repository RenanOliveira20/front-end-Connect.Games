import styled from "styled-components";

import imgRight from '../../images/back-right.png';
import imgLeft from '../../images/back-left.png';
import imgBack from '../../images/back.png';

import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';

export const PageComponent = styled.div`
    background-image: url(${imgBack});

    display: flex;

    width:100%;
    height:100vh;

`

export const ImageRight = styled.div`
    background-image: url(${imgRight});
    background-repeat: repeat-y;
    background-size:100%;

    width: 15vw;

` 

export const ImageLeft = styled.div`
    background-image: url(${imgLeft});
    background-repeat: repeat-y;
    background-size:100%;

    width: 15vw;

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
    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;

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
    
    width: 70vw;

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

export const InfoPlat = styled.div`

    display: flex;
    justify-content:center;

    width: 55vw;
    margin: 1vh;

    font-size: 1.8vh;
    
    background: radial-gradient(circle, rgba(52,52,52,1) 93%, rgba(52,52,52,1) 93%, rgba(126,42,42,0.76234243697479) 100%);
    
    text-align: center;
    color: white;

    border-radius: 1.5vw;

`

export const PInfo = styled.p`

    margin: 1.5vh;

`

export const InputComment = styled.input`

    width: 40vw;
    height: 10vh;

    border-radius: 1.5vh;
    border-color: red;

`

export const LobbyComment = styled.div`

    background-color: green;

    width: 40vw;
    height: 40vh;

    margin: 3vh;

`

export const ButtonUnFavorite = styled(MdOutlineFavoriteBorder)`
  color: rgba(119,21,21,1);
  width: 50px;
  height: 50px;
  cursor: pointer;
  @media screen and (max-width: 768px) {

  }
`

export const ButtonFavorite = styled(MdOutlineFavorite)`
  color: rgba(119,21,21,1);
  width: 50px;
  height: 50px;
  cursor: pointer;
  @media screen and (max-width: 768px) {

  }

`

export const TitleContainer = styled.div`

  width: 30vw;

  display: flex;
  justify-content: space-around;
  align-items: center;

`
