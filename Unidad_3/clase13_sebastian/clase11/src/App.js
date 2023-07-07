import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row , Col} from 'react-bootstrap';
import {guardarZapato, traerZapatos, traerMarcaZ, traerTallaZ } from './servicios/clienteaxios.js'; //nuevo


function App() {
  const [formulario, setFormulario] = useState({
    marcaZ: '',
    modeloZ: '',
    coloZ: '',
  });

  const [marcaZ, setMarcaZ] = useState({//nuevo
    marcaZ:''

  });

  const [tallaZ, setTallaZ] = useState({//nuevo
    tallaZ:''

  });


  const [informacion, setInformacion] = useState([ //nuevo
     {'marcaZ':'Nike'
    },
    {
      'marcaZ': 'Adidas'
     },
     {
      'marcaZ': 'Adidas 2'
     }

  ])

  const handleChange = (event) => {
    const temporal = { ...formulario };
    temporal[event.target.name] = event.target.value;
    setFormulario(temporal);
  }

  const handleChangeBuscar = (event) => {//nuevo
    const temporal = { ...marcaZ};
    temporal[event.target.name] = event.target.value;
    setMarcaZ(temporal);
  }

  const handleChangeBuscarTallaZ = (event) => { //nuevo
    const temporal = { ...tallaZ};
    temporal[event.target.name] = event.target.value;
    setTallaZ(temporal);
  }

  const guardarZapatos = async() => { //nuevo
    await guardarZapato(formulario)
  }

  const traerZapato = async() => {   //nuevo
    const temporal = await traerZapatos()
    setInformacion(temporal)
  }
  const traerMarcasZ = async() => {   //nuevo
    const temporal = await traerMarcaZ(marcaZ.marcaZ)
    setInformacion(temporal)
  }
  const traerTallasZ = async() => {   //nuevo
    const temporal = await traerTallaZ(tallaZ.tallaZ)
    setInformacion(temporal)
  
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


            
            <Button onClick={guardarZapatos}>
              Guardar Zapato
            </Button>
        </Form>
        {
          informacion.map((elemento) => { //nuevo y todo de ahi para abajo
            return <Row>
              <Col>
                {elemento.tallaZ}
              </Col>
              <Col>
                {elemento.marcaZ}
              </Col>
            </Row>
          })
        }
        
        <Button onClick={traerZapato}> 
          traer Zapatos
        </Button>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>MarcaZ</Form.Label>
                <Form.Control
                  onChange={handleChangeBuscar}
                  name="marcaZ"
                  placeholder="Ingrese la marca del zapato."
                />
            </Form.Group>
          </Form>
          <Button onClick={traerMarcasZ}>
            Buscar por marca
          </Button>
          <Form>
          <Form.Group className="mb-3">
            <Form.Label>tallaZ</Form.Label>
              <Form.Control
                onChange={handleChangeBuscarTallaZ}
                name="tallaZ"
                placeholder="Ingrese la talla del zapato."
              />
          </Form.Group>
          </Form>
          <Button onClick={traerTallasZ}>
            Buscar por marca y tallaZ
          </Button>
      </Container>
    </div>
  )
}

export default App;
