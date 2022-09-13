import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  padding: 32px 64px 0;
  background-color: ${props => props.theme.colors.dark};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
`;

export const Return = styled(Link)`
  color: ${props => props.theme.colors.complimentary};
  font-weight: var(--fw-black);
`;