import * as yup from "yup"

export const LoginSchema = yup.object().shape({
    email: yup.string().required("Insira o email"),
    password: yup.string().required("Insira a senha"),
})