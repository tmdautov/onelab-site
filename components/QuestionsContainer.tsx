import QuestionAnswer from "./QuestionAnswer";

const QuestionsContainer = () => {

    const theMostPopularQuestions = [
       {question: "Самый часто задаваемый вопрос?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
       {question: "Самый часто задаваемый вопрос?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
       {question: "Самый часто задаваемый вопрос?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
       {question: "Самый часто задаваемый вопрос?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
       {question: "Самый часто задаваемый вопрос?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    ];

    return (
        <>
            <style jsx>
                {` 
                .question-container {
                    display: flex;
                    flex-direction: row;
                }
                
                @media (max-width: 1000px) {
                    .question-container {
                        display: flex;
                        flex-direction: column;
                    }
                }
            `}
            </style>
            <div className="questions-container">
                {theMostPopularQuestions.map(e => {
                    return (
                        <QuestionAnswer question={e.question} answer={e.answer} />
                    )
                })}
            </div>
        </>
    )
}

export default QuestionsContainer;