import QuestionAnswer from "./QuestionAnswer";
import theme from "../../styles/theme";
import { getQuestions } from "../../services/qa.service";
import { useState, useEffect } from "react";

const QuestionsContainer = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchQuestions() {
            setQuestions(await getQuestions());
        }
        fetchQuestions();
    }, []);

    return (
        <div className="container">
            <style jsx>
                {` 

                .container {
                    margin-right: 1.5625vw;
                    width: 50%;
                }

                .question-container {
                    display: flex;
                    flex-direction: row;
                    margin-right: 1.5625vw;
                }

                button {
                    border: 2px solid ${theme.colors.black}; 
                    color: ${theme.colors.black};
                    padding: 3% 2%;
                    width: 50%;
                    margin: auto 0;
                    border-radius: 6px;
                    outline: none;
                    cursor: pointer;
                    font-weight: 500;
                }
                
                @media (max-width: 1024px) {
                    .container {
                        margin-bottom: 3.183vh;
                        width: 100%;
                    }

                    .question-container {
                        display: flex;
                        flex-direction: column;
                    }

                    button {
                        margin: 0 30%;
                        width: 40%;
                    }
                }
            `}
            </style>
            <div className="questions-container">
                <div style={{ display: "flex", flexDirection: "column", }}>
                    <div style={{ marginBottom: "2.75vw", }}>
                        {questions.filter(qa => qa.important).map(qa => {
                            return (
                                <QuestionAnswer question={qa.question} answer={qa.answer} />
                            )
                        })}
                    </div>
                    <button type="button">Смотреть все</button>
                </div>
            </div>
        </div>
    )
}

export default QuestionsContainer;