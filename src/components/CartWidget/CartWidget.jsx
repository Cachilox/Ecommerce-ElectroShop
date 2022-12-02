import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import {TiShoppingCart} from "react-icons/ti"

const CartWidget = () => {
  const {getItemQuantity} = useCart()
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
