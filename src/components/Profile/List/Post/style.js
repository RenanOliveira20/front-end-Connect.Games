import styled from "styled-components";

export const ContainerPost = styled.div `
    width: 50%;
    margin-top: 1%;
    margin-bottom: 1%;
    margin-left: 25%;
    background-color: lightgrey;
    border: 1px solid black; 
`
export const PostHeader = styled.header `
    width: 100%;
    height: 50px;
    display: flex;
    justify-content : space-between;
    div{
        width: 50%;
        height: 90%;
        margin-top: 10px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
`
export const HeaderImage = styled.img `
    height: 40px;  
    width: 40px;
    border-radius: 50%;
`;
export const ProfileName = styled.p `
    height: auto;
    font-size: 30px;
    margin-top: 10px;
`;
export const PostOptions = styled.ul`
    position: relative;
    width: 25%;
    font-size: 25px;
    ul{font-size: 16px;
        width: 80%;
        position: absolute;
        display: block;
        li{
            width:auto;
            background-color: white;
            border-bottom:1px solid lightgrey;
            text-align: left;
            display: block;
            list-style: none;
            &:hover{
            background-color:  #F08080;
            color: white;
        };
    };
        };
    
`;
export const PostBody = styled.div`
        margin-top : 25px;
        width: 100%;
        height : 100%;
`
export const BodyImage = styled.div`
        margin: 10px 0 10px 0;
        width: 100%;
        border-bottom: 1px solid lightgrey;
        img{
            width: 100%;
            max-height: 580px;
        }
`
export const Reactions = styled.ul `
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li{ width: 30%;
        list-style: none;
        font-size: 26px;
        display: flex;
        color: #dc3545;
        svg{
            margin-top: 5px;
            &:hover{
                color: #ff8c66 ;
            };
        };
        p {
            color: black;
            font-size: 15px;
            margin-top: -5px;
        };
    }
    input {
        margin: 10%;
        width:100%;
        &:active{
            border: 1px solid red
        }
    }
` 