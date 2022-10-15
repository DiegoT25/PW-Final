import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Historia13.css";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import imagen13shop from "../Images/googleplay.png";
import imagen14shop from "../Images/paypal.png";
import imagen15shop from "../Images/shopay.png";
import imagen16shop from "../Images/loginimagen.png";
import Countries from "./Country-list";
import Cart from '../Historia12/Cart';
import build1 from "../Images/build1.png";
import build2 from "../Images/build2.png";
import build3 from "../Images/build3.png";
import build4 from "../Images/build4.png";
import build5 from "../Images/build5.png";
import build6 from "../Images/build6.png";
import build7 from "../Images/build7.png";
import build8 from "../Images/build8.png";
import build9 from "../Images/build9.png";
const Historia13 =() =>{
    return(
        <Container fluid className="cont_layoutax">
            <Row>
                <Col>
                <Row>
                    <p id="letra1">Cart {'>'}Information {'>'}Shipping {'>'}Payment</p>
                </Row>
                <Row>
                    <div ><fieldset><legend >
                        <Image src={imagen15shop} id='tamaño13a'></Image>
                        <Image src={imagen14shop} id='tamaño13a'></Image>
                        <Image src={imagen13shop} id='tamaño13a'></Image>
                        </legend></fieldset></div>
                        </Row>
                        <p></p>
                        <div>
                        
                        <fieldset id='arriba'><legend></legend></fieldset>
                        </div>
                        <h2 id="letra1">Contact Information</h2>
                        <Row>
                        <Image src={imagen16shop} id='perfil'></Image>
                        <Col><div id='ajuste1'><p id="letraA2">Ed Va (edjahevs@gmail.com)</p>
                             <p id="letra1">Log out</p></div>
                        </Col>
                        </Row>
                        <Row>
                            <div id='cambio1'>
                            <input type="checkbox"></input>
                            <p id="letra2">Email me with news and offers</p>
                            </div>
                        </Row>
                        
                        <p></p>
                        <h2 id='letra3A'>Shipping address</h2>
                        <p id='letra5A'>Save addresses:</p>
                            <Countries></Countries>
                            
                        <p id='letra5A'>Country Region:  </p>
                            <Countries></Countries>
                        <Row>
                            <Col>
                                <p id='letra5A'>First name:  </p>
                                <input className='ingreso13a'></input>
                            </Col>   
                            <Col>
                                <p id='letra5A'>Last name:  </p>
                                <input className='ingreso13a'></input>
                            </Col>
                        </Row>
                        <p id='letra5A'>Company:  </p>
                        <input className='ingreso13a'></input>
                        <p id='letra5A'>Address:  </p>
                        <input className='ingreso13a'></input>
                        <p id='letra5A'>Apartment:  </p>
                        <input className='ingreso13a'></input>
                        <Row>
                            <Col>
                                <p id='letra5A'>City:  </p>
                                <input className='ingreso13a'></input>
                            </Col>   
                            <Col>
                                <p id='letra5A'>State:  </p>
                                <Countries></Countries>
                            </Col>
                            <Col>
                                <p id='letra5A'>Zip Code:  </p>
                                <input className='ingreso13a'></input>
                            </Col>
                        </Row>
                        <p id='letra5A'>Phone:  </p>
                        <input className='ingreso13a'></input>
                        <p></p>

                        <Row>
                            <Col>
                                <p id="letra1" >{'<'}Return to cart</p>
                            </Col>
                            <Col>
                                <Button id='boton13x'>Continue to shipping</Button>
                            </Col>
                        </Row>
                        

                </Col>
                
                <Col  className='derecha'>
                    <Row >
                    <Col >
                    <div className='carrito_h13'> 
                    <table className='table table-light table-hover m-0' id='color_tabla_h13'>
                        <tbody>
                            <tr>
                                <td>
                                    <Image src={build1}></Image>
                                </td>
                                <td>700W ATX 80 PLUS GOLD</td>
                                <td>$79.00</td>
                            </tr>
                            <tr>
                                <td>
                                    <Image src={build2}></Image>
                                </td>
                                <td>Build + Setup + Testing + Warranty </td>
                                <td>$99.00</td>
                            </tr>
                            <tr>
                                <td>
                                    <Image src={build3}></Image>
                                </td>
                                <td>Cm MasterLiquid ML240L</td>
                                <td>$89.00</td>
                            </tr>
                            <tr>
                                <td>
                                    <Image src={build4}></Image>
                                </td>
                                <td>Windows 11 Home + USB Recovery</td>
                                <td>$120.00</td>
                            </tr>
                            <tr>
                                <td>
                                    <Image src={build5}></Image>
                                </td>
                                <td>Wireless 802.11ac</td>
                                <td>$29.00</td>
                            </tr>
                            <tr>
                                <td>
                                    <Image src={build6}></Image>
                                </td>
                                <td>QTY 4x CM MasterFans RGB</td>
                                <td>$29.00</td>
                            </tr>
                            <tr>
                                <td>
                                    <Image src={build7}></Image>
                                </td>
                                <td>Cooler Master TD500 RGB</td>
                                <td>$99.00</td>
                            </tr>
                            <tr>
                                <td>
                                    <Image src={build8}></Image>
                                </td>
                                <td>NVIDIA GeForce RTX 3070 8GB (VR Ready)</td>
                                <td>$679.00</td>
                            </tr>
                            <tr>
                                <td>
                                    <Image src={build9}></Image>
                                </td>
                                <td>1TB NVMe M.2</td>
                                <td>$99.00</td>
                            </tr>
                        </tbody>
                    </table> 
                    </div>   
                    </Col>
                    </Row>
                    <Row >
                        <Col>
                        <input className='ingreso13b'></input>
                        </Col>
                        <Col>
                        <Button id='boton13y'>Apply</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    )

}

export default Historia13;