import styled from "styled-components";

export const Section = styled.div`
  background-color: #ffffff;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 64px;
`;

export const Column = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:first-child {
    flex: 1;
  }
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  font-size: 2.75rem;
  font-weight: 400;
  font-family: Poppins;
  color: var(--bg-calc-blue);

  > strong {
    font-weight: 900;
  }
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BoxNumber = styled.span`
  display: block;
  color: rgb(230, 69, 97);

  @media (max-width: 1199px) {
    display: flex;
    align-items: baseline;
  }
`;

export const Number = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 3.75rem;
  font-weight: 400;
  line-height: 60px;

  @media (max-width: 1199px) {
    margin-right: 2px;
    font-size: 1.125rem;
    font-family: 'Nunito', sans-serif;
    color: #EBE708;
  }
`;

export const Text = styled.span`
  display: block;
  font-size: 0.75rem;
  font-family: Poppins;

  @media (max-width: 1199px) {
    color: #EBE708;
    font-weight: 700;
  }
`;

export const Label = styled.span`
  display: inline-block;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 8px;

  > span {
    display: block;
    text-align: right;
  }
  
  ${props => !props.diff && `margin-right: 10px;`}

  @media (max-width: 1199px) {
    display: none
  }
`;

export const LabelEnd = styled.span`
  position: relative;
  display: inline-flex;
  color: #FFFFFF;
  font-size: 1rem;
  margin-left: 2px;
  align-items: flex-end;
  flex-direction: column;
  margin-right: 10px;
  padding-right: 14px;
  height: 100%;
  justify-content: center;

  > span {
    display: block;
    text-align: right;
  }
  
  ${props => !props.diff && `margin-right: 10px;`}

  @media (max-width: 767px) {
    font-size: 0.875rem;

    ${props => !props.diff && `margin-right: 6px;`}
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    background: #FFFFFF;
    opacity: .5;
    height: 60px;
    width: 2px;

    @media (max-width: 767px) {
      height: 40px;
    }
  }
`;

export const Image = styled.img`
  width: 450px;
`;

export const ImageLabel = styled.span`
  font-size: 0.75rem;
  color: var(--clr-accent);
  color: var(--bg-calc-blue);
`;

export const Link = styled.a`
  font-weight: 700;
  color: var(--bg-calc-blue);
`;