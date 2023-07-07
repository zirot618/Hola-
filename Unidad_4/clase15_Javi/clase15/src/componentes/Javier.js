import {Row,Button, Container} from "react-bootstrap";
import React from 'react';
import { Link } from 'react-router-dom'

function Javier (){


    return (
    <Container>
        <Row>
            <div>
                Hola mi nombre es Javier Andres Restrepo
                esta es  
                Pagina Nueva de la Tarea clase 15 :P
                <Link to= '/'>          
                    <Button >Salir
                    </Button>
                </Link>
            </div>
        </Row>
    </Container>
    
    )
}

export default Javier;