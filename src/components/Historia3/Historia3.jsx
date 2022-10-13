import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import logo from "../layout/Images_header/Imagen_menu.png";
import Button from "react-bootstrap/Button";
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./Historia3.css";

const Historia3 =() =>{
    return(
        <Container fluid className="Container">
            <Row fluid className="Contenedor">
                <Image src={logo} id="logo"/>
                <Row fluid className="Title">
                    <h1>Build your PC!</h1>
                </Row>
                <Row fluid className="Subtitle">
                    <h2>Just for what you need</h2>
                </Row>
                <Col fluid className="Buttons">
                    <Col fluid className="button">
                        <Nav.Link href=""><Button id="Boton">Build for begginers</Button></Nav.Link>
                    </Col>
                    <Col fluid className="button">
                        <Nav.Link href=""><Button id="Boton">Advanced building</Button></Nav.Link>
                    </Col>
                </Col>
            </Row>
            <Row fluid className="Footer">
                <Row>
                    <Col fluid xs={5}>
                        <h5><strong>Sign up to our newsletter for the latest PC news.</strong></h5>
                        <Col fluid className="subscribe">
                            <Col fluid className="subscribes">
                                <input type="email" className="form-control" id="footer_subscribe" placeholder="Email" />
                            </Col>
                            <Col fluid className="subscribes">
                                <Nav.Link href=""><Button type="submit" id="subscribe_button">SUBSCRIBE</Button></Nav.Link>
                            </Col>
                        </Col>
                    </Col>

                    <Col fluid>
                        <Col fluid className="col_footer">
                            <Row><p>Build your PC</p></Row>
                            <Row><p>Why Redux</p></Row>
                            <Row><p>Support</p></Row>
                        </Col>
                    </Col>
                    <Col fluid>
                        <Col fluid className="col_footer">
                            <Row><p>Good.</p></Row>
                            <Row><p>Better.</p></Row>
                            <Row><p>Best.</p></Row>
                        </Col>  
                    </Col>
                    <Col>
                        <Col fluid className="col_footer">
                            <Row><p>Terms & Conditions</p></Row>
                            <Row><p>Privacy Policy</p></Row>
                            <Row><p>Refund Policy</p></Row>
                        </Col>
                    </Col>
                    <Row>
                        <Col fluid className="networks">
                            <Nav.Link href="https://www.facebook.com" target="_blank" id="iconos"><FontAwesomeIcon icon={faFacebook}  /></Nav.Link>
                            <Nav.Link href="https://www.twitter.com" target="_blank" id="iconos"><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
                            <Nav.Link href="https://www.instagram.com" target="_blank" id="iconos"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>    
                        </Col>
                        <Col fluid className="copyright">
                            Copyright © 2020 Build Redux. All Rights Reserved.
                        </Col>
                    </Row>    
                </Row>
            </Row>
        </Container>
    )
}

export default Historia3;