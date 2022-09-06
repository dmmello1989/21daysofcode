import styled, { keyframes, css } from "styled-components";

const loading = keyframes`
  from {
    transform: translateY(100px);
  }
  to {
    transform: translateY(0px);
  }
`;

export const Section = styled.div`
  
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 184px);
  margin: auto;
  padding: 64px;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 320px;
  margin: auto;
`;

export const Ball = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--bg-calc-blue);
  animation: ${loading} 0.5s cubic-bezier(.19,.57,.3,.98) infinite alternate;
  
  &:nth-child(${props => props.number}) {
    animation-delay: 0.${props => props.number -1}s;
    opacity: ${props => 1 - `0.${props.number * 2}`};
  }
`;