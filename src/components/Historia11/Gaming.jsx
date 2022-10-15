import { Col, Container, Row} from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import pcGamer from "./imagenes/pcgamer.png";
import "./Gaming.css"
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"


const Game = () => {
    return (
        <Container fluid className="cont_layout1">
            <Row className='fila11a1'>
                <Col>
                <p>Your optimized build!</p>
                </Col>
                <Col>
                <Col className="boton_checkout">
                    <Nav.Link href="/historia13"><Button id="botoni"><FontAwesomeIcon icon={faCartShopping} /> &nbsp;&nbsp;Checkout</Button></Nav.Link>
                </Col>

                </Col>
            </Row>
            <Row>
            <Col sm={4} >
                <Image src={pcGamer} id="Grafico"/>
            </Col>
            
            <Col>
                <Row>
                <Col className="products11a">
                    <Row className="lista">
                        <Col className="text">Imagen</Col>
                        <Col className="text"> INTEL CORE I7-12700F 12-CORE </Col>
                        <Col className="text"> $359 </Col>
                    </Row>               
            

            
                    <Row className="lista">
                        <Col className="text">Imagen</Col>
                        <Col className="text">16GB DDR4 DUAL CHANNEL</Col>
                        <Col className="text"> $69 </Col>
                    </Row>
                

            
                <Row className="lista">
                    <Col className="text">Imagen</Col>
                    <Col className="text"> CM MASTERLIQUID ML240L </Col>
                    <Col className="text"> $89 </Col>
                </Row>
                

            
                <Row className="lista">
                    <Col className="text">Imagen</Col>
                    <Col className="text"> COOLER MASTER TD500 RGB </Col>
                    <Col className="text"> $99 </Col>
                </Row>
                

            
                <Row className="lista">
                    <Col className="text">Imagen</Col>
                    <Col className="text"> ASUS PRIME B660M-A | INTEL </Col>
                    <Col className="text"> $149 </Col>
                </Row>
                

            
                <Row className="lista">
                    <Col className="text">Imagen</Col>
                    <Col className="text"> WINDOWS 11 HOME + USB RECOVERY </Col>
                    <Col className="text"> $359 </Col>
                </Row>
                </Col>




            
                <Col className="products11b" >
                <Row className="lista">
                    <Col className="text">Imagen</Col>
                    <Col className="text"> NVIDIA GEFORCE RTX 3070 8GB (VR READY) </Col>
                    <Col className="text"> $679 </Col>
                </Row>
                

                <Row className="lista">
                    <Col className="text">Imagen</Col>
                    <Col className="text"> 1TB NVME M.2 </Col>
                    <Col className="text"> $99 </Col>
                </Row>
                

                <Row className="lista">
                    <Col className="text">Imagen</Col>
                    <Col className="text"> QTY 4X CM MASTERFANS RGB </Col>
                    <Col className="text"> $29 </Col>
                </Row>
                


                <Row className="lista">
                    <Col className="text">Imagen</Col>
                    <Col className="text"> 700W ATX 80 PLUS GOLD </Col>
                    <Col className="text"> $79 </Col>
                </Row>
                

            
                <Row className="lista">
                    <Col className="text">Imagen</Col>
                    <Col className="text"> WIRELESS 802.11AC </Col>
                    <Col className="text"> $29 </Col>
                </Row>
                

            
                <Row className="lista">
                    <Col className="text">Imagen</Col>
                    <Col className="text"> BUILD + SETUP + TESTING + WARRANTY </Col>
                    <Col className="text"> $99 </Col>
                </Row>
                </Col>
                </Row>
            </Col>
            </Row>
        </Container>
    );
    }
export default Game;