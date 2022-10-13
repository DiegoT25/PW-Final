import  Container from "react-bootstrap/Container"
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import './Historia10.css';
import { BsController } from "react-icons/bs";
const Historia10 = () => {
    return (
    <Container className="container">
        <Row className="fila">
            <Col className="columnas"><Button className="boton">Gaming</Button></Col>
            <Col className="columnas"><Button className="boton">Gaming</Button></Col>
            <Col className="columnas"><Button className="boton">Gaming</Button></Col>
        </Row>

        <Row className="fila">
            <Col className="columnas"><Button className="boton">Gaming</Button></Col>
            <Col className="columnas"><Button className="boton">Gaming</Button></Col>
            <Col className="columnas"><Button className="boton">Gaming</Button></Col>
            </Row>
    </Container>
    )
}

export default Historia10