import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { hacerPeticion } from '../servicios/clienteaxios';



const FormRegistro = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

//Definimos la logica de la contraseña mediante unas validaciones para pedirle al usuario los campos requeridos, indicarle que la contraseña no coincide o que debe ingresar almenos 8 caracteres, si ninguna de estas excepciones ocurre llamamos la funcion de hacerpeticion pasandole como parametro formato que son las entradas de texto por lo que guarda el usuario en la base de datos(backend)

  const guardarUsuario = () => {
    const formato = {nombre: nombre, apellido: apellido, usuario: usuario, contraseña: contraseña};
  
    if (contraseña !== confirmarContraseña) {
      alert('Las contraseñas no coinciden');
      return;

    } else if (nombre.length === 0 || apellido.length ===0 || usuario.length === 0 || contraseña.length ===0 || confirmarContraseña.length === 0) {
      alert('Por favor llenar campos de texto solicitados :) ');
      return;

    } else if (contraseña.length < 8) {
      alert('Contraseña demasiado corta!\nDebe tener almenos 8 carateres');
      return;

    }
  
    hacerPeticion(formato);
    alert('Registro exitoso!');
  };


//Aqui tenemos toda la interfaz grafica del formulario registro 
  return (

        <div className="col-md-4" > 
          <form className="text-left" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ingrese su nombre" />
            </div>
            <div className="mb-3">
              <label className="form-label">Apellido</label>
              <input type="text" className="form-control" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Ingrese su apellido" />
            </div>
            <div className="mb-3">
              <label className="form-label">Usuario</label>
              <input type="text" className="form-control" id="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} placeholder="Ingrese su usuario" />
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} placeholder="Ingrese su contraseña" />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirmar Contraseña</label>
              <input type="password" className="form-control" id="confirmarContraseña" value={confirmarContraseña} onChange={(e) => setConfirmarContraseña(e.target.value)} placeholder="Confirme su contraseña" />
            </div>
            <button type="submit" className="btn btn-success mx-3" onClick={guardarUsuario }>Registrar</button>
          </form>
        </div>
  );
};

export default FormRegistro;