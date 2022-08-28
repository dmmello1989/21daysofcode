import * as S from "./styles";

export const Tooltip = ({ src, text }) => {
  return (
    <S.Container>
      <S.Box>
        <S.Image src={src} alt="" />
        <S.Text>{text}</S.Text>
      </S.Box>
    </S.Container>
  )
}