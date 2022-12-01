import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/ContextCart";
import {TiShoppingCart} from "react-icons/ti"

const CartWidget = () => {
  const {getItemQuantity} = useContext(CartContext)
  return (
    <>
      <Link to="/cart">
        <div className="cart-icon"> 
          <TiShoppingCart />
          {getItemQuantity() >=1 && <span id="counter">{getItemQuantity()}</span> }
        </div>
      </Link>
    </>
  );
};

export default CartWidget;
