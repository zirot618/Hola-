import React, { useState, useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'
import {  Alert,  Container,  Row,  Col,  Button} from "react-bootstrap";

function Inicio() {
  const [sesion, setSesion] = useState({
    usuario: "",
  });



  const [mensajes, setMensajes] = useState({
    mensaje: "No se ha iniciado sesion",
    error: false,
  });

  useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    if (!!usuario) {
      setSesion({ usuario: usuario });
      setMensajes({ mensaje: "Bienvenido a la otra pagina " + usuario, error: false });

    } else {
      setSesion({ usuario: ''});
      setMensajes({ mensaje: "No ha iniciado sesion " ,error: true });
  }
  }
  , [setMensajes, setSesion]);



  
  const cerrarSesion = () => {
    const usuario = localStorage.getItem("usuario");
    localStorage.removeItem("usuario");
    setSesion({ usuario: "" });
    setMensajes({ mensaje: "Hasta luego " + usuario, error: false });
  };

  return (
    <Container>
      <Row>
        <Col>         
              {sesion.usuario !== "/" ? 
              <Link to= '/'>          
                    <Button onClick={cerrarSesion}>Cerrar Sesion</Button>
              </Link>
              : null}
        </Col>
        <Col> 
              <Link to ='/sebas'>
                <Button >Otra pagina</Button>
              </Link>
        </Col>
        <Col>
          <Alert variant={mensajes.error ? "danger" : "primary"}>
            {mensajes.mensaje}
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default Inicio;
