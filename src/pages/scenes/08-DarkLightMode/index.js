import { DetailsHeader } from "../../../components/DetailsHeader";
import { Header } from "../../../components/Header";
import * as S from "./styles";

export const DarkLightMode = ({ active, toggleDarkMode }) => {
  return (
    <>
      <Header returnLink="/projects" />
      <DetailsHeader
        day="8"
        slug="08-DarkLightMode"
        projectTitle="Dark/Light Mode"
      />
      <S.Section>
        <S.Container>
          <S.Title>Dark Mode</S.Title>
          <S.Wrapper isActive={active} onMouseDown={e => e.preventDefault()} onClick={() => toggleDarkMode()}>
            <S.Input type="checkbox" />
            <S.Label isActive={active} className={active}>
              <S.Circle isActive={active} />
            </S.Label>
          </S.Wrapper>
        </S.Container>
      </S.Section>
    </>
  )
};