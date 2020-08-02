import React from "react";
import { Row, Col } from "antd";
import { UserOutlined, ExperimentOutlined, FileDoneOutlined, SettingOutlined, PoundOutlined, SmileOutlined,  } from "@ant-design/icons";

const Profits = () => {
    const profits = [
        {
            header: "Сертификаты от",
            label: "one.kz",icon: <FileDoneOutlined style={{
                width: "2.6vw", height: "5.3vh", fontSize: "36px", margin: "24px 0",
            }} />
        },
        {
            header: "Обучение на реальных кейсах",
            label: "one.kz",icon: <ExperimentOutlined style={{
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
        <div>
            <style jsx>
                {`
                    .profits {
                        padding-top: 72px;
                        margin-bottom: 72px;
                        text-align: center;
                        color: #1A1A1A;
                    }

                    h1 {
                        font-weight: 800;
                        font-size: 2.3rem;
                        margin-bottom: 40px;
                    }

                    .header-profit {
                        font-size: 1.25rem;
                    }

                    .label-profit {
                        font-size: 0.95rem;
                    }
                `}
            </style>
            <div className="profits">
                <h1>Что ты получишь?</h1>
                <Row gutter={[24, 24]}>
                    {profits.map(
                        e => {
                            return (
                                <Col span={8}>
                                    {e.icon}
                                    <h2 className="header-profit">{e.header}</h2>
                                    <label className="label-profit">{e.label}</label>
                                </Col>
                            )
                        }
                    )}
                </Row>
            </div>
        </div>
    )
}

export default Profits;
