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
import Select from 'react-select';

const Countries = [
    { label: "Albania", value: 355 },
    { label: "Argentina", value: 54 },
    { label: "Austria", value: 43 },
    { label: "Cocos Islands", value: 61 },
    { label: "Kuwait", value: 965 },
    { label: "Sweden", value: 46 },
    { label: "Venezuela", value: 58 }
  ];
const Historia13 =() =>{
    return(
        <Container fluid className="cont_layout">
            <Row>
                <Col>
                <Row>
                    <p id="letra1">Cart {'>'}Information {'>'}Shipping {'>'}Payment</p>
                </Row>
                    <div ><fieldset><legend >
                        <Image src={imagen15shop} id='tamaño'></Image>
                        <Image src={imagen14shop} id='tamaño'></Image>
                        <Image src={imagen13shop} id='tamaño'></Image>
                        </legend></fieldset></div>
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
                            <div className="col-md-3"></div>
                             <div className="col-md-6">
                            <Select options={Countries} />
                            </div>
                            <div className="col-md-4"></div>
                        <p id='letra5A'>Country Region:  </p>
                            <div className="col-md-3"></div>
                             <div className="col-md-6">
                            <Select options={Countries} />
                            </div>
                            <div className="col-md-4"></div>
                </Col>
                
                <Col className='derecha'><div className="alcance"></div></Col>
            </Row>
        </Container>

    )

}

export default Historia13;