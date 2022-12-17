import { AddProductButton } from "../Buttons/DefaultButtons";
import { CardStyle } from "./CardStyles";
import Burger from "../../imgs/burger.png"

export function Cards () {
    return  (
        <CardStyle className="flex flex-col">
            <figure>
                <img src={Burger} alt="product" />
            </figure>
            <section className="flex flex-col justify-center">
                <h2>Nome do produto</h2>
                <p className="caption">Caption</p>
                <p className="body">Body</p>
                <AddProductButton/>
            </section>
        </CardStyle>
    )
}