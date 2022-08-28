import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  text-align: center;
`;

export const Title = styled.h1`
  margin-bottom: 32px;
  font-size: 9rem;
  font-weight: var(--fw-black);
  font-family: var(--ff-primary);
`;

export const Subtitle = styled.h2`
  margin-bottom: 32px;
  font-size: 2rem;
  font-weight: var(--fw-reg);
`;

export const Button = styled(Link)`
  padding: 16px 32px;
  font-weight: 700;
  font-size: 1.25rem;
  color: #FFF;
  color: var(--clr-dark);
  background-color: #E01639;
  background-color: var(--clr-accent);
  box-shadow: 0 5px 10px rgba(0,0,0,0.25);
`;