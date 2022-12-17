import { LoginButton } from "../Buttons/DefaultButtons";
import { Input } from "../Inputs/Inputs";
import { FormStyle } from "./FormStyle";
import { Link } from "react-router-dom"

export function LoginForm () {
    return (
        <FormStyle className="flex flex-col">
            <h1>Login</h1>
            <Input id="email" type="email" placeholder="Email"/>
            <Input id="password" type="password" placeholder="Senha"/>
            <LoginButton text="Logar"/>
            <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
            <Link to="/register" >Cadastre-se</Link>
        </FormStyle>
    )
}