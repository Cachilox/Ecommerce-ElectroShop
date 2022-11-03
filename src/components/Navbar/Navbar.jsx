// import { navBarOptions } from "../helpers/strings";
import { Link } from "react-router-dom"
import { useRef } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <header>
      <button className="nav-btn" onClick={showNavbar}>
      <FaBars/>
      </button>
      <Link to="/">
        <h3>Electro Shop</h3>
      </Link>
      <nav ref={navRef}>
        <Link to="/">
          Home
        </Link>
        <a href="/">Smartphone</a>
        <a href="/">Netbook</a>
        <a href="/">Tv</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
        <CartWidget />
      </nav>
    </header>
  )
}

export default Navbar
