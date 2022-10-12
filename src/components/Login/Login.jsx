import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button"
import "./Login.css";

const Login = () => {
return (
    <Container fluid className="Login">
        <Row>
           <Row className="create_login">
                <div className="title_login">
                    <p>CREATE ACCOUNT</p>
                </div>
                <div className= "inputs">
                    <input type="text" className="form-control" id="login" placeholder="First name" />
                    <input type="text" className="form-control" id="login" placeholder="Last name" />
                    <input type="email" className="form-control" id="login" placeholder="Email" />
                    <input type="password" className="form-control" id="login" placeholder="Password" />
                </div>
                <Link to="/historia2"><Button type="submit" id="create_boton">CREATE</Button></Link>
           </Row>
           
        </Row>
    </Container>
)
}

export default Login;