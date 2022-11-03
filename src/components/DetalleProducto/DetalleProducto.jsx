import React from "react";

function DetalleProducto({ producto }) {
  return (
    <div>
      <img src={`../img/${producto.img}`} className="card-img-top" alt={`${producto.nombre}`} />
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">Marca: {producto.marca}</p>
        <p className="card-text">Modelo: {producto.modelo}</p>
        <p className="card-text">Precio: ${producto.precio}</p>
        <p className="card-text">Stock: {producto.stock}</p>
        <button className="btn btn-dark">Agregar al carrito</button>
      </div>
    </div>
  );
}

export default DetalleProducto;
