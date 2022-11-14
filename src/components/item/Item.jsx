import { Link } from "react-router-dom";
const Item = ({prod}) => {
  return (
    <div className="card">
      <img src={`../img/${prod.img}`} className="card-img" alt={prod.nombre} />
      <div className="card-body">
        <p className="card__marca">{prod.marca}</p>
        <p className="card__title">{prod.nombre} {prod.modelo}</p>
        <p className="card__price">$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
        <div className="card__active-btn">
          <Link className="btn-blue" to={`/product/${prod.id}`}>Ver producto</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
