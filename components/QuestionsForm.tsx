import theme from "../styles/theme";

const QuestionsForm = () => {
    return (
        <div className="questions-form">
            <style jsx>
                {`  

                    .questions-form {
                        width: 50%;
                    }

                    form {
                        display: flex;
                        flex-direction: column;
                    }

                    input {
                        margin-bottom: 4.244031830238727vh;
                        padding: 3% 2%;
                        width: 100%:
                    }

                    .email-phone-holder {
                        display: flex;
                    }

                    .email-phone-holder input {
                        width: 40%;
                    }

                    textarea {
                        resize: none;
                        height: 21.4989vh;
                        padding: 2.5%;
                        font-size: 16px;
                        margin-bottom: 2.75vw;
                    }

                    button {
                      background-color: ${theme.colors.black};
                      color: ${theme.colors.white};
                      padding: 3% 2%;
                      width: 50%;
                      border: none;
                      border-radius: 6px;
                      outline: none;
                      cursor: pointer;
                      font-weight: 500;
                    }

                    @media (max-width: 1024px) {
                        .questions-form {
                            width: 100%;
                        }

                        button {
                            margin: auto;
                        }
                    }
                `}  
            </style>
            <form onSubmit={() => console.log("boink")}>
                <input
                    name="name"
                    type="text"
                    placeholder="Ваше имя"
                />
                <div className="email-phone-holder">
                    <input
                        name="email"
                        type="text"
                        placeholder="Ваш e-mail"
                        style={{
                            marginRight: "10%",
                        }}
                    />
                    <input
                        name="phone"
                        type="text"
                        placeholder="Ваш телефон"
                    />
                </div>
                <textarea
                    name="question"
                    placeholder="Ваш вопрос"
                />
                <button type="submit">Отправить</button>
            </form>
        </div>
    )
}

export default QuestionsForm;