import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { DetailsHeader } from "../../../components/DetailsHeader";
import { Header } from "../../../components/Header";

import * as S from "./styles";

export const ParticlesJs = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container)
  }, [])

  return (
    <>
      <Header returnLink="/projects" />
      <DetailsHeader
        day="10"
        slug="10-Particles"
        projectTitle="Particles.js"
      />
      <S.Section>
        <S.Container>
          <Particles init={particlesInit} loaded={particlesLoaded} />
        </S.Container>
      </S.Section>
    </>
  )
};