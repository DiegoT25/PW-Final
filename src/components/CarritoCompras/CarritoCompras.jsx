import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import "./CarritoCompras.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import produ1 from "./images_produ/laptop.jpg"
import produ2 from "./images_produ/corei7.png"
import produ3 from "./images_produ/geforce.png"
import produ4 from "./images_produ/tecladoo.png"
import produ5 from "./images_produ/Cooler.png"
import produ6 from "./images_produ/mouse.png"
import Image from "react-bootstrap/Image";
import productoApi from "../../api/producto";

function Ocultar(){
    document.getElementById("productos").style.opacity="1";
}
const comprar = async () => {
    const result = await productoApi.create({producto_id:'981ef8b', categoria_id:'teclado' ,nombre:'teclado gamer',precio:'30$' ,descripcion:'teclado color negro'});
    console.log(result);
}
const CarritoCompras =() =>{
    return(

        <Container fluid className="contenedor">
            <Row>
                <Col className="encabezadol">
                    <h1>Shopping car items</h1>
                </Col>
                <Col className="boton_checkout_h8">
                    <Nav.Link href="/historia13"><Button id="botoni_h8" onclick= {comprar}><FontAwesomeIcon icon={faCartShopping} /> &nbsp;&nbsp;Checkout</Button></Nav.Link>
                </Col>
                <Row className="productos">
                    <Row className="lista_h8">
                        <Col className="foto2"> <Image src={produ1} id="produ1"/> </Col>
                        <Col  className="texto"><h4 className="h4_gian">Keyboard & mouse bundle</h4> </Col>
                        <Col  className="precio"> <h4 className="h4_gian">$39</h4></Col>
                        <Col  className ="basurita"> <Button id="botono" onclick="Ocultar()"><FontAwesomeIcon id="iconolo" icon={faTrashCan} /></Button> </Col>
                    </Row>
                </Row>
                <Row  className="productos">
                    <Row  className="lista_h8">
                        <Col  className="foto2"> <Image src={produ2} id="produ2"/> </Col>
                        <Col  className="texto"><h4 className="h4_gian">INTEL CORE I7 - 12700F 12-CORE</h4> </Col>
                        <Col  className="precio"> <h4 className="h4_gian">$359</h4></Col>
                        <Col  className ="basurita"> <Button id="botono" onclick="Ocultar()"><FontAwesomeIcon id="iconolo" icon={faTrashCan} /> </Button></Col>
                    </Row>
                </Row>
                <Row  className="productos">
                    <Row  className="lista_h8">
                        <Col  className="foto2"> <Image src={produ3} id="produ3"/> </Col>
                        <Col  className="texto"><h4 className="h4_gian">NVIDIA GEFORCE RTX 3070 8GB</h4> </Col>
                        <Col  className="precio"> <h4 className="h4_gian">$679</h4></Col>
                        <Col  className ="basurita"> <Button id="botono" onclick="Ocultar()"><FontAwesomeIcon id="iconolo" icon={faTrashCan} /></Button> </Col>
                    </Row>
                </Row>
                <Row  className="productos">
                    <Row  className="lista_h8">
                        <Col  className="foto2"> <Image src={produ4} id="produ4"/> </Col>
                        <Col  className="texto"><h4 className="h4_gian">1TB NVME M.2</h4> </Col>
                        <Col  className="precio" > <h4 className="h4_gian">$99</h4></Col>
                        <Col  className ="basurita"> <Button id="botono" onclick="Ocultar()"><FontAwesomeIcon id="iconolo" icon={faTrashCan} /></Button> </Col>
                    </Row>
                </Row>
                <Row  className="productos">
                    <Row  className="lista_h8">
                        <Col  className="foto2"> <Image src={produ5} id="produ5"/> </Col>
                        <Col  className="texto"><h4 className="h4_gian">COOLER MASTER TD500 RGB</h4> </Col>
                        <Col  className="precio"> <h4 className="h4_gian">$99</h4></Col>
                        <Col  className ="basurita"> <Button id="botono" onclick="Ocultar()"><FontAwesomeIcon id="iconolo" icon={faTrashCan} /></Button>  </Col>
                    </Row>
                </Row>
                <Row  className="productos">
                    <Row className="lista_h8">
                        <Col  className="foto2"> <Image src={produ6} id="produ6"/> </Col>
                        <Col  className="texto"><h4 className="h4_gian">BUILD + SETUP + TESTING</h4> </Col>
                        <Col  className="precio"> <h4 className="h4_gian">$99</h4></Col>
                        <Col  className ="basurita"> <Button id="botono" onclick="Ocultar()"><FontAwesomeIcon id="iconolo" icon={faTrashCan} /></Button> </Col>
                    </Row>
                </Row>
            </Row>
        </Container>
    )
}

export default CarritoCompras;