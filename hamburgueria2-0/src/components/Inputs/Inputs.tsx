import { InputStyle, SeachInputStyle } from "./InputStyles";
import Glass from "../../imgs/glass.png"

interface iInput {
    id: string
    type: string
    placeholder: string
}

export function Input ( { id, type, placeholder }: iInput) {
    function showLabel ( event: any ) {
        event.target.previousSibling.classList.toggle("hidden")
    }
    return (
        <InputStyle className="flex flex-col">
            <span className="hidden"><p>{placeholder}</p></span>
            <input onFocus={showLabel} onBlur={showLabel} type={type} placeholder={placeholder} />
        </InputStyle>
    )
}

export function SearchInput () {
    return (
        <SeachInputStyle>
            <span className="hidden"><img src={Glass} alt="looking glass icon" /></span>
            <input type="text" placeholder="Digitar pesquisa" />
        </SeachInputStyle>
    )
}