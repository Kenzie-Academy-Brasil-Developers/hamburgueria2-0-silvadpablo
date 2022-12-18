import { AddProductButton } from "../Buttons/DefaultButtons";
import { CardStyle } from "./CardStyles";
import Burger from "../../imgs/burger.png"

interface iCards {
    category: string
    img: string
    price: number
    name: string
}

export function Cards ( { category, img, price, name }: iCards ) {
    return  (
        <CardStyle className="flex flex-col">
            <figure>
                <img src={img} alt="product" />
            </figure>
            <section className="flex flex-col justify-between">
                <h2>{name}</h2>
                <p className="caption">{category}</p>
                <p className="body">R$ {price}</p>
                <AddProductButton/>
            </section>
        </CardStyle>
    )
}