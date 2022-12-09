import { useCart } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";
import { FaRegCreditCard, FaTruck } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

function ItemDetail({ producto }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    return () => {
      window.scrollTo(0, 0)
    };
  }, []);

  const {
    img,
    img2,
    name,
    price,
    stock,
    name2,
    model,
    color,
    processor,
    memory,
    primaryStorage,
    secondaryStorage,
    graph,
    keyboard,
    screen,
    conector,
    wifi,
    cam,
    battery,
    dimensions,
    weigth,
    operatingSystem,
    warranty,
  } = producto;

  const onAdd = (count) => {
    addItem(producto, count);
    setQuantity(count);
  };

  return (
    <>
      <div className="cardItemDetail">
        <div className="SwiperProd">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{ clickable: true }}
            slidesPerView={1}
            loop
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img} className="cardItemDetail__img" alt={name} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="cardItemDetail__img" src={img2} alt={name} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="card-detail">
          <h5 className="cardItemDetail__title">{name}</h5>
          <p className="card-detail__price">
            ${new Intl.NumberFormat("de-DE").format(price)}
          </p>
          <p className="card-detail__cuotas">
            <FaRegCreditCard /> <span>12</span> Cuotas de
            <span>
              ${new Intl.NumberFormat("de-DE").format((price / 12).toFixed(2))}
            </span>
          </p>
          <p className="card-detail__free">
            <FaTruck /> Envios gratis a todo el pais
          </p>

          <p className="card-detail__stock">Stock Disponible: {stock}</p>

          {quantity === 0 ? (
            <ItemCount stock={stock} onAdd={onAdd} />
          ) : (
            <>
              <Link className="card-detail__cart" to={"/cart"}>
                Go to cart
              </Link>
              <Link className="card-detail__cart" to={"/checkout"}>
                buy now
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="specs container">
        <p>
          <span>Especificaciones:</span> <br />
          <br />
          {name2} <br />
          {model} <br />
          {color} <br />
          {processor} <br />
          {memory} <br />
          {primaryStorage} <br />
          {secondaryStorage} <br />
          {graph} <br />
          {keyboard} <br />
          {screen} <br />
          {conector} <br />
          {wifi} <br />
          {cam} <br />
          {battery} <br />
          {dimensions} <br />
          {weigth} <br />
          {operatingSystem} <br />
          {warranty} <br />
        </p>
      </div>
    </>
  );
}

export default ItemDetail;
