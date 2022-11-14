import CartWidget from "../CartWidget/CartWidget";
import Secciones from "./Secciones/Secciones";

const Navbar = () => {  
  return (
    <header>
      <div className="nav-top"><span>ENVÍOS GRATIS A TODO EL PAIS</span> | ENVÍOS EN EL DÍA A CABA</div>
      <div className="nav container">
        <Secciones />


        {/* <!-- CART ICON --> */}
        <CartWidget />
      </div>

    </header>
  );
};

export default Navbar;
