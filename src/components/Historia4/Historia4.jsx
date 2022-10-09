import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuLateral from "./MenuLateral";
import Header1 from '../layout/Header1';

const Historia4 = (props) => {

    return (
    <Container fluid className="w-80">
        <Row xs={1} className="justify-content-md-center w-80">
            <Col>
                <Header1></Header1>            
            </Col>
        </Row>
        <Row>
            <Col>
                <MenuLateral></MenuLateral>
            </Col>
            <Col >
                {props.main}
            </Col>
        </Row>
    </Container>)
}

export default Historia4