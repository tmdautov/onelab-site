import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@material-ui/core";

export default function RequestForm() {
  const loginForm = useFormik({
    initialValues: {
      city: "",
      course: "",
      username: "",
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Поле обязательное"),
      username: Yup.string().required("Поле обязательное"),
      city: Yup.string().required("Необходимо выбрать хотя бы один город"),
      course: Yup.string().required(
        "Необходимо выбрать хотя бы одно направление"
      ),
    }),
    onSubmit: (values) => {
      fetch("", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          city: values.city,
          email: values.email,
          course: values.course,
          username: values.username,
        }),
      }).then((response) => alert(JSON.stringify(response.json())));
    },
  });
  return (
    <div className="login-page">
      <h3>
        Оставляйте заявку. Отправим вам письмо, когда откроется набор на
        выбранную программу
      </h3>
      <form onSubmit={loginForm.handleSubmit}>
        <TextField
          id="city"
          name="city"
          type="city"
          error={loginForm.touched.city && Boolean(loginForm.errors.city)}
          onChange={loginForm.handleChange}
          value={loginForm.values.city}
          label="Город"
        />
        <TextField
          id="course"
          name="course"
          type="course"
          error={loginForm.touched.course && Boolean(loginForm.errors.course)}
          onChange={loginForm.handleChange}
          value={loginForm.values.course}
          label="Направление"
        />
        <TextField
          id="email"
          name="email"
          type="lastname"
          error={loginForm.touched.email && Boolean(loginForm.errors.email)}
          onChange={loginForm.handleChange}
          value={loginForm.values.email}
          label="Email"
        />
        <TextField
          id="username"
          name="username"
          type="username"
          error={
            loginForm.touched.username && Boolean(loginForm.errors.username)
          }
          onChange={loginForm.handleChange}
          value={loginForm.values.username}
          label="Username"
        />
        <Button variant="contained" type="submit" color="primary">
          Оставить заявку
        </Button>
      </form>
    </div>
  );
}
