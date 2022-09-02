import { useState } from "react";
import { DetailsHeader } from "../../../components/DetailsHeader";
import { Header } from "../../../components/Header";

import * as S from "./styles";

export const Calculator = () => {
  const [isActive, setIsActive] = useState(false);
  const [bgColor, setBgColor] = useState("green");

  const handleOperation = () => {
    return true;
  }

  const colors = [
    "green",
    "blue",
    "pink"
  ];

  return (
    <>
      <Header returnLink="/projects" />
      <DetailsHeader
        day="4"
        slug="04-Calculator"
        projectTitle="Calculator"
      />
      <S.Section bgColor={bgColor}>
        <S.Container>
          <S.Box>
            <S.Header>
              <S.ColorSwitcher>
                {colors.map((color, index) => (
                  <S.ColorCircle key={index} color={color} onClick={() => setBgColor(color)} />
                ))}
              </S.ColorSwitcher>
            </S.Header>

            <S.Screen>
              <S.ScreenInput value="0" bgColor={bgColor} />
            </S.Screen>

            <S.Body>
              <S.Row>
                {[7,8,9].map((number,index) => (
                  <S.NumberButton key={index} bgColor={bgColor}>{number}</S.NumberButton>
                ))}
                <S.OperatorButton>/</S.OperatorButton>
              </S.Row>
              <S.Row>
                {[4,5,6].map((number,index) => (
                  <S.NumberButton key={index} bgColor={bgColor}>{number}</S.NumberButton>
                ))}
                <S.OperatorButton>*</S.OperatorButton>
              </S.Row>
              <S.Row>
                {[1,2,3].map((number,index) => (
                  <S.NumberButton key={index} bgColor={bgColor}>{number}</S.NumberButton>
                ))}
                <S.OperatorButton>-</S.OperatorButton>
              </S.Row>
              <S.Row>
                <S.ClearButton>C</S.ClearButton>
                <S.NumberButton bgColor={bgColor}>0</S.NumberButton>
                <S.OperatorButton isBigger onClick={() => handleOperation()}>=</S.OperatorButton>
              </S.Row>
            </S.Body>
          </S.Box>
        </S.Container>
      </S.Section>
    </>
  )
};