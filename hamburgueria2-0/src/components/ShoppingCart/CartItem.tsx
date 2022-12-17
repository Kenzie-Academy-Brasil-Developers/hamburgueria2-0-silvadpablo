import { CartItemStyles } from "./CartItemStyles";
import burger from "../../imgs/burger.png"
import trash from "../../imgs/trash.png"

export function CartItem () {
    return (
        <CartItemStyles className="flex justify-between">
            <div className="flex justify-between item">
                <img src={burger} alt="product" />
                <div className="flex flex-col items-center justify-between">
                    <h2>Nome do Produto</h2>
                    <div className="flex items-center">
                        <span>-</span>
                        <p>10</p>
                        <span>+</span>
                    </div>
                </div>
            </div>
            <img className="remove" src={trash} alt="delete icon" />
        </CartItemStyles>
    )
}