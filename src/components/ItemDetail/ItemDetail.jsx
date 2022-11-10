import ItemCount from "../ItemCount/ItemCount";
import {Link} from 'react-router-dom';

function ItemDetail({ producto }) {

  const onAdd = (count) => {
    console.log(count);
  }

  return (
    <div>
      <img src={`../img/${producto.img}`} className="card-img-top" alt={`${producto.nombre}`} />
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">Marca: {producto.marca}</p>
        <p className="card-text">Modelo: {producto.modelo}</p>
        <p className="card-text">Precio: ${producto.precio}</p>
        <p className="card-text">Stock: {producto.stock}</p>
        <ItemCount stock = {producto.stock} onAdd = {onAdd}/>
        <button className="btn btn-secondary"><Link to="/cart">Finalizar compra</Link></button>
        
      </div>
    </div>
  );
}

export default ItemDetail;
