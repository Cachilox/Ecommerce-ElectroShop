import { useState, useEffect, useContext } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import { consultarBDD } from "../../assets/funciones.js";
import { useParams } from "react-router-dom";
import { DarkModeContext } from "../../context/darkMode";
import Slider from "../Slider/Slider.jsx";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [slider, setSlider] = useState();
  const { category } = useParams();

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (category) {
      consultarBDD("../json/productos.json").then((products) => {
        const productsList = products.filter(
          (prod) => prod.idCategoria === parseInt(category)
        );

        const cardProductos = ItemList({ productsList });
        setProductos(cardProductos);
        setSlider();
      });
    } else {
      consultarBDD("./json/productos.json").then((productsList) => {
        const cardProductos = ItemList({ productsList });
        setProductos(cardProductos);
      });
      const slideComponent = <Slider />;
      setSlider(slideComponent);
    }
  }, [category]);

  return (
    <div>
      {slider}
      <div className={darkMode ? "itemList darkMode" : "itemList"}>
        {/* <button onClick={() => toggleDarkMode()}>DarkMode</button> */}

        {productos}
      </div>
    </div>
  );
};

export default ItemListContainer;
