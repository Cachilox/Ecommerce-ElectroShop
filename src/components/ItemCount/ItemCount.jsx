import { useState } from "react";
import "../../styles/components/ItemCount.scss";
// import {FaPlus} from 'react-icons/fa'

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
        <button onClick={decrementar}>-</button>
        <span>{itemCount}</span>
        <button onClick={incrementar}>+</button>
        <button onClick={agregarAlCarrito} className="btn btn-dark">
          Add to cart
        </button>
      </div>
      {/* <button onClick={() => onAdd(itemCount)} className="count__add-cart"></button> */}
    </div>
  );
};

export default ItemCount;
