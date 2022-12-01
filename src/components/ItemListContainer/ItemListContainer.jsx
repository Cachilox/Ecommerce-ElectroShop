import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import { getProducts } from "../../firebase/firebase";
import { useParams } from "react-router-dom";
// import { DarkModeContext } from "../../context/darkMode";
import Slider from "../Slider/Slider.jsx";
import ClipLoader from "react-spinners/ClipLoader";
import Navbar from "../Navbar/Navbar.jsx";

const override = {
  display: "block",
  margin: "7rem auto",
  borderColor: "black",
};

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [slider, setSlider] = useState();
  const { category } = useParams();
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const handleOnChange = (ev) => {
    setQuery(ev.target.value)
  }

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (category) {
      getProducts().then((products) => {
        const productsList = products.filter(
          (prod) => prod.idCategoria === category
        );

        const cardProductos = ItemList({ productsList });
        setProductos(cardProductos);
      });
      setSlider();
    } else {
      getProducts().then((productsList) => {
        const cardProductos = ItemList({ productsList });
        setProductos(cardProductos);
      });

      const slideComponent = <Slider />;
      setSlider(slideComponent);
    }

    if (query) {
      getProducts().then((prod) => {
        const productsList = prod.filter((prods) =>
          prods.name.toLowerCase().includes(query)
        );
        const cardProductos = ItemList({ productsList });
        setProductos(cardProductos);
      });
    }
  }, [category, query]);

  return (
    <>
      {slider}
      <div className="itemList container">
        {loading ? (
          <ClipLoader
            color={"#000"}
            loading={loading}
            cssOverride={override}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (productos)}
      </div>
    </>
  );
};

export default ItemListContainer;
