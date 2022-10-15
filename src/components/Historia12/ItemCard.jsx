import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from "react-bootstrap/Image";
import "./Historia12.css";
import {useCart} from 'react-use-cart';

const ItemCard = (props) =>{
    const {addItem} = useCart();
    return (
            
            <Card>
                <div className="card-logo">
                <Image src={props.img} className='historia12a'></Image>
                    
                   <Row>
                  <h2 className="card-content">{props.title}</h2>  
                  <p id ='formato12k'>${props.price}</p>
                  </Row> 
                  
                  <Button id='Botonj' onClick={() => addItem(props.item)}></Button>
                  </div>
            </Card>
            
            
           
       
    )
}

export default ItemCard;