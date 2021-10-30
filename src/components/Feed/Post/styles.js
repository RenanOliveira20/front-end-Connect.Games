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

export const Profile = styled(CgProfile)`
  color: #fff;
  width: auto;
  height: 100%;
  cursor: pointer;
  @media screen and (max-width: 768px) {
  }
`;

export const ImgProfile = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  img {
    width: 60px;
  }
  @media screen and (max-width: 768px) {

  }
`;