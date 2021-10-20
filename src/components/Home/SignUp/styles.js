import styled from "styled-components";

export const MyForm = styled.form `
    background-color: black;
    width:80%;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    align-items: center
    div{
        background-color: black;
        width : 10%
    }
`
export const Background = styled.div `
    background-color: black;

`
export const MyButtons = styled.div ` 
    background-color: black;
    width: 90%;
    margin-left: 5%;
    display: flex ;
    justify-content : space-around;
    button {
        width: 140px;
        margin-bottom: 10px
    }
`