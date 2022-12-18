import { Route, Routes } from "react-router-dom";
import { CartProvider } from "../Contexts/CartContext";
import { DialogProvider } from "../Contexts/DialogContext";
import { HomePage } from "../pages/HomePage/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/home"
        element={
          <CartProvider>
            <DialogProvider>
              <HomePage />
            </DialogProvider>
          </CartProvider>
        }
      />
    </Routes>
  );
}
