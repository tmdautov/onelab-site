import React, { useRef } from "react";
import { useFormik } from "formik";
import theme from "../../styles/theme";
import ValidationSchema from "./ValidationSchema";
import postQuestion from "../../services/qa.service";
import { toast } from "react-toastify";

const QuestionsForm = () => {
  const formRef = useRef(null);
  const Form = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      question: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      postQuestion(JSON.stringify(values))
        .then(() => {
          toast.success("Отправлено!");
          formRef.current.reset();
          Form.resetForm();
        })
        .catch((error) => toast.error(error.message));
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
                        transition: border 0.5s ease;
                    }

                    .email-phone-holder {
                        display: flex;
                    }

                    .email-phone-holder input {
                        width: 60%;
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

                    .error-message {
                        color: ${theme.colors.red};
                        position: absolute;
                        z-index: 100;
                        transform: translateY(-120%);
                    }

                    .error-input {
                        border: 1px solid ${theme.colors.red}!important;
                    }

                    .error-input:focus {
                        outline: none!important;
                    }
                    
                    .phone-message {
                        transform: translate(103%, -120%);
                    }

                    .question-message {
                        transform: translateY(900%);
                    }
                `}
      </style>
      <form onSubmit={Form.handleSubmit} ref={formRef}>
        <input
          name="name"
          type="text"
          placeholder="Ваше имя"
          onChange={Form.handleChange}
          className={Form.errors.name ? "error-input" : null}
        />
        {Form.errors.name && Form.touched.name && (
          <div className="error-message">{Form.errors.name}</div>
        )}
        <div className="email-phone-holder">
          <input
            name="email"
            type="text"
            placeholder="Ваш e-mail"
            style={{
              marginRight: "3%",
            }}
            onChange={Form.handleChange}
            className={Form.errors.email ? "error-input" : null}
          />
          {!Form.errors.phone && Form.errors.email && Form.touched.email && (
            <div className="error-message">{Form.errors.email}</div>
          )}
          <input
            name="phone"
            type="text"
            placeholder="Ваш телефон"
            onChange={Form.handleChange}
            className={Form.errors.phone ? "error-input" : null}
          />
          {!Form.errors.email && Form.errors.phone && Form.touched.phone && (
            <div className="error-message phone-message">
              {Form.errors.phone}
            </div>
          )}
          {Form.errors.email && Form.errors.phone && Form.touched.phone && (
            <div className="error-message">Обязательно заполните эти поля</div>
          )}
        </div>
        <textarea
          name="question"
          placeholder="Ваш вопрос"
          onChange={Form.handleChange}
          className={Form.errors.question ? "error-input" : null}
        />
        <button type="submit">Отправить</button>
        {Form.errors.question && Form.errors.question && (
          <div className="error-message question-message">
            {Form.errors.question}
          </div>
        )}
      </form>
    </div>
  );
};

export default QuestionsForm;
