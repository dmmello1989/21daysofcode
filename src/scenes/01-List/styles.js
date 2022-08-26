import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  padding: 60px 0;
  background-color: var(--purple);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
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

export const ItemInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

export const Title = styled.span`
  position: absolute;
  bottom: -64px;
  left: 50%;
  font-size: 2rem;
  font-weight: 700;
  color: var(--white);
  transform: translateX(-50%);
  white-space: nowrap;
`;

export const Item = styled.li`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 32px 32px 64px;
  border-radius: 16px;
  perspective: 1000px;
  cursor: pointer;

  &:hover ${ItemInner} {
    transform: rotateY(180deg);
  }

  &:hover ${Title} {
    bottom: -52px;
    font-size: 2.5rem;
    transition: all 0.4s;
  }
`;

export const ItemFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: rgba(0,0,0,0.3);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden; /* Safari */
`;

export const ItemBack = styled(ItemFront)`
  transform: rotateY(180deg);
`;

export const Number = styled.div`
  position: absolute;
  bottom: -48px;
  right: -16px;
  width: 200px;
  text-align: center;
  font-family: 'Russo One', sans-serif;
  font-size: 12rem;
  color: var(--cyan);
  
`;


export const Image = styled.div`
  width: 100%;
  height: 100%;
  background: orange;
`;