import styled from "styled-components";

export const Card = styled.div`

    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(71,29,29,1) 20%, rgba(71,29,29,1) 97%, rgba(255,255,255,0) 100%);

    color:white;

    border-radius: 1vh;
    
    width:30vw;

    margin:2vh;

    padding:1vh;

    display:flex;
    justify-content: space-evenly;

    img{
        width: 60px;
        height: 60px;
        overflow:hidden;
        border-radius:50%;
    }

`

export const UserContainer = styled.div`

    background: radial-gradient(circle, rgba(52,52,52,1) 82%, rgba(52,52,52,0) 100%);

    min-width:15vh;
    padding: 1vh;
    
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    
`

export const UserDiv = styled.div`

    width: 15vw;

    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    p{
        font-size: 1.5em;
    }


`

export const SectionUser = styled.section`

    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(189,183,183,1) 50%, rgba(255,255,255,0) 100%);

    width:80vw;

    display: flex;
    flex-wrap: wrap;
    justify-content:center;

`
