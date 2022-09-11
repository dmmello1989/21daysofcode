import { DetailsHeader } from "../../../components/DetailsHeader";
import { Header } from "../../../components/Header";
import { ImageFrame } from "../../../components/ImageFrame";
import Img from "../../../images/01-repo.png"

import * as S from "./styles";

export const Repo = () => {
  return (
    <>
      <Header returnLink="/projects" />
      <DetailsHeader
        day="1"
        slug="01-Repo"
        projectTitle="Repo"
      />
      <S.Section>
        <S.Container>

        <S.Text>
            The first assignment was simply to create a github repository, so there it is!
          </S.Text>

          <ImageFrame 
            src={Img}
            width="700"
            height="300"
            alt="A printscreen of this project's repository on Github"
          />
          
        </S.Container>
      </S.Section>
    </>
  )
};