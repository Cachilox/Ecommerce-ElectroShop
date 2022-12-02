import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import { TiTrash, TiTimes } from "react-icons/ti";
import CartEmpty from "./CartEmpty";

const Cart = () => {

  const { cart, emptyCart, removeItem, totalPrice } = useCart();
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
          {cart.map((prod) => (
            <article className="cartPage__sigleProduct" key={prod.id}>
              <figure>
                <img src={prod.img} alt={prod.name} />
                <button className="cartPage__delete" onClick={() => removeItem(prod.id)}>
                  <TiTrash />
                </button>
              </figure>

              <div className="cartPage__information">
                <div>
                  <h2 className="cartPage__title">{prod.name}</h2>
                </div>

                <div className="cartPage__free">
                  <span>Envío gratis</span>
                  <span>Cantidad: {prod.cant}</span>
                </div>

                <div className="cartPage__price">
                  <span>
                    Precio unitario: $
                    {new Intl.NumberFormat("de-DE").format(prod.price)}
                  </span>
                  <p>
                    SubTotal: <strong>${new Intl.NumberFormat("de-DE").format(prod.price * prod.cant)}</strong>
                  </p>
                </div>
              </div>
            </article>
          ))}
          <div className="summary">
            <div className="summary__totalCart">
              <p>Total</p>
              <span>$ {totalPrice()}</span>
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
