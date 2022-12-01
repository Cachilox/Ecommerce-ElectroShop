import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProduct } from "../../firebase/firebase";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);

  const { id } = useParams();
  // const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    getProduct(id).then(prod => {
      setProducto(prod);
    });
  }, [id]);

  return (
    <>
      {
        (producto !== "Producto no encontrado") ? 
        <div className="container">
          <ItemDetail producto={producto} />
        </div> 
        :
        <h1 className="prod-not-found">Producto no encontrado</h1> 
      }
    </>
  )
}

export default ItemDetailContainer;
