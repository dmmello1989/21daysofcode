import * as S from "./styles";

export const Header = ({ returnLink }) => {
  return(
    <S.Header>
      <S.Container>
        <S.Return to={returnLink}>
          {`<< Return`} 
        </S.Return>
        <div />
      </S.Container>
    </S.Header>
  )
}