import styled from "styled-components";

export const ProfileCard = styled.div` 
    width: 70%;
    height: 40%;
    background-color: white;
    margin-top: 1%;
    margin-left: 15%;
    border-bottom: 1px solid lightgrey;
    box-shadow: 1px 1px 0 -1px black
`
export const ImageContainer = styled.div`
    height: 80%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center
    img {
        height: auto;
        width: 50%;
        margin-top: 5%;
        margin-left: 5%;
        border: 1px solid lightgrey;
        }

`;
    export const FollowContainer = styled.div`
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: space-around ;
        flex-direction:column;
`;
export const UserConfig = styled.div`
    display: flex;
    justify-content: space-evenly ;
    svg {
        
    }
`
export const CountValues = styled.div`
        display: flex;
        justify-content: space-evenly    ;
`
export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center    ;

`