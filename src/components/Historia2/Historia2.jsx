import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col"
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Historia2.css";

const Historia2 =() =>{

    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');

    useEffect(()=> {
    }, [correo])
    useEffect(()=> {
    }, [contraseña])

    const loginAccount = async () => {
        let result = await fetch ('http://containers-us-west-109.railway.app/',{
            method: 'post',
            body: JSON.stringify({correo, contraseña}),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("usuario", JSON.stringify(result))
    }

    return(
        <Container fluid className="Login">
        <Row>
           <Col md={{ span: 4, offset: 4 }} className="create_login">
                <Col className="title_login">
                    <p>LOG IN.</p>
                </Col>
                <Row className="text-help1">
                    <small id="text">Log in with your details below to view your order.</small>
                </Row>
                <Col  className= "inputs">
                        <Row>
                            <input type="text" className="form-control" name="correo" id="login" placeholder="Email" onChange={(e) => setCorreo(e.target.value)} value={correo} />
                        </Row>
                        <Row>
                            <input type="password" className="form-control" name="contraseña" id="login" placeholder="Password" onChange={(e) => setContraseña(e.target.value)} value={contraseña} />
                        </Row>
                </Col>
                <Col>
                    <Link to="/historia3"><Button type="submit" id="create_boton" aria-describedby="forgotPassword">LOGIN</Button></Link>
                </Col>
                <Row  className="text-help1">
                    <small id="text">Forgot your password?</small>
                </Row>
                <Row  className="text-help2">
                    <small id="noAccount"><strong>Don't have an account?</strong></small>
                </Row>
                <Col>
                    <Link to="/"><Button type="submit" id="create_boton">SIGN UP</Button></Link>
                </Col>
           </Col>
        </Row>
    </Container>
    )

}

export default Historia2;