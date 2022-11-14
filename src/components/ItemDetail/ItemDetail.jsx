import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../../context/ContextCart';
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ producto }) {

  const {cart ,isInCart, addItem} = useContext(CartContext)

  const onAdd = (count) => {
    addItem(producto, count)

  }

  return (
    <div className='cardItemDetail'>
      <img src={`../img/${producto.img}`} className="cardItemDetail__img" alt={producto.nombre} />
      <div className="card-body">
        <h5 className="cardItemDetail__title">{producto.nombre}</h5>
        <p className="cardItemDetail__description">{producto.description}</p>
        <p className="cardItemDetail__price">Precio: ${producto.precio}</p>
        {/* <p className="card-text">Stock: {producto.stock}</p> */}
        <ItemCount stock = {producto.stock} onAdd = {onAdd}/>
        {/* <button className="btn btn-secondary"><Link to="/cart">Finalizar compra</Link></button> */}
        
      </div>
    </div>
  );
}

export default ItemDetail;
