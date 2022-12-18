import * as yup from "yup"

export const RegisterSchema = yup.object().shape({
    name: yup.string().required("Insira o nome").min(3, "Use pelo menos 3 caracteres"),
    email: yup.string().required("Insira o email").email("Email inválido"),
    password: yup.string().required("Insira a senha")
    .min(8, "A senha precisa ter pelo menos 8 caracteres")
    .matches(/(?=.*[0-9])/, "A senha precisa de um número")
    .matches(/(?=.*[a-z])/, "A senha precida de uma letra minúscula")
    .matches(/(?=.*[A-Z])/, "A senha precisa de uma letra maiúscula")
    .matches(/(?=.*[!@#$%^&*])/, "A senha precisa de um caractere especial"),
    confirm: yup.string().required("Digite novamente a senha").oneOf([yup.ref("password"), null], "A senhas devem ser iguais"),
})