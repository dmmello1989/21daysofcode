import styled, { keyframes} from "styled-components";

const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const Section = styled.div`
  
`;

export const Container = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 64px;
`;

export const Device = styled.div`
  position: relative;
  width: 300px;
  height: 280px;
  margin: 0 auto;
  padding: 16px 16px 16px 28px;
  border-radius: 8px;
  background-color: #0A6656;
  box-shadow: inset -9px -9px 0px 0px #074338;
  animation: ${float} 5s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 8px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: #064137;
    background-color: var(--clr-accent);
  }
`;

export const Screen = styled.div`
  position: relative;
  width: 260px;
  height: 160px;
  padding: 16px 8px 16px 24px;
  border-radius: 8px;
  background-color: #768F8A;
  box-shadow: inset 9px 9px 0px 0px #495A57;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 3rem;
  font-family: "Silkscreen", sans-serif;
  
  > span {
    display: inline-block;
    font-size: 2.5rem;
    animation: ${blink} 1s infinite step-start;
    font-family: "Silkscreen", sans-serif;
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
`;

export const Speaker = styled.div`
  position: relative;
  display: flex;
  flex: 0 0 54px;
  align-items: center;
  justify-content: space-between;
  max-width: 54px;
  transform: rotate(35deg);
  z-index: 7;
`;

export const SpeakerHole = styled.div`
  width: 12px;
  height: ${props => props.large ? "54px" : "44px"};
  border-radius: 16px;
  background-color: #303030;
  box-shadow: inset -2px -2px 0px 0px #495A57;
`;

export const Button = styled.div`
  position: relative;
  width: 54px;
  height: 18px;
  margin: auto;
  border-radius: 8px;
  background: linear-gradient(#777777, #CCC);
  box-shadow: 0 0 1px #555555 inset;
  z-index: 7;
  
  &:before {
    content: "";
    width: 46px;
    height:11px;
    position: absolute;
    margin: 3px 0 0 3px;
    border: solid 1px #444444;
    border-radius: 5px;
    background: linear-gradient(#888888, #666666);
    cursor: pointer;
  }

  &:after {
    position: absolute;
    top: -21px;
    left: 50%;
    transform: translateX(-50%);
    content: "START";
    font-size: 0.875rem;
    font-weight: var(--fw-bold);
    font-family: var(--ff-secondary);
    color: var(--clr-dark);
  }
`;