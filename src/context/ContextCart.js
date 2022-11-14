import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

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
    console.log(cart);
  };

  const emptyCart = () => {
    return setCart([]);
  };

  const removeItem = (id) => {
    return setCart(cart.filter((prod) => prod.id !== id));
  };

  const getItemQuantity = () => {
    return cart.reduce((acc, prod) => (acc += prod.cant), 0);
  };

  const totalPrice = () => {
    return cart.reduce((acc, prod) => (acc += prod.cant * prod.precio), 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isInCart,
        addItem,
        emptyCart,
        removeItem,
        getItemQuantity,
        totalPrice,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContextProvider, CartContext };
