import { useState } from "react";
import { DetailsHeader } from "../../../components/DetailsHeader";
import { ImageFrame } from "../../../components/ImageFrame";
import { Header } from "../../../components/Header";
import Img from "../../../images/repo.png"

import * as S from "./styles";

const links = [
  {
    text: "Home",
    link: "/"
  },
  {
    text: "Projects List",
    link: "/projects"
  },
  {
    text: "About",
    link: "#"
  },
  {
    text: "Contact",
    link: "#"
  }
]

export const NotFound404 = () => {
  return (
    <>
      <Header returnLink="/projects" />
      <DetailsHeader
        day="5"
        slug="05-404Page"
        projectTitle="404 Page (Not Found)"
      />
      <S.Section>
        <S.Container>
          <S.Column>
            <S.Number404>404</S.Number404>
            <S.Title>Page not found!</S.Title>
            <S.Text>Don't worry, here are some useful links to get you back on track.</S.Text>
            <S.LinksWrapper>
              {links.map((link, index) => 
                <S.RedirectLink key={index} to={link.link}>
                  {link.text}
                </S.RedirectLink>
              )}
            </S.LinksWrapper>
          </S.Column>
        </S.Container>
      </S.Section>
    </>
  )
};