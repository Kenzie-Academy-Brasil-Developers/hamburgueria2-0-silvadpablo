import { AxiosResponse } from "axios";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { iLoginForm } from "../components/Forms/LoginForm";
import { api } from "../services/api";
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

interface iAuthContextProps {
    children: React.ReactNode
}

interface iAuthContext {
    loginUser: (data: iLoginForm) => Promise<AxiosResponse<any, any> | undefined>
}

export const AuthContext = createContext({} as iAuthContext)

export function AuthProvider ( { children }: iAuthContextProps ) {
    const navigate = useNavigate()

    async function loginUser ( data: iLoginForm ) {
        try {
            const response = await api.post("/login", data)
            if (response.request.statusText === "OK") {
                localStorage.setItem("HamburgueriaToken", response.data.accessToken)
                toast.success(`Que bom te ver, ${response.data.user.name}!`, {
                    className: "toast"
                })
                navigate("/home")
                return response
            } else {
                throw response
            }
        } catch (error: any) {
            toast.error(error.response.data)
        }
    }

    return (
        <AuthContext.Provider value={{ loginUser }}>
            {children}
        </AuthContext.Provider>
    )
}