import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <>
      <Link to="/cart">
        <i className="bx bx-shopping-bag" id="cart-icon">
          <span id="counter">0</span>
        </i>
      </Link>
    </>
  );
};

export default CartWidget;
