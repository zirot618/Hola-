import React, { useState, useEffect, useRef } from "react";
import javiImagen from "../imagenes/javi.png";
import { hacerPeticionChats, obtenerMensajesChats } from '../servicios/clienteAxiosChats';

function Chat({ usuarioSeleccionado, usuarioLogeado, cerrarSesion }) {
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);
  const [mensajesRecibidos, setMensajesRecibidos] = useState([]);
  const mensajesRef = useRef(null);

// definimos las constantes con los argumentos traidos desde App usuarioSeleccionado, usuarioLogeado, cerrarSesion y los igualamos a los parametros que necesitamos en la estructura de los mensajes(informacion)
//Despues llamamos de clienteAxiosChats la funcion hacerPeticionChats pasandole informacion por lo que de esta manera estamos mandando un remitente, destinatario, y el contenido del mensaje de esta forma filtraremos dependiendo el nombre de usuario del destinatario
  const enviarMensaje = async (mensaje) => {
    try {
      const remitente = usuarioLogeado;
      const destinatario = usuarioSeleccionado;
      const contenido = mensaje;
  
      const informacion = {
        remitente: remitente,
        destinatario: destinatario,
        contenido: contenido
      };
  
      await hacerPeticionChats(informacion);
    } catch (error) {
      console.log(error);
    }
  };
//Aqui obtenemos los mensajes llamando la funcion ObtenerMensajesChats, configurada con un intervalo que ejecuta el llamado de mensajes cada 100ms "milisegundos" de esta forma no tenenmos que recargar la pagina para ver los mensajes recibidos.
  useEffect(() => {
    const obtenerMensajes = async () => {
      try {
        const respuesta = await obtenerMensajesChats();
        setMensajes(respuesta);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerMensajes();

    const intervalo = setInterval(() => {
      obtenerMensajes();
    }, 100);

    return () => {
      clearInterval(intervalo);
    };
  }, []);

//Aqui filtramos los mensajes en función del usuario seleccionado y del usuario logeado. Actualizamos el estado mensajesRecibidos con los mensajes filtrados de esta manera evitamos que los mensajes los pueda ver cualquier usuario desde cualquier chat, ademas nos desplazamos automaticamente hacia abajo el scroll cuando hay un nuevo mensaje en pantalla.
  useEffect(() => {
    if (usuarioSeleccionado) {
      const mensajesFiltrados = mensajes.filter(
        mensaje =>
          (mensaje.remitente === usuarioLogeado && mensaje.destinatario === usuarioSeleccionado) ||
          (mensaje.remitente === usuarioSeleccionado && mensaje.destinatario === usuarioLogeado)
      );
      setMensajesRecibidos(mensajesFiltrados);

      // Desplazar hacia abajo en caso de mensaje 
      mensajesRef.current.scrollTop = mensajesRef.current.scrollHeight;
    }
  }, [usuarioSeleccionado, usuarioLogeado, mensajes]);


//Aqui renderizamos el chat y los mensajes mostrando en pantalla el nombre del usuario, la foto y el contenido del mensaje aqui tambien tenemos el boton de cerrado de sesion 
  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "50px",
        width: "750px",
        maxHeight: "650px",
        overflow: "auto",
      }}
    >
      {usuarioSeleccionado && (
        <div className="text-center mb-3">
          <h3>{usuarioSeleccionado}</h3>
        </div>
      )}

      <div className="container mt-3">
        <div className="card mt-3 mb-3 shadow border-0" id="contenido-chat" ref={mensajesRef}>
          <div className="card-body">
            {mensajesRecibidos.map((mensaje, index) => (
              <div
                key={index}
                className={`d-flex p-3 ${
                  mensaje.remitente === usuarioLogeado
                    ? "justify-content-end"
                    : "justify-content-start"
                }`}
              >
                <div
                  className={`card mb-3 shadow border-1 ${
                    mensaje.remitente === usuarioLogeado
                      ? "bg-success bg-opacity-25"
                      : "bg-light"
                  }`}
                >
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="profile-image">
                        <img src={javiImagen} alt="Imagen de perfil" />
                      </div>
                      <div className="mensaje-texto">
                        <small className="">
                          {mensaje.remitente}: {mensaje.contenido}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card shadow border-0">
          <div className="card-body">
            <h5 className="text-center mb-2">Chat</h5>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                enviarMensaje(mensaje);
                setMensaje("");
              }}
            >
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese un Mensaje..."
                  onChange={(e) => setMensaje(e.target.value)}
                  value={mensaje}
                />
                <button className="btn btn-success mx-3" type="submit">
                  Enviar
                </button>
              </div>
            </form>
            <div className="text-center mt-3">
              <button className="btn btn-danger" onClick={cerrarSesion}>
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
