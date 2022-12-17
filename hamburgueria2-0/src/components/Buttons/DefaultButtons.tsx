import { useNavigate } from "react-router-dom";
import { DefaultGreenButtons, DefaultGreyButtons, MediumGreyButtons } from "./StyledButtons";

interface iButtonProps {
    text: string,
}

export function LoginButton ( { text }: iButtonProps) {
    const Navigate = useNavigate()

    async function HandleLogin() {
        Navigate("/home")
    }
    
    return (
        <DefaultGreenButtons onClick={HandleLogin}>{text}</DefaultGreenButtons>
    )
}

export function RegisterButton ( { text }: iButtonProps) {
    const Navigate = useNavigate()

    async function HandleRegister() {
        Navigate("/")
    }

    return (
        <DefaultGreyButtons onClick={HandleRegister}>{text}</DefaultGreyButtons>
    )
}

export function AddProductButton () {
    return(
        <MediumGreyButtons>Adicionar</MediumGreyButtons>
    )
}

export function ClearCart ( ) {
    async function handleClearCart () {
        console.log("click")
    }
    return (
        <DefaultGreyButtons onClick={handleClearCart}>Remover todos</DefaultGreyButtons>
    )
}