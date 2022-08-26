import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  background-color: var(--purple);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin-bottom: 32px;
  font-size: 5rem;
  font-family: 'Russo One', sans-serif;
`;

export const Subtitle = styled.h2`
  margin-bottom: 32px;
  font-size: 2rem;
`;

export const Button = styled(Link)`
  padding: 16px 32px;
  font-weight: 700;
  font-size: 1.25rem;
  color: #FFF;
  border-radius: 30px;
  background-color: #C94862;
  box-shadow: 0 5px 10px rgba(0,0,0,0.25);
`;