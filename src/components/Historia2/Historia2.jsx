import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Historia2.css";

const Historia2 =() =>{

    return(
        <Container className="Login">
        <Row>
           <div className="create_login">
                <div className="title_login">
                    <p>LOG IN.</p>
                </div>
                <div className="text-help1">
                    <small id="text">Log in with your details below to view your order.</small>
                </div>
                <div className= "inputs">
                    <input type="email" class="form-control" id="login" placeholder="Email" />
                    <input type="password" class="form-control" id="login" placeholder="Password" />
                </div>
                <Link to="/historia3"><Button type="submit" id="create_boton" aria-describedby="forgotPassword">LOGIN</Button></Link>
                <div className="text-help1">
                    <small id="text">Forgot your password?</small>
                </div>
                <div className="text-help2">
                    <small id="noAccount"><strong>Don't have an account?</strong></small>
                </div>
                <Link to="/"><Button type="submit" id="create_boton">SIGN UP</Button></Link>
           </div>
           
        </Row>
    </Container>
    )

}

export default Historia2;