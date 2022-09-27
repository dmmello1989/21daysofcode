import { useState } from "react";
import { DetailsHeader } from "../../../components/DetailsHeader";
import { Header } from "../../../components/Header";

import Logo from "../../../images/12-image-gallery/logo-hound.webp";

import * as S from "./styles";

const columns = [
  {
    type: "text",
    
  }
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
          {[0,1,2,3,4,5,6,7,8,9].map((column, index) => {
            return (
              <S.Column>
                {column.style === "text" && (
                  <S.TextWrapper>
                    <S.Strong>Malomondo Photo Gran Prix </S.Strong>
                    <S.Divider />
                    <S.Text>
                      Art is breathing and retreating after shores. Nothing of the beauty goes unoticed. From the beachy waves to the highest peak, art permeates everything.
                    </S.Text>
                  </S.TextWrapper>
                )}
                {columns.style === "image" && (
                  <S.ImageWrapper>
                    <S.Image src={} alt={} />
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