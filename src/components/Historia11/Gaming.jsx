import { Col, Container,Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import pcGamer from "./imagenes/pcgamer.png";
import "./Gaming.css"

const Game = () => {
    return (
        <Container fluid className="cont">
            <Col>
                <Image src={pcGamer} id="Grafico"/>
            </Col>
            <Col className="products" id="1">
                <Row>
                    <Col className="text">Imagen</Col>
                    <Col className="text"> INTEL CORE I7-12700F 12-CORE </Col>
                    <Col className="text"> $359 </Col>
                </Row>

                <Row>
                    <Col className="text">Imagen</Col>
                    <Col className="text">16GB DDR4 DUAL CHANNEL</Col>
                    <Col> $69 </Col>
                </Row>

                <Row>
                    <Col className="text">Imagen</Col>
                    <Col className="text"> CM MASTERLIQUID ML240L </Col>
                    <Col className="text"> $89 </Col>
                </Row>

                <Row>
                    <Col className="text">Imagen</Col>
                    <Col className="text"> COOLER MASTER TD500 RGB </Col>
                    <Col className="text"> $99 </Col>
                </Row>

                <Row>
                    <Col className="text">Imagen</Col>
                    <Col className="text"> ASUS PRIME B660M-A | INTEL </Col>
                    <Col className="text"> $149 </Col>
                </Row>

                <Row>
                    <Col className="text">Imagen</Col>
                    <Col className="text"> WINDOWS 11 HOME + USB RECOVERY </Col>
                    <Col className="text"> $359 </Col>
                </Row>

            </Col>

            <Col className="products" id="2">
                <Row className="producto">
                    <Col className="text">Imagen</Col>
                    <Col className="text"> NVIDIA GEFORCE RTX 3070 8GB (VR READY) </Col>
                    <Col className="text"> $679 </Col>
                </Row>

                <Row className="producto">
                    <Col className="text">Imagen</Col>
                    <Col className="text"> 1TB NVME M.2 </Col>
                    <Col className="text"> $99 </Col>
                </Row>

                <Row className="producto">
                    <Col className="text">Imagen</Col>
                    <Col className="text"> QTY 4X CM MASTERFANS RGB </Col>
                    <Col className="text"> $29 </Col>
                </Row>

                <Row className="producto">
                    <Col className="text">Imagen</Col>
                    <Col className="text"> 700W ATX 80 PLUS GOLD </Col>
                    <Col className="text"> $79 </Col>
                </Row>

                <Row>
                    <Col className="text">Imagen</Col>
                    <Col className="text"> WIRELESS 802.11AC </Col>
                    <Col className="text"> $29 </Col>
                </Row>

                <Row>
                    <Col className="text">Imagen</Col>
                    <Col className="text"> BUILD + SETUP + TESTING + WARRANTY </Col>
                    <Col className="text"> $99 </Col>
                </Row>

            </Col>
        </Container>
    );
    }
export default Game;