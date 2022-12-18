import { RegisterButton } from "../Buttons/DefaultButtons";
import { yupResolver } from "@hookform/resolvers/yup"
import { Input } from "../Inputs/Inputs";
import { FormStyle } from "./FormStyle";
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { RegisterSchema } from "../Schemas/RegisterSchema";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

export interface iRegisterForm {
    name: string,
    email: string,
    password: string,
    confirm: string,
}

export function RegisterForm () {
    const { register, handleSubmit, formState: { errors } } = useForm<iRegisterForm>({
        resolver: yupResolver(RegisterSchema)
    })
    const { createUser } = useContext(UserContext)

    async function handleCreateUser ( data: iRegisterForm ) {
        await createUser(data)
    }

    return (
        <FormStyle className="flex flex-col" onSubmit={handleSubmit(handleCreateUser)} noValidate>
            <div className="flex justify-between items-center register-header">
                <h1>Cadastro</h1>
                <Link to="/">Voltar</Link>
            </div>
            <Input register={register("name")} id="name" type="text" placeholder="Nome"/>
            {errors.name && <span>{errors.name.message}</span>}

            <Input register={register("email")} id="email" type="email" placeholder="Email"/>
            {errors.email && <span>{errors.email.message}</span>}

            <Input register={register("password")} id="password" type="password" placeholder="Senha"/>
            {errors.password && <span>{errors.password.message}</span>}

            <Input register={register("confirm")} id="confirm" type="password" placeholder="Confirmar senha"/>
            {errors.confirm && <span>{errors.confirm.message}</span>}

            <RegisterButton handleCreateUser={handleCreateUser} handleSubmit={handleSubmit} type="submit" text="Cadastre-se"/>
        </FormStyle>
    )
}