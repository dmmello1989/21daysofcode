import { useState } from "react";
import { DetailsHeader } from "../../../components/DetailsHeader";
import { Header } from "../../../components/Header";

import * as S from "./styles";

export const LoginForm = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <Header returnLink="/projects" />
      <DetailsHeader
        day="3"
        slug="03-AnimatedButton"
        projectTitle="Animated Button"
      />
      <S.Section>
        <S.Container>
          
        </S.Container>
      </S.Section>
    </>
  )
};