import { AxiosResponse } from "axios"
import { createContext } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { iRegisterForm } from "../components/Forms/RegisterForm"
import { api } from "../services/api"

interface iUserContextProps {
    children: React.ReactNode
}

interface iUserContext {
    createUser(data: iRegisterForm): Promise<AxiosResponse<any, any> | undefined>
}

export const UserContext = createContext({} as iUserContext)

export function UserProvider ( { children }: iUserContextProps ) {
    const Navigate = useNavigate()

    async function createUser ( data: iRegisterForm ) {
        try {
            const response = await api.post("/users", data)
            toast.success("Conta criada com sucesso")
            Navigate("/")
            return response
        } catch (error: any) {
            console.log(error)
            toast.error(error.response.data)
        }
    }

    return (
        <UserContext.Provider value={{ createUser }}>
            {children}
        </UserContext.Provider>
    )
}