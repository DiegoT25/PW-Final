import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Nav from 'react-bootstrap/Nav';
import "./MenuLateral.css";

const MenuLateral =() =>{
    return(
        <Container className="Content">
            <Col xs={3}>
                <div className="options">
                    <Nav.Link href="" ><Button id="option">Order History</Button></Nav.Link>
                    <Nav.Link href="/historia5"><Button id="option">Profile Info</Button></Nav.Link>
                    <Nav.Link href=""><Button id="option">Log Out</Button></Nav.Link>       
                </div>
            </Col>
        </Container>
    )
}


export default MenuLateral;