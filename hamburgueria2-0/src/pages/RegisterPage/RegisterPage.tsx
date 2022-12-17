import { RegisterForm } from "../../components/Forms/RegisterForm";
import { LogoDiv } from "../../components/LogoComponent/LogoComponent";
import { RegisterPageStyle } from "./RegisterPageStyle";

export function RegisterPage () {
    return (
        <RegisterPageStyle className="flex justify-center items-center">
            <div className="logo-div">
                <LogoDiv/>
            </div>
            <div className="form-div">
                <RegisterForm/>
            </div>
        </RegisterPageStyle>
    )
}