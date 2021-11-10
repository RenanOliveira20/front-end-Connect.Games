import styled from "styled-components";

export const Card = styled.div `
    width: 50%;
    height: 300px;
    margin-left:25%;
   overflow:hidden;
    margin-top:10px;
    img{
       height: 100%; 
    }
    :hover{
        img{
            opacity:0.7;
            transition:0.5s;
        }
        div{
            transform: translateY(-280px);
            transition:0.5s;
        }
    }
`
export const Content = styled.div `
position:relative;
width:100%;
height:100%;
display: flex;
justify-content: space-around;
svg{
    font-size:30px;
    color:#dc3545;
};
p{
    font-size: 30px;
}

`