import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"

const Header1 = () => {
return (
    <Container fluid className='header'>
        <Row  xs={1}>
            <Col xs={1} md={3} className="justify-content-start">
            </Col >
            <Col  xs={1} md={6} className="justify-content-center">
            <Nav>
                <Nav.Item>
                    <Nav.Link href="/historia3" id="menu">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/historia15" id="menu">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/historia16" id="menu">Support</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/historia20" id="menu">Reviews</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/historia23" id="menu">Ranking</Nav.Link>
                </Nav.Item>
                </Nav>
            </Col >
            <Col xs={3} className="justify-content-end">
                <Col fluid className="icons_menu">
                    <Col className='madre'>
                        <input type="text" placeholder='Buscar' required></input>
                        <Nav.Link href="/historia7" id="icons"><FontAwesomeIcon icon={faMagnifyingGlass} color="white"/></Nav.Link>
                        <Nav.Link href="/historia5" id="icons"><FontAwesomeIcon icon={faUser} /></Nav.Link>
                        <Nav.Link href="/historia8" id="icons"><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
                    </Col>
                </Col>
            </Col >
        </Row>
    </Container>
)

}

export default Header1;