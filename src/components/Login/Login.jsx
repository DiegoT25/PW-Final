import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";
import "./Login.css";

const Login = () => {
return (
    <Container className="Login">
        <Row>
           <div className="create_login">
                <div className="title_login">
                    <p>CREATE ACCOUNT</p>
                </div>
                <div className= "inputs">
                    <input type="text" class="form-control" id="login" placeholder="First name" />
                    <input type="text" class="form-control" id="login" placeholder="Last name" />
                    <input type="email" class="form-control" id="login" placeholder="Email" />
                    <input type="password" class="form-control" id="login" placeholder="Password" />
                </div>
                <Link to="/historia2"><button type="submit" id="create_boton">CREATE</button></Link>
           </div>
           
        </Row>
    </Container>
)
}

export default Login;