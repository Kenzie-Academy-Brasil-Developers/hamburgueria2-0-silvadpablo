import { InputStyle, SeachInputStyle } from "./InputStyles";
import Glass from "../../imgs/glass.png"
import { UseFormRegisterReturn } from "react-hook-form";

interface iInput {
    id: string
    type: string
    placeholder: string
    register: UseFormRegisterReturn<string>
}

export function Input ( { id, type, placeholder, register }: iInput) {

    function showLabel ( event: any ) {
        event.target.previousSibling.classList.toggle("hidden")
    }
    
    return (
        <InputStyle className="flex flex-col">
            <span className="hidden"><p>{placeholder}</p></span>
            <input onFocus={showLabel} type={type} placeholder={placeholder} {...register}/>
            {/* <input onFocus={showLabel} onBlur={showLabel} type={type} placeholder={placeholder} {...register}/> */}
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