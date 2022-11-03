import { useState } from "react";
import "../../styles/components/ItemCount.scss";

const ItemCount = () => {
  const [itemCount, SetItemCount] = useState(1);

  const modificarContador = (operacion) => {
    if (operacion === "+") {
      if (itemCount < 10) 
      SetItemCount(itemCount + 1);
    } else {
      if (itemCount > 1) 
      SetItemCount(itemCount - 1);
    }
  };

  function onAdd(itemCount) {
    console.log(`La cantidad de productos agregado al carrito es ${itemCount}`);
  }

  return (
    <div className="count">
      <div className="count__elements">
        <button onClick={() => modificarContador("+")}>+</button>
        <span>{itemCount}</span>
        <button onClick={() => modificarContador("-")}>-</button>
      </div>
      <button onClick={() => onAdd(itemCount)} className="count__add-cart">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
