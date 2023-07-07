import React, { useState, useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'
import {
  Alert,
  Container,
  Row,
  Col,
  FormGroup,
  Form,
  Button,
} from "react-bootstrap";

function FormularioLogin() {
  const [sesion, setSesion] = useState({
    usuario: "",
  });

  const [formulario, setFormulario] = useState({
    usuario: "",
    contrasenia: "",
  });

  const [mensajes, setMensajes] = useState({
    mensaje: "Por favor Ingrese un usuario :)",
    error: false,
  });

  useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    if (!!usuario) {
      setSesion({ usuario: usuario });
      setMensajes({ mensaje: "Bienvenido " + usuario, error: false });
    }
  }, [setMensajes, setSesion]);

  const handleChange = (event) => {
    const temporal = { ...formulario };
    temporal[event.target.name] = event.target.value;
    setFormulario(temporal);
  };

  const iniciarSesion = () => {
    if (!!formulario.usuario && !!formulario.contrasenia) {
      if (formulario.usuario === 'sebas' && formulario.contrasenia === '123') {
        localStorage.setItem("usuario", formulario.usuario);
        setSesion({ usuario: formulario.usuario });
        setMensajes({
          mensaje: "Bienvenido " + formulario.usuario,
          error: false,
        });
      } else {
        setMensajes({
          mensaje: "usuario o contraseña incorrectos",
          error: true,
        });
      }
    } else {
      setMensajes({
        mensaje: "debe ingresar usuario y contraseña",
        error: true,
      });
    }
  };

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
          <Form>
            <FormGroup>
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                name="usuario"
                onChange={handleChange}
                placeholder="ingrese el usuario"
              />
            </FormGroup>
            <FormGroup>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                name="contrasenia"
                type="password"
                onChange={handleChange}
                placeholder="ingrese la contraseña"
              />
            </FormGroup>
          </Form>
          <Row>
            <Col>
              <Button onClick={iniciarSesion}>Iniciar Sesion</Button>
            </Col>
            <Col>
              {sesion.usuario !== "" ? (
                <Link to='/inicio'>
                    <Button >
                        Avanzar
                    </Button>
                </Link>
              ) : null}
            </Col>
            <Col>
              {sesion.usuario !== "" ? (
                <Button onClick={cerrarSesion}>Cerrar Sesion</Button>
              ) : null}
            </Col>
          </Row>
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

export default FormularioLogin;
