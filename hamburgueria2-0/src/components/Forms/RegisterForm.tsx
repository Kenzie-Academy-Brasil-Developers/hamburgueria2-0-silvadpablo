import { LoginButton, RegisterButton } from "../Buttons/DefaultButtons";
import { Input } from "../Inputs/Inputs";
import { FormStyle } from "./FormStyle";
import { Link } from "react-router-dom"

export function RegisterForm () {
    return (
        <FormStyle className="flex flex-col">
            <div className="flex justify-between items-center register-header">
                <h1>Cadastro</h1>
                <Link to="/">Voltar</Link>
            </div>
            <Input id="name" type="text" placeholder="Nome"/>
            <Input id="email" type="email" placeholder="Email"/>
            <Input id="password" type="password" placeholder="Senha"/>
            <Input id="confirm" type="password" placeholder="Confirmar senha"/>
            <RegisterButton text="Cadastre-se"/>
        </FormStyle>
    )
}