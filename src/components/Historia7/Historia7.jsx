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
            <Row >
                <Col className="cuerpo">
                    <Row  className="left">
                        <Col  className="foto">
                            <Image src={producto1} id="producto1"/>
                        </Col>
                        <Col  className="botoncito">
                            <Nav.Link href="/historia8"><Button id="Botone1">Add to the car</Button></Nav.Link>
                            <Nav.Link href="/historiaExtra"><Button id="Botone2">Check the price tend</Button></Nav.Link>
                        </Col>
                    </Row>
                    <Row  className="right">
                        <Image src={producto2} id="producto2"/>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Historia7;