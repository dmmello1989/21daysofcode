import { useState } from "react";
import { DetailsHeader } from "../../../components/DetailsHeader";
import { ImageFrame } from "../../../components/ImageFrame";
import { Header } from "../../../components/Header";
import Img from "../../../images/repo.png"

import * as S from "./styles";

export const NotFound404 = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Header returnLink="/projects" />
      <DetailsHeader
        day="5"
        slug="05-404Page"
        projectTitle="404 Page (Not Found)"
      />
      <S.Section>
        <S.Container>
          404 Oops!
        </S.Container>
      </S.Section>
    </>
  )
};