import styled from "styled-components";

export const Image = styled.img`
  display: block;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin: 32px auto;
  border-radius: 30px;
  box-shadow: var(--bs);
`;