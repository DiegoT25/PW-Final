import React from "react";
import Boton from "./Boton.jsx";
import Image from "react-bootstrap/Image";
import check from "../Images/check.jpg";
import Rating from "./Rating.jsx";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./Historia22.css";



const Historia22 = () => {

    return (

        <Container fluid className="container22" >
           <Col className="col22">
                    <Col className="contenedor22">
                        <Row className="titulo22">
                            <h3> Thanks for your order!</h3>    
                        </Row>
                        <Row className="check">
                            <Image src={check} id="check22"/>
                        </Row>
                        <Row className="sub_estrellas">
                            <Col className="subtitulo22">
                                <h4>Rate us</h4>
                            </Col>
                            <Col className="estrellas22">
                                <Rating />
                            </Col>
                        </Row>
                        <Row className="form22">
                            <label id="label_h22" className="form-label"  ><strong>Leave a comment</strong></label>
                            <input id="comentario_h22" className="form-control" type="text"/>
                        </Row>
                        <Row className="boton22">
                            <Boton />
                        </Row>
    
                    </Col>
                </Col>     
        </Container>
    )
}
export default Historia22;