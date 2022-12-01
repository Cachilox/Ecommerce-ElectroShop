import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  const { name, img, description, price, id } = prod;
  return (
    <div className="card">
      <img src={img} className="card__img" alt={name} />
      <div className="card-body">
        <p className="card__title">{description}</p>
        <p className="card__price">
          ${new Intl.NumberFormat("de-DE").format(price)}
        </p>
        <div className="card__active-btn">

          <Link className="btn-blue"  to={`/product/${id}`}>
            Ver producto
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
