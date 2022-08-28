import * as S from "./styles";

export const Header = () => {
  return(
    <S.Header>
      <S.Container>
        <S.Return to="/projects">
          {`<< Return`} 
        </S.Return>
        <div />
      </S.Container>
    </S.Header>
  )
}