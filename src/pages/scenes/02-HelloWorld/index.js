import { DetailsHeader } from "../../../components/DetailsHeader";
import { Header } from "../../../components/Header";
import { ImageFrame } from "../../../components/ImageFrame";
import Img from "../../../images/repo.png"

import * as S from "./styles";

export const HelloWorld = () => {
  return (
    <>
      <Header returnLink="/projects" />
      <DetailsHeader
        day="2"
        slug="02-HelloWorld"
        projectTitle="Hello, World"
      />
      <S.Section>
        <S.Container>
          <S.Device>
            <S.Screen>
              <S.Text>
                Hello, world!<span>_</span>
              </S.Text>
            </S.Screen>

            <S.BottomWrapper>
              <S.Speaker>
                <S.SpeakerHole />
                <S.SpeakerHole large />
                <S.SpeakerHole />
              </S.Speaker>

              <S.Button />

              <S.Speaker>
                <S.SpeakerHole />
                <S.SpeakerHole large />
                <S.SpeakerHole />
              </S.Speaker>
            </S.BottomWrapper>

          </S.Device>
        </S.Container>
      </S.Section>
    </>
  )
};