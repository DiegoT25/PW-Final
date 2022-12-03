import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col"
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom"
import Button from "react-bootstrap/Button";
import "./Historia2.css";

const Historia2 =() =>{

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
                const result1 = await usuariosApi.findCorreo({correo:correo});
                const result2 = await usuariosApi.findContrasenia({contrasenia:contrasenia});
                
            } catch {
                res.send("notfound")
            }

            if(result1 !== "notfound" && result2 !== "notfound"){
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
                    <Link to="/historia3"><Button type="submit" id="create_boton" aria-describedby="forgotPassword" onClick={loginAccount}>LOGIN</Button></Link>
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

export default Historia2;