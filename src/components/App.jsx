import "./app.scss";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./Navbar/Navbar";
// import ItemListContainer from "./ItemListContainer/ItemListContainer";
// import ItemCount from "./ItemCount/ItemCount";
import Home from "./Home/Home";
import Producto from "./Producto/Producto";
import Carrito from "./Carrito/Carrito";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/producto/:id' element={<Producto/>} />
          <Route path='/carrito' element={<Carrito/>} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
