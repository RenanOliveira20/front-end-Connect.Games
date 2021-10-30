import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { RiImageAddFill } from "react-icons/ri";
import { AiFillLike, AiFillDislike} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";


export const Trash = styled(FaTrashAlt)`
  color: #fff;
  width: 25px;
  height: 25px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    
  }
`;

export const ImageAdd = styled(RiImageAddFill)`
  color: #fff;
  width: 25px;
  height: 25px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    
  }
`;

export const Like = styled(AiFillLike)`
  color: #fff;
  width: 25px;
  height: 25px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    
  }
`;

export const Dislike = styled(AiFillDislike)`
  color: #fff;
  width: 25px;
  height: 25px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    
  }
`;

export const Post = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {

  }
`;

export const DivFormPost = styled.div`
  width: 100%;
  display: flex;  
  justify-content: center;
  @media screen and (max-width: 768px) {

  }
`;

export const Comments = styled.div`
  width: 100%;
  display: flex;  
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {

  }
`;

export const LikeDislike = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {

  }
`;

export const ImgProfile = styled.div`

  background: radial-gradient(circle, rgba(52,52,52,1) 82%, rgba(52,52,52,0) 100%);

  width:15vw;
  height: 15vh;
  
  display: flex;
  flex-direction: column;
  
  justify-content:center;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;

  }
  @media screen and (max-width: 768px) {

  }
`;

export const InputPost = styled.input`

  width: 40vw;
  height: 10vh;

  margin-left: 5vw;

  border-radius: 1.5vh;
  border-width:0.5px;
  border-color: red;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

`

export const PostContainer = styled.div`

  border-bottom: 1px solid black;

  width: 50vw;

  padding: 3vh 0vh 5vh 0vh;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

`

export const ButtonsPost = styled.div`

  height: 10vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

`

export const PostUserContainer = styled.div`

  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(71,29,29,1) 20%, rgba(71,29,29,1) 97%, rgba(255,255,255,0) 100%);
  width: 40vw;
  height: 15vh; 

  display: flex;
  
`

export const UserPost = styled.p`
  
  width: 30vw;

  color:white;

  display: inline-block;
  word-wrap: break-word;
  overflow: hidden;
  
  img{
    width:50%;
  }

`

export const TextDiv = styled.div`

  display:flex;
  flex-direction:column;
  justify-content:center;

`
export const PostDiv = styled.div`

  width: 40vw;

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

`
export const PostSection = styled.section`

  width: 50vw;
  display: flex;

`
