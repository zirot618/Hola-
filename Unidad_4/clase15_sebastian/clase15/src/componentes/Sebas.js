
import React from 'react';
import {Row,Button, Container} from "react-bootstrap";
import { Link } from 'react-router-dom'

function Sebas (){


    return (
        <Container>
            <Row>
                <div>
                    Hola profe porfavor reviseme la unidad 2 que me baja mucho la nota jaja
                    <Link to='/'>          
                        <Button >Volver al login</Button>
                    </Link>
                </div>
            </Row>
        </Container>
    )    
}

export default Sebas;