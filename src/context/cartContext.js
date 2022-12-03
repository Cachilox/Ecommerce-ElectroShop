import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const CartContext = createContext("");

export const useCart = () => {
  const context = useContext(CartContext)
  return context
}

const CartContextProvider = (props) => {

  const carritoLS = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("carrito")) ?? [] : null;
  const [cart, setCart] = useState(carritoLS);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart))
  }, [cart])

  const isInCart = (id) => {
    return cart.find((prod) => prod.id === id);
  };

  const addItem = (product, quantity) => {
    if (isInCart(product.id)) {
      const index = cart.findIndex((prod) => prod.id === product.id);
      const aux = [...cart];
      aux[index].cant = quantity;
      setCart(aux);
    } else {
      const newProduct = {
        ...product,
        cant: quantity,
      };

      setCart([...cart, newProduct]);
    }
  };

  const emptyCart = () => {
    return setCart([]);
  };

 
  const removeItem = (id) => {
    toast.error('Producto eliminado del carrito!', {
      position: "bottom-left",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    return setCart(cart.filter((prod) => prod.id !== id));
  };

  const getItemQuantity = () => {
    return cart.reduce((acc, prod) => (acc += prod.cant), 0);
  };

  const totalPrice = () => {
    return cart.reduce((acc, prod) => (acc += prod.cant * prod.price), 0);
  };
  const totalPriceLS = () => {
    return carritoLS.reduce((acc, prod) => (acc += prod.cant * prod.price), 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        carritoLS,
        isInCart,
        addItem,
        emptyCart,
        removeItem,
        getItemQuantity,
        totalPrice,
        totalPriceLS
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContextProvider, CartContext };
