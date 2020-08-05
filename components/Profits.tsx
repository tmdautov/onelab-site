import React from "react";
import {
  UserOutlined,
  ExperimentOutlined,
  FileDoneOutlined,
  SettingOutlined,
  PoundOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import theme from "../styles/theme";

const Profits = () => {
  const profits = [
    {
      header: "Сертификаты от",
      label: "one.kz",
      icon: (
        <FileDoneOutlined
          style={{
            width: "2.6vw",
            height: "5.3vh",
            fontSize: "234%",
            margin: "3.183vh 0",
          }}
        />
      ),
    },
    {
      header: "Обучение на реальных кейсах",
      label: "one.kz",
      icon: (
        <ExperimentOutlined
          style={{
            width: "2.6vw",
            height: "5.3vh",
            fontSize: "234%",
            margin: "3.183vh 0",
          }}
        />
      ),
    },
    {
      header: "Живое общение",
      label: "с ведущими разработчиками one.kz",
      icon: (
        <SmileOutlined
          style={{
            width: "2.6vw",
            height: "5.3vh",
            fontSize: "234%",
            margin: "3.183vh 0",
          }}
        />
      ),
    },
    {
      header: "Гарантируем трудоустройство",
      label: "лучшим выпускникам",
      icon: (
        <PoundOutlined
          style={{
            width: "2.6vw",
            height: "5.3vh",
            fontSize: "234%",
            margin: "3.183vh 0",
          }}
        />
      ),
    },
    {
      header: "Обучаем Data Science",
      label: "с 2014 года",
      icon: (
        <SettingOutlined
          style={{
            width: "2.6vw",
            height: "5.3vh",
            fontSize: "234%",
            margin: "3.183vh 0",
          }}
        />
      ),
    },
    {
      header: "Более 1500 студентов",
      label: "за 5 лет",
      icon: (
        <UserOutlined
          style={{
            width: "2.6vw",
            height: "5.3vh",
            fontSize: "234%",
            margin: "3.183vh 0",
          }}
        />
      ),
    },
  ];
  return (
    <div>
      <style jsx>
        {`
          .profits {
            padding-top: 9.55vh;
            padding-bottom: 9.55vh;
            text-align: center;
            color: #1a1a1a;
            background: ${theme.colors.white};
          }

          h1 {
            font-weight: 800;
            font-size: 2.3rem;
            margin-bottom: 9.55vh;
          }

          .header-profit {
            font-size: 1.25rem;
            margin-bottom: 3%;
          }

          .label-profit {
            font-size: 0.95rem;
          }

          .grid-container {
            justify-content: center;
            display: grid;
            grid-template-columns: 23vw 23vw 23vw;
            grid-template-rows: 21.22vh;
            column-gap: 3.183vh;
            row-gap: 1.5625vw;
          }

          @media only screen and (max-width: 1000px) {
            .grid-container {
              display: flex;
              flex-direction: column;
            }
          }
        `}
      </style>
      <div className="profits">
        <h1>Что ты получишь?</h1>
        <div className="grid-container">
          {profits.map((e) => {
            return (
              <div>
                {e.icon}
                <h2 className="header-profit">{e.header}</h2>
                <label className="label-profit">{e.label}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profits;
