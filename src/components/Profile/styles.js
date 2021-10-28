import styled from "styled-components";

export const ProfileCard = styled.div` 
    width: 50%;
    height: 40%;
    background-color: white;
    margin-top: 1%;
    margin-left: 25%;
    border-bottom: 1px solid lightgrey;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`
export const ImageContainer = styled.div`
    height: 80%;
    padding-left:1%;
    padding-top: 1%;
    width: 20%;
    margin-bottom: 1%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center
    img {
        height: auto;
        width: 100%;
        margin-top: 5%;
        margin-left: 5%;
        border: 1px solid lightgrey;
        }

`;
    export const FollowContainer = styled.div`
    padding-top: 2%;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-space-between ;
        flex-direction:column;
        `;
export const UserConfig = styled.div`
    display: flex;
    justify-content: space-evenly ;
    margin-bottom: 3%;
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