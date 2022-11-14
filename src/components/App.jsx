import "./app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Context
import { DarkModeProvider } from "../context/darkMode";
import { CartContextProvider } from "../context/ContextCart";

// Components
import Navbar from "./Navbar/Navbar";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import Cart from "./Cart/Cart";
import ItemListContainer from "./ItemListContainer/ItemListContainer";


function App() {
  return (
    <>
      <DarkModeProvider>
        <BrowserRouter>
          <CartContextProvider>
            <Navbar />

            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/product/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/category/:category"
                element={<ItemListContainer />}
              />
            </Routes>
          </CartContextProvider>
        </BrowserRouter>
      </DarkModeProvider>
    </>
  );
}

export default App;
