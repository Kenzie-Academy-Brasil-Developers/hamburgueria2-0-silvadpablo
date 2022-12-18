import { CartItemStyles } from "./CartItemStyles";
import trash from "../../imgs/trash.png"
import { iProduct } from "../../Contexts/ProductContext";

export function CartItem ( { id, name, img, category, price }: iProduct ) {
    return (
        <CartItemStyles className="flex justify-between">
            <div className="flex justify-between item">
                <img src={img} alt="product" />
                <div className="count flex flex-col items-center justify-between">
                    <h2>{name}</h2>
                    <div className="flex items-center">
                        <span>-</span>
                        <p>1</p>
                        <span>+</span>
                    </div>
                </div>
            </div>
            <img className="remove" src={trash} alt="delete icon" />
        </CartItemStyles>
    )
}