// import { FaBars, FaTimes } from "react-icons/fa";
import CartWidget from "../CartWidget/CartWidget";
import Secciones from "./Secciones/Secciones";
// import ModalNav from "./Secciones/ModalNav";

const Navbar = () => {  
  return (
    <header>
      <div className="nav container">
        
        <Secciones />

        {/* <!-- Start modal navbar --> */}
        {/* <ModalNav /> */}

        {/* <!-- CART ICON --> */}
        <CartWidget />
      </div>
    </header>
  );
};

export default Navbar;
