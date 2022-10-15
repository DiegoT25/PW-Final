import  Container from "react-bootstrap/Container"
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import './Historia10.css';
import { BsController } from "react-icons/bs";
import { Nav } from "react-bootstrap";
const Historia10 = () => {
    return (
    <Container fluid className="cont">
        
        <Row className="fila">
            <Col  className="columnas"><Nav.Link className="boton" href="/gaming"><Button className="boton"><BsController className="icono"/>Gaming</Button></Nav.Link></Col>
            <Col  className="columnas"><Nav.Link className="boton" href="/gaming"><Button className="boton"><BsController className="icono"/>Design</Button></Nav.Link></Col>
            <Col  className="columnas"><Nav.Link className="boton" href="/gaming"><Button className="boton"><BsController className="icono"/>Coding</Button></Nav.Link></Col>
        </Row>

        <Row className="fila">
            <Col  className="columnas"><Nav.Link className="boton" href="/gaming"><Button className="boton"><BsController className="icono"/>Rendering</Button></Nav.Link></Col>
            <Col  className="columnas"><Nav.Link className="boton" href="/gaming"><Button className="boton"><BsController className="icono"/>Office</Button></Nav.Link></Col>
            <Col className="columnas"><Nav.Link className="boton" href="/gaming"><Button className="boton"><BsController className="icono"/>Other</Button></Nav.Link></Col>
            </Row>
    </Container>
    )
}

export default Historia10