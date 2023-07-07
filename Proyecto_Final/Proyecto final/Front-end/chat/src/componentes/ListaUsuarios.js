import React, { useEffect, useState } from 'react';
import { obtenerUsuarios } from '../servicios/clienteaxios';

const ListaUsuarios = ({ handleUsuarioSeleccionado }) => {
  const [usuarios, setUsuarios] = useState([]);
//Llamamos de nuevo la funcion para obtener los usuarios y actualizamos el estado "usuarios" con los usuarios obtenidos, en caso de error lo muestra en consola
  useEffect(() => {
    const obtenerUsuariosRegistrados = async () => {
      try {
        const usuariosObtenidos = await obtenerUsuarios();
        setUsuarios(usuariosObtenidos);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerUsuariosRegistrados();
  }, []);
//Aqui manejamos la interfaz grafica de lista usuarios, utilizamos el metodo map en el arreglo usuarios para renderizar cada usuario en una lista "li" en orden de la id de el usuario usando una clave unica "key"
//despues agregamos un evento con el clic para manejar el usuario seleccionado, llamamos la funcion handleUsuarioSeleccionado y le pasamos como argumento el nombre de usuario, si el raton esta sobre un nombre de la lista se mostrara en verde y si el raton deja de estar pasa a su estado normal "blanco"
  return (
    <div
      className="card shadow border-0"
      style={{ position: 'fixed', top: '70px', right: '8px', maxWidth: '200px', zIndex: '1' }}
    >
      <div className="card-body">
        <h3 className="card-title">Usuarios Registrados</h3>
        <ul className="list-group">
          {usuarios.map((user) => (
            <li
              key={user.id}
              className="list-group-item"
              style={{ cursor: 'pointer' }}
              onClick={() => handleUsuarioSeleccionado(user.usuario)}
              onMouseEnter={(e) => e.target.classList.add('bg-success', 'text-white')}
              onMouseLeave={(e) => e.target.classList.remove('bg-success', 'text-white')}
            >
              {user.usuario}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListaUsuarios;