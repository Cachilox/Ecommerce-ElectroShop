import { useState } from "react";
import { FaPlus, FaMinus, FaCartPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const ItemCount = ({ stock, onAdd }) => {
  const [itemCount, SetItemCount] = useState(1);

  const navigate = useNavigate()

  const incrementar = () => itemCount < stock && SetItemCount((prev) => prev + 1);

  const decrementar = () => itemCount > 1 && SetItemCount((prev) => prev - 1);

  const agregarAlCarrito = () => {

    if (stock === 0) {
      navigate("/")
      return toast.error("Sin stock disponible!", {
        position: "bottom-left",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    onAdd(itemCount);
    toast.success("Producto agregado al carrito!", {
      position: "bottom-left",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="count">
      <div className="count__elements">
        <button className="count__btn" disabled={itemCount <= 1} onClick={decrementar}>
          <FaMinus />
        </button>
        <span className="count__itemCount">{itemCount}</span>
        <button className="count__btn" onClick={incrementar}>
          <FaPlus />
        </button>
      </div>

      <button onClick={agregarAlCarrito} className="count__btn-add">
        <FaCartPlus /> Add to cart
      </button>
    </div>
  );
};

export default ItemCount;
