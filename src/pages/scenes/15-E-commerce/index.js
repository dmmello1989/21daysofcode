import { useState } from "react";
import { DetailsHeader } from "../../../components/DetailsHeader";
import { Header } from "../../../components/Header";
import { SectionMain } from "./components/sectionMain";
import { SectionAbout } from "./components/sectionAbout";

import * as S from "./styles";

export const ECommerce = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <Header returnLink="/projects" />
      <DetailsHeader
        day="15"
        slug="03-ECommerce"
        projectTitle="E-Commerce"
      />
      <SectionMain />
      <SectionAbout />
    </>
  )
};