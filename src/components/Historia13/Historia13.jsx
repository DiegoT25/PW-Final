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

const Historia13 =() =>{
    return(
        <Container fluid className="cont_layout">
            <Row>
                <Col >
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
                    <p></p>
                    <Cart>

                    </Cart>
                    <Row>
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