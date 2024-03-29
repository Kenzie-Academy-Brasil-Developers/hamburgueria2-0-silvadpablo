import { DefaultGreenButtons, DefaultGreyButtons, MediumGreyButtons } from "./StyledButtons";

interface iButtonProps {
    text: string,
    type?: "submit" | "button",
    handleCreateUser?: any,
    handleSubmit?: any,
    handleLogin?: any,
    onClick?: any,
    addCartItem?: any
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

export function AddProductButton ( { addCartItem, text }: iButtonProps ) {
    return(
        <MediumGreyButtons onClick={addCartItem}>{text}</MediumGreyButtons>
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