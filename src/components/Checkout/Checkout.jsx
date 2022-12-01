import React from "react";
import useForm from "./useForm";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
const Checkout = () => {
  const {user} = useAuth()

  const initalData = {
    name: "",
    email: `${user ? user.email : ""}`,
    confirmEmail: `${user ? user.email : ""}`,
    address: "",
    city: "",
    state: "",
    zipCode: "",
    nameOnCard: "",
    cardNumber: "",
    dni: "",
    expMonth: "",
    expYear: "",
    cvv: "",
  };

  const onValidate = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (!form.name.trim()) {
      errors.name = 'El campo "Full name" no debe ser vacio.';
    } else if (!regexName.test(form.name)) {
      errors.name = 'El campo "Full name" solo acepta letras.';
    }

    if (!form.email.trim()) {
      errors.email = 'El campo "Email" no debe ser vacio.';
    } else if (!regexEmail.test(form.email)) {
      errors.email = 'El campo "Email" contiene un formato no valido';
    }

    if (!form.confirmEmail.trim()) {
      errors.confirmEmail = "Ambos correos deben ser iguales.";
    } else if (form.email !== form.confirmEmail) {
      errors.confirmEmail = "Ambos correos deben ser iguales.";
    }

    if (!form.address.trim()) {
      errors.address = 'El campo "Address" no debe ser vacio.';
    }
    if (!form.city.trim()) {
      errors.city = 'El campo "City" no debe ser vacio.';
    }

    if (!form.nameOnCard.trim()) {
      errors.nameOnCard = 'El campo "Name on card" no debe ser vacio.';
    }

    if (!form.cardNumber.trim()) {
      errors.cardNumber = 'El campo "Credit card number" no debe ser vacio.';
    }

    if (!form.dni.trim()) {
      errors.dni = 'El campo "DNI" no debe ser vacio.';
    }

    if (!form.expMonth.trim()) {
      errors.expMonth = 'El campo "Exp Month" no debe ser vacio.';
    }

    if (!form.state.trim()) {
      errors.state = 'El campo "State" no debe ser vacio.';
    }

    if (!form.zipCode.trim()) {
      errors.zipCode = 'El campo "Zip code" no debe ser vacio.';
    }

    if (!form.expYear.trim()) {
      errors.expYear = 'El campo "Exp year" no debe ser vacio.';
    } else if (form.expYear < 2022) {
      errors.expYear = "Fecha expirada, ingrese un año valido.";
    }

    if (!form.cvv.trim()) {
      errors.cvv = 'El campo "CVV" no debe ser vacio.';
    }

    return errors;
  };

  const {
    form,
    errors,
    loading,
    handleChange,
    handleSubmit,
    datosFormularios,
    orderCreated,
    orderId,
    date
  } = useForm(initalData, onValidate);

  if (orderCreated) {
    return (
      <div className="container purchase">
        <div>
          <h2 className="purchase__title">Thanks for your purchase</h2>
          <p className="purchase__desc">
            Your purchase ID is: <strong>{orderId}</strong>
          </p>
          <p className="purchase__desc">Date of purchase: {date}</p>
          <div className="bottom">
            <Link to="/" className="purchase__btn">
              Return home
            </Link>
          </div>
        </div>

        <div>
          <img
            className="purchase__img"
            src="https://firebasestorage.googleapis.com/v0/b/proyecto-react-coderhous-192d5.appspot.com/o/shopping-cart.webp?alt=media&token=7ad7b321-c8c6-4dc1-8e5f-7453990e8826"
            alt="shopping-cart"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <form
        className="form-container__form"
        onSubmit={handleSubmit}
        ref={datosFormularios}
      >
        <div className="row">
          <div className="col">
            <h3 className="title">Checkout</h3>

            <div className="inputBox">
              <span className="inputBox__span">Full name :</span>
              <input
                type="text"
                onChange={handleChange}
                name="name"
                value={form.name}
                placeholder="name"
              />
              {errors.name && <div className="errorMessage">{errors.name}</div>}
            </div>
            <div className="inputBox">
              <span className="inputBox__span">Email :</span>
              <input
                type="email"
                onChange={handleChange}
                value={user?.email ?? form.email}
                readOnly
                name="email"
                placeholder="example@example.com"
                disabled={user ? true : false}
              />
              {errors.email && (
                <div className="errorMessage">{errors.email}</div>
              )}
            </div>
            <div className="inputBox">
              <span className="inputBox__span">ConfirmEmail :</span>
              <input
                type="email"
                onChange={handleChange}
                value={user?.email ?? form.confirmEmail}
                readOnly
                name="confirmEmail"
                placeholder="example@example.com"
                disabled={user ? true : false}
              />
              {errors.confirmEmail && (
                <div className="errorMessage">{errors.confirmEmail}</div>
              )}
            </div>

            <div className="inputBox">
              <span className="inputBox__span">Address :</span>
              <input
                type="text"
                onChange={handleChange}
                name="address"
                value={form.address}
                placeholder="street - locality"
              />
              {errors.address && (
                <div className="errorMessage">{errors.address}</div>
              )}
            </div>
            <div className="inputBox">
              <span className="inputBox__span">City :</span>
              <input
                type="text"
                onChange={handleChange}
                name="city"
                value={form.city}
                placeholder="Buenos Aires"
              />
              {errors.city && <div className="errorMessage">{errors.city}</div>}
            </div>

            <div className="flex">
              <div className="inputBox">
                <span className="inputBox__span">State :</span>
                <input
                  type="text"
                  placeholder="India"
                  name="state"
                  onChange={handleChange}
                  value={form.state}
                />
                {errors.state && (
                  <div className="errorMessage">{errors.state}</div>
                )}
              </div>
              <div className="inputBox">
                <span className="inputBox__span">Zip code :</span>
                <input
                  type="text"
                  placeholder="123 456"
                  name="zipCode"
                  onChange={handleChange}
                  value={form.zipCode}
                />
                {errors.zipCode && (
                  <div className="errorMessage">{errors.zipCode}</div>
                )}
              </div>
            </div>
          </div>

          <div className="col">
            <h3 className="title">Payment</h3>

            <div className="inputBox">
              <span className="inputBox__span">Cards accepted :</span>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/proyecto-react-coderhous-192d5.appspot.com/o/card_img.png?alt=media&token=24024a67-6ee9-46f5-acf5-89ac86f8de16"
                alt="credit cards"
              />
            </div>

            <div className="inputBox">
              <span className="inputBox__span">Name on card :</span>
              <input
                type="text"
                placeholder="mr. John Deo"
                onChange={handleChange}
                value={form.nameOnCard}
                name="nameOnCard"
              />
              {errors.nameOnCard && (
                <div className="errorMessage">{errors.nameOnCard}</div>
              )}
            </div>

            <div className="inputBox">
              <span className="inputBox__span">Credit card number :</span>
              <input
                type="number"
                placeholder="1111-2222-3333-444"
                onChange={handleChange}
                value={form.cardNumber}
                name="cardNumber"
              />
              {errors.cardNumber && (
                <div className="errorMessage">{errors.cardNumber}</div>
              )}
            </div>

            <div className="inputBox">
              <span className="inputBox__span">DNI :</span>
              <input
                type="number"
                placeholder="44558335"
                name="dni"
                onChange={handleChange}
                value={form.dni}
              />
              {errors.dni && <div className="errorMessage">{errors.dni}</div>}
            </div>

            <div className="inputBox">
              <span className="inputBox__span">Exp month :</span>
              <input
                type="text"
                placeholder="february"
                name="expMonth"
                onChange={handleChange}
                value={form.expMonth}
              />
              {errors.expMonth && (
                <div className="errorMessage">{errors.expMonth}</div>
              )}
            </div>

            <div className="flex">
              <div className="inputBox">
                <span className="inputBox__span">Exp year :</span>
                <input
                  type="number"
                  placeholder="2022"
                  name="expYear"
                  onChange={handleChange}
                  value={form.expYear}
                />
                {errors.expYear && (
                  <div className="errorMessage">{errors.expYear}</div>
                )}
              </div>

              <div className="inputBox">
                <span className="inputBox__span">CVV :</span>
                <input
                  type="number"
                  placeholder="1234"
                  name="cvv"
                  onChange={handleChange}
                  value={form.cvv}
                />
                {errors.cvv && <div className="errorMessage">{errors.cvv}</div>}
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          Ckeckout
        </button>
      </form>
    </div>
  );
};
// disable button
export default Checkout;
