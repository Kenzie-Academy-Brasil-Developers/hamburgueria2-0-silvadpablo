import { createContext, useState } from "react";

interface iProductContextProps {
    children: React.ReactNode
}

interface iProductContext {
    products: {
        id: number,
        name: string,
        category: string,
        price: number,
        img: string
    }[]
    setProducts: React.Dispatch<React.SetStateAction<{
        id: number,
        name: string,
        category: string,
        price: number,
        img: string
    }[]>>
}

export interface iProduct {
    id: number,
    name: string,
    category: string,
    price: number,
    img: string
}

export const ProductContext = createContext({} as iProductContext)

export function ProductProvider ( { children }: iProductContextProps ) {
    const [products, setProducts] = useState([] as iProduct[])

    return (
        <ProductContext.Provider value={{ products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}