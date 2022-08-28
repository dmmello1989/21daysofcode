import * as S from "./styles";

export const Home = () => {
  return (
    <S.Section>
      <S.Container>
        <S.Title>21 days of code</S.Title>
        <S.Subtitle>Projects by Daniel Mello. Challenge by Rocketseat.</S.Subtitle>
        <S.Button className="btn" to="/projects">Go to projects</S.Button>
      </S.Container>
    </S.Section>
  )
}