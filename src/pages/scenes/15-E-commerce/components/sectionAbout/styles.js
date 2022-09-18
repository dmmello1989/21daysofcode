import styled from "styled-components";
import EcomWaves from "../../../../../images/15-waves.gif"

export const Section = styled.section`
  width: 100%;
  background-color: ${props => props.theme.colors.ecomBlue};
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 16px 0;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 2.5rem;
  font-family: Poppins;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.25);
`;


export const WaveWrapper = styled.div`
  width: 100%;
  height: 500px;
  margin-top: -160px;
  background: url(${EcomWaves}) center/contain;
`;