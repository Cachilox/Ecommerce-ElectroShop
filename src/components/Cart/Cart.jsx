import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import { TiTimes } from "react-icons/ti";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";

const Cart = () => {

  const { cart, emptyCart, totalPrice } = useCart();
  return (
    <div className="cartPage">
      {cart.length === 0 ? (
        <CartEmpty/>
      ) : (
        <>
          <div className="cartPage__top">
            <h2 className="cartPage__cart">Your Cart</h2>
            <button onClick={emptyCart}>
              Remove all | <TiTimes />{" "}
            </button>
          </div>
          {cart.map((item, index) => (
            <CartItem key={index} item={item}/>
          ))}
          <div className="summary">
            <div className="summary__totalCart">
              <p>Total</p>
              <span>$ {new Intl.NumberFormat("de-DE").format(totalPrice())}</span>
            </div>

            <div>
              <Link to={"/checkout"}>
                <button className="summary__btn">Continuar compra</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
