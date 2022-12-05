import { TiTrash } from "react-icons/ti";
import {useCart} from "../../context/cartContext"

function CartItem({item}) {
    const {id, img, name, name2, cant, price} = item
    const {removeItem} = useCart()
  return (
    <article className="cartPage__sigleProduct">
    <figure>
      <img src={img} alt={name} />
      <button className="cartPage__delete" onClick={() => removeItem(id)}>
        <TiTrash />
      </button>
    </figure>

    <div className="cartPage__information">
      <div>
        <h2 className="cartPage__title">{name2}</h2>
      </div>

      <div className="cartPage__free">
        <span>Envío gratis</span>
        <span>Cantidad: {cant}</span>
      </div>

      <div className="cartPage__price">
        <span>
          Precio unitario: $
          {new Intl.NumberFormat("de-DE").format(price)}
        </span>
        <p>
          SubTotal: <strong>${new Intl.NumberFormat("de-DE").format(price * cant)}</strong>
        </p>
      </div>
    </div>
  </article>
  )
}

export default CartItem