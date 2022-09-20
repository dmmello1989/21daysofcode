import styled from "styled-components";

export const Section = styled.div`
  
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 184px);
  margin: auto;
  padding: 64px;
`;

export const Column = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #ffffff;
  max-width: calc(100% / 11);
`;

export const Logo = styled.img`
  max-width: 100%;
`;

export const BottomWrapper = styled.div`
  
`;

export const Inspired = styled.p`
  
`;

export const ImageWrapper = styled.div`
  
`;

export const Image = styled.img`
  
`;

export const TextWrapper = styled.div`
  padding: 32px 8px;
  color: ${props => props.theme.colors.accent};
  background-color: #000000;
`;

export const Strong = styled.span`
  font-weight: 700;
  font-size: 1.125rem;
  font-family: var(--ff-primary);
`;

export const Divider = styled.div`
  height: 4px;
  width: 30px;
  background-color: ${props => props.theme.colors.account};
`;

export const Text = styled.p`
  
`;