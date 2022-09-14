import styled from "styled-components";

export const Header = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.dark};
  z-index: 99;
`;

export const Container = styled.div`
  
`;

export const ProjectTitle = styled.div`
  padding: 16px 64px;
  font-weight: var(--fw-reg);
  font-size: var(--fs-h1);
  font-family: var(--ff-secondary);
  color: ${props => props.theme.colors.light};

  > span {
    font-size: 2rem;
    font-weight: 700;

    > strong {
      display: inline-block;
      margin-left: 4px;
      font-size: 4rem;
      color: ${props => props.theme.colors.complimentary};
    }
  }
`;

export const GithubLink = styled.div`
  font-size: 1rem;
  font-family: var(--ff-secondary);
  color: ${props => props.theme.colors.light};

  > a {
    display: inline-block;
    margin-left: 16px;
    font-size: 0.875rem;
    font-family: var(--ff-secondary);
    color: ${props => props.theme.colors.accent};
  }
`;