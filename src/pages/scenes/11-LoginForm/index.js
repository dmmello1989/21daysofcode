import { useState } from "react";
import { DetailsHeader } from "../../../components/DetailsHeader";
import { Header } from "../../../components/Header";

import * as S from "./styles";

export const LoginForm = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = e => {
    return e.preventDefault();
  }

  console.log(isClicked)

  return (
    <>
      <Header returnLink="/projects" />
      <DetailsHeader
        day="11"
        slug="11-LoginForm"
        projectTitle="Login Form"
      />
      <S.Section>
        <S.Container>
          <S.Card>
            <S.Title>Sign In</S.Title>

            <S.Label>
              E-mail
              <S.Input type="text" name="email" placeholder="example@email.com" />
            </S.Label>
            
            <S.Label>
              Password
              <S.Input type="password" name="password" />
            </S.Label>
            <S.ForgotLink>Forgot the password?</S.ForgotLink>

            <S.TermsLabel id="terms" onClick={() => setIsClicked(!isClicked)} isClicked={isClicked}>
              I agree with the Terms
            </S.TermsLabel>
            <S.TermsInput type="checkbox" name="terms" />

            <S.SubmitButton onClick={e => handleClick(e)}>Log In</S.SubmitButton>

            <S.Divider />

            <S.RegisterButton onClick={e => handleClick(e)}>Create Account</S.RegisterButton>
          </S.Card>
        </S.Container>
      </S.Section>
    </>
  )
};