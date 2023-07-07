import './App.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
    const [formulario, setFormulario] = useState({
      email: '',
      password: ''
    });

    const handleChange = (event) => {
      const temporal = {...formulario}
      temporal[event.target.name] =event.target.value
      setFormulario(temporal)
    }
  return (
    <div className="App">
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Text className="text-muted">
                Calculadora JavaScript.</Form.Text>
                <Form.Group className="mb-3">

                
                  <Form.Label>numero 1</Form.Label>
                  <Form.Control onChange={handleChange} name="numero 1" type="numero" placeholder="Ingrese un numero" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Numero 2</Form.Label>
                  <Form.Control onChange={handleChange} name="numero 2" type="numero" placeholder="Ingrese un numero" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Resultado</Form.Label>
                  <Form.Control onChange={handleChange} name="Restultado" type="numero" placeholder="" />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Suma</Form.Label>
                  <Form.Control onChange={handleChange} name="Suma" type="numero" placeholder="Sume" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Resta</Form.Label>
                  <Form.Control onChange={handleChange} name="Resta" type="numero" placeholder="Reste" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Multiplicacion</Form.Label>
                  <Form.Control onChange={handleChange} name="Multiplicacion" type="numero" placeholder="Multiplique" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Division</Form.Label>
                  <Form.Control onChange={handleChange} name="Division" type="numero" placeholder="Divida" />
                </Form.Group>



              
              

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              {formulario.email}
              {formulario.password}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
        </Container>
        </div>
        );
}
export default App;
