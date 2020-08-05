import theme from "../styles/theme";

const QuestionsForm = () => {
    return (
        <div className="questions-form">
            <style jsx>
                {`
                    input {
                        margin-bottom: 4.244031830238727vh;
                        padding: 2.5%;
                        width: 37.2625vw;
                    }

                    .email-phone-holder {
                        display: flex;
                        justify-content: space-between; 
                    }

                    .email-phone-holder input {
                        width: 18.75vw;
                        margin-right: 1.5625vw;
                    }

                    textarea {
                        resize: none;
                        width: 37.3625vw;
<<<<<<< HEAD
                        height: 20.0989vh;
=======
                        height: 21.4989vh;
>>>>>>> d73dfc074296d010351eac36b1d40937d53bbde3
                        padding: 2.5%;
                        font-size: 16px;
                        margin-bottom: 2.75vw;
                    }

                    button {
                      background-color: ${theme.colors.black};
                      color: ${theme.colors.white};
                      padding: 3% 2%;
                      width: 15.625vw;
                      height: 7.427vh;
                      margin: auto;
                      border: none;
                      border-radius: 6px;
                      outline: none;
                      cursor: pointer;
                      font-weight: 500;
                    }

<<<<<<< HEAD
                    @media (max-width: 1000px) {
=======
                    @media (max-width: 1024px) {
>>>>>>> d73dfc074296d010351eac36b1d40937d53bbde3
                        button {
                            margin: 0 30%;
                            width: 40%;
                        }

                        input {
                            width: 93%;
                        }
                        
                        .email-phone-holder input {
                            width: 50%;
                            margin-right: 1%;
                        }

                        textarea {
                            width: 93.5%;
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