import React from "react";
import Wrapper from "../Wrapper";
import QuestionsContainer from "./QuestionsContainer";
import QuestionsForm from "./QuestionsForm";

const QAForm = () => {
    return (
        <div className="qa-form">
            <style jsx>
                {`
                    .qa-form {
                        padding: 9.55vh 0;
                        background: #FAFAFA;
                    }

                    .qa-form h1 {
                        font-size: 2.375rem;
                        margin-bottom: 5.35vh;
                    }

                    .flex-holder {
                        display: flex;
                        flex-direction: row;
                    }

                    @media (max-width: 1024px) {
                        .qa-form h1 {
                            text-align: center;
                        }

                        .flex-holder {
                            flex-direction: column;
                        }
                    }
                `}
            </style>
            <Wrapper>
                <h1> ВОПРОС - ОТВЕТ</h1>
                <div className="flex-holder">
                    <QuestionsContainer />
                    <QuestionsForm />
                </div>
            </Wrapper>
        </div>
    )
}

export default QAForm;