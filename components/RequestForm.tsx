import React, { useEffect, useState, useRef } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import getDirections from "../services/directions.service";
import { RequestsService } from "../services/requests.service";
import Wrapper from "./Wrapper";
import theme from "../styles/theme";

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
      name: Yup.string()
        .max(24, "Too Long!")
        .required("Required"),
      surname: Yup.string()
        .max(24, "Too Long!")
        .required("Required"),
      fathername: Yup.string().max(24, "Too Long!"),
      phone: Yup.string()
        .max(20)
        .required(),
      email: Yup.string()
        .email()
        .required(),
      direction: Yup.string().required(),
      university: Yup.string().required(),
      course: Yup.string().required(),
    }),
    onSubmit: (values) => {
      console.log("testing issue");
      let fd = new FormData();
      for (let key in values) {
        fd.append(key, values[key]);
      }
      fd.append("file", cv);
      RequestsService.post(fd);
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
      <div className="request-form">
        <style jsx>{`
          .request-form {
            width: 50%;

            margin: 10% 0;
            margin: auto;
          }
          .request-form h1 {
            text-align: center;
          }
          form {
            display: flex;
            flex-direction: column;
          }
          form input,
          form select {
            margin-top: 5%;
            padding: 2.5%;
          }
          .phone-email-inputs {
            display: flex;
            justify-content: space-between;
          }
          .request-form h1 {
            font-weight: 600;
            font-size: 2.375vw;
            margin-bottom: 9.55vh;
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
          }
          .request-form button:hover {
            cursor: pointer;
          }
          .phone-email-inputs input {
            width: 40%;
          }

          @media (max-width: 1024px) {
            .request-form {
              width: 100%;
            }
          }
        `}</style>
        <h1>ПОДАЧА ЗАЯВКИ</h1>
        <form onSubmit={Form.handleSubmit} ref={formRef}>
          <input
            name="name"
            type="text"
            placeholder="Ваше имя"
            onChange={Form.handleChange}
          />
          <input
            name="surname"
            type="text"
            placeholder="Ваша фамилия"
            onChange={Form.handleChange}
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
            />
            <input
              name="email"
              type="email"
              placeholder="Ваша почта"
              onChange={Form.handleChange}
            />
          </div>
          <select
            name="direction"
            placeholder="Выберите направление"
            onChange={Form.handleChange}
          >
            <option>Выбрать</option>
            {directions.map((direction) => (
              <option key={direction.id}>{direction.title}</option>
            ))}
          </select>
          <input
            name="university"
            type="text"
            placeholder="Ваш университет"
            onChange={Form.handleChange}
          />
          <select
            name="course"
            placeholder="Выберите курс обучения"
            onChange={Form.handleChange}
          >
            <option>Выбрать</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <input
            id="cv"
            name="file"
            type="file"
            onChange={(e) => setCv(e.target.files[0])}
          />
          <button type="submit">Отправить</button>
        </form>
      </div>
    </Wrapper>
  );
};

export default RequestForm;
