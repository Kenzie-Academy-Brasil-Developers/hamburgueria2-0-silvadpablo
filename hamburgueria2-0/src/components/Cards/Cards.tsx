import { useContext } from "react";
import { isTemplateExpression } from "typescript";
import { CartContext } from "../../Contexts/CartContext";
import { ProductContext } from "../../Contexts/ProductContext";
import { AddProductButton } from "../Buttons/DefaultButtons";
import { CardStyle } from "./CardStyles";

interface iCards {
    id: number
    category: string
    img: string
    price: number
    name: string
}

export function Cards ( { id, category, img, price, name }: iCards ) {
    const { products } = useContext(ProductContext)
    const { cart, setCart, total, setTotal } = useContext(CartContext)

    function addCartItem () {
        const selected = products.filter((product) => id === product.id)
        const newCart = [...selected]
        setCart([...cart, ...newCart])
        const newTotal = cart.reduce((result, item) => result + item.price, total)
        setTotal(newTotal)
    }

    return  (
        <CardStyle className="flex flex-col">
            <figure>
                <img src={img} alt="product" />
            </figure>
            <section className="flex flex-col justify-between">
                <h2>{name}</h2>
                <p className="caption">{category}</p>
                <p className="body">R$ {price}</p>
                <AddProductButton addCartItem={addCartItem} text={"Adicionar"}/>
            </section>
        </CardStyle>
    )
}