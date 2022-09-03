import { Link } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import BgDesktop from "../../../images/bg-404-page.gif";

export const Section = styled.div`
  position: relative;
  height: 100vh;
  background: url(${BgDesktop}) center/cover no-repeat;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8) 25%,
      rgba(0, 0, 0, 0) 90%
      /* rgba(0, 0, 0, 0.8), */
      /* rgba(0, 0, 0, 0) 60%, */
      /* rgba(0, 0, 0, 0.8) 100% */
    );
    z-index: 3;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 132px 0 64px;
  text-align: center;
  z-index: 5;
`;

export const Number404 = styled.div`
  font-size: 21rem;
  font-weight: 900;
  line-height: 16rem;
  font-family: var(--ff-primary);
  color: rgba(0,0,0,0.7);
`;

export const Title = styled.h1`
  margin: 32px 0px 24px;
  font-size: 3rem;
  font-weight: 700;
  color: var(--clr-complimentary);
`;

export const Text = styled.div`
  font-size: 1.125rem;
  margin-bottom: 16px;
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 432px;
`;

export const RedirectLink = styled(Link)`
  font-size: 1.5rem;
  color: var(--clr-accent);
  transition: color 0.4s;

  &:hover {
    color: var(--clr-accentMono);
  }
`;