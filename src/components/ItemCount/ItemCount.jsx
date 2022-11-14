import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const ItemCount = ({ stock, onAdd }) => {
  const [itemCount, SetItemCount] = useState(1);

  const incrementar = () => itemCount < stock && SetItemCount(itemCount + 1);
  const decrementar = () => itemCount > 1 && SetItemCount(itemCount - 1);

  const agregarAlCarrito = () => {
    onAdd(itemCount);
  };

  return (
    <div className="count">
      <div className="count__elements">
        <button className="count__btn" onClick={decrementar}>
          <FaMinus />
        </button>
        <span className="count__itemCount">{itemCount}</span>
        <button className="count__btn" onClick={incrementar}>
          <FaPlus />
        </button>
      </div>

      <button onClick={agregarAlCarrito} className="count__btn-add">
        Add to cart
      </button>

    </div>
  );
};

export default ItemCount;
