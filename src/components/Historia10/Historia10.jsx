import  Container from "react-bootstrap/Container"
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import './Historia10.css';
import { BsController } from "react-icons/bs";
const Historia10 = () => {
    return (
    <Container fluid className="cont">
        <Row className="fila">
            <Col className="columnas"><Button className="boton"><BsController className="icono"/>Gaming</Button></Col>
            <Col className="columnas"><Button className="boton">Design</Button></Col>
            <Col className="columnas"><Button className="boton">Coding</Button></Col>
        </Row>

        <Row className="fila">
            <Col className="columnas"><Button className="boton">Rendering</Button></Col>
            <Col className="columnas"><Button className="boton">Office</Button></Col>
            <Col className="columnas"><Button className="boton">Other</Button></Col>
            </Row>
    </Container>
    )
}

export default Historia10