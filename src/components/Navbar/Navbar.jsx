import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Secciones from "./Secciones/Secciones";
import { useAuth } from "../../context/authContext";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = React.memo(() => {
  const { user } = useAuth();

  return (
    <header>
      <div className="nav-top">
        <span>ENVÍOS GRATIS A TODO EL PAIS |</span> ENVÍOS EN EL DÍA A CABA
      </div>
      <div className="nav container">
        <Secciones />

        <div className="icon-nav">
          <Link to={user ? "/profile" : "/login"}>
            <FaUser className="FaUser" />
          </Link>
          <small className="nav-small">
            {user ? user.displayName : "Account"}
          </small>
        </div>
        <div className="icon-nav">
          <CartWidget />
          <small className="nav-small">Mi carrito</small>
        </div>
      </div>

      <div className="rgb"></div>
    </header>
  );
});

export default Navbar;
