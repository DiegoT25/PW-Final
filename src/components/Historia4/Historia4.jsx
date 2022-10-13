import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuLateral from "./MenuLateral";
import Header1 from '../layout/Header1';

const Historia4 = (props) => {

    return (
    <Container fluid className="cont_layout">
        <Row fluid xs={1}>
            <Col fluid>
                <Header1></Header1>            
            </Col>
        </Row>
        <Row fluid xs={1}>
            <Col fluid>
                <MenuLateral></MenuLateral>
            </Col>
            <Col fluid>
                {props.main}
            </Col>
        </Row>
    </Container>)
}

export default Historia4