import styled from "styled-components";

export const Section = styled.div`
  
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  margin: auto;
  padding: 46px;
  background-color: var(--bg-calc-green);
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #000000;
  max-width: calc(100% / 6);

  ${props => props.position === "center" && `
    justify-content: center;
  `};

  ${props => props.position === "bottom" && `
    justify-content: flex-end;
  `};

${props => props.position === "space-between" && `
    justify-content: space-between;
  `};
`;

export const Logo = styled.img`
  max-width: 100%;
  filter: opacity(90%);
`;

export const BottomWrapper = styled.div`
  margin-bottom: 64px;
  padding: 16px;
`;

export const Inspired = styled.div`
  
`;

export const ImageWrapper = styled.div`
  
`;

export const Image = styled.img`
  filter: grayscale(100%);
  filter: opacity(90%);
`;

export const TextWrapper = styled.div`
  padding: 32px 8px;
  font-family: PT Sans;
  font-size: 0.875rem;
  line-height: 19px;
  color: ${props => props.theme.colors.accent};
  background-color: #000000;
`;

export const Strong = styled.span`
  font-weight: 700;

  ${props => props.italic && `
    font-style: italic;
  `};
`;

export const Divider = styled.div`
  height: 4px;
  width: 60px;
  margin: 16px 0;
  background-color: ${props => props.theme.colors.accent};
`;

export const Text = styled.p`
  font-size: 0.875rem;
  line-height: 19px;
  color: ${props => props.color ? props.color : props.theme.colors.accent};

  > a {
    color: inherit;
    text-decoration: underline;
  }
`;