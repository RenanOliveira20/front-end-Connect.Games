import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { RiImageAddFill } from "react-icons/ri";
import { AiFillLike, AiFillDislike } from "react-icons/ai";


export const Trash = styled(FaTrashAlt)`
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

export const DivFormComments = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {

  }
`;
export const Comment = styled.div`
  margin: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {

  }
`;
