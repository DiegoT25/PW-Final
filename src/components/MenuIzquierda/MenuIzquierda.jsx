import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuLateral from "./MenuLateral";
import Header1 from '../layout/Header1';

const MenuIzquierda = (props) => {

    return (
    <Container fluid className="cont_layout">
        <Row  xs={1}>
            <Col>
                <Header1></Header1>            
            </Col>
        </Row>
        <Row xs={1} md={2}>
            <Col xs={1} md={1}>
                <MenuLateral></MenuLateral>
            </Col>
            <Col xs={1} md={1}>
                {props.main}
            </Col>
        </Row>
    </Container>)
}

export default MenuIzquierda