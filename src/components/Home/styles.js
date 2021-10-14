import styled from "styled-components";


export const Background = styled.div `
    width: 100%;
    height: 1000px;
    background-color: black;
    display: flex;
    justify-content: space-evenly
`;
export const LoginBox = styled.div `
    margin-top : 10%;    
    background-color: white;
    width: 45% ;
    height : 45%;
    border-radius: 15px;
    display :flex;
    justify-content: center;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center
`;
export const Logo = styled.img `
    margin-top : 10%;
    width: 45% ;
    height: 45%;
`;
export const Text = styled.label`
    margin: 30px 0;
    width:auto;
    height: 40px;
    font-size: 40px;
`;
export const Input = styled.input ` 
    background-color: white;
    width: 80%;
    margin: 10px 10%;
    height: 40px;
    border-radius: 20px;
    font-size: 30px;
`;
export const Buttons = styled.div ` 
    width: 100%;
    display: flex;
    justify-content:space-around
`;
export const Login = styled.button `
    background-color: #EA4335;
    width: 50%;
    height: 70px;
    font-size: 25px;
    border-bottom-left-radius: 15px;
    border-top-right-radius: 15px;
    margin : 25px 0;
    a{
        text-decoration: none;
        color : black;
    }
`;
export const SignUp = styled.button `
    background-color: black;
    color : white;
    width: 40%;
    height: auto;
    font-size: 25px;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    margin: 25px 0;
    a{
        text-decoration: none;
        color : white;
    }
`