import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Layout.css";

import Header1 from './Header1'

const Layout1 = (props) => {

    return (<Container fluid className="cont_layout">
        <Row fluid xs={1}>
            <Col fluid>
                <Header1></Header1>
            </Col>
        </Row>
        <Row fluid xs={1}>
            <Col fluid>
                {props.main}
            </Col>
        </Row>
    </Container>)
}

export default Layout1