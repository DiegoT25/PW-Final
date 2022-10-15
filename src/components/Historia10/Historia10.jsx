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
            <Col  className="columnas"><Nav.Link className="boton" href="/historia11"><Button className="boton"><BsController className="icono" id="icono"/>Gaming</Button></Nav.Link></Col>
            <Col  className="columnas"><Nav.Link className="boton" href="/historia11"><Button className="boton"><BsBezier className="icono" id="icono"/>Design</Button></Nav.Link></Col>
            <Col  className="columnas"><Nav.Link className="boton" href="/historia11"><Button className="boton"><BsCodeSquare className="icono" id="icono"/>Coding</Button></Nav.Link></Col>
        </Row>

        <Row className="fila10">
            <Col><Nav.Link className="boton" href="/historia11"><Button className="boton"><BsBadge4K className="icono" id="icono"/>Rendering</Button></Nav.Link></Col>
            <Col><Nav.Link className="boton" href="/historia11"><Button className="boton"><BsBuilding className="icono" id="icono"/>Office</Button></Nav.Link></Col>
            <Col><Nav.Link className="boton" href="/historia11"><Button className="boton"><BsShuffle className="icono" id="icono"/>Other</Button></Nav.Link></Col>
            </Row>
    </Container>
    )
}

export default Historia10