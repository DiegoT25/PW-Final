import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Image from "react-bootstrap/Image";
import logo from "./Imagen_menu.png";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"

const Header = () => {
return (
    <Container className='header'>
        <Row xs={1}>
            <Col xs={3} className="justify-content-start">
                <Image src={logo} id="logo"/>
            </Col >
            <Col xs={6} className="justify-content-center">
            <Nav>
                <Nav.Item>
                    <Nav.Link href="/home" id="menu">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="" id="menu">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="" id="menu">Support</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="" id="menu">Reviews</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="" id="menu">Ranking</Nav.Link>
                </Nav.Item>
                </Nav>
            </Col >
            <Col xs={3} className="justify-content-end">
                <div className="icons_menu">
                    <Nav.Link href="" id="icons"><FontAwesomeIcon icon={faMagnifyingGlass} /></Nav.Link>
                    <Nav.Link href="" id="icons"><FontAwesomeIcon icon={faUser} /></Nav.Link>
                    <Nav.Link href="" id="icons"><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
                </div>
            </Col >
        </Row>
    </Container>
)

}

export default Header;