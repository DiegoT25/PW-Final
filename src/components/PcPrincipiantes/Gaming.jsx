import { Col, Container, Row} from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import pcGamer from "./imagenes/pcgamer.png";
import "./Gaming.css"
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import cooler from "./imagenes/cooler.png";
import cube from "./imagenes/cube.png";
import fan from "./imagenes/fan.png";
import gpu from "./imagenes/gpu.png";
import i7 from "./imagenes/i7.png";
import motherboard from "./imagenes/motherboard.png";
import psu from "./imagenes/psu.png";
import ram from "./imagenes/ram.png";
import ssd from "./imagenes/ssd.png";
import wifi from "./imagenes/wifi.png";
import windows from "./imagenes/windows.png";


const Game = () => {
    return (
        <Container fluid className="cont_layout1">
           <Row> 
            <Row>
            <Col className="encabezado11">
                    <h1>What do you need?</h1>
                </Col>
                <Col className="boton_back">
                    <Nav.Link href="/historia10"><Button id="boton_back">{'<'}Back</Button></Nav.Link>
                </Col>
                <Col className="boton_checkout_h11">
                    <Nav.Link href="/historia13"><Button id="botoni_h11"><FontAwesomeIcon icon={faCartShopping} /> &nbsp;&nbsp;Checkout</Button></Nav.Link>
                </Col>
            </Row>
        
            <Col sm={4} >
                <Image src={pcGamer} id="Grafico"/>
            </Col>
            
            <Col>
                <Row>
                <Col className="products11a">
                    <Row className="lista11">
                        <Col className="text"><Image src={i7} id="icono11"/></Col>
                        <Col className="text"> INTEL CORE I7-12700F 12-CORE </Col>
                        <Col className="text"> $359 </Col>
                    </Row>               
            

            
                    <Row className="lista11">
                        <Col className="text"><Image src={ram} id="icono11"/></Col>
                        <Col className="text">16GB DDR4 DUAL CHANNEL</Col>
                        <Col className="text"> $69 </Col>
                    </Row>
                

            
                <Row className="lista11">
                    <Col className="text"><Image src={cooler} id="icono11"/></Col>
                    <Col className="text"> CM MASTERLIQUID ML240L </Col>
                    <Col className="text"> $89 </Col>
                </Row>
                

            
                <Row className="lista11">
                    <Col className="text"><Image src={pcGamer} id="icono11"/></Col>
                    <Col className="text"> COOLER MASTER TD500 RGB </Col>
                    <Col className="text"> $99 </Col>
                </Row>
                

            
                <Row className="lista11">
                    <Col className="text"><Image src={motherboard} id="icono11"/></Col>
                    <Col className="text"> ASUS PRIME B660M-A | INTEL </Col>
                    <Col className="text"> $149 </Col>
                </Row>
                

            
                <Row className="lista11">
                    <Col className="text"><Image src={windows} id="icono11"/></Col>
                    <Col className="text"> WINDOWS 11 HOME + USB RECOVERY </Col>
                    <Col className="text"> $359 </Col>
                </Row>
                </Col>




            
                <Col className="products11b" >
                <Row className="lista11">
                    <Col className="text"><Image src={gpu} id="icono11"/></Col>
                    <Col className="text"> NVIDIA GEFORCE RTX 3070 8GB (VR READY) </Col>
                    <Col className="text"> $679 </Col>
                </Row>
                

                <Row className="lista11">
                    <Col className="text"><Image src={ssd} id="icono11"/></Col>
                    <Col className="text"> 1TB NVME M.2 </Col>
                    <Col className="text"> $99 </Col>
                </Row>
                

                <Row className="lista11">
                    <Col className="text"><Image src={fan} id="icono11"/></Col>
                    <Col className="text"> QTY 4X CM MASTERFANS RGB </Col>
                    <Col className="text"> $29 </Col>
                </Row>
                


                <Row className="lista11">
                    <Col className="text"><Image src={psu} id="icono11"/></Col>
                    <Col className="text"> 700W ATX 80 PLUS GOLD </Col>
                    <Col className="text"> $79 </Col>
                </Row>
                

            
                <Row className="lista11">
                    <Col className="text"><Image src={wifi} id="icono11"/></Col>
                    <Col className="text"> WIRELESS 802.11AC </Col>
                    <Col className="text"> $29 </Col>
                </Row>
                

            
                <Row className="lista11">
                    <Col className="text"><Image src={cube} id="icono11"/></Col>
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