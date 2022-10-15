import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button"
import "./Historia17.css";
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import { BsJournalBookmarkFill } from "react-icons/bs";
import { BsFillCpuFill } from "react-icons/bs";
import { BsEjectFill } from "react-icons/bs";
import { BsEject } from "react-icons/bs";
import { BsExclude } from "react-icons/bs";
import { BsHddNetworkFill } from "react-icons/bs";


const Historia17 =() =>{
    return(
        <Container fluid className="Contenedor">
                <Row className="pagina_h17">
                    <h1>Support Guides</h1>
                    <Col className="columnas"><Nav.Link href="/Historia17"><Button className="boton1"><BsJournalBookmarkFill />Build Redux Quick Start Guide</Button></Nav.Link></Col>
                    <Col className="columnas"><Nav.Link href=""><Button className="boton1"><BsFillCpuFill />System Overview</Button></Nav.Link></Col>
                    <Col className="columnas"><Nav.Link href=""><Button className="boton1"><BsEjectFill />Troubleshooting - Display</Button></Nav.Link></Col>
                    <Col className="columnas"><Nav.Link href=""><Button className="boton1"><BsEject />Reseating Guide - Memory</Button></Nav.Link></Col>
                    <Col className="columnas"><Nav.Link href=""><Button className="boton1"><BsExclude />Reseating Guide - Graphics Card</Button></Nav.Link></Col>
                    <Col className="columnas"><Nav.Link href=""><Button className="boton1"><BsHddNetworkFill />Realignment Guide - Rear I/O</Button></Nav.Link></Col>
                </Row>
        </Container>
    )
}

export default Historia17;

