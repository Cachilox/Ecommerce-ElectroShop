import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";

function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState();
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
      if(!values.name) {
        return setError("El campo Full name no puede estar vacio.")
      }else if (!regexName.test(values.name)) {
        return setError("El campo Full name solo acepta letras.");
      }
      if (!values.email) {
        return setError("El campo Email no puede estar vacio.")
      }
      if (!values.password) {
        return setError("El campo Password no puede estar vacio.")
      }

      await signup(values.email, values.password).then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/login");
        toast.success("Cuenta creada con exito!", {
          position: "bottom-left",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
    } catch (error) {
      
      if (error.code === "auth/weak-password") {
        setError("La contraseña debe tener almenos 6 caracteres");
      }
      if (error.code === "auth/invalid-email") {
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

  return (
    <div className="container">
      <form className="form-login" onSubmit={handleSubmit}>
        <h2 className="form-login__title">Registrarse</h2>
        <p className="form-login__paragraph">
          ¿Ya tienes una cuenta?
          <span>
            <Link className="form-login__link" to="/login">
              Entra aquí
            </Link>
          </span>
        </p>

        <div className="form-login__container">
          <div className="form-group">
            <input
              type="text"
              onChange={handleChange}
              name="name"
              placeholder=" "
              className="inputGroup"
            />
            <label className="label" htmlFor="name">
              Full name
            </label>
            <span className="form-line"></span>
          </div>

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
