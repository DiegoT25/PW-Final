import { useState, useEffect } from 'react'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Countries from "./Country-list";
import usuariosApi from '../../api/usuarios';
import "./ProfileInfo.css";

let usuario = JSON.parse(localStorage.getItem('usuario') || "[]")

const ProfileInfo =() =>{

    const [nombre,setNombre] = useState(usuario.nombre);
    const [apellido,setApellido] = useState(usuario.apellido);
    const [correo,setCorreo] = useState(usuario.correo);
    const [direccion,setDireccion] = useState(usuario.direccion);
    const [departamento,setDepartamento] = useState(usuario.departamento);
    const [ciudad,setCiudad] = useState(usuario.ciudad);
    const [codigo_postal,setCodigo_postal] = useState(usuario.codigo_postal);
    const [telefono,setTelefono] = useState(usuario.telefono);
    

    useEffect(()=> {
    }, [nombre])
    useEffect(()=> {
    }, [apellido])
    useEffect(()=> {
    }, [correo])
    useEffect(()=> {
    }, [direccion])
    useEffect(()=> {
    }, [ciudad])
    useEffect(()=> {
    }, [departamento])
    useEffect(()=> {
    }, [codigo_postal])
    useEffect(()=> {
    }, [telefono])

    const nuevaData  = async () => {
        
        if(nombre !== "" && apellido !== "" && correo !== "" && direccion !== "" && departamento !== "" && ciudad !== "" && codigo_postal !== "" && telefono !== "") {

            try{

                const updateInfo = await usuariosApi.update({
                    nombre : nombre,
                    apellido : apellido,
                    direccion : direccion,
                    departamento : departamento,
                    ciudad : ciudad,
                    codigo_postal : codigo_postal,
                    telefono : telefono
                },
                {
                    where : {
                        correo: correo,
                    }
                }
                )
                console.log(updateInfo)
                
            } catch {
                console.log("No se realizo la actualizacion de datos")
            }
        }
    }
    return(

        <Container xs={1} md={1}fluid className="profile">
            <Col>
                <Col className="data_profile">
                    <Col className="columna1">
                        <h6><strong>New Changes</strong></h6>
                        <Row className="p1">
                            <p>{nombre}</p>
                            <p>{apellido}</p>
                        </Row>
                    </Col>
                    <Col className="columna2">
                        <Col className="formulario">
                            <Col className="doble">
                                <Row className="label1">
                                    <label>First name</label>
                                    <input type="text" className="form-control" name="nombre" id="form_profile2_1" placeholder="" 
                                    onChange={(e) => setNombre(e.target.value)} value={nombre}/>
                                </Row>
                                <Row className="label2">
                                    <label>Last name</label>
                                    <input type="text" className="form-control" name="apellido" id="form_profile2_2" placeholder=""
                                    onChange={(e) => setApellido(e.target.value)} value={apellido} />
                                </Row>
                            </Col>
                            
                            <Col className="simple">
                                <Row className="email">
                                    <label>Email</label>
                                    <input type="email" className="form-control" name="correo" id="form_profile1" placeholder="" 
                                    onChange={(e) => setCorreo(e.target.value)} value={correo}/>
                                </Row>
                                <Row className="address">
                                    <label>Address</label>
                                    <input type="text" className="form-control" name="direccion" id="form_profile1" placeholder="" 
                                    onChange={(e) => setDireccion(e.target.value)} value={direccion}/>
                                </Row>
                            </Col>
                            <Col className="doble">
                                <Row className="label3">
                                    <label>Aparmaent, suit, etc</label>
                                    <input type="text" className="form-control" name="departamento" id="form_profile2" placeholder="" 
                                    onChange={(e) => setDepartamento(e.target.value)} value={departamento}/>
                                </Row>
                                <Row className="label4">
                                    <label>City</label>
                                    <input type="text" className="form-control" name="ciudad" id="form_profile2" placeholder="" 
                                    onChange={(e) => setCiudad(e.target.value)} value={ciudad}/>
                                </Row>
                            </Col>
                            <Col className="doble">
                                <Col className="label1">
                                    <Row><label>Country/Region</label></Row>
                                    <Row><Countries></Countries></Row>
                                </Col>
                                <Col className="label2">
                                    <Row><label>Postal/zip code</label></Row>
                                    <Row><input type="text" className="form-control" name="codigo_postal" id="form_profile2" placeholder="" 
                                    onChange={(e) => setCodigo_postal(e.target.value)} value={codigo_postal}/></Row>
                                </Col>
                            </Col>
                            <Col className="simple">
                                <Row className="phone">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" name="telefono" id="form_profile1" placeholder="" 
                                    onChange={(e) => setTelefono(e.target.value)} value={telefono}/>
                                </Row>
                            </Col>
                        </Col>
                        <Col className="update_info">
                            <Nav.Link href=""><Button type="submit" id="update_button" onClick={nuevaData}>Update Info</Button></Nav.Link>
                        </Col>
                        <Col className="cancel_button">
                            <Button type="reset" id="cancel_button">Cancel</Button>
                        </Col>
                    </Col>
                </Col>
            </Col>
        </Container>
    )
}

export default ProfileInfo;