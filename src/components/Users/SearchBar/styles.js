import styled from "styled-components";

export const InputPost = styled.input`

  width: 40vw;
  height: 5vh;

  border-radius: 1.5vh;
  border-width:0.5px;
  border-color: red;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  :focus {
    outline: none !important;
    box-shadow: 0 0 10px #e40a0a;
  }
`