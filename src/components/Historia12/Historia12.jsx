import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import "./Historia12.css";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import imagen17shop from "../Images/pcgamer.png";
import Select from 'react-select';
import ItemCard from "./ItemCard";
import data from "./data"

const Historia12 =() =>{
    return(
       <Container>
        
        <Row xs={1} className="justify-content-md-center w-80">
        <div className="general12" >
            <Row>
            <Col >
            <p id='fuente12'>Build your own PC!</p>
            <Image src={imagen17shop} id='imagen12a1'></Image>
            <div id='formato12a1'>
                <p id='formato12a2'>Components price</p>
                <p id='formato12a3'>$100</p>
                <p id='formato12a2'>Build fee</p>
                <p id='formato12a3'>$99</p>
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
                <ItemCard></ItemCard>
                
                
            </Col>
            <Col>
                <Row>
                    <Button id="Botonh">{'<'}Back</Button>
                    <Button id="Botoni">Checkout</Button>
                </Row>
            </Col>
            </Row>
            </div>
            
        </Row>
       </Container>
    )

}

export default Historia12;