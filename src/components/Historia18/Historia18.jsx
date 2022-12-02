import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button"
import "./Historia18.css";
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import { BsShieldShaded } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { BsTvFill } from "react-icons/bs";
import { BsCashCoin } from "react-icons/bs";
import { BsBagCheckFill } from "react-icons/bs";
import { BsBackspaceReverseFill } from "react-icons/bs";
import { BsCartPlus } from "react-icons/bs";





const Historia18 =() =>{
    return(
        <Container fluid className="Contenedor">
                <Row className="fila_h18">
                    <h1 >Common Questions</h1>
                    <Col className="columnas"><Nav.Link href="/Historia17"><Button className="boton2"><BsCartPlus />Refund Policy</Button></Nav.Link></Col>
                    <Col className="columnas"><Nav.Link href=""><Button className="boton2"><BsBackspaceReverseFill />Cancellation Policy</Button></Nav.Link></Col>
                    <Col className="columnas"><Nav.Link href=""><Button className="boton2"><BsShieldShaded />Warranty Services</Button></Nav.Link></Col>
                    <Col className="columnas"><Nav.Link href=""><Button className="boton2"><BsCashCoin />Financing</Button></Nav.Link></Col>
                    <Col className="columnas"><Nav.Link href=""><Button className="boton2"><BsBagCheckFill />How long will it take for my PC to arrive?</Button></Nav.Link></Col>
                    <Col className="columnas"><Nav.Link href=""><Button className="boton2"><BsTruck />Do you ship internationally?</Button></Nav.Link></Col>
                    <Col className="columnas"><Nav.Link href=""><Button className="boton2"><BsTvFill />Do you setup and install Windows, drivers,etc?</Button></Nav.Link></Col>
                </Row>
        </Container>
    )
}

export default Historia18;

