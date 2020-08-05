import React from "react";
import Wrapper from "./Wrapper";
import QuestionsContainer from "./QuestionsContainer";

const QAForm = () => {

    return (
        <div className="qa-form">
            <style jsx>
                {`
                    .qa-form {
                        padding: 9.55vh 0;
                        background: #FAFAFA;
                        margin-bottom: 9.55vh;
                    }

                    .qa-form h1 {
                        font-size: 2.375rem;
                        margin-bottom: 5.35vh;
                    }

                    .flex-holder {
                        display: flex;
                        flex-direction: row;
                    }

                    @media (max-width: 1000px) {
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
                    <div className="questions-form">
                        form
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default QAForm;