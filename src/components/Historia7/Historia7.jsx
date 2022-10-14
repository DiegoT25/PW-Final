import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import Image from "react-bootstrap/Image";
import producto1 from "./images_producto/rtx.png";
import producto2 from "./images_producto/nvidia.png";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import "./Historia7.css";

const Historia7 =() => {
    return (
        <Container fluid className="contenedor1">
            <Row fluid>
                <Col fluid className="cuerpo">
                    <Row fluid className="left">
                        <Col fluid className="foto">
                            <Image src={producto1} id="producto1"/>
                        </Col>
                        <Col fluid className="botoncito">
                        <Nav.Link href="/historia8"><Button id="Botone">Add to the car</Button></Nav.Link>
                        </Col>
                    </Row>
                    <Row fluid className="right">
                    <Image src={producto2} id="producto2"/>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Historia7;