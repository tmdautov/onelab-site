import React, { useEffect, useState, useRef } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import getDirections from "../services/directions.service";
import Wrapper from "./Wrapper";
import theme from "../styles/theme";
import postRequest from "../services/requests.service";
import Dropzone from "react-dropzone";

const RequestForm = () => {
  const [cv, setCv] = useState(null);
  let formRef = useRef(null);
  const Form = useFormik({
    initialValues: {
      name: "",
      surname: "",
      fathername: "",
      phone: "",
      email: "",
      direction: "",
      university: "",
      course: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().max(24, "Too Long!").required("Required"),
      surname: Yup.string().max(24, "Too Long!").required("Required"),
      fathername: Yup.string().max(24, "Too Long!"),
      phone: Yup.string().max(20).required(),
      email: Yup.string().email().required(),
      direction: Yup.string().required(),
      university: Yup.string().required(),
      course: Yup.string().required(),
    }),
    onSubmit: (values) => {
      let fd = new FormData();
      for (let key in values) {
        fd.append(key, values[key]);
      }
      fd.append("file", cv);
      postRequest(fd);
      formRef.current.reset();
      Form.resetForm();
    },
  });
  const [directions, setDirections] = useState([]);
  useEffect(() => {
    getDirections().then((res) => setDirections(res));
  }, []);
  return (
    <Wrapper>
      <div className="request-form" id="request">
        <style jsx>{`
          .request-form {
            width: 50%;

            margin: 10% 0;
            margin: auto;
          }
          .request-form h1,
          .request-form p {
            text-align: center;
          }
          .request-form h1 {
            margin-bottom: 5%;
          }
          form {
            display: flex;
            flex-direction: column;
          }
          form input,
          form select {
            margin-top: 5%;
            padding: 2.5%;
            border: 1px solid #bdbdbd;
            box-sizing: border-box;
            border-radius: 4px;
          }
          .phone-email-inputs {
            display: flex;
            justify-content: space-between;
          }
          .request-form h1 {
            font-weight: 600;
            font-size: 2.375rem;
          }
          .request-form button {
            background-color: ${theme.colors.black};
            color: ${theme.colors.white};
            padding: 3% 2%;
            width: 60%;
            margin: auto;
            border: none;
            border-radius: 10px;
            outline: none;
            margin: 2% auto auto auto;
          }
          .request-form button:hover {
            cursor: pointer;
          }
          .phone-email-inputs input {
            width: 40%;
          }

          .error-message {
            color: ${theme.colors.red};
            margin: 2% auto;
          }

          .error-input {
            border: 1px solid ${theme.colors.red}!important;
          }

          .error-input:focus {
            outline: none !important;
          }

          .dropzone {
            border: 1.5px dashed #bdbdbd;
            box-sizing: border-box;
            border-radius: 7.5px;
            padding: 7%;
            margin-top: 4%;
            cursor: pointer;
          }

          @media (max-width: 1024px) {
            .request-form {
              width: 100%;
            }
          }
        `}</style>
        <h1>ПОДАЧА ЗАЯВКИ</h1>
        <p>Все поля обязательные</p>
        <form onSubmit={Form.handleSubmit} ref={formRef}>
          <input
            name="name"
            type="text"
            placeholder="Ваше имя"
            onChange={Form.handleChange}
            className={Form.errors.name ? "error-input" : null}
          />
          <input
            name="surname"
            type="text"
            placeholder="Ваша фамилия"
            onChange={Form.handleChange}
            className={Form.errors.surname ? "error-input" : null}
          />
          <input
            name="fathername"
            type="text"
            placeholder="Ваше отчество"
            onChange={Form.handleChange}
          />
          <div className="phone-email-inputs">
            <input
              name="phone"
              type="text"
              placeholder="Ваш телефон"
              onChange={Form.handleChange}
              className={Form.errors.phone ? "error-input" : null}
            />
            <input
              name="email"
              type="email"
              placeholder="Ваша почта"
              onChange={Form.handleChange}
              className={Form.errors.email ? "error-input" : null}
            />
          </div>
          <select
            name="direction"
            placeholder="Выберите направление"
            onChange={Form.handleChange}
            className={Form.errors.direction ? "error-input" : null}
          >
            <option>Выберите направление</option>
            {directions.map((direction) => (
              <option key={direction.id}>{direction.title}</option>
            ))}
          </select>
          <input
            name="university"
            type="text"
            placeholder="Ваш университет"
            onChange={Form.handleChange}
            className={Form.errors.university ? "error-input" : null}
          />
          <select
            name="course"
            placeholder="Выберите курс обучения"
            onChange={Form.handleChange}
            className={Form.errors.course ? "error-input" : null}
          >
            <option>На каком крусе вы учитесь</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <Dropzone onDrop={(acceptedFiles) => setCv(acceptedFiles[0])}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()} className="dropzone">
                  <input {...getInputProps()} />
                  {cv ? (
                    <p>{cv.name}</p>
                  ) : (
                    <>
                      <p>Подгрузите резюме</p>
                      <p>Перетащите файл или Укажите путь</p>
                    </>
                  )}
                </div>
              </section>
            )}
          </Dropzone>
          {Form.errors.course ||
            Form.errors.direction ||
            Form.errors.email ||
            Form.errors.fathername ||
            Form.errors.name ||
            Form.errors.phone ||
            Form.errors.surname ||
            Form.errors.university ? (
            <div className="error-message">
              Заполните все поля, отмеченные красным
            </div>
          ) : (
            <div></div>
          )}
          <button type="submit">Отправить</button>
        </form>
      </div>
    </Wrapper>
  );
};

export default RequestForm;
