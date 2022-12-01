import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
import { toast } from "react-toastify";

function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/login");
      toast.success("Cuenta creada con exito")
    } catch (error) {
      console.log(error);
      if (error.code === "auth/weak-password") {
        setError("La contraseña debe tener almenos 6 caracteres");
      }
      if (error.code === "auth/internal/error") {
        setError("Correo invalido");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("El correo ya esta en uso");
      }
    }
  };

  return (
    <div className="container">
      <form className="form-login" onSubmit={handleSubmit}>
        <h2 className="form-login__title">Registrarse</h2>
        <p className="form-login__paragraph">
          ¿Ya tienes una cuenta?{" "}
          <Link className="form-login__link" to="/login">
            Entra aquí
          </Link>
        </p>

        <div className="form-login__container">
          <div className="form-group">
            <input
              type="email"
              onChange={handleChange}
              name="email"
              placeholder=" "
              className="inputGroup"
            />
            <label className="label" htmlFor="email">
              Email
            </label>
            <span className="form-line"></span>
          </div>
          <div className="form-group">
            <input
              type="password"
              onChange={handleChange}
              id="password"
              name="password"
              placeholder=" "
              className="inputGroup"
            />
            <label className="label" htmlFor="password">
              Password
            </label>
            <span className="form-line"></span>
          </div>

          <small className="form-login__error">
            {error && <Alert message={error} />}
          </small>
          <button className="form-login__submit" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
