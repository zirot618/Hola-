import React, {useState} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  const [formulario,setFormulario]=useState({
    numero1: '',
    numero2:''

  });

  const handleChange=(event)=>{
    const temporal={...formulario};//copia objeto que esta en las llaves quitamdo la referencia 
    temporal[event.target.name]=event.target.value;
    setFormulario(temporal)
    const sumaTemp = operacionSuma(temporal.numero1,temporal.numero2)
    const multimplicacionTemp = parseFloat(temporal.numero1,temporal.numero2)
    const divisionTemp = parseFloat(temporal.numero1)/parseFloat(temporal.numero2)
    setResultado ({
      suma: sumaTemp,
      resta: operacionResta(temporal.numero1,temporal.numero2),
      multiplicacion: multimplicacionTemp,
      division: divisionTemp
  })
  
  return (
    <div className="App">
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Text className="text-muted">
                  CALCULADORA.</Form.Text>

              <Form.Group className="mb-3" >
                <Form.Label>Numero 1:</Form.Label>
                <Form.Control onChange={handleChange}name="numero1"  placeholder="Ingrese un numero" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Numero 2:</Form.Label>
                <Form.Control onChange={handleChange} name="Numero2"  placeholder="Ingrese un numero" />
              </Form.Group>

          </Col>
          <Col>
            <Form.Group className="mb-3" >
              <Form.Label>SUMA:</Form.Label>
              <Form.Control onChange={handleChange}name="Suma" placeholder="RESULTADO" />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>RESTA:</Form.Label>
              <Form.Control onChange={handleChange} name="Resta"  placeholder="RESULTADO" />
            </Form.Group>


            <Form.Group className="mb-3" >
              <Form.Label>MULTIPLICACION:</Form.Label>
              <Form.Control onChange={handleChange} name="Multiplicacion"  placeholder="RESULTADO" />
            </Form.Group>


            <Form.Group className="mb-3" >
              <Form.Label>DIVISION:</Form.Label>
              <Form.Control onChange={handleChange} name="Division"  placeholder="RESULTADO" />
            </Form.Group>
            </Col>
          </Row>
          

          

        





       
        {formulario.email}
        {formulario.password}
        <Button variant="primary" >
          Calcular
        </Button>
      </Form>
      </Container>
      </div>
    );
  }

export default App;
