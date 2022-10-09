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
        <Container className="Container">
            <Row className="Contenedor">
                <Image src={logo} id="logo"/>
                <div className="Title">
                    <h1>Build your PC!</h1>
                </div>
                <div className="Subtitle">
                    <h2>Just for what you need</h2>
                </div>
                <div className="Buttons">
                    <Button id="Boton">Build for begginers</Button>
                    <Button id="Boton">Advanced building</Button>
                </div>
            </Row>
            <Row className="Footer">
                <Row>
                    <Col xs={5}>
                        <h5><strong>Sign up to our newsletter for the latest PC news.</strong></h5>
                        <div className="subscribe">
                            <input type="email" class="form-control" id="footer_subscribe" placeholder="Email" />
                            <Button type="submit" id="subscribe_button">SUBSCRIBE</Button>
                        </div>
                    </Col>

                    <Col>
                        <div className="col_footer">
                            <p>Build your PC</p>
                            <p>Why Redux</p>
                            <p>Support</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="col_footer">
                            <p>Good.</p>
                            <p>Better.</p>
                            <p>Best.</p>
                        </div>  
                    </Col>
                    <Col>
                        <div className="col_footer">
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                            <p>Refund Policy</p>
                        </div>
                    </Col>
                    <Row>
                        <div className="networks">
                            <Nav.Link href="https://www.facebook.com" target="_blank" id="iconos"><FontAwesomeIcon icon={faFacebook}  /></Nav.Link>
                            <Nav.Link href="https://www.twitter.com" target="_blank" id="iconos"><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
                            <Nav.Link href="https://www.instagram.com" target="_blank" id="iconos"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>    
                        </div>
                        <div className="copyright">
                            Copyright © 2020 Build Redux. All Rights Reserved.
                        </div>
                    </Row>    
                </Row>
            </Row>
        </Container>
    )
}

export default Historia3;