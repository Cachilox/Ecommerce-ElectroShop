import Item from "../item/Item";
import "swiper/css";
import "swiper/css/free-mode";

const ItemList = ({ productsList }) => {
  return (
    <>
      {productsList.map((producto) => (
        <Item key={producto.id} prod={producto} />
      ))}
    </>
  );
};
export default ItemList;
