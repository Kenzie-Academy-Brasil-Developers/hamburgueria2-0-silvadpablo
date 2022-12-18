import { LoginButton } from "../Buttons/DefaultButtons";
import { Input } from "../Inputs/Inputs";
import { FormStyle } from "./FormStyle";
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { api } from "../../services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../Schemas/LoginSchema";

export interface iLoginForm {
    email: string,
    password: string,
}

export function LoginForm () {
    const { loginUser } = useContext(AuthContext)
    const { handleSubmit, register, formState: { errors }} = useForm<iLoginForm>({
        resolver: yupResolver(LoginSchema)
    })

    async function handleLogin ( data: iLoginForm, event: any ) {
        await loginUser(data)
    }

    return (
        <FormStyle className="flex flex-col" onSubmit={handleSubmit(handleLogin)} noValidate>
            <h1>Login</h1>
            <Input register={register("email")} id="email" type="email" placeholder="Email"/>
            {errors.email && <span>{errors.email.message}</span>}

            <Input register={register("password")} id="password" type="password" placeholder="Senha"/>
            {errors.password && <span>{errors.password.message}</span>}

            <LoginButton handleSubmit={handleSubmit} handleLogin={handleLogin} type="submit" text="Logar"></LoginButton>
            <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
            <Link to="/register" >Cadastre-se</Link>
        </FormStyle>
    )
}