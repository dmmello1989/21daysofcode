import styled from "styled-components";

export const Header = styled.div`
  
`;

export const Container = styled.div`
  
`;

export const ProjectTitle = styled.div`
  padding: 16px 64px;
  font-weight: var(--fw-reg);
  font-size: var(--fs-h1);
  font-family: var(--ff-secondary);

  > span {
    font-size: 2rem;
    font-weight: 700;

    > strong {
      display: inline-block;
      margin-left: 4px;
      font-size: 4rem;
      color: var(--clr-complimentary);
    }
  }
`;

export const GithubLink = styled.div`
  font-size: 1rem;
  font-family: var(--ff-secondary);

  > a {
    display: inline-block;
    margin-left: 16px;
    color: var(--clr-accent);
    font-size: 0.875rem;
    font-family: var(--ff-secondary);
  }
`;