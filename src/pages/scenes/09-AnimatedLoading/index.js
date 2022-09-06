import { DetailsHeader } from "../../../components/DetailsHeader";
import { Header } from "../../../components/Header";

import * as S from "./styles";

export const AnimatedLoading = () => {
  return (
    <>
      <Header returnLink="/projects" />
      <DetailsHeader
        day="9"
        slug="09-AnimatedLoading"
        projectTitle="Animated Loading"
      />
      <S.Section>
        <S.Container>
          <S.Wrapper>
            {[1,2,3,4].map((number, index) => 
              <S.Ball key={index} number={number} />
            )}
          </S.Wrapper>
        </S.Container>
      </S.Section>
    </>
  )
};