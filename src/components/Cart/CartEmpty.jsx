import React from "react";
import { Link } from "react-router-dom";
import { TiArrowLeft } from "react-icons/ti";

function CartEmpty() {
  return (
    <div className="cart-empty">
      <h2>Tu carrito está vacío</h2>
      <span>Comenzá a llenarlo con nuestro productos.</span>
      <Link to={"/"}>
        <p>
          <TiArrowLeft className="arrowLeft" /> Ir de compras
        </p>
      </Link>
    </div>
  );
}

export default CartEmpty;
