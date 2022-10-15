import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import Image from "react-bootstrap/Image";
import producto1 from "./images_producto/rtx.png";
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
                            <Nav.Link href="/historiaExtra"><Button id="Botone2">Check the price trend</Button></Nav.Link>
                        </Col>
                    </Row>
                    <Row fluid className="right">
                        <Row>
                            <h3 className="nvidiagtx"><b>NVIDIA GEFORCE GTX 1650 4GB</b></h3>
                            <h3 className="precio"><b>$229</b></h3>
                            <h4 className="check"><b className="mini">Shipping</b> calculated at checkout</h4>
                        </Row>
                        <Row className="tableta">
                        <table className="tablita">
                            <tr>
                                <td>
                                    Chipset
                                    manufacturer
                                </td>
                                <td>
                                    NVIDIA
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    GPU
                                </td>
                                <td>
                                    GeForce GTX 1650
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    CORE CLOCK
                                </td>
                                <td>
                                    1530 MHz
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    BOOST CLOCK
                                </td>
                                <td>
                                    OC Mode: 1800 Mhz
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    CUDA CORES
                                </td>
                                <td>
                                    1280
                                </td>
                            </tr>
                        </table>
                        </Row>
                    </Row>
                    <Row className="izquierdon">

                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Historia7;