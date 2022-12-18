import { createContext, useState } from "react";
import { iProduct } from "./ProductContext";

interface iCartContextProps {
    children: React.ReactNode
}

interface iCartContext {
    cart: iProduct[]
    setCart: React.Dispatch<React.SetStateAction<iProduct[]>>
    cartCount: number
    setCartCount: React.Dispatch<React.SetStateAction<number>>
    total: number
    setTotal: React.Dispatch<React.SetStateAction<number>>
}

export const CartContext = createContext({} as iCartContext)

export function CartProvider ( { children }: iCartContextProps ) {
    const [cart, setCart] = useState([] as iProduct[])
    const [cartCount, setCartCount] = useState(0)
    const [total, setTotal] = useState(0)

    return (
        <CartContext.Provider value={{ cart, setCart, cartCount, setCartCount, total, setTotal }}>
            {children}
        </CartContext.Provider>
    )
}