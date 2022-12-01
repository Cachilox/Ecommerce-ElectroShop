import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
import { FcGoogle } from "react-icons/fc";


function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/profile");
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
      if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta");
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      navigate("/profile");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <form className="form-login" onSubmit={handleSubmit}>
        <h2 className="form-login__title">Iniciá sesión</h2>
        <p className="form-login__paragraph">
          ¿Aun no tienes una cuenta?{" "}
          <Link className="form-login__link" to="/register">
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
          <div className="login-buttons">
            <button className="form-login__submit" type="submit">
              Iniciar sesión
            </button>
            <button className="loginGoogle" onClick={handleGoogleSignIn}>
              <FcGoogle className="icon-google"/>  Continuar con Google
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default Login;
