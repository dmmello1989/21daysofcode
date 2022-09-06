import { useState } from "react";
import { DetailsHeader } from "../../../components/DetailsHeader";
import { Header } from "../../../components/Header";

import * as S from "./styles";

export const Counter = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <Header returnLink="/projects" />
      <DetailsHeader
        day="7"
        slug="07-Counter"
        projectTitle="Counter"
      />
      <S.Section>
        <S.Container>
          <S.Button isClicked={isClicked} onClick={() => setIsClicked(!isClicked)}>
            <S.ButtonText>Click me!</S.ButtonText>
          </S.Button>
        </S.Container>
      </S.Section>
    </>
  )
};