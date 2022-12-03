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
import data from "./data";
import Cart from './Cart';
import { useEffect, useState } from 'react';

const ArmadoConocedores =() =>{
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
{/* <Button id="Botona" onClick={cambiarCategoria("Graphics")}>Graphics</Button>
                    <Button id="Botonb"onClick={cambiarCategoria("Processor")}>Processor</Button>
                    <Button id="Botonc" onClick={cambiarCategoria("Memory")}>Memory</Button>
                    <Button id="Botond" onClick={cambiarCategoria("Storage")}>Storage</Button>
                    <Button id="Botone" onClick={cambiarCategoria("Cooler")}>Cooler</Button>
                    <Button id="Botonf" onClick={cambiarCategoria("Windows")}>Windows</Button>
                    <Button id="Botong" onClick={cambiarCategoria("Power Supply")}>Power Supply</Button> */}
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
                
                    
                    <Button id="Botona" >Graphics</Button>
                    <Button id="Botonb">Processor</Button>
                    <Button id="Botonc">Memory</Button>
                    <Button id="Botond">Storage</Button>
                </Row>
                <Row>
                    <Button id="Botone">Cooler</Button>
                    <Button id="Botonf">Windows</Button>
                    <Button id="Botong">Power Supply</Button>
                    
                </Row>
                <Col>
                {data.productData.map((item,index)=>{
                    return(
                        <ItemCard 
                        img={item.img} 
                        title={item.title} 
                        price={item.price}
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

export default ArmadoConocedores;