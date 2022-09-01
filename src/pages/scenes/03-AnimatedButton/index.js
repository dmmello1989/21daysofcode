import { useState } from "react";
import { DetailsHeader } from "../../../components/DetailsHeader";
import { Header } from "../../../components/Header";
import { ImageFrame } from "../../../components/ImageFrame";
import Img from "../../../images/repo.png"

import * as S from "./styles";

export const AnimatedButton = () => {
  const [isActive, setIsActive] = useState(false);

  console.log(isActive)

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
          <S.NeuromorphicButton isClick={isActive} onClick={() => setIsActive(!isActive)}>Click me</S.NeuromorphicButton>
        </S.Container>
      </S.Section>
    </>
  )
};