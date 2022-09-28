import { useState } from "react";
import { DetailsHeader } from "../../../components/DetailsHeader";
import { Header } from "../../../components/Header";

import Logo from "../../../images/12-image-gallery/logo-hound.webp";
import Branches from "../../../images/12-image-gallery/branches.webp";
import Garden from "../../../images/12-image-gallery/garden.webp";
import Building from "../../../images/12-image-gallery/buildings.webp";
import Clouds from "../../../images/12-image-gallery/clouds.png";
import Sunglasses from "../../../images/12-image-gallery/sunglasses.webp";

import * as S from "./styles";

export const ImageGallery = () => {
  const [isClicked, setIsClicked] = useState(false);

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
          <S.Column position="space-between">
            <S.Logo src={Logo} alt="logo" />

            <S.BottomWrapper>
              <S.Inspired>
                <S.Text color="#000000">
                  Inspired by 
                  &nbsp;<a href="https://dribbble.com/shots/11561969-The-First-Garment/attachments/3182669?mode=mediadirib">
                    'The First Garment'
                  </a>, by 
                  &nbsp;<a href="https://dribbble.com/ilochani">ilo chani</a>
                </S.Text>
                <S.ImageWrapper>
                  {/* <S.Image src={src} alt={alt} /> */}
                </S.ImageWrapper>
              </S.Inspired>
            </S.BottomWrapper>
          </S.Column>

          <S.Column position="top">
            <S.ImageWrapper>
              <S.Image src={Garden} alt="A tree" />
            </S.ImageWrapper>
            <S.TextWrapper>
              <S.Strong>Malomondo Photo Gran Prix </S.Strong>
              <S.Divider />
              <S.Text>
                Art is breathing and retreating after shores. Nothing of the beauty goes unoticed. From the beachy waves to the highest peak, art permeates everything.
              </S.Text>
            </S.TextWrapper>
          </S.Column>

          <S.Column position="bottom">
            <S.ImageWrapper>
              <S.Image src={Sunglasses} alt="Protect you from the sun" />
            </S.ImageWrapper>
            <S.TextWrapper>
              <S.Strong italic>"Protect me from the sun"</S.Strong>
              <S.Divider />
              <S.Text>
                Wants pawn term, dare worsted ladle gull hoe lift wetter murder inner ladle cordage, honor itch offer lodge dock florist. Disk ladle gull orphan worry ladle
              </S.Text>
            </S.TextWrapper>
          </S.Column>              
        </S.Container>
      </S.Section>
    </>
  )
};