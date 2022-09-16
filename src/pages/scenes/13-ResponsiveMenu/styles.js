import styled from "styled-components";

export const Section = styled.div`
  
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 184px);
  margin: auto;
  padding: 64px;
`;

export const Button = styled.button`
  position: relative;
  display: block;
  width: 360px;
  height: 100px;
  margin: auto;
  padding: 16px 32px;
  border-radius: 70px;
  border: 2px solid rgba(0,0,0,0.1);
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.1);
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
    transition: all 0.3s;
  }

  &:hover:after{  
    transform: translate(16px, 8px);
  }

  &:active {
  }

  &:active:after {
    box-shadow: inset 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
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