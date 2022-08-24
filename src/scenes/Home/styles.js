import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  min-height: 100vh;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 4rem;
`;

export const Button = styled(Link)`
  padding: 24px 8px;
  color: #6F48C9;
  border-radius: 30px;
  background-color: yellow;
`;