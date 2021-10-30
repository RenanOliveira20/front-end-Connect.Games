import styled from "styled-components";

export const ProfileCard = styled.div` 
    width: 50%;
    height: 50%;
    background-color: lightgrey;
    margin-top: 1%;
    margin-left: 25%;
        @media screen and (max-width: 400px){
        width: 100%;
        height: 50%;
        margin-left: 0;
    }
`
export const ImageContainer = styled.div`
    height: 80%;
    padding-left:1%;
    padding-top: 1%;
    width: 20%;
    margin-bottom: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
            height: 80px;
            width: 80px;
            border-radius : 50%;
        }
    @media screen and (max-width: 400px){
        height: 80%;
        padding-left:1%;
        padding-top: 1%;
        width: 30%;
        margin-bottom: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
            width: 100%;
            margin-top: 10px;
            font-size: 18px;
            text-align: center
        }
        img {
            height: 70px;
            width: 70px;
            border-radius : 50%;
        }
    }
`;
export const FollowContainer = styled.div`
    padding-top: 2%;
    width: 70%;
        height: 100%;
        display: flex;
        justify-content: space-between ;
        flex-direction:column;
        @media screen and (max-width: 400px){
        padding-top: 2%;
        width: 70%;
        height: 100%;
        display: flex;
        justify-content: space-between ;
        flex-direction:column;
    }
        `;
export const UserConfig = styled.div`
    display: flex;
    justify-content: space-evenly ;
    margin-bottom: 3%;
    
`
export const CountValues = styled.div`
    
        display: flex;
        justify-content: space-evenly    ;
`
export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around   ` ;