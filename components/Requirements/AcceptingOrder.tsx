import theme from "../../styles/theme";
import Wrapper from "../Wrapper";

const AcceptingOrder = () => {
    const orders = [
        {
            title: "Пройдите регистрацию",
            description: "На указанный e-mail придет ссылка на тестирование, а также подробная информация о курсе",
        },
        {
            title: "Выполните онлайн тестирование",
            description: "О результатах теста мы оповестим 25.03.2020 г.",
        },
        {
            title: "Пройдите собеседование",
            description: "Если вы набрали проходной балл, вас пригласят на собеседование, с вами свяжется HR-компания",
        },
    ]
    return (
        <div className="accepting-order">
            <style jsx>
                {`
                    .accepting-order {
                        background: linear-gradient(135.97deg, #484848 7.77%, #000010 93.38%);
                        margin-bottom: 9.255vh;
                        min-height: 58.73vh;
                    }

                    h1 {
                        color: ${theme.colors.white};
                        font-weight: 600;
                        font-size: 2.375rem;
                        padding: 5% 0 2%;
                        margin-bottom: 5%;
                    }

                    .flex-holder {
                        display: grid;
                        grid-template-columns: 25% 25% 25%;
                        grid-template-rows: 21.22vh;
                        column-gap: 9%;
                        height: 100%;
                    }

                    .order {
                        justify-content: middle;
                        text-align: left;
                        width: 60%;
                        margin-right: 10%;
                        line-height: 150%;
                    }

                    .order p {
                        position: absolute;
                        width: 20%;
                    }

                    .order h1 {
                        margin-bottom: 10%;
                        font-size: 3.25rem;
                        color: ${theme.colors.red};
                    }
                    
                    .order h2, .order p {
                        color: ${theme.colors.white};
                        margin-bottom: 5%;
                    }

                    @media (max-width: 1024px) {
                        h1 {
                            text-align: center;
                            margin-bottom: 10%;
                        }

                        .flex-holder {
                            display: flex;
                            flex-direction: column;
                        }
                        
                        .order {
                            padding-left: 25%;
                            margin-bottom: 5%;
                        }

                        .order h1 {
                            position: absolute;
                            left: 18%;
                        }

                        .order p {
                            position: relative;
                            width: 100%;
                        }
                    }
                `}
            </style>
            <Wrapper>
                <h1>ПОРЯДОК ПРИЁМА</h1>
                <div className="flex-holder">
                    {orders.map((order, index)=> {
                        return (
                            <div className="order">
                                <h1>{index + 1}</h1>
                                <h2>{order.title}</h2>
                                <p>{order.description}</p>
                            </div>
                        )
                    })}
                </div>
            </Wrapper>
        </div>
    )
}

export default AcceptingOrder;