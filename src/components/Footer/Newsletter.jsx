import React from "react";
import { toast } from "react-toastify";

const Newsletter = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();

    toast.success('😎 Gracias por suscribirte!', {
      position: "bottom-left",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="newsletter">
      <div className="newsletter__container">
        <div className="row">

          <div className="col">
            <div className="newsletter__inner">

              <div className="newsletter-text">
                <h2 className="newsletter-text__title">Suscribite a nuestro <strong>newsletter</strong></h2>
                <p className="newsletter-text__desc">Y entérate de todas nuestras novedades</p>
              </div>

              <div className="newsletter-form">
                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="form-body">
                      <div className="form-fiels">
                        <div className="form-field">
                          <input className="input-field" type="email" placeholder="Email" required />
                        </div>

                        <div className="form-field">
                          <input className="input-field" type="text" placeholder="Nombre" required />
                        </div>
                        <button className="form-fiels__btn">Suscribirme</button>
                      </div>
                      
                      <p className="form-body__p">Recibirás un correo para validar tu email.</p>
                    </div>
                  </form>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Newsletter;
