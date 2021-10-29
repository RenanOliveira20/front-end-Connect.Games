import styled from "styled-components";

import imgBack from '../../../images/preview.jpg'


export const PageContainer = styled.div`

    background-image: url(${imgBack});

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100vw;
    height: 100vh;

`

export const Section = styled.section`
    
    width: 50vw;
    height: 35vh;

    margin: 2vh;

    display: flex;
    flex-direction: column;
    align-items: center;


`


export const Layout = styled.div ` 
    width:90%;
    margin-left: 5%;
    background-color: black;

    div{
        width: 90%;
        margin-left: 5%
    }
`
export const Buttons = styled.div `

    width: 30vw;
    
    margin: 4vh auto;

    display: flex;
    justify-content: space-around;

`