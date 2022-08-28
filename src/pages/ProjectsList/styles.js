import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  padding: 60px 0;
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

export const ItemLink = styled(Link)`
  
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
  color: var(--clr-light);
  font-family: var(--ff-secondary);
  transform: translateX(-50%);
  transition: all 0.4s;
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
  bottom: 26px;
  right: -16px;
  width: 200px;
  font-size: 12rem;
  line-height: 140px;
  text-align: center;
  color: var(--clr-accent);
  font-weight: var(--fw-black);
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: #E01639;
  border: 2px solid rgba(0,0,0,0.7);
`;
