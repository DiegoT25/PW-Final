import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Layout.css";

import Header2 from './Header2'

const Layout2 = (props) => {

    return (<Container fluid className="cont_layout">
        <Row fluid xs={1}>
            <Col fluid >
                <Header2></Header2>
            </Col>
        </Row>
        <Row fluid xs={1}>
            <Col fluid>
                {props.main}
            </Col>
        </Row>
    </Container>)
}

export default Layout2