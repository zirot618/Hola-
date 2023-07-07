import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import {hacerPeticion, traerTodo, traerMarca, traerColor} from './servicios/clienteaxios.js';



function App() {
  const [formulario, setFormulario] = useState({
    marca: '',
    color: '',
    cilindraje: '',
  });

  const [marca, setMarca] = useState({
    marca: ''
  });

  const [color, setColor] = useState({
    color: '',
  });

  const [informacion, setInformacion] = useState([
    {
      'titulo': '...'
    }, 
    {  
      'titulo': '...'
    }
  ])

  const handleChange = (event) => {
    const temporal = { ...formulario };
    temporal[event.target.name] = event.target.value;
    setFormulario(temporal);
  };

  const handleChangeBuscaMarca = (event) => {
    const temporal = { ...marca };
    temporal[event.target.name] = event.target.value;
    setMarca(temporal);
  };

  const handleChangeBuscaColor = (event) => {
    const temporal = { ...color };
    temporal[event.target.name] = event.target.value;
    setColor(temporal);
  };

  const guardarmoto = async () => {
    await hacerPeticion(formulario)
    traeTodo()
  }

  const traeTodo =  async() => {
    const temporal = await traerTodo()
    setInformacion(temporal)
  }

  const traerMarca2 =  async() => {
    const temporal = await traerMarca(marca.marca)
    setInformacion(temporal)
  }

  const traerColor2 =  async() => {
    const temporal = await traerColor(marca.marca, color.color)
    setInformacion(temporal)
  }


  return (
    <div className="App">
      <Container>
        <Form>
          <Form.Text >Formulario de Guardar Motocicleta</Form.Text>
            <Form.Group className="mb-3">
              <Form.Label>marca</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="marca"
                placeholder="Ingrese la marca de la moto"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>color</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="color"
                placeholder="Ingrese el color de la moto"
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>cilindraje</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="cilindraje"
                placeholder="ingrese el cilindraje de la moto"
                  
              />
            </Form.Group>
            <Button onClick={guardarmoto}>
              Guardar Moto
            </Button>
        </Form>
        {
          informacion.map((elemento) => {
          return <Row>
              <Col>
                {elemento.marca}
              </Col>
              <Col>
                {elemento.color}
              </Col>
              <Col>
                {elemento.cilindraje}
              </Col>
            </Row>
          })
        }
        <Button onClick={traeTodo}>
            traer todos
        </Button>
        <Form>
            <Form.Group className="mb-3">
              <Form.Label>Marca</Form.Label>
              <Form.Control
                onChange={handleChangeBuscaMarca}
                name="marca"
                placeholder="Ingrese la marca de la motocicleta"
              />
          </Form.Group>
        </Form>
        <Button onClick={traerMarca2}>
          Buscar Marca
        </Button>
        <Form>
            <Form.Group className="mb-3">
              <Form.Label>Color</Form.Label>
              <Form.Control
                onChange={handleChangeBuscaColor}
                name="color"
                placeholder="Ingrese el color de la motocicleta"
              />
          </Form.Group>
        </Form>
        <Button onClick={traerColor2}>
          Buscar el Color
        </Button>
      </Container>
    </div>
  );
}

export default App;