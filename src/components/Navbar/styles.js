import styled from "styled-components";
import { CgProfile } from "react-icons/cg";

export const Img = styled.img`
  height: 5vh;

  @media screen and (max-width: 150px) {
  }
`

export const Profile = styled(CgProfile)`
  color: #fff;
  width: auto;
  height: 100%;
  cursor: pointer;
  @media screen and (max-width: 768px) {
  }
`;

export const DivButtons = styled.div`
  align-items: center;
  @media screen and (max-width: 768px) {
  }
`;

export const DivProfile = styled.div`
  margin-right: 20px;
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    margin: 0 8px;
  }
  @media screen and (max-width: 768px) {
  }
`;

export const DivNavbar = styled.div`
  display: flex;
  height: 100%;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
  }
`;

export const ImgProfile = styled.div`
  width: 60px;
  height: 60px;
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
