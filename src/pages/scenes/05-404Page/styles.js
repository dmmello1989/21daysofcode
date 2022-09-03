import styled, { keyframes, css } from "styled-components";

const onClick = keyframes`
  0% {
  }
  100% {
  }
`;

const animationButton = css`
  animation: ${onClick} 2s ease-in-out;
`;


export const Section = styled.div`
  
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 64px;
  /* background-color: #ffffff; */
`;

export const NeuromorphicButton = styled.button`
  position: relative;
  display: block;
  padding: 32px 64px;
  font-size: 3rem;
  color: var(--clr-accent);
  font-weight: var(--fw-bold);
  font-family: var(--ff-secondary);
  margin: auto;
  border: 2px solid var(--clr-accent);
  background-color: #1B1B1B;
  transition:all 1s;
  cursor: pointer;

  &:after {
    content:" ";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:auto;
    display:inline-block;
    width:100%;
    height:100%;
    border:2px solid rgba(0,0,0,0);
    transition:all 0.8s;
  }

  &:before {
    content:" ";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:auto;
    display:inline-block;
    width:100%;
    height:100%;
    border:2px solid rgba(0,0,0,0);
    transition:all 0.8s;
  }

  &:hover {
    color: var(--clr-complimentary);
    border:2px solid var(--clr-complimentary);
  }

  &:hover:after{  
    border:2px solid var(--clr-complimentary);
    width: calc(100% - 20px);
    height: calc(100% + 20px); 
  }

  &:hover:before{  
    border:2px solid var(--clr-complimentary);
    width: calc(100% - 35px);
    height: calc(100% + 35px); 
  }

  ${props => props.isClick && animationButton};
`;