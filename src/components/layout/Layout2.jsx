import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Layout.css";

import Header2 from './Header2'

const Layout2 = (props) => {

    return (<Container fluid>
        <Row xs={1} className="justify-content-md-center w-80">
            <Col >
                <Header2></Header2>
            </Col>
        </Row>
        <Row className="justify-content-md-center w-80">
            <Col >
                {props.main}
            </Col>
        </Row>
    </Container>)
}

export default Layout2