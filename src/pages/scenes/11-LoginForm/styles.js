import styled from "styled-components";

export const Section = styled.div`
  
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  padding: 64px;
`;

export const Card = styled.form`
  width: 364px;
  color: rgba(255,255,255, 0.7);
  margin: 0 auto;
  padding: 16px;
  border-radius: 30px;
  background-color: #303030;
  box-shadow: -5px -5px 10px rgba(255,255,255,0.05),
              5px 5px 15px rgba(0,0,0,0.5);
`;

export const Title = styled.h2`
  margin: 16px auto 32px;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-size: 1.125rem;
  font-weight: 500;
`;

export const Input = styled.input`
  display: block;
  margin-top: 4px;
  padding: 8px 16px;
  font-weight: 700;
  color: ${props => props.theme.colors.accent};
  border-radius: 4px;
  background-color: #303030;
  border: 2px inset rgba(33, 33, 33, 0.4);
  border-right: 2px inset rgba(188, 188, 188, 0.4);
  border-bottom: 2px inset rgba(188, 188, 188, 0.4);

  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }

  &:hover,
  &:focus,
  &:active {
    transition: all 0.8s ease;
  }

  &:hover {
    box-shadow: 0px 0px 4px #000000 inset;
  }

  &:active,
  &:focus {
    outline: #303030;
    box-shadow: 0px 0px 10px #000000 inset;
  }

  &:-internal-autofill-selected {
    background: #303030;
  }

  &::placeholder {
    color: #555;
  }
`;

export const ForgotLink = styled.span`
  display: block;
  width: fit-content;
  margin-top: -12px;
  margin-left: auto;
  font-size: 0.875rem;
  color: rgba(255,255,255,0.7);
  cursor: pointer;
  transition: color 0.4s ease;

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

export const TermsLabel = styled.label`
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 32px 0 8px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:before {
    content: '';
    width: 24px;
    height: 24px;
    margin-right: 8px;
    border-radius: 4px;
    background-color: #303030;
    border: 2px inset rgba(33, 33, 33, 0.4);
    border-right: 2px inset rgba(188, 188, 188, 0.4);
    border-bottom: 2px inset rgba(188, 188, 188, 0.4);
  }

  &:active:before {
    background-color: ${props => props.theme.colors.accent};
  }

  &:hover:before {
    transition: all 0.4s ease;
    box-shadow: 0px 0px 4px rgba(20, 20, 20, 1) inset;
  }

  ${props => props.isClicked && `
    &:before {
      transition: all 0.4s ease;
      box-shadow: 0px 0px 4px rgba(20, 20, 20, 1) inset;
      background-color: ${props.theme.colors.accent};
    }
  `};
`;

export const TermsInput = styled.input`
  display: block;
  width: 0px;
  height: 0px;
  background-color: #303030;
  cursor: pointer;
`;

export const Button = styled.button`
  display: block;
  margin: 16px auto;
  font-size: 1.25rem;
  padding: 8px 32px;
  color: rgba(255,255,255, 0.8);
  border-radius: 8px;
  background-color: #303030;
  border: none;
  cursor: pointer;
  transition: all 1s ease;
  box-shadow: -2px -2px 6px rgba(255,255,255,0.1),
              2px 2px 6px rgba(0,0,0,0.8);

  &:hover {
    transform: scale(1.125);
  }

  &:active {
    box-shadow: inset -2px -2px 6px rgba(255,255,255,0.1),
            inset  2px 2px 6px rgba(0,0,0,0.8);
  }
`;

export const SubmitButton = styled(Button)`
  font-weight: 700;
  color: rgba(0,0,0,0.8);
  background: ${props => props.theme.colors.accent};
`;


export const Divider = styled.div`
  width: calc(100% - 32px);
  height: 2px;
  border-radius: px;
  margin: 24px auto;
  background-color: rgba(255,255,255,0.1);
`;

export const RegisterButton = styled(Button)`
`;