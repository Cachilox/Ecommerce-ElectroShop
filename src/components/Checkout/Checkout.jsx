import useForm from "./useForm";
import OrderCreate from "./OrderCreate";
import { useAuth } from "../../context/authContext";
import { useState } from "react";
import { onValidate } from "../helpers/validate";
const Checkout = () => {
  const {user} = useAuth()

  const [inputs, setInputs] = useState({
    name: `${user?.displayName ?? ""}`,
    email: `${user?.email ?? ""}`,
    confirmEmail: `${user?.email ?? ""}`,
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
  });
  const [errors, setErros] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name] : value
    })
    setErros(onValidate({
      ...inputs,
      [name] : value
    }))
  }

  const {
    loading,
    handleSubmit,
    datosFormularios,
    orderCreated,
    orderId,
    date,
  } = useForm(inputs);

  if (orderCreated) {
    return (
      <div className="container">
        <div className="purchase">
          <OrderCreate date={date} orderId={orderId}/>
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
                value={inputs.user?.displayName ?? inputs.name}
                placeholder="name"
                disabled={user ? true : false}
              />
              {errors.name && <div className="errorMessage">{errors.name}</div>}
            </div>

            <div className="inputBox">
              <span className="inputBox__span">Email :</span>
              <input
                type="email"
                onChange={handleChange}
                value={user?.email ?? inputs.email}
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
                value={user?.email ?? inputs.confirmEmail}
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
                value={inputs.address}
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
                value={inputs.city}
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
                  value={inputs.state}
                />
                {errors.state && (
                  <div className="errorMessage">{errors.state}</div>
                )}
              </div>
              <div className="inputBox">
                <span className="inputBox__span">Zip code :</span>
                <input
                  type="number"
                  placeholder="123 456"
                  name="zipCode"
                  onChange={handleChange}
                  value={inputs.zipCode}
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
                value={inputs.nameOnCard}
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
                value={inputs.cardNumber}
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
                value={inputs.dni}
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
                value={inputs.expMonth}
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
                  value={inputs.expYear}
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
                  value={inputs.cvv}
                />
                {errors.cvv && <div className="errorMessage">{errors.cvv}</div>}
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          {loading ? "Create order..." : "Ckeckout"}
        </button>
      </form>
    </div>
  );
};
// disable button
export default Checkout;
