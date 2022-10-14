import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import {Row} from "react-bootstrap"
import Button from "react-bootstrap/Button";
import Nav from 'react-bootstrap/Nav';
import "./MenuLateral.css";

const MenuLateral =() =>{
    return(
        <Container fluid className="Content">
            <Col xs={3}>
                <Col className="options">
                    <Row><Nav.Link href="/historia14" ><Button id="option">Order History</Button></Nav.Link></Row>
                    <Row><Nav.Link href="/historia5"><Button id="option">Profile Info</Button></Nav.Link></Row>
                    <Row><Nav.Link href=""><Button id="option">Log Out</Button></Nav.Link></Row>       
                </Col>
            </Col>
        </Container>
    )
}


export default MenuLateral;