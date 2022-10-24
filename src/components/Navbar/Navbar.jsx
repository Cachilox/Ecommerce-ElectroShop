const Navbar = () => {
  return (
    <header className="header">
      <div className="header__top">
        8% OFF para compras en Efectivo: Selecciona la opcion "PAGO A CONVERTIR"
      </div>
      <nav className="nav container">
        {/* <i className="bx bx-menu" /> */}
        <a href="./" className="nav__logo">
          Electro Shop
        </a>
        <div className="navbar">
          <ul className="navbar__items">
            <li>
              <a className="navbar__link" href="./index.html">
                Inicio
              </a>
            </li>
            <li>
              <a className="navbar__link" href="#products">
                Notebooks
              </a>
            </li>
            <li>
              <a className="navbar__link" href="./contact.html">
                SmartPhone
              </a>
            </li>
            <li>
              <a className="navbar__link" href="./contact.html">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        {/* CART ICON */}
        <i className="bx bx-shopping-bag" id="cart-icon">
          <span id="counter">0</span>
        </i>
      </nav>
      {/* <div className="anuncio">
      <i className="bx bx-package" />
      <p className="anuncio__title">Envíos gratis a todo el país a partir de $ 26.000 3 cuotas sin interés</p>
      </div> */}
    </header>
  );
};

export default Navbar;
