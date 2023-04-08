import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { useCart } from "../../context/cartContext";
import {
  getProduct,
  updateProduct
} from "../../firebase/firebase";
import { useAuth } from "../../context/authContext";
import { onValidate } from "../helpers/validate";

const useForm = (initalData) => {
  const [loading, setLoading] = useState(false);
  const { cart, totalPrice, emptyCart } = useCart();
  const [orderId, setOrderId] = useState();
  const [orderCreated, setOrderCreated] = useState(false);
  const [date, setDate] = useState("")
  const {createPurchaseOrder} = useAuth()

  const datosFormularios = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = onValidate(initalData);

    if (Object.keys(err).length === 0) {
      setLoading(true);

      const dataForm = new FormData(datosFormularios.current);
      const formValues = Object.fromEntries(dataForm);
      const date = new Date();
      const dateNow = date.toLocaleDateString();
      setDate(dateNow)

      const cartItem = cart.map((prod) => ({
        id: prod.id,
        title: prod.name,
        price: prod.price,
        cant: prod.cant,
      }));

      const aux = [...cart];
      aux.forEach((product) => {
        getProduct(product.id).then((prod) => {
          prod.stock -= product.cant;
          updateProduct(product.id, prod);
        });
      });
      
      createPurchaseOrder(formValues, dateNow, totalPrice(), cartItem)
        .then((order) => {
          toast.success(`Su orden ${order.id} se creo con éxito!`, {
            position: "bottom-left",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          emptyCart();
          e.target.reset();
          setOrderId(order.id);

          setOrderCreated(true);
        })
        .catch((error) => {
          toast.error(`Su orden no fue creada con Éxito`);
          console.error(error);
        });
    }
  };

  return {
    loading,
    handleSubmit,
    orderId,
    orderCreated,
    datosFormularios,
    date
  };
};

export default useForm;
