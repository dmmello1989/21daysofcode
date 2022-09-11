import styled from "styled-components";

export const Section = styled.div`
  
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 64px;
  /* background-color: #ffffff; */
`;


export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 16px;

  @media (max-width: 1199px) {
    margin-left: 0;
  }
`

export const BoxNumber = styled.span`
  width: 56px;
  display: block;
  text-align: center;

  @media (max-width: 1199px) {
    display: flex;
    align-items: baseline;
    width: 40px;
  }
`;

export const Number = styled.span`
  color: #EB0207;
  font-family: 'Rubik', sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;

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
  color: #EB0207;

  @media (max-width: 1199px) {
    color: #EBE708;
    font-weight: 700;
  }
`;

export const Label = styled.span`
  display: inline-block;
  color: #EB0207;
  font-size: 1.25rem;
  font-weight: 700;
  margin-left: 2px;

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