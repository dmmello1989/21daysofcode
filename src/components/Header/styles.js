import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  padding: 32px 64px 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
`;

export const Return = styled(Link)`
  color: var(--clr-complimentary);
  font-weight: var(--fw-black);
`;