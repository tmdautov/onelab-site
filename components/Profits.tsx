import React from "react";
import { UserOutlined, ExperimentOutlined, FileDoneOutlined, SettingOutlined, PoundOutlined, SmileOutlined, } from "@ant-design/icons";
import Wrapper from "./Wrapper";

const Profits = () => {
    const profits = [
        {
            header: "Сертификаты от",
            label: "one.kz", icon: <FileDoneOutlined style={{
                width: "2.6vw", height: "5.3vh", fontSize: "36px", margin: "24px 0",
            }} />
        },
        {
            header: "Обучение на реальных кейсах",
            label: "one.kz", icon: <ExperimentOutlined style={{
                width: "2.6vw", height: "5.3vh", fontSize: "36px", margin: "24px 0",
            }} />
        },
        {
            header: "Живое общение",
            label: "с ведущими разработчиками one.kz",
            icon: <SmileOutlined style={{
                width: "2.6vw", height: "5.3vh", fontSize: "36px", margin: "24px 0",
            }} />
        },
        {
            header: "Гарантируем трудоустройство",
            label: "лучшим выпускникам",
            icon: <PoundOutlined style={{
                width: "2.6vw", height: "5.3vh", fontSize: "36px", margin: "24px 0",
            }} />
        },
        {
            header: "Обучаем Data Science",
            label: "с 2014 года",
            icon: <SettingOutlined style={{
                width: "2.6vw", height: "5.3vh", fontSize: "36px", margin: "24px 0",
            }} />
        },
        {
            header: "Более 1500 студентов",
            label: "за 5 лет",
            icon: <UserOutlined style={{
                width: "2.6vw", height: "5.3vh", fontSize: "36px", margin: "24px 0",
            }} />
        },
    ]
    return (
        <div className="profits">
            <style jsx>
                {`
                        .profits {
                            padding-top: 9.55vh;
                            margin-bottom: 9.55vh;
                            text-align: center;
                            color: #1A1A1A;
                            width: 100%;
                        }

                        h1 {
                            font-weight: 800;
                            font-size: 2.375vw;
                            margin-bottom: 9.55vh;
                        }

                        .header-profit {
                            font-size: 1.15vw;
                            margin-bottom: 3%;
                        }

                        .label-profit {
                            font-size: 1.041vw;
                        }

                        .grid-container {
                            justify-content: center;
                            display: grid;
                            grid-template-columns: 24vw 24vw 24vw;
                            grid-template-rows: 21.22vh;
                            column-gap: 3.183vh;
                            row-gap: 1.5625vw;
                        }
                    `}
            </style>
            <h1>Что ты получишь?</h1>
            <Wrapper>
                <div className="grid-container">
                    {profits.map(
                        e => {
                            return (
                                <div>
                                    {e.icon}
                                    <h2 className="header-profit">{e.header}</h2>
                                    <label className="label-profit">{e.label}</label>
                                </div>
                            )
                        }
                    )}
                </div>
            </Wrapper>
        </div>
    )
}

export default Profits;
