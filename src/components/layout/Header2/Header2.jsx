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
        <Row fluid xs={1}>
            <Col fluid xs={3} className="justify-content-start">

            </Col >
            <Col fluid xs={6} className="justify-content-center">
            <Nav>
                <Nav.Item>
                    <Nav.Link href="/historia3" id="menu">Home</Nav.Link>
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
            <Col fluid xs={3} className="justify-content-end">
                <div className="icons_menu">
                    <Nav.Link href="" id="icons"><FontAwesomeIcon icon={faMagnifyingGlass} /></Nav.Link>
                    <Nav.Link href="/historia5" id="icons"><FontAwesomeIcon icon={faUser} /></Nav.Link>
                    <Nav.Link href="" id="icons"><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
                </div>
            </Col >
        </Row>
    </Container>
)

}

export default Header1;