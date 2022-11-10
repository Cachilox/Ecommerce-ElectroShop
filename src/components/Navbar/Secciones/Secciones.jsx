import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import { navBarOptions } from "../helpers/strings";
function Secciones() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 896 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <>
      <i onClick={menuToggleHandler} className="bx bx-menu"></i>

      <Link to="/">
        <h1>Electro Shop</h1>
      </Link>

      <nav className="navbar">
        <ul className="navbar__items">
          <li>
            <Link className="navbar__link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navbar__link" to="/category/1">
              Smartphone
            </Link>
          </li>
          <li>
          <Link className="navbar__link" to="/category/2">
              Tv
            </Link>
          </li>
          <li>
            <Link className="navbar__link" to="/category/3">
              Notebook
            </Link>
          </li>
        </ul>
      </nav>

      {/* MODAL NAVBAR */}
      <div className="background"></div>
      <div className={`modal-navbar ${menuOpen && size.width < 896 ? "activeNav" : ""}`}>
        <i
          onClick={menuToggleHandler}
          className="bx bx-x modal-navbar__closed"
        ></i>
        <ul className="modal-navbar__items">
          <li>
            <Link
              onClick={menuToggleHandler}
              className="modal-navbar__links"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <a className="modal-navbar__links" href="/">
              Smartphone
            </a>
          </li>
          <li>
            <a className="modal-navbar__links" href="./contact.html">
              Tv
            </a>
          </li>
          <li>
            <Link
              onClick={menuToggleHandler}
              className="modal-navbar__links"
              to="/category/1"
            >
              Notebook
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Secciones;
