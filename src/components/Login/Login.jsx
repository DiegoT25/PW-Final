import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col"
import { useNavigate } from "react-router-dom"
import Button from "react-bootstrap/Button";
import "./Login.css";
import usuariosApi from '../../api/usuarios';

const Login =() =>{

    const [correo, setCorreo] = useState('');
    const [contrasenia, setContrasenia] = useState('');

    useEffect(()=> {
    }, [correo])
    useEffect(()=> {
    }, [contrasenia])

    const navigate = useNavigate(); 

    const signUp = () => {
        navigate("/")
    }

    const loginAccount = async () => {
        if(correo !== "" && contrasenia !== ""){
            try{
                const loginUser = await usuariosApi.findOne({
                    where: {
                        correo : correo,
                        contrasenia : contrasenia
                    }
                })
                console.log(loginUser)
                
            } catch {
                console.log("notfound")
            }

            if(console.log() !== "notfound" && console.log() !== "notfound"){
                navigate("/historia3")
            }
        }
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
                            <input type="password" className="form-control" name="contrasenia" id="login" placeholder="Password" onChange={(e) => setContrasenia(e.target.value)} value={contrasenia} />
                        </Row>
                </Col>
                <Col>
                    <Button type="submit" id="create_boton" aria-describedby="forgotPassword" onClick={loginAccount}>LOGIN</Button>
                </Col>
                <Row  className="text-help1">
                    <small id="text">Forgot your password?</small>
                </Row>
                <Row  className="text-help2">
                    <small id="noAccount"><strong>Don't have an account?</strong></small>
                </Row>
                <Col>
                    <Button type="submit" id="create_boton" onClick={signUp}>SIGN UP</Button>
                </Col>
           </Col>
        </Row>
    </Container>
    )

}

export default Login;