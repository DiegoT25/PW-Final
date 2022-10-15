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
        
        <Row className="fila">
            <Col  className="columnas"><Nav.Link className="boton" href="/gaming"><Button className="boton"><BsController className="icono"/>Gaming</Button></Nav.Link></Col>
            <Col  className="columnas"><Nav.Link className="boton" href="/gaming"><Button className="boton"><BsBezier className="icono"/>Design</Button></Nav.Link></Col>
            <Col  className="columnas"><Nav.Link className="boton" href="/gaming"><Button className="boton"><BsCodeSquare className="icono"/>Coding</Button></Nav.Link></Col>
        </Row>

        <Row className="fila">
            <Col  className="columnas"><Nav.Link className="boton" href="/gaming"><Button className="boton"><BsBadge4K className="icono"/>Rendering</Button></Nav.Link></Col>
            <Col  className="columnas"><Nav.Link className="boton" href="/gaming"><Button className="boton"><BsBuilding className="icono"/>Office</Button></Nav.Link></Col>
            <Col className="columnas"><Nav.Link className="boton" href="/gaming"><Button className="boton"><BsShuffle className="icono"/>Other</Button></Nav.Link></Col>
            </Row>
    </Container>
    )
}

export default Historia10