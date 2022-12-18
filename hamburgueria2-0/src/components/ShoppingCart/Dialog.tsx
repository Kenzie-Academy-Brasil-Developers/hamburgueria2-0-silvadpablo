import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { iProduct } from "../../Contexts/ProductContext";
import { ClearCart } from "../Buttons/DefaultButtons";
import { CartItem } from "./CartItem";
import { DialogStyle } from "./DialogStyle";

interface iDialog {
    open: boolean,
    setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>
}

export function ShoppingCart ({ open, setOpenDialog }: iDialog) {
    const { cart, total } = useContext(CartContext)

    return (
        <DialogStyle open={open}>
            <div className="dialog">
                <header className="flex justify-between">
                    <p>Carrinho de compras</p>
                    <p onClick={() => setOpenDialog(false)}><span>X</span></p>
                </header>
                <main className="flex flex-col">
                    {
                        cart.length === 0
                        ?
                        <div className="no-items">
                            <h2>Sua sacola está vazia</h2>
                            <p>Adicione itens</p>
                        </div>
                        :
                        <>
                            {
                                cart.map(({id, name, category, price, img}) =>
                                    <CartItem key={id} id={id} name={name} img={img} category={category} price={price}/>
                                )
                            }
                            <div className="total-line"></div>
                            <div className="total flex justify-between">
                                <h2>Total</h2>
                                <p>R$ {total}</p>
                            </div>
                            <ClearCart/>
                        </>
                    }
                </main>
            </div>
        </DialogStyle>
    )
}