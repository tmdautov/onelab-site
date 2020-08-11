import * as Yup from "yup";

const errors = {
    required: "Обязательно заполните это поле",
    email: "Невалидный формат e-mail"
}

const ValidationSchema = Yup.object().shape({
    name: Yup.string().required(errors.required),
    email: Yup.string().email(errors.email).required(errors.required),
    phone: Yup.string().required(errors.required),
    question: Yup.string().required(errors.required),
}) 

export default ValidationSchema;
