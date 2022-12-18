import { AxiosResponse } from "axios";
import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { iLoginForm } from "../components/Forms/LoginForm";
import { api } from "../services/api";
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { ProductContext } from "./ProductContext";

interface iAuthContextProps {
    children: React.ReactNode
}

interface iAuthContext {
    loginUser: (data: iLoginForm) => Promise<AxiosResponse<any, any> | undefined>
    token: string
}

export const AuthContext = createContext({} as iAuthContext)

export function AuthProvider ( { children }: iAuthContextProps ) {
    const navigate = useNavigate()
    const [token, setToken] = useState("")
    const { setProducts } = useContext(ProductContext)

    async function loginUser ( data: iLoginForm ) {
        try {
            const response = await api.post("/login", data)
            if (response.request.statusText === "OK") {
                localStorage.setItem("HamburgueriaToken", response.data.accessToken)
                setToken(response.data.accessToken)
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

    useEffect(() => {
        async function getProducts () {
            const token = localStorage.getItem("HamburgueriaToken")
            const response = await api.get("/products", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            if (response.request.statusText === "OK"){
                setProducts(response.data)
            }
        }
        getProducts()
    },[setProducts])

    return (
        <AuthContext.Provider value={{ loginUser, token }}>
            {children}
        </AuthContext.Provider>
    )
}