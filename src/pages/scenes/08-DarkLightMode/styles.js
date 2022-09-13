import styled from "styled-components";

export const Section = styled.div`
  background-color: ${props => props.theme.colors.dark};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 184px);
  margin: auto;
  padding: 64px;
`;

export const Title = styled.h1`
  margin: auto auto 16px;
  color: ${props => props.theme.colors.light};
`;

export const Wrapper = styled.div`
  width: 16px;
  height: fit-content;
  margin: 0 auto auto;
`;

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
  position: relative;
  float: left;
  width: 100%;
  height: 40px;
  background: #e3e3e3;
  border-radius: 25px;
  transform: rotateZ(90deg);
  transition: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-transition: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  -ms-transition: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  ${props =>
    props.isActive &&
    `
    height: 40px;
    background: rgba(68, 186, 58, 0.5);
    border-radius: 25px;
    cursor: pointer;
  `};
`;

export const Circle = styled.span`
  position: absolute;
  top: 16px;
  left: -4px;
  width: 24px;
  height: 24px;
  background: #bbbbbb;
  border-radius: 50%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);
  transition: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-transition: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  -ms-transition: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0%);
  -webkit-transform: translateY(0%);
  -ms-transform: translateY(0%);

  ${props =>
    props.isActive &&
    `
    width: 24px;
    height: 24px;
    position: absolute;
    top: -24px;
    left: -4px;
    background: #44ba3a;
    border-radius: 50%;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);
    transform: translateY(100%);
    -webkit-transform: translateY(100%);
    -ms-transform: translateY(100%);
  `};
`;
