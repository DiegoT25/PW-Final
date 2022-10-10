import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Layout.css";

import Header1 from './Header1'

const Layout1 = (props) => {

    return (<Container className="cont_layout">
        <Row xs={1} className="justify-content-md-center w-80">
            <Col >
                <Header1></Header1>
            </Col>
        </Row>
        <Row className="justify-content-md-center w-80">
            <Col >
                {props.main}
            </Col>
        </Row>
    </Container>)
}

export default Layout1