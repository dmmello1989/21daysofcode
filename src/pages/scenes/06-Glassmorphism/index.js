import Tilt from "react-vanilla-tilt";
import { DetailsHeader } from "../../../components/DetailsHeader";
import { Header } from "../../../components/Header";
import * as S from "./styles";

const tiltOptions = {
  max: 100,
  scale: 2,
  glare: true
};

export const Glassmorphism = () => {
  return (
    <>
      <Header returnLink="/projects" />
      <DetailsHeader
        day="6"
        slug="06-Glassmorphism"
        projectTitle="Glassmorphism"
      />
      <S.Section>
        <S.Container>
          <S.CircleWrapper>
            <S.Circle />
            <S.CircleShadow />
          </S.CircleWrapper>
          <S.CircleWrapper circleTwo>
            <S.Circle circleTwo />
            <S.CircleShadow circleTwo />
          </S.CircleWrapper>
          {[1,2,3].map((card,index) => (
            <S.TiltWrapper options={tiltOptions} style={null}>
              <S.Card key={index}>
                <S.Title>Glass</S.Title>
                <S.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet nulla ut arcu hendrerit pellentesque. Nunc non dui sem. Quisque accumsan dui quis enim gravida, sed molestie eros consectetur.
                </S.Text>
                <S.Button>Read more</S.Button>
              </S.Card>
            </S.TiltWrapper>
          ))}
        </S.Container>
      </S.Section>
    </>
  )
};