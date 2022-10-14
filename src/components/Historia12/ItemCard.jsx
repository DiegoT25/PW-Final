import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from "react-bootstrap/Image";
import imagen18shop from "../Images/grafica.png";
import "./Historia12.css";

const ItemCard = () =>{
    return (
        
            <Card>
                <div className="card-logo">
                <Image src={imagen18shop} ></Image>
                  <div>  
                  <h1 className="card-content">Titulo</h1>  
                  <p className="card-content">Descripcion</p>
                  </div>
                  </div>
            </Card>
       
    )
}

export default ItemCard;