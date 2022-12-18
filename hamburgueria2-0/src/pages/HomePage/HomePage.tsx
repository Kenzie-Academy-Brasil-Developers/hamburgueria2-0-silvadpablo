import { SearchInput } from "../../components/Inputs/Inputs";
import { HomePageStyle } from "./HomePageStyle";
import Logo from "../../imgs/Logo.png";
import cart from "../../imgs/cart.png";
import logout from "../../imgs/logout.png";
import { useNavigate } from "react-router-dom";
import { Cards } from "../../components/Cards/Cards";
import { useContext } from "react";
import { ShoppingCart } from "../../components/ShoppingCart/Dialog";
import { DialogContext } from "../../Contexts/DialogContext";
import { ProductContext } from "../../Contexts/ProductContext";
import { AuthContext } from "../../Contexts/AuthContext";

export function HomePage() {
  const Navigate = useNavigate();
  const { openDialog, setOpenDialog } = useContext(DialogContext);
  const { token } = useContext(AuthContext)
  const { products } = useContext(ProductContext)

  // if (token === undefined || token === "") {
  //   Navigate("/");
  // }

  function HandleLogout() {
    localStorage.clear()
    Navigate("/");
  }

  return (
    <HomePageStyle>
      <ShoppingCart open={openDialog} setOpenDialog={setOpenDialog} />
      <header>
        <div className="flex justify-between">
          <img src={Logo} alt="logo" />
          <div className="flex header-menu">
            <SearchInput />
            <span className="hidden">
              <p>0</p>
            </span>
            <img
              onClick={() => setOpenDialog(true)}
              className="icon"
              src={cart}
              alt="shopping cart"
            />
            <img
              onClick={HandleLogout}
              className="icon"
              src={logout}
              alt="Logout icon"
            />
          </div>
        </div>
      </header>
      <main>
        <ul className="flex wrap">
          {
            products.map((product) =>
              <Cards key={product.id} id={product.id} category={product.category} img={product.img} price={product.price} name={product.name} />
            )
          }
        </ul>
      </main>
    </HomePageStyle>
  );
}
