import styled from "styled-components";
import Tilt from "react-vanilla-tilt";

export const Section = styled.div`
  position: relative;
  height: 100vh;
  background: var(--bg-calc-blue);
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  height: 100%;
  margin: auto;
  padding: 64px 0;
`;

export const CircleWrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 14%;
  width: 400px;
  height: 400px;

  ${props => props.circleTwo && `
      top:10%;
      left: 53%;
  `};
`;

export const Circle = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: linear-gradient(to top, #2a451b, #0044ff);
  z-index: 5;

  ${props => props.circleTwo && `
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: linear-gradient(to top, #FFBB00, #FF00C3);
  `};
`;

export const CircleShadow = styled.div`
  position: absolute;
  top: calc(30% + 275px);
  left: calc(14% + 150px);
  width: 400px;
  height: 50px;
  margin-left: -100px;
  border-radius: 50%;
  transform: translateX(-100px);
  background: radial-gradient(50% 50%, #000 0%, var(--bg-calc-blue) 100%);
  z-index: 1;

  ${props => props.circleTwo && `
    top: 600px;
    left: 200px;
    width: 600px;
    height: 50px; 
  `};
`;

export const TiltWrapper = styled(Tilt)`
  border-radius: 16px;
  z-index: 5;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 420px;
  padding: 8px 32px;
  border-radius: 16px;
  background: rgba(255,255,255,0.1);
  box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
  border-top: 1px solid rgba(255,255,255, 0.5);
  border-left: 1px solid rgba(255,255,255, 0.5);
  backdrop-filter: blur(5px);
  z-index: 7;

  & + & {
    margin-left: 32px;
  }
`;

export const Title = styled.h1`
  margin-left: auto;
  font-size: 5rem;
  font-family: Poppins;
  font-weight: 200;
  color: rgba(255,255,255,0.4);
  pointer-events: none;
`;

export const Text = styled.p`
  margin: 16px 0 32px;
  text-shadow: 0px 2px 3px rgba(0,0,0,0.4);
  font-size: 0.875rem;
  font-family: var(--ff-secondary);
`;

export const Button = styled.button`
  padding: 8px 20px;
  width: 200px;
  font-size: 1.25rem;
  font-weight: 700;
  color: rgba(255,255,255,0.7);
  border: none;
  background: rgba(255,255,255,0.1);
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.3);
  text-shadow: 0px 1px 1px rgba(255,255,255,0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0px 3px 5px 1px rgba(0, 0, 0, 0.25);
    transform: translateY(1px);
  }
`;