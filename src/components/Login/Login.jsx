import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button"
import "./Login.css";

const Login = () => {
return (
    <Container fluid className="Login">
        <Row >
           <Col md={{ span: 4, offset: 4 }} className="create_login" >
                <Col fluid className="title_login">
                    <p>CREATE ACCOUNT</p>
                </Col>
                <Col md={{ span: 0, offset: 0 }}>
                    <Row><input type="text" className="form-control" id="login" placeholder="First name" /></Row>
                    <Row><input type="text" className="form-control" id="login" placeholder="Last name" /></Row>
                    <Row><input type="email" className="form-control" id="login" placeholder="Email" /></Row>
                    <Row><input type="password" className="form-control" id="login" placeholder="Password" /></Row>
                </Col>
                <Col md={{ span: 0, offset: 0 }}>
                    <Link to="/historia2"><Button type="submit" id="create_boton">CREATE</Button></Link>                
                </Col>
                
           </Col>
        </Row>
    </Container>
)
}

export default Login;