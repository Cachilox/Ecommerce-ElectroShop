import "./app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Context
import { CartContextProvider } from "../context/ContextCart";
import { AuthProvider } from "../context/authContext";
// Components
import Navbar from "./Navbar/Navbar";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import Cart from "./Cart/Cart";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import Checkout from "./Checkout/Checkout";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Login from "./User/Login";
import Register from "./User/Register";
import UserProfile from "./User/UserProfile";
import { ProtectedRoute } from "./User/ProtectedRoute";
import NotFound from "./NotFound/NotFound";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <CartContextProvider>
            <Navbar />

            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/product/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/category/:category" element={<ItemListContainer />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
              <Route path="*" element={<NotFound/>}/>
            </Routes>
            <ToastContainer className="foo" />
            <Footer />
          </CartContextProvider>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
