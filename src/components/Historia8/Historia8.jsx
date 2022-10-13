import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import "./Historia8.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import produ1 from "./images_produ/laptop.jpg"
import produ2 from "./images_produ/corei7.png"
import produ3 from "./images_produ/geforce.png"
import produ4 from "./images_produ/tecladoo.png"
import produ5 from "./images_produ/Cooler.png"
import produ6 from "./images_produ/mouse.png"
import Image from "react-bootstrap/Image";


const Historia8 =() =>{
    return(
        <Container fluid className="contenedor">
            <Col fluid>
                <Col fluid className="encabezados">
                    <Row fluid className="encabezadol">
                        <h1>Shopping car items</h1>
                    </Row>
                    <Row fluid className="encabezador">
                        <Nav.Link href=""><Button id="Botoni">Checkout</Button></Nav.Link>
                    </Row>
                </Col>  
                <Col Fluid className="productos">
                    <Col fluid className="lista">
                        
                        <Col fluid className="foto2"> <Image src={produ1} id="produ1"/> </Col>
                        <Col fluid className="texto"><h4>Keyboard & mouse bundle</h4> </Col>
                        <Col fluid className="precio"> <h4>$39</h4></Col>
                        <Col fluid className ="basurita"> <Button id="botono"><FontAwesomeIcon id="iconolo" icon={faTrashCan} /></Button> </Col>
                    </Col>
                </Col>
                <Col fluid className="productos2">
                    <Col fluid className="lista">
                        <Col fluid className="foto2"> <Image src={produ2} id="produ2"/> </Col>
                        <Col fluid className="texto"><h4>INTEL CORE I7 - 12700F 12-CORE</h4> </Col>
                        <Col fluid className="precio"> <h4>$359</h4></Col>
                        <Col fluid className ="basurita"> <Button id="botono"><FontAwesomeIcon id="iconolo" icon={faTrashCan} /> </Button></Col>
                    </Col>
                </Col>
                <Col fluid className="productos3">
                    <Col fluid className="lista">
                        <Col fluid className="foto2"> <Image src={produ3} id="produ3"/> </Col>
                        <Col fluid className="texto"><h4>NVIDI GEFORCE RTX 3070 8GB</h4> </Col>
                        <Col fluid className="precio"> <h4>$679</h4></Col>
                        <Col fluid className ="basurita"> <Button id="botono"><FontAwesomeIcon id="iconolo" icon={faTrashCan} /></Button> </Col>
                    </Col>
                </Col>
                <Col fluid className="productos4">
                    <Col fluid className="lista">
                        <Col fluid className="foto2"> <Image src={produ4} id="produ4"/> </Col>
                        <Col fluid className="texto"><h4>1TB NVME M.2</h4> </Col>
                        <Col fluid className="precio"> <h4>$99</h4></Col>
                        <Col fluid className ="basurita"> <Button id="botono"><FontAwesomeIcon id="iconolo" icon={faTrashCan} /></Button> </Col>
                    </Col>
                </Col>
                <Col fluid className="productos5">
                    <Col fluid className="lista">
                        <Col fluid className="foto2"> <Image src={produ5} id="produ5"/> </Col>
                        <Col fluid className="texto"><h4>COOLER MASTER TD500 RGB</h4> </Col>
                        <Col fluid className="precio"> <h4>$99</h4></Col>
                        <Col fluid className ="basurita"> <Button id="botono"><FontAwesomeIcon id="iconolo" icon={faTrashCan} /></Button>  </Col>
                    </Col>
                </Col>
                <Col fluid className="productos6">
                    <Col fluid className="lista">
                        <Col fluid className="foto2"> <Image src={produ6} id="produ6"/> </Col>
                        <Col fluid className="texto"><h4>BUILD + SETUP + TESTING</h4> </Col>
                        <Col fluid className="precio"> <h4>$99</h4></Col>
                        <Col fluid className ="basurita"> <Button id="botono"><FontAwesomeIcon id="iconolo" icon={faTrashCan} /></Button> </Col>
                    </Col>
                </Col>
            </Col>
        </Container>
    )
}

export default Historia8;