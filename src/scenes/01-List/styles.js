import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  background-color: var(--purple);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  min-height: 100vh;
  margin: 0 auto;
`;

export const List = styled.ul`
  display: flex;
  flex: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.li`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 16px;
  background: rgba(0,0,0,0.3);
`;

export const Number = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  font-family: 'Russo One', sans-serif;
  font-size: 8rem;
  color: var(--cyan);
  
`;

export const Title = styled.span`
  
`;