import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button"
import "./Login.css";
import { useNavigate } from "react-router-dom"


const Login = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasenia, setContrasenia] = useState('');

    useEffect(()=> {
    }, [nombre])
    useEffect(()=> {
    }, [apellido])
    useEffect(()=> {
    }, [correo])
    useEffect(()=> {
    }, [contrasenia])

    const navigate = useNavigate();

    const createAccount = async () => {
        if (nombre !== "" && apellido !== "" && correo !== "" && contrasenia !== "") {
            navigate("/historia2")
            
            let result = await fetch ("https://containers-us-west-109.railway.app/crearCuenta",{
            method: 'post',
            body: JSON.stringify({nombre:nombre, apellido:apellido, correo:correo, contrasenia:contrasenia}),
            headers: {
                'Content-Type' : 'application/json'
            }
            });
            result = await result.json();
            console.warn(result);
            localStorage.setItem("usuario", JSON.stringify(result))
        }
    }
    
    /*const createAccount = async () => {
        let result = await fetch ("https://containers-us-west-109.railway.app/register",{
            method: 'post',
            body: JSON.stringify({nombre:nombre, apellido:apellido, correo:correo, contrasenia:contrasenia}),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("usuario", JSON.stringify(result))
    }*/
   
   
    return (
        <Container fluid className="Login">
            <Row >
            <Col md={{ span: 4, offset: 4 }} className="create_login" >
                    <Col className="title_login">
                        <p>CREATE ACCOUNT</p>
                    </Col>
                    <Col md={{ span: 0, offset: 0 }}>
                        <Row>
                            <input type="text" className="form-control" name="nombre" id="login" placeholder="First name" 
                                onChange={(e) => setNombre(e.target.value)} value={nombre} />
                        </Row>
                        <Row>
                            <input type="text" className="form-control" name="apellido" id="login" placeholder="Last name" onChange={(e) => setApellido(e.target.value)} value={apellido} />
                        </Row>
                        <Row>
                            <input type="text" className="form-control" name="correo" id="login" placeholder="Email" onChange={(e) => setCorreo(e.target.value)} value={correo} />
                        </Row>
                        <Row>
                            <input type="password" className="form-control" name="contrasenia" id="login" placeholder="Password" onChange={(e) => setContrasenia(e.target.value)} value={contrasenia} />
                        </Row>
                    </Col>
                    <Col md={{ span: 0, offset: 0 }}>
                        <Button type="submit" id="create_boton" onClick={createAccount} >CREATE</Button>
                    </Col>                
            </Col>
            </Row>
        </Container>
    )
}

export default Login;