import * as S from "./styles";

export const ImageFrame = ({ src, alt, width, height }) => {
  return (
    <S.Image src={src} alt={alt} width={width} height={height} />
  );
};