import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";

const Login = ({ history }) => {
  const [mensaje, setMensaje] = useState('');
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        //alert(error);

        setMensaje("Error en el inicio de session");
      }
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <div className="row">
        <form id='inicio' onSubmit={handleLogin} className='container'>
          <div className='offset-lg-4'><label id='label' >Iniciar Sesion</label></div>
          <div className='col-lg-12'>
            <label id='label'>Correo Electronico:</label>
          </div>
          <div className='offset-lg-5 col-lg-7'>
            <input className='form-control col-lg-10' type='email' id='email'required></input>
          </div>
          <div className='col-lg-12'>
            <label id='label'>Contraseña:</label>
          </div>
          <div className='offset-lg-5 col-lg-7'>
            <input className='form-control col-lg-10' type='password' id='password' required></input>
          </div>
          <p id='error'> { mensaje }</p>
          <div id='boton'>
            <button type="submit" className="btn btn-success offset-lg-4">Ingresar</button>

          </div>
        </form>
      </div>
    </div>
  );
};
export default withRouter(Login);
