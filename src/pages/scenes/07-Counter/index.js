import { useEffect, useState } from "react";
import { DetailsHeader } from "../../../components/DetailsHeader";
import { Header } from "../../../components/Header";

import * as S from "./styles";

const initialState = {
  nu_dia: '00',
  labe_dia: 'DIA',
  nu_hors: '00',
  labe_hors: 'HORA',
  nu_minu: '00',
  labe_minu: 'MINUTO',
  nu_secs: '00',
  labe_secs: 'SEGUNDO'
};

export const Counter = ({ dateProps }) => {
  const [time, setTime] = useState(initialState);
  const [date, setDate] = useState(new Date(2022, 11, 31, 23, 59, 59));

  useEffect(() => {
    updateTime();
  }, []);


  const updateTime = () => {
    // let date = new Date(2022, 11, 31, 23, 59, 59);

    // if (date == "Invalid Date") {
    //   date = new Date(new Date(date.split("-0300")[0]).valueOf() + 1000 * 60 * 60 * 3);
    // }

    const YY = date.getFullYear();
    const MM = date.getMonth(); 
    const DD = date.getDate();
    const HH = date.getHours();
    const MI = date.getMinutes();
    const SS = date.getSeconds();

    var today = new Date();
    var future = new Date(YY, MM, DD, HH, MI, SS);
    var ss = parseInt((future - today) / 1000);
    var mm = parseInt(ss / 60);
    var hh = parseInt(mm / 60);
    var dd = parseInt(hh / 24);
    ss = ss - (mm * 60);
    mm = mm - (hh * 60);
    hh = hh - (dd * 24);

    let updatedTime ={
      nu_dia: dd,
      labe_dia: dd <= 1 ? "day" : "days",
      nu_hors: String(hh).padStart(2, "0"),
      labe_hors: hh <= 1 ? "HOUR" : "HOURS",
      nu_minu: String(mm).padStart(2, "0"),
      labe_minu: mm <= 1 ? "MINUTE" : "MINUTES",
      nu_secs: String(ss).padStart(2, "0"),
      labe_secs: ss <= 1 ? "SECOND" : "SECONDS",
    };

    setTime(() => updatedTime);

    setTimeout(updateTime, 1000);
  }

  return (
    <>
      <Header returnLink="/projects" />
      <DetailsHeader
        day="7"
        slug="07-Counter"
        projectTitle="Counter"
      />
      <S.Box>
        {/* <MediaQuery query="(max-width: 1199px)">
          <BoxNumber>
            <Number>
              {nu_hors}
              <Label diff={true}>:</Label>
            </Number>
            <Text>h</Text>
          </BoxNumber>
          <BoxNumber>
            <Number>
              {nu_minu}
              <Label diff={true}>:</Label>
            </Number>
            <Text>m</Text>
          </BoxNumber>
          <BoxNumber>
            <Number>
              {nu_secs}
            </Number>
            <Text>s</Text>
          </BoxNumber>
        </MediaQuery> */}

        {/* <MediaQuery query="(min-width: 1200px)"> */}
          <S.BoxNumber>
            <S.Number>
              {time.nu_hors}
              <S.Label diff={true}>:</S.Label>
            </S.Number>
            <S.Text>hours</S.Text>
          </S.BoxNumber>
          <S.BoxNumber>
            <S.Number>
              {time.nu_minu}
              <S.Label diff={true}>:</S.Label>
            </S.Number>
            <S.Text>min</S.Text>
          </S.BoxNumber>
          <S.BoxNumber>
            <S.Number>
              {time.nu_secs}
            </S.Number>
            <S.Text>seg</S.Text>
          </S.BoxNumber>
        {/* </MediaQuery> */}

      </S.Box>
    </>
  )
};