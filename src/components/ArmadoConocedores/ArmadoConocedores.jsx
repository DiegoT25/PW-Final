import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import "./ArmadoConocedores.css";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import imagen17shop from "../Images/pcgamer.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import Nav from "react-bootstrap/Nav";  
import ItemCard from "./ItemCard";
import Cart from './Cart';
import { useEffect, useState } from 'react';

let carrito = localStorage.getItem('orden', '[]')

const Historia12 =() =>{
    const [listaComponentes,setlistaComponentes] = useState([])
    const [componentesSelec, setcomponentesSelec] = useState([])

    const httpFetch = async () => {
        const resp = await fetch('http://localhost:4000/componentes')
        const data = resp.json()

        setlistaComponentes(data)
    }

    useEffect(()=>{
        httpFetch()
        cambiarCategoria("Graphics")
    },[])

    const cambiarCategoria = (categoria) => {
        let listaComponentesSeleccionados = []
        listaComponentes.map((componente) => {
            if (categoria === componente.categoria.nombre) {
                listaComponentesSeleccionados.push(componente)
            }
        })
        setcomponentesSelec(listaComponentesSeleccionados)
    }

    return(
       <Container fluid className="cont_layout">
        
        <Row xs={1} className="justify-content-md-center w-80">
        <div className="general12" >
            <Row>
            <Col>
            <p id='fuente12'>Build your own PC!</p>
            <Image src={imagen17shop} id='imagen12a1'></Image>
            <div id='formato12a1'>
                </div>
            </Col>
            
            <Col >
                <Row>
                    <Button id="Botona" onClick={cambiarCategoria("Graphics")}>Graphics</Button>
                    <Button id="Botonb"onClick={cambiarCategoria("Processor")}>Processor</Button>
                    <Button id="Botonc" onClick={cambiarCategoria("Memory")}>Memory</Button>
                    <Button id="Botond" onClick={cambiarCategoria("Storage")}>Storage</Button>
                </Row>
                <Row>
                    <Button id="Botone" onClick={cambiarCategoria("Cooler")}>Cooler</Button>
                    <Button id="Botonf" onClick={cambiarCategoria("Windows")}>Windows</Button>
                    <Button id="Botong" onClick={cambiarCategoria("Power Supply")}>Power Supply</Button>
                </Row>
                <Col>
                {componentesSelec.map((item,index)=>{
                    return(
                        <ItemCard 
                        img={item.imagen} 
                        title={item.nombre} 
                        price={item.precio}
                        item={item} 
                        key={index}>
                        </ItemCard>
                    )
                })}
                </Col>
            </Col>
            <Col>
                <Row>
                    <Button id="Botonh">{'<'}Back</Button>
                    <Nav.Link href="/historia13"><Button id="boton12a10"><FontAwesomeIcon icon={faCartShopping} /> &nbsp;&nbsp;Checkout</Button></Nav.Link>
                </Row>
                
                <Cart >
                </Cart>
            </Col>
            </Row>
            </div>
        </Row>
       </Container>
    )

}

export default Historia12;