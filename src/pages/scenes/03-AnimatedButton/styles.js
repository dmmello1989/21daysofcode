import styled from "styled-components";

export const Section = styled.div`
  
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 64px;
  /* background-color: #ffffff; */
`;

export const Button = styled.button`
  position: relative;
  display: block;
  width: 360px;
  height: 100px;
  margin: auto;
  padding: 16px 32px;
  border-radius: 70px;
  border: 2px solid var(--clr-light);
  background-color: transparent;
  transition: all 0.4s;
  cursor: pointer;

  &:after {
    content:" ";
    position:absolute;
    top: -8px;
    left: -16px;
    width:100%;
    height:100%;
    border-radius: 70px;
    background-color: var(--clr-accent);
    border:2px solid rgba(0,0,0,0);
    transition: all 0.4s;
  }

  &:hover:after{  
    transform: translate(16px, 8px);
  }

  &:active {
    border-color: rgba(255,255,255,0.8);
  }

  &:active:after {
    background-color: var(--clr-accentMono);
  }

  ${props => props.isClicked && `
    &:after {
      top: 0;
      left: 0;
      background: var(--clr-complimentary);
    }
    &:hover:after{  
      transform: none;
    }
    &:active:after {
      background-color: var(--clr-complimentaryMono);
    }
  `};
`;

export const ButtonText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  font-size: 3rem;
  color: var(--clr-dark);
  font-weight: var(--fw-bold);
  font-family: var(--ff-secondary);
  transform: translate(-50%, -50%);
  z-index: 5;
`;