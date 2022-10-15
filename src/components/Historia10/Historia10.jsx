import  Container from "react-bootstrap/Container"
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import './Historia10.css';
import { BsController, BsBezier,BsCodeSquare, BsBadge4K, BsBuilding, BsShuffle } from "react-icons/bs";
import { Nav } from "react-bootstrap";
const Historia10 = () => {
    return (
    <Container fluid className="cont">
        
        <Row className="fila10">
            <Col  className="columnas"><Nav.Link className="boton10" href="/historia11"><Button className="boton_10"><BsController className="icono" id="icono_10"/>Gaming</Button></Nav.Link></Col>
            <Col  className="columnas"><Nav.Link className="boton10" href="/historia11"><Button className="boton_10"><BsBezier className="icono" id="icono_10"/>Design</Button></Nav.Link></Col>
            <Col  className="columnas"><Nav.Link className="boton10" href="/historia11"><Button className="boton_10"><BsCodeSquare className="icono" id="icono_10"/>Coding</Button></Nav.Link></Col>
        </Row>

        <Row className="fila10">
            <Col><Nav.Link className="boton10" href="/historia11"><Button className="boton_10"><BsBadge4K className="icono" id="icono_10"/>Rendering</Button></Nav.Link></Col>
            <Col><Nav.Link className="boton10" href="/historia11"><Button className="boton_10"><BsBuilding className="icono" id="icono_10"/>Office</Button></Nav.Link></Col>
            <Col><Nav.Link className="boton10" href="/historia11"><Button className="boton_10"><BsShuffle className="icono" id="icono_10"/>Other</Button></Nav.Link></Col>
            </Row>
    </Container>
    )
}

export default Historia10