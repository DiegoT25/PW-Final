import "./SubmitRequest.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react'
import Col from "react-bootstrap/Col"
import reporteApi from '../../api/reporte';


const SubmitRequest = () => {

    const [correo, setCorreo] = useState('');
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [asunto, setAsunto] = useState('');
    const [descripcion, setDescripcion] = useState('');

    useEffect(()=> {
    }, [correo])
    useEffect(()=> {
    }, [nombre])
    useEffect(()=> {
    }, [telefono])
    useEffect(()=> {
    }, [asunto])
    useEffect(()=> {
    }, [descripcion])


    const SubmitRequest = async () => {
        if (correo !== "" && nombre !== "" && telefono !== "" && asunto !== "" && descripcion !== "") {
            
            const result = await reporteApi.create({correo:correo, nombre:nombre, telefono:telefono, asunto:asunto, descripcion:descripcion});
            console.log(result);

        }
    }

 
    return (
        <Container fluid className="Login">
            <Row >
            <Col md={{ span: 4, offset: 4 }} className="create_login" >
                    <Col className="title_login">
                        <p>SubmitRequest</p>
                    </Col>
                    <Col md={{ span: 0, offset: 0 }}>
                        <Row>
                            <input type="text" className="form-control" name="correo" id="login" placeholder="Email" onChange={(e) => setCorreo(e.target.value)} value={correo} />
                        </Row>
                        <Row>
                            <input type="text" className="form-control" name="nombre" id="login" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                        </Row>
                        <Row>
                            <input type="text" className="form-control" name="telefono" id="login" placeholder="Telefono" onChange={(e) => setTelefono(e.target.value)} value={telefono} />
                        </Row>
                        <Row>
                            <input type="text" className="form-control" name="asunto" id="login" placeholder="Asunto" onChange={(e) => setAsunto(e.target.value)} value={asunto} />
                        </Row>
                        <Row>
                            <input type="text" className="form-control" name="descripcion" id="login" placeholder="Descripcion" onChange={(e) => setDescripcion(e.target.value)} value={descripcion} />
                        </Row>
                    </Col>
                    <Col md={{ span: 0, offset: 0 }}>
                        <Button type="submit" id="create_boton" onClick={SubmitRequest} >Submit</Button>
                    </Col>                
            </Col>
            </Row>
        </Container>
    )
}

export default SubmitRequest;