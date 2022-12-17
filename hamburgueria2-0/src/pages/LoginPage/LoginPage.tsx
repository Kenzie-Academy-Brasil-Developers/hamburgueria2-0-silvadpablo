import { LoginForm } from "../../components/Forms/LoginForm";
import { LogoDiv } from "../../components/LogoComponent/LogoComponent";
import { LoginPageStyle } from "./LoginPageStyle";

export function LoginPage () {
    return (
        <LoginPageStyle className="flex justify-center items-center">
            <div className="form-div">
                <LoginForm/>
            </div>
            <div className="logo-div">
                <LogoDiv/>
            </div>
        </LoginPageStyle>
    )
}