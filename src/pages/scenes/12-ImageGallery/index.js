import { useState } from "react";
import { DetailsHeader } from "../../../components/DetailsHeader";
import { Header } from "../../../components/Header";

import Logo from "../../../images/12-image-gallery/logo-hound.webp";
import Tree from "../../../images/12-image-gallery/tree.png";
import Clouds from "../../../images/12-image-gallery/clouds.png";

import * as S from "./styles";

const columns = [
  {
    type: "image",
    image: Tree,
    alt: "A tree"
  },
  {
    type: "image",
    image: Clouds,
    alt: "Some clouds"
  },
]

export const ImageGallery = () => {
  const [isClicked, setIsClicked] = useState(false);

  const IntroColumn = (src, alt) => {
    return (
      <S.Column>
        <S.Logo src={Logo} alt="logo" />

        <S.BottomWrapper>
          <S.Inspired>
            Inspired by 
            <a href="https://dribbble.com/shots/11561969-The-First-Garment/attachments/3182669?mode=mediadirib">
              'The First Garment'
            </a>, by 
            <a href="https://dribbble.com/ilochani">ilo chani</a>
            <S.ImageWrapper>
              <S.Image src={src} alt={alt} />
            </S.ImageWrapper>
          </S.Inspired>
        </S.BottomWrapper>
      </S.Column>
    )
  }

  return (
    <>
      <Header returnLink="/projects" />
      <DetailsHeader
        day="12"
        slug="12-ImageGallery"
        projectTitle="Image Gallery"
      />
      <S.Section>
        <S.Container>
          <IntroColumn src={Logo} alt="" />
          {columns.map((column, index) => {
            console.log(column)
            return (
              <S.Column key={index}>
                {column.type === "text" && (
                  <S.TextWrapper>
                    <S.Strong>Malomondo Photo Gran Prix </S.Strong>
                    <S.Divider />
                    <S.Text>
                      Art is breathing and retreating after shores. Nothing of the beauty goes unoticed. From the beachy waves to the highest peak, art permeates everything.
                    </S.Text>
                  </S.TextWrapper>
                )}
                {column.type === "image" && (
                  <S.ImageWrapper>
                    <S.Image src={column.image} alt={column.alt} />
                  </S.ImageWrapper>
                )}
              </S.Column>
            )
          })}
        </S.Container>
      </S.Section>
    </>
  )
};