import styled, { keyframes, css } from "styled-components";

export const Section = styled.div`
  color: #100909;

  ${props => props.bgColor === "green" && `
    background-color: var(--bg-calc-green);
  `};
  ${props => props.bgColor === "blue" && `
    background-color: var(--bg-calc-blue);
  `};
  ${props => props.bgColor === "pink" && `
    background-color: var(--bg-calc-pink);
  `};
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 64px;
  /* background-color: #ffffff; */
`;

export const Box = styled.div`
  max-width: 320px;
  margin: 0 auto;
  padding: 16px;
  border-radius: 16px;
  border: 4px solid var(--clr-dark);
  font-family: var(--ff-secondary);

`;

export const Header = styled.div`
  margin-bottom: 8px;
`;

export const ColorSwitcher = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 4px 8px;
  border-radius: 16px;
  background-color: var(--clr-dark);
`;

export const ColorCircle = styled.div`
  width: 32px;
  height: 32px;
  padding: 8px;
  border: 2px solid var(--clr-dark);
  border-radius: 50%;
  cursor: pointer;

  ${props => props.color === "green" && `
    background-color: var(--bg-calc-green);
  `};
  ${props => props.color === "blue" && `
    background-color: var(--bg-calc-blue);
  `};
  ${props => props.color === "pink" && `
    background-color: var(--bg-calc-pink);
  `};
`;

export const Screen = styled.div`
  padding: 32px;
  border-radius: 16px;
  background-color: var(--clr-dark);
  `;

export const ScreenInput = styled.input`
  width: 100%;
  padding: 4px 16px;
  font-size: var(--fs-h2);
  border: none;
  border-radius: 16px;
  text-align: right;

  ${props => props.bgColor === "green" && `
    background-color: var(--bg-calc-green);
  `};
  ${props => props.bgColor === "blue" && `
    background-color: var(--bg-calc-blue);
  `};
  ${props => props.bgColor === "pink" && `
    background-color: var(--bg-calc-pink);
  `};
`;

export const Body = styled.div`
  padding: 16px 0 0;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 8px 0;
`;

export const Button = styled.button`
  width: 64px;
  height: 64px;
  margin: 2px;
  font-size: 2rem;
  font-weight: 700;
  font-family: var(--ff-secondary);
  text-align: center;
  border-radius: 8px;
  border: 3px solid #000000;
  cursor: pointer;
  
  ${props => props.bgColor === "green" && `
    background-color: var(--bg-calc-green);
  `};
  ${props => props.bgColor === "blue" && `
    background-color: var(--bg-calc-blue);
  `};
  ${props => props.bgColor === "pink" && `
    background-color: var(--bg-calc-pink);
  `};
`;

export const NumberButton = styled(Button)`
`;

export const OperatorButton = styled(Button)`
  ${props => props.isBigger && `
    flex: 2;
  `};

  ${props => props.bgColor && `

  `};
`;

export const ClearButton = styled(Button)`
  font-weight: 900;
  background-color: var(--clr-dark);
  color: var(--clr-complimentary);
`;