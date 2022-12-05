import { Link } from "react-router-dom";
import { navBarOptions, footerContact, metodosPagos, footerSocialLinks } from "../helpers/strings";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <>
      <Newsletter />
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__row">
            <div className="footer__col">
              <h2 className="footer__title">Electro Shop</h2>
              <p className="footer__description">
                Buscamos darte la mejor selección de productos para que
                encuentras los que estás buscando.
              </p>
            </div>

            <div className="footer__col">
              <h2 className="footer__title">Categories</h2>
              <ul>
                {navBarOptions.map((footerLink) => (
                  <li key={footerLink.id}>
                    <Link className="links" to={footerLink.to}>
                      {footerLink.category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <h2 className="footer__title contact">Contact Us</h2>
              <ul className="contact">
                {footerContact.map((contact) => {
                  return (
                    <li key={contact.id}>
                      {contact.icon} {contact.contact}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="footer__col">
              <h4 className="footer__title">Follow us</h4>

              <div className="footer__social-links">
                {footerSocialLinks.map((link) => {
                  const {id, href, icon} = link
                  return <a key={id} href={href}>{icon}</a>
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="metodos-pagos">
          <h2 className="pagos">Métodos de pago</h2>
          <div className="metodos-pagos__card">
            {metodosPagos.map((card) => {
              return <img key={card.id} src={card.src} alt={card.alt} />;
            })}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
