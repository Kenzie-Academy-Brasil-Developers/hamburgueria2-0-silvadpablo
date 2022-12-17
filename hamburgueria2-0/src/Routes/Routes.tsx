import { Route, Routes } from "react-router-dom"
import { DialogProvider } from "../Contexts/DialogContext/DialogContext"
import { HomePage } from "../pages/HomePage/HomePage"
import { LoginPage } from "../pages/LoginPage/LoginPage"
import { RegisterPage } from "../pages/RegisterPage/RegisterPage"

export function MainRoutes () {
    return (
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/home" element={
                <DialogProvider>
                    <HomePage/>
                </DialogProvider>
            }/>
        </Routes>
    )
}