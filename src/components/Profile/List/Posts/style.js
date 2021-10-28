import styled from "styled-components";

export const ContainerPost = styled.div `
    width: 50%;
    margin-top: 1%;
    margin-bottom: 1%;
    margin-left: 25%;
    background-color: white;
    height: 800px;
    border-bottom: 1px solid lightgrey; 
`
export const PostHeader = styled.header `
    width: 100%;
    border-bottom: 1px solid lightgrey;
    height: 50px;

    div{
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
`
export const HeaderImage = styled.img `
    height: 80%;  
    border-radius: 10px;
`;
export const ProfileName = styled.p `
    height: auto;
    font-size: 30px;
    margin-top: 10px
`
export const PostOptions = styled.ul`
    transform: translateX(-50%) rotate(0)
`
export const PostOptionsItem = styled.li `
position: absolute;
&:hover{
    transform:translateX(-50%) rotate(-90deg);
    transform-origin: top center}
`