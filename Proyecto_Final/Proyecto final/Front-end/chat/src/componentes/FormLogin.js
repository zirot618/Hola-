import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { obtenerUsuarios } from '../servicios/clienteaxios';
import EyeIcon from './EyeIcon';

const FormLogin = ({ handleUsuarioLogeado }) => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mostrarContraseña, setMostrarContraseña] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

// Aqui llamamos la funcion de obtenerUsuarios desde el clienteAxios, que se encarga de traer los usuarios, por lo que comparamos esos usuarios con con el username y la contraseña, validando si coinciden, para dar un mensaje de bienvenida con el nombre de usuario y pasandole a la funcion handleUsuarioLogeado ese usuario encontrado, si por el contrario no coincide sale un mensaje de error
    try {
      const usuarios = await obtenerUsuarios();
      const usuarioRegistrado = usuarios.find((user) => user.usuario === usuario && user.contraseña === contraseña);
      if (usuarioRegistrado) {
        // Inicio de sesión exitoso
        handleUsuarioLogeado(usuario);
        alert('Hola Estimado '+usuario+'\nInicio de sesión exitoso!');
      } else {
        // Credenciales inválidas
        alert('Credenciales inválidas');
      }
    } catch (error) {
      console.log(error);
    }
  };
//toda la interfaz grafica de formulario login y donde manejamos el boton de mostrar y ocultar contraseña "eyeIcon"
  return (
    <div className="col-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="usuario" className="form-label">Usuario</label>
          <input type="text" className="form-control" id="usuario" placeholder="Nombre de usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="contraseña" className="form-label">Contraseña</label>
          <div className="input-group">
            <input
              type={mostrarContraseña ? "text" : "password"}
              className="form-control"
              id="contraseña"
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
            <span className="input-group-text" onClick={() => setMostrarContraseña(!mostrarContraseña)}>
              <EyeIcon />
            </span>
          </div>
        </div>
        <button type="submit" className="btn btn-success mx-3">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
