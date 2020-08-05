import QuestionAnswer from "./QuestionAnswer";
import theme from "../styles/theme";
<<<<<<< HEAD
=======
import { getQuestions } from "../services/qa.service";
import { useState, useEffect } from "react";
>>>>>>> d73dfc074296d010351eac36b1d40937d53bbde3

const QuestionsContainer = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchQuestions() {
            setQuestions(await getQuestions());
        }
        fetchQuestions();
    }, []);

    const theMostPopularQuestions = [
       {question: "Самый часто задаваемый вопрос?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
       {question: "Самый часто задаваемый вопрос?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
       {question: "Самый часто задаваемый вопрос?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
       {question: "Самый часто задаваемый вопрос?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
       {question: "Самый часто задаваемый вопрос?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    ];

    return (
        <div className="container">
            <style jsx>
                {` 

                .container {
                    margin-right: 1.5625vw;
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
                    width: 15.625vw;
                    height: 7.427vh;
                    margin: auto;
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
                    .container {
                        margin-bottom: 3.183vh;
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
                <div style={{marginBottom: "3.325vw"}}>
<<<<<<< HEAD
                    {theMostPopularQuestions.map(e => {
                        return (
                            <QuestionAnswer question={e.question} answer={e.answer} />
=======
                    {questions.filter(qa => qa.important).map(qa => {
                        return (
                            <QuestionAnswer question={qa.question} answer={qa.answer} />
>>>>>>> d73dfc074296d010351eac36b1d40937d53bbde3
                        )
                    })}
                </div>
                <button type="button">Смотреть все</button>
            </div>
        </div>
    )
}

export default QuestionsContainer;