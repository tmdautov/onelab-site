import React from "react";
import { useFormik } from "formik";
import theme from "../../styles/theme";
import ValidationSchema from "./ValidationSchema";
import postQuestion from "../../services/qa.service";

const QuestionsForm = () => {
    const formRef = React.useRef(null);
    const Form = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            question: "",
        },
        validationSchema: ValidationSchema,
        onSubmit: (values) => {
            let fd = new FormData();
            for (let key in values) {
              fd.append(key, values[key]);
            }
            postQuestion(fd);
            formRef.current.reset();
            Form.resetForm();
        },
    });
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
            <form onSubmit={Form.handleSubmit} ref={formRef}>
                <input
                    name="name"
                    type="text"
                    placeholder="Ваше имя"
                    onChange={Form.handleChange}
                />
                {Form.errors.email && Form.touched.email && <div>{Form.errors.email}</div>}
                <div className="email-phone-holder">
                    <input
                        name="email"
                        type="email"
                        placeholder="Ваш e-mail"
                        style={{
                            marginRight: "10%",
                        }}
                        onChange={Form.handleChange}
                    />
                    <input
                        name="phone"
                        type="text"
                        placeholder="Ваш телефон"
                        onChange={Form.handleChange}
                    />
                </div>
                <textarea
                    name="question"
                    placeholder="Ваш вопрос"
                    onChange={Form.handleChange}
                />
                <button type="submit">Отправить</button>
            </form>
        </div>
    )
}

export default QuestionsForm;