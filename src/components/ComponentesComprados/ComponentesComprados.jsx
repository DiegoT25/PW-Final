import { Container } from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";
import './ComponentesComprados.css';
import produ1 from "./images_produ/laptop.jpg"
import produ2 from "./images_produ/corei7.png"
import produ3 from "./images_produ/geforce.png"
import produ4 from "./images_produ/tecladoo.png"
import produ5 from "./images_produ/Cooler.png"
import produ6 from "./images_produ/mouse.png"
import Image from "react-bootstrap/Image";
const Historia14 = () => {
    return (
        <Container xs={1} md={1} fluid className="contenedor_14">
                <Col>
                    <Row className="productos_h14">
                        <Row className="lista">
                            <Col className="foto2"> <Image src={produ1} id="produ1"/> </Col>
                            <Col className="text"><h4>Keyboard & mouse bundle</h4> </Col>
                            <Col className="precio"> <h4>$39</h4></Col>
                            <Col  className="fecha">10/12/2022</Col>
                        </Row>
                    </Row>
                    <Row className="productos2_h14">
                        <Row className="lista">
                            <Col  className="foto2"> <Image src={produ2} id="produ2"/> </Col>
                            <Col className="text"><h4>INTEL CORE I7 - 12700F 12-CORE</h4> </Col>
                            <Col  className="precio"> <h4>$359</h4></Col>
                            <Col  className="fecha">10/12/2022</Col>
                        </Row>
                    </Row>
                    <Row className="productos3_h14">
                        <Row  className="lista">
                            <Col  className="foto2"> <Image src={produ3} id="produ3"/> </Col>
                            <Col  className="text"><h4>NVIDIA GEFORCE RTX 3070 8GB</h4> </Col>
                            <Col  className="precio"> <h4>$679</h4></Col>
                            <Col  className="fecha">10/12/2022</Col>
                        </Row>
                    </Row>
                    <Row className="productos4_h14">
                        <Row className="lista">
                            <Col  className="foto2"> <Image src={produ4} id="produ4"/> </Col>
                            <Col  className="text"><h4>1TB NVME M.2</h4> </Col>
                            <Col  className="precio"> <h4>$99</h4></Col>
                            <Col  className="fecha">10/12/2022</Col>
                      </Row>
                    </Row>
                    <Row className="productos5_h14">
                        <Row className="lista">
                            <Col  className="foto2"> <Image src={produ5} id="produ5"/> </Col>
                            <Col  className="text"><h4>COOLER MASTER TD500 RGB</h4> </Col>
                            <Col className="precio"> <h4>$99</h4></Col>
                            <Col  className="fecha">10/12/2022</Col>
                        </Row>
                    </Row>
                    <Row className="productos6_h14">
                        <Row  className="lista">
                            <Col  className="foto2"> <Image src={produ6} id="produ6"/> </Col>
                            <Col  className="text"><h4>BUILD + SETUP + TESTING</h4> </Col>
                            <Col  className="precio"> <h4>$99</h4></Col>
                            <Col  className="fecha">10/12/2022</Col>
                            
                        </Row>
                    </Row>
                </Col>
        </Container>
    )
}
export default Historia14;