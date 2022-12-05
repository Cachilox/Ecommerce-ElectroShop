import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import OrderItem from "./OrderItem";

function OrderCreate({ date, orderId }) {
  const { carritoLS, totalPriceLS } = useCart();
  return (
    <div>
      <h3 className="purchase__title">
        Tu orden <strong>#{orderId?.toUpperCase()}</strong>
      </h3>
      <p className="purchase__date">Fecha de compra: {date}</p>

      <div className="purchase__list">
        {carritoLS?.map((item, index) => {
          return <OrderItem key={index} item={item} />;
        })}
      </div>
      <div className="purchase__total">
        <span>
          Total: <b>${totalPriceLS()}</b>
        </span>

        <div className="bottom">
          <Link to="/" className="purchase__btn">
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderCreate;
