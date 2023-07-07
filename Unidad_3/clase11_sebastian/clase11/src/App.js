import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import {hacerPeticion} from './servicios/clienteaxios.js';


function App() {
  const [formulario, setFormulario] = useState({
    marcaZ: '',
    modeloZ: '',
    coloZ: '',
  });

  const handleChange = (event) => {
    const temporal = { ...formulario };
    temporal[event.target.name] = event.target.value;
    setFormulario(temporal);
  };

  const guardarZapato = () => {
    hacerPeticion(formulario)
  }

  return (
    <div className="App">
      <Container>
        <Form>
          <Form.Text >Formulario con react-django</Form.Text>
            <Form.Group className="mb-3">
              <Form.Label>MarcaZ</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="marcaZ"
                placeholder="Ingrese la marca del zapato."
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>ModeloZ</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="modeloZ"
                placeholder="Ingrese el modelo del zapato"
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>colorZ</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="coloZ"
                placeholder="ingrese el color del zapato"
                  
              />
            </Form.Group>
            {formulario.marcaZ}
            {formulario.modeloZ}
            {formulario.coloZ}


            
            <Button onClick={guardarZapato}>
              Guardar Zapato
            </Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
