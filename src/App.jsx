import "./app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Context
import { CartContextProvider } from "./context/cartContext";
import { AuthProvider } from "./context/authContext";
// Components
import Navbar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import UserProfile from "./components/User/UserProfile";
import { ProtectedRoute } from "./components/User/ProtectedRoute";
import NotFound from "./components/NotFound/NotFound";
import OrderCreate from "./components/Checkout/OrderCreate";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <CartContextProvider>
            <Navbar />

            <main>
              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/product/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route
                  path="/category/:category"
                  element={<ItemListContainer />}
                />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/order/:id" element={<OrderCreate />} />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <UserProfile />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <ToastContainer className="foo" />
            <Footer />
          </CartContextProvider>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
