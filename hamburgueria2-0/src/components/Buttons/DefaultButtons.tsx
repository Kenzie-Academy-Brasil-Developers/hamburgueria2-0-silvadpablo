import { useNavigate } from "react-router-dom";
import { DefaultGreenButtons, DefaultGreyButtons, MediumGreyButtons } from "./StyledButtons";

interface iButtonProps {
    text: string,
    type?: "submit" | "button",
    handleCreateUser?: any,
    handleSubmit?: any,
    handleLogin?: any,
    onClick?: any,
}

export function LoginButton ( { handleSubmit, handleLogin, type, text }: iButtonProps) {
    return (
        <DefaultGreenButtons onClick={handleSubmit(handleLogin)} type={type}>{text}</DefaultGreenButtons>
    )
}

export function RegisterButton ( { handleCreateUser, handleSubmit, type, text }: iButtonProps) {
    return (
        <DefaultGreyButtons type={type} onClick={handleSubmit(handleCreateUser)}>{text}</DefaultGreyButtons>
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