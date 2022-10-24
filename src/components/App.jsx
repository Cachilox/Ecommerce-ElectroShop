import "./app.scss";
import Navbar from "./Navbar/Navbar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer detalle={"Todos los productos"} />
    </>
  );
}

export default App;
