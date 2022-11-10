import {useRef} from "react";

function Checkout() {
    const datosFormularios = useRef()
    const consultarFormulario = (e) => {
        e.preventDefault()
        const dataForm = new FormData(datosFormularios.current)
        const values = Object.fromEntries(dataForm)
        console.log(values);
        e.target.reset()
    }

  return (
    <div className="container">
      <h1 className="checkout">Checkout</h1>
      <form onSubmit={consultarFormulario} ref={datosFormularios}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre y Apellido
          </label>
          <input type="text" className="form-control" name="nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" name="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="dni" className="form-label">
            DNI
          </label>
          <input type="number" className="form-control" name="dni" />
        </div>
        <div className="mb-3">
          <label htmlFor="celular" className="form-label">
            Numero telefonico
          </label>
          <input type="number" className="form-control" name="celular" />
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">
            Dirección
          </label>
          <input type="text" className="form-control" name="direccion" />
        </div>
        <button type="submit" className="btn-checkout">
          Finalizar Compra
        </button>
      </form>
    </div>
  );
}

export default Checkout;
